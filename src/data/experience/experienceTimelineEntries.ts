import type { TimelineEntryProps } from "@components/Timeline/TimelineEntry.astro";

import Born from "./content/born.md";
import Highschool from "./content/highschool.md";
import UniStart from "./content/uni-start.md";
import CarrierStart from "./content/carrier-start.md";
import CarrierStartFrontend from "./content/carrier-start-frontend.md";
import GrapeProjectsPaniqRoom from "./content/grape-projects-paniqroom.md";
import GrapeProjectsMVMi from "./content/grape-projects-mvmi.md";
import GrapeProjectsAegis from "./content/grape-projects-aegis.md";
import OSAGProjects from "./content/osag-projects.md";
import UniNeumannPrezAR from "./content/uni-neumann-prezar.md";
import OpenSystemsStart from "./content/open-systems-start.md";

export const experienceTimelineEntries: TimelineEntryProps[] = [
  {
    to: "Now",
    left: [{ markdown: OpenSystemsStart }],
    right: [{ markdown: OSAGProjects }],
  },
  {
    to: "2023",
    left: [
      {
        text: "Finished my education strong with a focus on software engineering and web development flavoured with finance.",
      },
    ],
    right: [
      {
        text: 'The topic of my master\'s thesis: "Automating the Distribution of Marketing Materials with Blockchain and Smart Contracts."',
      },
    ],
  },
  {
    to: "2022",
    left: [
      {
        markdown: CarrierStartFrontend,
      },
      { markdown: GrapeProjectsPaniqRoom },
    ],
    right: [{ markdown: GrapeProjectsAegis }, { markdown: GrapeProjectsMVMi }],
  },
  {
    to: "2021",
    left: [{ markdown: CarrierStart }],
    right: [
      {
        image: {
          src: "/images/prezar-demo.jpeg",
          minWidth: "12rem",
          maxWidth: "50%",
          align: "center",
        },
      },
    ],
  },
  {
    to: "2019",
    left: [
      {
        markdown: UniStart,
        image: {
          src: "/images/elte-logo.png",
          width: "100%",
          minWidth: "7rem",
          maxWidth: "9rem",
          align: "right",
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
    right: [{ markdown: UniNeumannPrezAR }],
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
