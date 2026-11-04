import type { TagProps } from "@components/Tag.astro";
import { tagList } from "@data/tags";

export type Achievement = {
  title: string;
  tags: TagProps[];
  company: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Agentic Loop & Orchestration Setup",
    tags: tagList("agenticWorkflows", "aiSkills", "copilot", "github"),
    company: "Open Systems AG",
    location: "Switzerland",
    summary:
      "Developed and shared an internal AI workflow system for structured multi-step execution, focused on orchestration, reliable handoffs, and cost-aware task management across collaborative engineering work.",
    bullets: [
      "Designed an agentic loop that improved task decomposition, reduced unnecessary token usage, and enabled more deliberate model calls.",
      "Created a team-shared workflow pattern that encouraged smarter execution paths and more consistent, reviewable outputs.",
      "Helped reduce broken trunk situations in Git by improving validation discipline and keeping changes smaller, more focused, and easier to review.",
    ],
  },
  {
    title: "Firewall Rule Editor Self-Service",
    tags: tagList("react", "typescript", "graphql"),
    company: "Open Systems AG",
    location: "Switzerland",
    summary:
      "Designed and delivered a reusable state-management pattern for a complex rule-editing workflow and built a high-performance hierarchical editor capable of handling thousands of firewall rules while keeping the UI responsive and maintainable.",
    bullets: [
      "Restored complex workflows reliably through a reusable React state model that improved maintainability across the app.",
      "Scaled the editor from struggling with around 300 rows to handling 5,000–7,000 rules comfortably using virtualization techniques.",
      "Led frontend integration through a multi-version API migration to keep compatibility between v1 and v2 backend services.",
    ],
  },
  {
    title: "Internal & Customer-facing AI Chatbot",
    tags: tagList("react", "typescript", "python", "agenticWorkflows", "aiSkills"),
    company: "Open Systems AG",
    location: "Switzerland",
    summary:
      "Built a robust AI chat experience with streaming event parsing, live history updates, and a common autocomplete flow that improved usability and reduced friction for both internal and customer-facing use cases.",
    bullets: [
      "Developed an extensible event parsing architecture for streamed AI responses to support new event types quickly.",
      "Updated chat history in real time as streamed responses arrived, while preserving efficient rendering and state updates.",
      "Worked with engineering teams across boundaries to define API requirements and influence integration decisions.",
    ],
  },
  {
    title: "Escape Room Franchise Game & CMS Software",
    tags: tagList("javascript", "docker", "shell"),
    company: "Grape Solutions Ltd.",
    location: "Hungary",
    summary:
      "Delivered a cross-platform digital experience for an escape room franchise, connecting kiosk-based gameplay with operator workflows and a CMS-driven content system while supporting distributed real-time state synchronization.",
    bullets: [
      "Implemented real-time synchronization of game state between distributed kiosks and operators using multiple event queues.",
      "Built and deployed Windows and Linux artifacts using Electron.js for a cross-platform product experience.",
      "Collaborated across time zones to drive continuous product improvements and business-focused iteration.",
    ],
  },
];
