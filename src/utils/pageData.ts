interface Page {
  key: string;
  label: "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Contact";
  href: string;
  color?: string;
  bannerImage?: string;
  bannerImagePosition?: string;
}

export const pages: Page[] = [
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
  },
  {
    key: "education",
    href: "/education",
    label: "Education",
    // color: "#45b7d1",
    bannerImage: "/images/elte-ik-inside.jpeg",
  },
  {
    key: "experience",
    href: "/experience",
    label: "Experience",
    // color: "#96ceb4",
    bannerImage: "/images/andermatt-architecture.jpeg",
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    // color: "#feca57",
    bannerImage: "/images/prezar-demo.jpeg",
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
