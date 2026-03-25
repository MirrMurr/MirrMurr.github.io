export const createCssVariables = (kv: Record<string, string | number | undefined>): string =>
  Object.entries(kv)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");

type Node = {
  name: string;
  selector?: string | ((key: string) => string);
  children?: Node[];
};

function resolveSelector(selector: Node["selector"], name: string, key: string): string {
  if (typeof selector === "function") return selector(key);
  if (typeof selector === "string") return selector;
  return `.${name}`;
}

/**
 * Generates CSS rules for the View Transitions API from a nested structure
 * and a list of keys (e.g. item IDs).
 *
 * Each node defines:
 * - a selector (DOM structure)
 * - a segment of the `view-transition-name`
 *
 * The function walks the tree and produces consistent transition names:
 *
 *   view-transition-name = <path-joined-by-dashes>-<key>
 *
 * It supports:
 * - deeply nested structures
 * - branching (multiple paths from the same parent)
 * - dynamic selectors based on the key (e.g. `#tile-${key}`)
 * - deduplication of keys
 *
 * ---
 *
 * Example:
 *
 * ```ts
 * const structure: Node = {
 *   name: "tile",
 *   selector: (key) => `#tile-${key}`,
 *   children: [
 *     {
 *       name: "overlay",
 *       children: [
 *         {
 *           name: "box",
 *           children: [
 *             {
 *               name: "img",
 *               selector: "img",
 *             },
 *           ],
 *         },
 *         {
 *           name: "overlay-content",
 *           children: [
 *             {
 *               name: "overlay-header",
 *               children: [
 *                 {
 *                   name: "overlay-title",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 * };
 *
 * const css = buildViewTransitionCSS(["1", "2", "2"], structure);
 * ```
 *
 * Output (simplified):
 *
 * ```css
 * #tile-1 { view-transition-name: tile-1; }
 * #tile-1 .overlay { view-transition-name: tile-overlay-1; }
 * #tile-1 .overlay .box img { view-transition-name: tile-overlay-box-img-1; }
 * #tile-1 .overlay .overlay-content .overlay-header .overlay-title {
 *   view-transition-name: tile-overlay-overlay-content-overlay-header-overlay-title-1;
 * }
 *
 * #tile-2 { view-transition-name: tile-2; }
 * ...
 * ```
 *
 * ---
 *
 * @param keys - Array of unique identifiers (duplicates are automatically removed)
 * @param structure - Root node describing the DOM and naming hierarchy
 * @returns A CSS string containing all generated view-transition rules
 */
export function buildViewTransitionCSS(keys: string[], structure: Node): string {
  const uniqueKeys = [...new Set(keys)];
  const output: string[] = [];

  function walk(node: Node, selectorPath: string, namePath: string[], key: string) {
    const vtName = `${namePath.join("-")}-${key}`;

    output.push(`${selectorPath} { view-transition-name: ${vtName}; }`);

    if (!node.children) return;

    for (const child of node.children) {
      const sel = resolveSelector(child.selector, child.name, key);
      const nextSelector = `${selectorPath} ${sel}`;
      const nextNamePath = [...namePath, child.name];
      walk(child, nextSelector, nextNamePath, key);
    }
  }

  for (const key of uniqueKeys) {
    const rootSelector = resolveSelector(structure.selector, structure.name, key);
    walk(structure, rootSelector, [structure.name], key);
    output.push(""); // spacing between keys
  }

  return output.join("\n");
}

export const TileOverlayBoxImgStructure: Node = {
  name: "tile",
  selector: (key: string) => `#tile-${key}`,
  children: [
    {
      name: "overlay",
      children: [
        {
          name: "box",
          children: [
            {
              name: "img",
              selector: "img",
            },
          ],
        },
        {
          name: "overlay-content",
          children: [
            {
              name: "overlay-header",
              children: [
                {
                  name: "overlay-title",
                },
              ],
            },
          ],
        },
        {
          name: "overlay-shadow",
        },
      ],
    },
  ],
};
