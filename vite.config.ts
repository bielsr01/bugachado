// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Pick the Nitro deploy preset from env so the same codebase can be built for
// Cloudflare (default / Lovable), Vercel, or a self-hosted Node server (EasyPanel/Docker).
//   NITRO_PRESET=vercel       -> Vercel
//   NITRO_PRESET=node-server  -> standalone Node server (EasyPanel / Docker / VPS)
//   unset                      -> Lovable default (Cloudflare)
const preset = process.env.NITRO_PRESET;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(preset
    ? {
        nitro:
          preset === "vercel"
            ? {
                preset,
                output: {
                  dir: ".vercel/output",
                  publicDir: ".vercel/output/static",
                  serverDir: ".vercel/output/functions/__nitro.func",
                },
              }
            : { preset },
      }
    : {}),
});
