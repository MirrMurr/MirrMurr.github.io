import type { TimelineEntryProps } from "@components/Timeline/TimelineEntry.astro";

import UniStart from "./content/uni-start.md";
import UniMasters from "./content/uni-masters.md";
import CarrierStart from "./content/carrier-start.md";
import CarrierStartFrontend from "./content/carrier-start-frontend.md";
import GrapeSolutionsTakeaways from "./content/grape-solutions-takeaways.md";
import OSAGProjects from "./content/osag-projects.md";
import UniNeumannPrezAR from "./content/uni-neumann-prezar.md";
import OpenSystemsStart from "./content/open-systems-start.md";

export const experienceTimelineEntries: TimelineEntryProps[] = [
  {
    from: "2023",
    to: "Now",
    left: [{ markdown: OpenSystemsStart }],
    right: [{ markdown: OSAGProjects }],
  },
  {
    showDivider: false,
    span: [{ markdown: GrapeSolutionsTakeaways, variant: "takeaway" }],
  },
  {
    from: "2022",
    left: [{ markdown: UniMasters }],
    right: [
      {
        text: 'The topic of my master\'s thesis: "Automating the Distribution of Marketing Materials with Blockchain and Smart Contracts."',
      },
    ],
  },
  {
    from: "2020",
    left: [{ markdown: CarrierStart }],
    right: [{ markdown: CarrierStartFrontend }],
  },
  {
    from: "2019",
    left: [
      {
        image: {
          src: "/images/prezar-demo.jpeg",
          minWidth: "12rem",
          maxWidth: "50%",
          align: "center",
        },
      },
    ],
    right: [
      {
        markdown: UniNeumannPrezAR,
      },
    ],
  },
  {
    from: "2018",
    left: [
      {
        markdown: UniStart,
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
      {
        image: {
          src: "/images/elte-logo.png",
          width: "100%",
          minWidth: "7rem",
          maxWidth: "9rem",
          align: "center",
        },
      },
    ],
  },
  {
    from: "1999",
    left: [
      {
        text: "Already during highschool, I developed a strong affinity towards programming. I used to follow YouTube tutorials on how to draw stuff in the browser, without knowing what JavaScript libraries or importing meant.",
      },
    ],
    right: [
      {
        text: "In my senior years, I had the chance to choose Python programming as my third optional subject, alongside with Math and Physics.",
      },
    ],
  },
];
