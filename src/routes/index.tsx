import { createFileRoute } from "@tanstack/react-router";
import { landingConfig } from "@/config/landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BugAchado — Ofertas, Bugs de Preço e Promoções Diárias" },
      {
        name: "description",
        content:
          "Entre no grupo da BugAchado e receba ofertas escondidas, cupons, bugs de preço e descontos reais das maiores lojas do Brasil.",
      },
      { property: "og:title", content: "BugAchado — Pare de pagar caro!" },
      {
        property: "og:description",
        content: "Promoções, bugs de preço e cupons todos os dias no seu WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function CTAButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "accent";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-5 text-base md:text-lg font-extrabold tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center text-primary-foreground animate-pulse-glow";
  const bg =
    variant === "accent"
      ? { background: "var(--gradient-urgent)", boxShadow: "var(--shadow-glow-accent)" }
      : { background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" };
  return (
    <a
      href={landingConfig.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={base}
      style={bg}
    >
      {children}
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen text-foreground" style={{ background: "var(--gradient-hero)" }}>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-10 pb-16 md:pt-20 md:pb-24">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, oklch(0.78 0.22 145 / 0.4), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.7 0.24 35 / 0.35), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-4xl text-center animate-float-up">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs md:text-sm font-bold text-accent uppercase tracking-wider">
            🔥 Ofertas, Bugs e Erros de Preço Todos os Dias
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
            PARE DE PAGAR <span className="text-accent">CARO!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Entre para o grupo da <strong className="text-foreground">BugAchado</strong> e receba ofertas escondidas, cupons, bugs de preço e descontos reais das maiores lojas do Brasil.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton>🟢 ENTRAR NO GRUPO GRATUITAMENTE</CTAButton>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>✅ Gratuito</span>
              <span>✅ Sem spam</span>
              <span>✅ Promoções todos os dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-5xl font-black tracking-tight">
            Por que milhares acompanham a <span className="text-primary">BugAchado</span>?
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { e: "💥", t: "Bugs de Preço", d: "Achamos promoções fora do normal antes que acabem." },
              { e: "⚡", t: "Ofertas Relâmpago", d: "Descontos que podem durar apenas alguns minutos." },
              { e: "🛒", t: "Principais Lojas", d: "Amazon, Mercado Livre, Shopee, SHEIN, Magalu e muito mais." },
              { e: "🎯", t: "Produtos Selecionados", d: "Somente ofertas que realmente valem a pena." },
            ].map((c) => (
              <article
                key={c.t}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="text-4xl">{c.e}</div>
                <h3 className="mt-4 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="px-4 py-10">
        <div
          className="mx-auto max-w-4xl rounded-3xl p-8 md:p-10 text-center"
          style={{ background: "var(--gradient-urgent)" }}
        >
          <div className="inline-block rounded-full bg-black/30 px-4 py-1 text-xs font-black tracking-widest text-white">
            🚨 IMPORTANTE
          </div>
          <p className="mt-4 text-xl md:text-2xl font-bold text-white leading-snug">
            Muitas promoções acabam em <u>poucos minutos</u> após serem publicadas.
          </p>
          <p className="mt-2 text-white/90">
            Se você entrar tarde, pode perder as melhores oportunidades.
          </p>
        </div>
      </section>

      {/* OFERTAS */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-5xl font-black tracking-tight">
            Exemplos de <span className="text-accent">ofertas reais</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {landingConfig.produtos.map((p) => (
              <article
                key={p.nome}
                className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/60 hover:-translate-y-1"
              >
                <div className="text-6xl">{p.emoji}</div>
                <h3 className="mt-4 font-bold">{p.nome}</h3>
                <div className="mt-3 text-sm text-muted-foreground line-through">{p.de}</div>
                <div className="mt-1 text-2xl font-black text-primary">{p.por}</div>
                <span className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                  OFERTA QUENTE 🔥
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-4 py-16 md:py-24 bg-card/40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl md:text-5xl font-black tracking-tight">
            Como funciona
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Entre no grupo", d: "Clique no botão e participe gratuitamente." },
              { n: "2", t: "Receba ofertas", d: "Promoções diárias direto no seu WhatsApp." },
              { n: "3", t: "Aproveite", d: "Compre antes que a oferta acabe." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-black text-primary-foreground">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            A comunidade cresce <span className="text-primary">todos os dias</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { e: "🔥", n: landingConfig.social.ofertas, l: "Ofertas compartilhadas" },
              { e: "👥", n: landingConfig.social.membros, l: "Membros na comunidade" },
              { e: "⚡", n: landingConfig.social.diarias, l: "Promoções por dia" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-8">
                <div className="text-4xl">{s.e}</div>
                <div className="mt-3 text-4xl md:text-5xl font-black text-primary">{s.n}</div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-20">
        <div
          className="mx-auto max-w-4xl rounded-3xl border border-primary/40 p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.05 280), oklch(0.18 0.04 200))",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Você está a <span className="text-primary">um clique</span> das melhores promoções da internet.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Entre gratuitamente agora e comece a economizar em suas próximas compras.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton variant="accent">🔥 QUERO ENTRAR NO GRUPO AGORA</CTAButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-10 text-center">
        <div className="text-2xl font-black tracking-tighter">{landingConfig.siteName}</div>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Encontrando as melhores ofertas, bugs e promoções para você economizar todos os dias.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} BugAchado. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
