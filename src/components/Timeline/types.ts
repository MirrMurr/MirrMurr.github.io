import type { MarkdownComponent } from "@utils/types";

export type SideContentImageAlign = "left" | "center" | "right";
export type SideContentImageTextWrap = "around" | "aboveAndBelow";

export type SideContentImage = {
  src: string;
  align?: SideContentImageAlign;
  textWrap?: SideContentImageTextWrap;
} & Pick<
  Partial<CSSStyleProperties>,
  | "margin"
  | "aspectRatio"
  | "minWidth"
  | "width"
  | "maxWidth"
  | "minHeight"
  | "height"
  | "maxHeight"
>;

export type SideContent = {
  text?: string;
  markdown?: MarkdownComponent;
  image?: SideContentImage;
  gap?: string;
  color?: CSSStyleProperties["color"] | undefined;
}[];
