import { createFileRoute } from "@tanstack/react-router";
import { landingConfig } from "@/config/landing";
import logo from "@/assets/logo.png";
import { Clock, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import { OffersCarousel } from "@/components/OffersCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BugAchado — Ofertas escondidas e bugs de preço todos os dias" },
      {
        name: "description",
        content:
          "Receba cupons escondidos e ofertas relâmpago direto no seu WhatsApp. Sem spam, só desconto real. Entre no grupo da BugAchado.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { property: "og:title", content: "BugAchado — Ofertas escondidas todos os dias" },
      {
        property: "og:description",
        content: "Cupons e bugs de preço com até 70% OFF direto no WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.494-1.404.143-.36.286-.62.286-.967 0-.358-.286-.43-.602-.587-.43-.187-1.46-.7-1.733-.7zM16.064 6.5c-5.273 0-9.547 4.274-9.547 9.547 0 1.793.5 3.55 1.453 5.064l-.913 4.357 4.486-.892a9.5 9.5 0 0 0 4.52 1.137h.005c5.273 0 9.547-4.274 9.547-9.547s-4.274-9.547-9.55-9.547zm0 17.27a7.7 7.7 0 0 1-3.943-1.084l-.283-.17-2.93.583.598-2.85-.184-.296a7.7 7.7 0 0 1-1.18-4.108c0-4.262 3.467-7.729 7.726-7.729 4.262 0 7.728 3.467 7.728 7.729s-3.467 7.729-7.728 7.729z"/>
    </svg>
  );
}

function CTA({ label = "LIBERAR ACESSO AO GRUPO" }: { label?: string }) {
  return (
    <a
      href={landingConfig.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-5 text-center text-sm sm:text-lg font-black tracking-tight text-white transition-transform active:scale-[0.98] hover:scale-[1.02] whitespace-nowrap"
      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
    >
      <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      {label}
    </a>
  );
}

function Landing() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-primary/30"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto w-full max-w-xl px-5 pt-6 pb-32 sm:pb-16">
        {/* TOP URGENCY BADGE */}
        <div className="flex justify-center animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[11px] sm:text-xs font-bold text-primary uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            Vagas limitadas — grupo pode lotar
          </span>
        </div>

        {/* LOGO */}
        <header className="flex justify-center mt-6 animate-float-up [animation-delay:100ms]">
          <img
            src={logo}
            alt="BugAchado"
            className="h-40 sm:h-52"
            style={{
              filter:
                "drop-shadow(0 0 14px oklch(0.68 0.20 150 / 0.6)) drop-shadow(0 0 26px oklch(0.68 0.20 150 / 0.3)) drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
            }}
          />
        </header>

        {/* HERO */}
        <section className="mt-8 text-center animate-float-up [animation-delay:200ms]">
          <h1 className="text-[2rem] leading-[1.05] sm:text-5xl font-black tracking-tighter text-foreground">
            🔥 OFERTAS ESCONDIDAS{" "}
            <span className="text-primary">TODOS OS DIAS</span>
          </h1>

          <p className="mt-5 text-2xl sm:text-4xl font-black tracking-tight text-foreground">
            Até{" "}
            <span
              className="inline-block rounded-xl px-3 py-1 text-white"
              style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
            >
              70% OFF
            </span>
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Receba <strong className="text-foreground">cupons escondidos</strong> e{" "}
            <strong className="text-foreground">ofertas relâmpago</strong> direto no seu WhatsApp —{" "}
            <span className="text-primary font-bold">sem spam, só desconto real</span>.
          </p>

          <div className="mt-8">
            <div className="hidden sm:block">
              <CTA />
            </div>
            <p className="mt-3 text-xs text-muted-foreground font-medium">
              ✅ Gratuito · Sem spam · Saia quando quiser
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs sm:text-sm font-bold text-foreground">
            💸 Quem entra primeiro pega as melhores
          </div>
        </section>

        {/* OFFERS CAROUSEL */}
        <section className="mt-14">
          <h2 className="text-center text-xl sm:text-2xl font-black tracking-tight text-foreground mb-6 px-2">
            🚨 Ofertas enviadas no grupo recentemente:
          </h2>
          <OffersCarousel />
          <p className="text-center mt-4 text-xs font-bold text-muted-foreground">
            💥 Descontos reais enviados no grupo
          </p>
        </section>


        {/* TRUST BADGES */}
        <section className="mt-10 grid grid-cols-2 gap-3 text-sm">
          {[
            "Ofertas todo dia",
            "Cupons secretos",
            "Sem golpe",
            "Zero spam",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-3 font-bold text-foreground"
            >
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              {t}
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section className="mt-12">
          <div className="rounded-3xl bg-card border-2 border-primary/30 p-6 sm:p-8 text-center shadow-lg">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-base sm:text-lg font-bold text-foreground">
              As melhores ofertas acabam em minutos.
              <br />
              <span className="text-primary">Entre agora e não perca nenhuma.</span>
            </p>
            <div className="mt-6">
              <CTA />
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-destructive">
              <AlertTriangle className="w-3.5 h-3.5" />
              Ofertas acabam rápido — não deixe passar
            </p>
          </div>
        </section>

      </div>

      {/* MOBILE STICKY CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] backdrop-blur-md bg-background/85 border-t border-border"
      >
        <a
          href={landingConfig.groupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-glow flex w-full items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center text-sm font-black tracking-tight text-white active:scale-[0.98] transition-transform whitespace-nowrap"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          LIBERAR ACESSO AO GRUPO
        </a>
      </div>
    </main>
  );
}
