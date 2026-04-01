export interface PageInfo {
  key: string;
  label: "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Contact";
  href: string;
  color?: string;
  bannerImage?: string;
  bannerImagePosition?: string;
}

export const pages: PageInfo[] = [
  {
    key: "home",
    href: "/home",
    label: "Home",
    color: "#ff6f61",
  },
  {
    key: "about",
    href: "/about",
    label: "About Me",
    // color: "#4ecdc4",
    bannerImage: "/images/lego.jpeg",
    bannerImagePosition: "25% 70%",
  },
  {
    key: "education",
    href: "/education",
    label: "Education",
    // color: "#45b7d1",
    bannerImage: "/images/elte-ik-inside.jpeg",
    bannerImagePosition: "25% 55%",
  },
  {
    key: "experience",
    href: "/experience",
    label: "Experience",
    // color: "#96ceb4",
    bannerImage: "/images/andermatt-architecture.jpeg",
    bannerImagePosition: "25% 40%",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    // color: "#feca57",
    bannerImage: "/images/prezar-demo.jpeg",
    bannerImagePosition: "25% 25%",
  },
  {
    key: "contact",
    href: "/contact",
    label: "Contact",
    // color: "#ff9ff3",
    bannerImage: "/images/mailbox.jpeg",
    bannerImagePosition: "25% 50%",
  },
];
