import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import { Send, Instagram, Music2 } from "lucide-react";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.494-1.404.143-.36.286-.62.286-.967 0-.358-.286-.43-.602-.587-.43-.187-1.46-.7-1.733-.7zM16.064 6.5c-5.273 0-9.547 4.274-9.547 9.547 0 1.793.5 3.55 1.453 5.064l-.913 4.357 4.486-.892a9.5 9.5 0 0 0 4.52 1.137h.005c5.273 0 9.547-4.274 9.547-9.547s-4.274-9.547-9.55-9.547zm0 17.27a7.7 7.7 0 0 1-3.943-1.084l-.283-.17-2.93.583.598-2.85-.184-.296a7.7 7.7 0 0 1-1.18-4.108c0-4.262 3.467-7.729 7.726-7.729 4.262 0 7.728 3.467 7.728 7.729s-3.467 7.729-7.728 7.729z"/>
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
    icon: <Send className="w-6 h-6" />,
    color: "#229ED9",
  },
  {
    label: "INSTAGRAM",
    href: "https://instagram.com/bugachado",
    icon: <Instagram className="w-6 h-6" />,
    color: "#E1306C",
  },
  {
    label: "TIKTOK",
    href: "https://tiktok.com/@bugachado",
    icon: <Music2 className="w-6 h-6" />,
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
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: link.color }}
              >
                {link.icon}
              </span>
              <span className="flex-1 pr-4">{link.label}</span>
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
