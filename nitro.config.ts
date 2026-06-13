import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  prerender: {
    crawlLinks: true,
    routes: ["/"],
  },
  routeRules: {
    "/_build/**": { cache: { maxAge: 60 * 60 * 24 * 365 } }, // 1 year cache for build assets
    "/api/**": { swr: 3600 }, // SSR with 1 hour revalidation for API routes
  },
});
