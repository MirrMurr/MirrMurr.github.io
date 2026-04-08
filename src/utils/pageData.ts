import type { TimelineEntryProps } from "@components/Timeline/TimelineEntry.astro";
import { makeLorem } from "./mock";

export interface PageInfo {
  key: "home" | "about" | "education" | "experience" | "projects" | "contact";
  title: string;
  short: string;
  href: string;
  color?: string;
  bannerImage?: string;
  bannerImagePosition?: string;
  enabled?: boolean;
}

const allPages: PageInfo[] = [
  {
    key: "home",
    href: "/home",
    title: "Home",
    short: "Home",
    color: "#ff6f61",
  },
  {
    key: "about",
    href: "/about",
    title: "About Me",
    short: "About Me",
    color: "#4ecdc4",
    bannerImage: "/images/lego.jpeg",
    bannerImagePosition: "25% 70%",
  },
  {
    key: "education",
    href: "/education",
    title: "Education",
    short: "Education",
    color: "#45b7d1",
    bannerImage: "/images/elte-ik-inside.jpeg",
    bannerImagePosition: "25% 55%",
    enabled: false,
  },
  {
    key: "experience",
    href: "/experience",
    title: "Education & Experience",
    short: "Experience",
    color: "#96ceb4",
    bannerImage: "/images/andermatt-architecture.jpeg",
    bannerImagePosition: "25% 40%",
  },
  {
    key: "projects",
    href: "/projects",
    title: "Projects",
    short: "Projects",
    color: "#feca57",
    bannerImage: "/images/prezar-demo.jpeg",
    bannerImagePosition: "25% 25%",
  },
  {
    key: "contact",
    href: "/contact",
    title: "Contact",
    short: "Contact",
    color: "#ff9ff3",
    bannerImage: "/images/mailbox.jpeg",
    bannerImagePosition: "25% 50%",
  },
];

const isEnabled = ({ enabled }: PageInfo) => enabled === undefined || enabled;

export const pages = allPages.filter(isEnabled);

export const experienceTimelineEntries: TimelineEntryProps[] = [
  {
    from: new Date("2023"),
    to: "Now",
    left: [{ text: makeLorem(2) }],
    right: [{ text: makeLorem(1) }],
  },
  {
    from: new Date("2021"),
    left: [{ text: makeLorem(1) }, { text: makeLorem(2) }, { text: makeLorem(1) }],
    right: [{ text: makeLorem(1) }, { text: makeLorem(1) }],
  },
  {
    from: "2020",
    right: [
      {
        image: {
          src: "/images/prezar-demo.jpeg",
          width: "100%",
          maxWidth: "20rem",
          align: "center",
        },
      },
    ],
  },
  {
    from: new Date("2018"),
    left: [
      { text: makeLorem(2) },
      {
        // text: makeLorem(3),
        // gap: "0.5rem",
        image: {
          src: "/images/elte-ik-inside.jpeg",
          minWidth: "200px",
          width: "100%",
          maxWidth: "20rem",
          align: "center",
        },
      },
    ],
    right: [{ text: makeLorem(1) }, { text: makeLorem(2) }],
  },
];
