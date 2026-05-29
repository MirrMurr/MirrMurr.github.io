import type { TagProps } from "@components/Tag.astro";

export const tags = {
  git: {
    label: "Git",
    color: "red",
  },
  html: {
    label: "HTML",
    color: "rgb(211,99,54)",
  },
  javascript: {
    label: "JavaScript",
    color: "#CCB800",
  },
  p5js: {
    label: "p5.js",
    color: "rgb(218 59 95)",
  },
  python: {
    label: "Python",
    color: "green",
  },
  shell: {
    label: "Shell",
    color: "#3CB371",
  },
  cPlusPlus: {
    label: "C/C++",
    color: "#32A2CF",
  },
  oop: {
    label: "OOP",
    color: "grey",
  },
  functionalProgramming: {
    label: "Functional Programming",
    color: "grey",
  },
  swift: {
    label: "Swift",
    color: "orange",
  },
  augmentedReality: {
    label: "Augmented Reailty (AR)",
    color: "rgb(6 182 212)",
  },
  typescript: {
    label: "TypeScript",
    color: "rgb(68,118,192)",
  },
  docker: {
    label: "Docker",
    color: "rgb(69,142,230)",
  },
  react: {
    label: "React",
    color: "rgb(56,124,160)",
  },
  redux: {
    label: "Redux",
    color: "purple",
  },
  graphql: {
    label: "GraphQL",
    color: "rgb(203,67,160)",
  },
  nextjs: {
    label: "Next.js",
    color: "rgb(56,124,160)",
  },
  astrojs: {
    label: "Astro.js",
    color: "rgb(56,124,160)",
  },
  grafana: {
    label: "Grafana",
    color: "orange",
  },
  loki: {
    label: "Loki",
    color: "blue",
  },
  thanos: {
    label: "Thanos",
    color: "purple",
  },
  bazel: {
    label: "Bazel",
    color: "green",
  },
  copilot: {
    label: "Copilot",
    color: "magenta",
  },
  agenticWorkflows: {
    label: "Agentic workflows",
    color: "rgb(79 70 229)",
  },
  aiSkills: {
    label: "AI Skills",
    color: "rgb(79 70 229)",
  },
  raspberryPi: {
    label: "Raspberry Pi",
    color: "magenta",
  },
  crypto: {
    label: "Crypto",
    color: "blue",
  },
  web3: {
    label: "Web3",
    color: "green",
  },
  ios: {
    label: "iOS",
    color: "rgb(230, 117, 166)",
  },
  networks: {
    label: "Networks",
    color: "rgb(255, 165, 0)",
  },
  security: {
    label: "Security",
    color: "rgb(255, 69, 0)",
  },
} as const satisfies Record<string, TagProps>;

export const tagList = (...t: (keyof typeof tags)[]) => t.map((tag) => tags[tag]);
