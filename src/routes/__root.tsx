import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { trackMetaEvent } from "../lib/meta-pixel";

const META_PIXEL_ID = "2254293718647799";
const META_PIXEL_INIT = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');`;
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BugAchado | Ofertas, cupons e promoções" },
      {
        name: "description",
        content: "BugAchado reúne cupons escondidos, promoções e bugs de preço da Shopee, Amazon e Mercado Livre.",
      },
      { name: "application-name", content: "BugAchado" },
      { name: "apple-mobile-web-app-title", content: "BugAchado" },
      { name: "author", content: "BugAchado" },
      { property: "og:title", content: "BugAchado | Ofertas, cupons e promoções" },
      {
        property: "og:description",
        content: "BugAchado reúne cupons escondidos, promoções e bugs de preço da Shopee, Amazon e Mercado Livre.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BugAchado" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "BugAchado | Ofertas, cupons e promoções" },
      {
        name: "twitter:description",
        content: "BugAchado reúne cupons escondidos, promoções e bugs de preço da Shopee, Amazon e Mercado Livre.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5edc7ef7-0991-483f-8216-0a00dcf829dc/id-preview-4058a98d--10846f57-e55f-4602-9f3a-e6ef994939ca.lovable.app-1780201713711.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5edc7ef7-0991-483f-8216-0a00dcf829dc/id-preview-4058a98d--10846f57-e55f-4602-9f3a-e6ef994939ca.lovable.app-1780201713711.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=2", sizes: "any", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico?v=2", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=2", sizes: "180x180" },
    ],
    scripts: [
      { children: META_PIXEL_INIT },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    const fire = (path: string) => {
      if (lastPathRef.current === path) return;
      lastPathRef.current = path;
      trackMetaEvent("PageView");
    };
    fire(window.location.pathname + window.location.search);
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      fire(toLocation.pathname + (toLocation.searchStr ?? ""));
    });
    return () => unsub();
  }, [router]);

  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </QueryClientProvider>
    </RootDocument>
  );
}
