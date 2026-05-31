import type { TimelineEntryProps } from "@components/Timeline/TimelineEntry.astro";

import Born from "./content/born.md";
import Highschool from "./content/highschool.md";
import UniStart from "./content/uni-start.md";
import CarrierStart from "./content/carrier-start.md";
import CarrierStartFrontend from "./content/carrier-start-frontend.md";
import UniNeumannPrezAR from "./content/uni-neumann-prezar.md";
import OpenSystemsStart from "./content/open-systems-start.md";

export const experienceTimelineEntries: TimelineEntryProps[] = [
  {
    to: "Now",
    // from: "2024",
    left: [
      { text: "OSAG projects & personal developments" },
      // { text: makeLorem(1), color: "grey" },
      // { text: makeLorem(1), color: "grey" },
    ],
    right: [
      // { markdown: OpenSystemsStart },
      // { text: "Open Systems AG" },
      // { text: makeLorem(1), color: "grey" },
      // { text: makeLorem(1), color: "grey" },
    ],
  },
  {
    to: "2023",
    left: [
      { text: "MSc: FinTech" },
      { text: "2nd thesis: decentralized web3 marketing application" },
      // { text: "+ GPA" },
      // { text: makeLorem(1) },
      // { text: makeLorem(2) },
      // { text: makeLorem(1) },
    ],
    right: [
      { markdown: OpenSystemsStart },
      { text: "Became full-time at the prev company for a month, but then moved to Switzerland." },
      // { text: makeLorem(1), color: "grey" },
      // { text: makeLorem(1) },
    ],
  },
  {
    to: "2022",
    left: [],
    right: [
      { text: "Grape projects:" },
      { text: "PanIQ Room + learnings" },
      { text: "AEGIS" },
      { text: "MVMi: internal knowledge base" },
    ],
  },
  {
    to: "2021",
    left: [
      {
        markdown: UniNeumannPrezAR,
        image: {
          src: "/images/prezar-demo.jpeg",
          minWidth: "12rem",
          maxWidth: "50%",
          align: "right",
        },
      },
      // { text: "+ GPA" },
    ],
    right: [
      {
        markdown: CarrierStartFrontend,
      },
    ],
  },
  {
    to: "2019",
    // from: "2018",
    left: [
      {
        markdown: UniStart,
        image: {
          src: "/images/elte-logo.png",
          width: "100%",
          minWidth: "7rem",
          maxWidth: "9rem",
        },
      },
      // {
      //   image: {
      //     src: "/images/elte-ik-inside.jpeg",
      //     minWidth: "200px",
      //     width: "100%",
      //     maxWidth: "20rem",
      //     align: "center",
      //   },
      // },
    ],
    right: [
      { markdown: CarrierStart },
      // { text: makeLorem(1), color: "var(--text-color-secondary)" },
    ],
  },
  {
    from: "1999",
    to: "2018",
    left: [
      {
        markdown: Born,
      },
    ],
    right: [
      {
        markdown: Highschool,
      },
    ],
  },
];
