import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "BugAchado — Links" },
      { name: "description", content: "Todos os canais oficiais da BugAchado em um só lugar." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
    ],
    links: [{ rel: "canonical", href: "/links" }],
  }),
  component: LinksPage,
});

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={className}>
      <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3 0 .5-.1.7l-.4.4c-.2.2-.3.4-.1.7a6.3 6.3 0 0 0 3 2.8c.4.2.6.1.8-.1l.5-.6c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .8-.4 1.6-.8 1.8a3 3 0 0 1-2.5.2c-1.6-.5-4.2-2-5.6-4.8a3.5 3.5 0 0 1-.5-1.8c0-.9.5-1.5.8-1.7l.1-.7Z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={className}>
      <path d="M21 4 2.5 11.2c-.6.2-.6 1 0 1.2l4.7 1.5L9 19.5c.2.6 1 .7 1.4.2l2.4-2.7 4.6 3.4c.5.4 1.2.1 1.3-.5L21.9 4.7c.1-.6-.4-1-.9-.7Z" />
      <path d="m7.2 13.9 10.6-7.2-7.8 8.7" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg {...svgBase} className={className}>
      <path d="M15 3v10.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M15 3a4.5 4.5 0 0 0 4.5 4.5" />
    </svg>
  );
}

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  highlight?: boolean;
};

const links: LinkItem[] = [
  {
    label: "GRUPO DE OFERTAS NO WHATSAPP",
    href: "https://chat.whatsapp.com/DwxGK3Wwfmy3XKqIgzr8qK?s=cl&p=i&mlu=2",
    icon: <WhatsAppIcon className="w-6 h-6" />,
    color: "#25D366",
    highlight: true,
  },
  {
    label: "CANAL NO TELEGRAM",
    href: "https://t.me/bugachado",
    icon: <TelegramIcon className="w-6 h-6" />,
    color: "#229ED9",
  },
  {
    label: "INSTAGRAM",
    href: "https://instagram.com/bugachado",
    icon: <Instagram className="w-6 h-6" strokeWidth={1.8} />,
    color: "#E1306C",
  },
  {
    label: "TIKTOK",
    href: "https://tiktok.com/@bugachado",
    icon: <TikTokIcon className="w-6 h-6" />,
    color: "#000000",
  },
];

function LinksPage() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-primary/30"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-md px-5 pt-10 pb-16">
        <header className="flex flex-col items-center text-center animate-float-up">
          <img
            src={logo}
            alt="BugAchado"
            className="h-32 sm:h-40"
            style={{
              filter:
                "drop-shadow(0 0 14px oklch(0.68 0.20 150 / 0.6)) drop-shadow(0 0 26px oklch(0.68 0.20 150 / 0.3)) drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
            }}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            🛍️ Bug Achado 🛒
          </h1>
        </header>

        <section className="mx-auto mt-5 flex w-fit items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={`icon-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center text-foreground/80 transition-colors hover:text-foreground [&_svg]:h-6 [&_svg]:w-6"
            >
              {link.icon}
            </a>
          ))}
        </section>

        <section className="mt-8 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-float-up relative flex items-center gap-4 overflow-hidden rounded-full bg-card px-5 py-4 text-sm font-semibold tracking-tight text-foreground shadow-md transition-all active:scale-[0.98] hover:scale-[1.02] hover:shadow-lg ${
                link.highlight ? "animate-pulse-glow" : ""
              }`}
              style={{
                animationDelay: `${100 + i * 80}ms`,
                ...(link.highlight ? { boxShadow: "0 0 0 0 rgba(37,211,102,0.7)" } : {}),
              }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white [&_svg]:h-5 [&_svg]:w-5"
                style={{ backgroundColor: link.color }}
              >
                {link.icon}
              </span>
              <span className="flex-1 text-left">{link.label}</span>
            </a>
          ))}
        </section>

        <p className="mt-10 text-center text-xs font-bold text-muted-foreground">
          © {new Date().getFullYear()} BugAchado · Sem spam, só desconto real
        </p>
      </div>
    </main>
  );
}
