import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/home",
  },
  integrations: [preact({ compat: true })],
  // https://docs.astro.build/en/guides/deploy/github/
  site: "https://mirrmurr.github.io",
});
