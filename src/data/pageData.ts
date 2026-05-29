export interface PageInfo {
  key: "home" | "about" | "education" | "experience" | "projects" | "contact";
  title: string;
  short: string;
  href: string;
  color?: string;
  bannerImage?: string;
  bannerImagePosition?: string;
  enabled?: boolean;
  order: number;
}

const allPages: PageInfo[] = [
  {
    key: "home",
    href: "/home",
    title: "Home",
    short: "Home",
    order: 0,
    // color: "#ff6f61",
  },
  {
    key: "about",
    href: "/about",
    title: "About Me",
    short: "About Me",
    // color: "#4ecdc4",
    bannerImage: "/images/lego.jpeg",
    bannerImagePosition: "25% 70%",
    order: 128,
  },
  {
    key: "education",
    href: "/education",
    title: "Education",
    short: "Education",
    // color: "#45b7d1",
    bannerImage: "/images/elte-ik-inside.jpeg",
    bannerImagePosition: "25% 55%",
    enabled: false,
    order: 32,
  },
  {
    key: "experience",
    href: "/experience",
    title: "Education & Experience",
    short: "Experience",
    // color: "#96ceb4",
    bannerImage: "/images/andermatt-architecture.jpeg",
    bannerImagePosition: "25% 40%",
    order: 16,
  },
  {
    key: "projects",
    href: "/projects",
    title: "Featured Projects",
    short: "Projects",
    // color: "#feca57",
    bannerImage: "/images/prezar-demo.jpeg",
    bannerImagePosition: "25% 25%",
    order: 8,
  },
  {
    key: "contact",
    href: "/contact",
    title: "Contact",
    short: "Contact",
    // color: "#ff9ff3",
    bannerImage: "/images/mailbox.jpeg",
    bannerImagePosition: "25% 50%",
    order: 256,
  },
];

const isEnabled = ({ enabled }: PageInfo) => enabled === undefined || enabled;

export const pages = allPages.filter(isEnabled).sort((a, b) => a.order - b.order);
