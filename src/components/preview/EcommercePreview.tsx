import { FaCartPlus, FaSearch } from "react-icons/fa";
import CardEcommerce from "../ui/CardEcommerce.tsx";

type PaletteColors = {
  bg: string;
  surface: string;
  text: string;
  primary: string;
  secondary: string;
};

const categories = ["Audio", "Wearables", "Casa", "Acessorios", "Roupas"];

function EcommercePreview({
  bg,
  surface,
  text,
  primary,
  secondary,
}: PaletteColors) {
  return (
    <div
      className="w-270 overflow-auto"
      style={{
        backgroundColor: bg,
        color: text,
      }}
    >
      <header
        className="sticky top-0 z-10 border-b backdrop-blur"
        style={{
          backgroundColor: `${bg}F2`,
          borderColor: `${primary}20`,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-black"
              style={{ backgroundColor: primary, color: surface }}
            >
              C
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] opacity-55">
                Commerce
              </p>
              <strong className="text-xl font-black">Color Store</strong>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#" className="hover:underline" style={{ color: text }}>
              Novidades
            </a>
            <a href="#" className="hover:underline" style={{ color: text }}>
              Coleções
            </a>
            <a href="#" className="hover:underline" style={{ color: text }}>
              Ofertas
            </a>
            <a href="#" className="hover:underline" style={{ color: text }}>
              Marcas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="hidden rounded-full px-3 py-3 text-sm md:block cursor-pointer"
              style={{ backgroundColor: surface, color: text }}
            >
              <FaSearch />
            </button>
            <button
              className="rounded-full px-3 py-2.5 text-sm font-bold cursor-pointer"
              style={{ backgroundColor: primary, color: surface }}
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${surface} 0%, ${secondary} 100%)`,
            }}
          >
            <span
              className="mb-6 inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.3em]"
              style={{ backgroundColor: bg, color: primary }}
            >
              Semana premium
            </span>
            <h1 className="max-w-lg text-5xl font-black leading-[1.05]">
              Tecnologia com visual forte e vitrine pronta para vender.
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-80">
              Um preview de loja pensado para testar contraste, hierarquia,
              cards de produto e areas promocionais usando a paleta gerada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-full px-7 py-3 font-bold cursor-pointer"
                style={{ backgroundColor: primary, color: surface }}
              >
                Comprar agora
              </button>
              <button
                className="rounded-full border px-7 py-3 font-semibold cursor-pointer"
                style={{ borderColor: `${text}35`, color: text }}
              >
                Explorar catalogo
              </button>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {["Entrega expressa", "Pagamento seguro", "Troca facilitada"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl flex justify-center border px-4 py-4"
                    style={{
                      backgroundColor: `${bg}B3`,
                      borderColor: `${secondary}20`,
                    }}
                  >
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-6">
            <div
              className="rounded-[2rem] p-7 shadow-lg"
              style={{ backgroundColor: surface }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] opacity-60">
                    Oferta relampago
                  </p>
                  <h2 className="mt-3 text-3xl font-black">Setup completo</h2>
                </div>
                <span
                  className="rounded-full px-3 py-2 text-xs font-bold"
                  style={{ backgroundColor: secondary, color: surface }}
                >
                  -30%
                </span>
              </div>
              <div
                className="mt-6 h-44 rounded-[1.5rem]"
                style={{
                  background: `radial-gradient(circle at top, ${primary} 0%, ${secondary} 45%, ${bg} 100%)`,
                }}
              />
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm opacity-60">
                    de <span className="line-through">R$ 4.199</span> por
                  </p>
                  <strong
                    className="text-3xl font-black"
                    style={{ color: primary }}
                  >
                    R$ 2.939
                  </strong>
                </div>
                <button
                  className="rounded-full px-5 py-3 text-sm font-bold cursor-pointer"
                  style={{ backgroundColor: primary, color: surface }}
                >
                  Ver pacote
                </button>
              </div>
            </div>

            <div
              className="rounded-[2rem] border p-6"
              style={{
                backgroundColor: `${surface}D9`,
                borderColor: `${primary}25`,
              }}
            >
              <p className="text-sm font-semibold opacity-65">Categorias</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full px-4 py-2 text-sm font-semibold"
                    style={{ backgroundColor: bg, color: text }}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] opacity-55">
                Destaques da semana
              </p>
              <h2 className="mt-2 text-3xl font-black">Produtos em destaque</h2>
            </div>
            <a
              href="#"
              className="text-sm font-semibold hover:underline"
              style={{ color: primary }}
            >
              Ver todos
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <CardEcommerce
              bg={bg}
              surface={surface}
              primary={primary}
              secondary={secondary}
              category="Home studio"
              title="Camera Nova X"
              price={1299}
              badge={"Mais vendido"}
            />
            <CardEcommerce
              bg={bg}
              surface={surface}
              primary={primary}
              secondary={secondary}
              category="Audio premium"
              title="Fone Orbit Pro"
              price={899}
              badge="Lançamento"
            />
            <CardEcommerce
              bg={bg}
              surface={surface}
              primary={primary}
              secondary={secondary}
              category="Rotina fitness"
              title="Smartwatch Pulse"
              price={649}
              badge="-18%"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className="rounded-[2rem] p-8 shadow-lg"
            style={{
              background: `linear-gradient(180deg, ${surface} 0%, ${bg} 100%)`,
            }}
          >
            <p className="text-sm uppercase tracking-[0.3em] opacity-55">
              Curadoria
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Monte seu escritorio ideal
            </h2>
            <p className="mt-4 max-w-md opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores assumenda consequuntur debitis doloremque.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div
                className="rounded-3xl p-5"
                style={{ backgroundColor: `${surface}F2` }}
              >
                <p className="text-sm opacity-60">Preço médio</p>
                <strong
                  className="mt-2 block text-3xl font-black"
                  style={{ color: primary }}
                >
                  R$ 1.980
                </strong>
              </div>
            </div>
          </div>

          <div
            className="rounded-[2rem] p-8 shadow-lg"
            style={{ backgroundColor: surface }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] opacity-55">
                  Alerta de preço
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Receba ofertas e lançamentos
                </h2>
              </div>
              <span
                className="rounded-full px-4 py-2 text-xs font-bold"
                style={{ backgroundColor: secondary, color: surface }}
              >
                VIP
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                className="rounded-2xl border px-5 py-4"
                style={{ borderColor: `${primary}25`, backgroundColor: bg }}
                placeholder="seuemail@exemplo.com"
              ></input>

              <button
                className="rounded-2xl px-6 py-4 font-bold cursor-pointer"
                style={{ backgroundColor: primary, color: surface }}
              >
                Assinar
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Descontos exclusivos",
                "Alertas de estoque",
                "Seleção mensal",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border px-4 py-4 text-sm font-semibold"
                  style={{
                    borderColor: `${text}15`,
                    backgroundColor: `${bg}CC`,
                  }}
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EcommercePreview;
