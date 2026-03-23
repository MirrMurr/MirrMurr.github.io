interface Page {
  label: "Home" | "About Me" | "Education" | "Experience" | "Projects" | "Contact";
  href: string;
  color?: string;
}

export const pages: Page[] = [
  { href: "/", label: "Home", color: "#ff6f61" },
  { href: "/about", label: "About Me", color: "#4ecdc4" },
  { href: "/education", label: "Education", color: "#45b7d1" },
  { href: "/experience", label: "Experience", color: "#96ceb4" },
  { href: "/projects", label: "Projects", color: "#feca57" },
  { href: "/contact", label: "Contact", color: "#ff9ff3" },
];
