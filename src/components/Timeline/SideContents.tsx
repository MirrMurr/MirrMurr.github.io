import type { CSSProperties, FunctionComponent } from "preact";
import type { SideContent, SideContentImageAlign, SideContentImageTextWrap } from "./types";

type SideContentsProps = {
  args: SideContent;
};

const textWrapDisplayMap: Record<SideContentImageTextWrap, CSSProperties["display"]> = {
  around: "inline-block",
  aboveAndBelow: "flex",
};

const imageAlignMap: Record<SideContentImageAlign, CSSProperties["justifyContent"]> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

const SideContents: FunctionComponent<SideContentsProps> = ({ args }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
      {args.map(({ text, image, gap }) => {
        return (
          <div style={{ display: "flex", gap: gap || "0.5rem", flex: 1 }} className="reveal">
            {text && <span style={{ order: 2 }}>{text}</span>}
            {image && (
              <div
                style={{
                  height: "fit-content",
                  display: textWrapDisplayMap[image.textWrap || "aboveAndBelow"],
                  justifyContent: imageAlignMap[image.align || "center"],
                  margin: image.margin ?? "0.5rem",
                  flex: 1,
                  order: image?.align === "left" ? 1 : image.align === "right" ? 3 : 0,
                }}
              >
                <img
                  alt={image.src}
                  src={image.src}
                  width={image.width || "auto"}
                  height={image.height || "auto"}
                  style={{
                    aspectRatio: image.aspectRatio,
                    minHeight: image.minHeight,
                    maxHeight: image.maxHeight,
                    minWidth: image.minWidth,
                    maxWidth: image.maxWidth,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideContents;
