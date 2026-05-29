import type { AccordionProps } from "@components/Accordion.astro";
import type { TagProps } from "@components/Tag.astro";
import { tagList } from "@data/tags";
import type { MarkdownComponent } from "@utils/types";

import AirplayReceiver from "./content/airplayReceiver.md";
import DApp from "./content/decentralizedMarketingCampaignApp.md";
import PocketLedger from "./content/pocketLedger.md";
import PrezAR from "./content/prezAR.md";
import VisualTimer from "./content/visualTimer.md";
import VpnServer from "./content/vpnServer.md";

const projectsAccordions: (AccordionProps & {
  content: MarkdownComponent;
  tags: TagProps[];
})[] = [
  {
    title: "Pocket Ledger",
    content: PocketLedger,
    tags: tagList("typescript"),
  },
  {
    title: "Decentralized marketing campaign application",
    content: DApp,
    tags: tagList("typescript", "react", "crypto", "web3"),
  },
  {
    title: "Augmented-Reality-based presentational application",
    content: PrezAR,
    tags: tagList("swift", "augmentedReality", "ios"),
  },
  {
    title: "Self-hosted VPN server",
    content: VpnServer,
    tags: tagList("networks", "security", "docker", "raspberryPi", "shell"),
  },
  {
    title: "AirPlay receiver",
    content: AirplayReceiver,
    tags: tagList("docker", "raspberryPi", "shell"),
  },
  {
    title: "Visualized pomodoro timer",
    content: VisualTimer,
    tags: tagList("javascript", "react", "p5js"),
  },
];

export default projectsAccordions;
