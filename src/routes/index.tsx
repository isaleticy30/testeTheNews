import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Eye, Bookmark, ArrowUpRight, Sparkles, Search } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";
import contractImg from "@/assets/contract-signing.jpg";
import pharmaImg from "@/assets/pharma-pens.jpg";
import satImg from "@/assets/satellite-forest.jpg";
import oilImg from "@/assets/oil-refinery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "the news — Edição de hoje" },
      { name: "description", content: "Sua dose diária de notícias selecionadas, em um só lugar." },
      { property: "og:title", content: "the news — Edição de hoje" },
      { property: "og:description", content: "Sua dose diária de notícias selecionadas, em um só lugar." },
    ],
  }),
  component: Index,
});

const categories = ["Para você", "Mundo", "Brasil", "Tecno", "Money", "Sports"];

const stories = [
  {
    source: "CNBC",
    time: "3min",
    title: "Tesouro dos EUA autoriza vendas de petróleo iraniano sob nova licença especial",
    img: oilImg,
    tag: "Mundo",
    accent: "bg-terracotta text-cream",
  },
  {
    source: "G1",
    time: "12min",
    title: "Contrato de R$ 1 bi marca início do maior projeto de infraestrutura do ano",
    img: contractImg,
    tag: "Brasil",
    accent: "bg-sage text-plum",
  },
  {
    source: "InfoMoney",
    time: "18min",
    title: "Mais da metade das canetas emagrecedoras vem do mercado paralelo",
    img: pharmaImg,
    tag: "Saúde",
    accent: "bg-blush text-plum",
  },
  {
    source: "O Globo",
    time: "28min",
    title: "Satélites revelam antes e depois da área mais devastada do país em 2026",
    img: satImg,
    tag: "Clima",
    accent: "bg-plum text-cream",
  },
];

function Index() {
  // Monta a capa editorial da home com a noticia principal e a lista secundaria.
  const [hero, ...rest] = stories;
  return (
    <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden bg-cream text-plum">
      {/* Formas decorativas de fundo */}
      <div className="pointer-events-none absolute -left-24 top-40 size-72 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[520px] size-64 rounded-full bg-sage/40 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-2xl bg-plum text-cream">
            <Sparkles className="size-4" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg italic">the news</p>
            <p className="font-sans text-[10px] tracking-wider text-dim">ed. 1.396 · qui</p>
          </div>
        </div>
        <button
          aria-label="Buscar"
          className="grid size-10 place-items-center rounded-full border border-plum/15 bg-cream/70 backdrop-blur"
        >
          <Search className="size-4" strokeWidth={2.25} />
        </button>
      </header>

      <main className="relative z-10 pb-32">
        {/* Bloco principal de abertura editorial */}
        <section className="px-6 pt-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-terracotta">
            Bom dia, Lara
          </p>
          <h1 className="mt-3 font-display text-[44px] font-light leading-[1] tracking-tight">
            Sua leitura de <em className="italic text-terracotta">quinta</em>,
            servida quentinha.
          </h1>
          <div className="mt-5 flex items-center gap-3 text-[11px] text-dim">
            <span className="rounded-full bg-plum/5 px-3 py-1.5 font-medium">5 min</span>
            <span className="rounded-full bg-plum/5 px-3 py-1.5 font-medium">12 histórias</span>
            <span className="rounded-full bg-plum/5 px-3 py-1.5 font-medium">25 jun</span>
          </div>
        </section>

        {/* Filtros visuais de categoria */}
        <div className="mt-7 flex gap-2 overflow-x-auto px-6 pb-2 no-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-sans text-[12px] font-medium transition ${
                i === 0
                  ? "bg-plum text-cream"
                  : "border border-plum/12 bg-cream/60 text-plum/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card principal com destaque assimetrico */}
        <section className="mt-5 px-6">
          <article className="relative overflow-hidden rounded-[36px] bg-plum text-cream shadow-[0_30px_60px_-30px_rgba(60,30,80,0.55)]">
            <img
              src={hero.img}
              alt=""
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-transparent" />
            <button
              aria-label="Salvar"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-cream/15 backdrop-blur"
            >
              <Bookmark className="size-4" strokeWidth={2} />
            </button>
            <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-terracotta px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider">
              Capa · {hero.tag}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream/65">
                {hero.source} · {hero.time} de leitura
              </p>
              <h2 className="mt-2 text-balance font-display text-[26px] font-light leading-[1.1]">
                {hero.title}
              </h2>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4 font-sans text-[12px] text-cream/75">
                  <span className="flex items-center gap-1.5">
                    <Heart className="size-3.5 text-blush" fill="currentColor" /> 1.2k
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="size-3.5" /> 4.107
                  </span>
                </div>
                <span className="grid size-11 place-items-center rounded-full bg-cream text-plum">
                  <ArrowUpRight className="size-5" strokeWidth={2.25} />
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* Cabecalho da lista secundaria */}
        <div className="mt-10 flex items-end justify-between px-6">
          <h3 className="font-display text-2xl font-light">
            Mais <em className="italic text-terracotta">lidas</em> hoje
          </h3>
          <Link
            to="/acervo"
            className="font-sans text-[11px] font-semibold text-dim underline-offset-4 hover:underline"
          >
            ver todas
          </Link>
        </div>

        {/* Lista de noticias complementares */}
        <ul className="mt-5 space-y-3 px-6">
          {rest.map((s, i) => (
            <li key={i}>
              <article className="flex items-stretch gap-3 rounded-[28px] bg-cream/80 p-3 ring-1 ring-plum/8 backdrop-blur transition hover:bg-cream">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-[22px]">
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={400}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${s.accent}`}
                    >
                      {s.tag}
                    </span>
                    <span className="font-sans text-[10px] text-dim">
                      {s.source} · {s.time}
                    </span>
                  </div>
                  <h4 className="mt-1.5 line-clamp-3 text-balance font-display text-[16px] font-normal leading-snug">
                    {s.title}
                  </h4>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1.5 font-sans text-[11px] text-dim">
                      <Heart className="size-3 text-pulse" fill="currentColor" />
                      {120 + i * 47}
                    </span>
                    <ArrowUpRight className="size-4 text-plum/40" strokeWidth={2.25} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Chamada para o acervo */}
        <Link
          to="/acervo"
          className="mx-6 mt-8 flex items-center justify-between rounded-[32px] bg-gradient-to-br from-plum to-plum/85 p-5 text-cream"
        >
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cream/60">
              Acervo
            </p>
            <p className="mt-1 font-display text-xl font-light leading-tight">
              1.396 edições <em className="italic text-blush">para reler</em>
            </p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-terracotta">
            <ArrowUpRight className="size-5" strokeWidth={2.25} />
          </span>
        </Link>

        <p className="mt-8 px-6 text-center font-display text-sm italic text-dim">
          — até amanhã, com café —
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
