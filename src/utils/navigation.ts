interface Page {
  label: "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Contact";
  href: string;
  color?: string;
  bannerImage?: string;
  bannerImagePosition?: string;
}

export const pages: Page[] = [
  { href: "/", label: "Home", color: "#ff6f61" },
  {
    href: "/about",
    label: "About Me",
    color: "#4ecdc4",
    bannerImage: "/src/assets/images/lego.jpeg",
  },
  {
    href: "/education",
    label: "Education",
    color: "#45b7d1",
    bannerImage: "/src/assets/images/elte-ik-inside.jpeg",
  },
  {
    href: "/experience",
    label: "Experience",
    color: "#96ceb4",
    bannerImage: "/src/assets/images/andermatt-architecture.jpeg",
  },
  {
    href: "/projects",
    label: "Projects",
    color: "#feca57",
    bannerImage: "/src/assets/images/prezar-demo.jpeg",
  },
  {
    href: "/contact",
    label: "Contact",
    color: "#ff9ff3",
    bannerImage: "/src/assets/images/mailbox.jpeg",
    bannerImagePosition: "25% 50%",
  },
];
