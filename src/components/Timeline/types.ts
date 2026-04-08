import type { CSSProperties } from "preact";

export type SideContentImageAlign = "left" | "center" | "right";
export type SideContentImageTextWrap = "around" | "aboveAndBelow";

export type SideContent = {
  gap?: string;
  text?: string;
  image?: {
    src: string;
    align?: SideContentImageAlign;
    textWrap?: SideContentImageTextWrap;
  } & Pick<
    CSSProperties,
    | "margin"
    | "aspectRatio"
    | "minWidth"
    | "width"
    | "maxWidth"
    | "minHeight"
    | "height"
    | "maxHeight"
  >;
}[];
