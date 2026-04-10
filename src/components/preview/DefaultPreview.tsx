type PaletteColors = {
  bg: string;
  surface: string;
  text: string;
  primary: string;
  secondary: string;
}

function DefaultPreview({
  bg,
  surface,
  text,
  primary,
  secondary,
}: PaletteColors) {
  return (
    <>
      <div className="w-270 overflow-auto" style={{ backgroundColor: bg }}>
        <header className="shadow-sm" style={{ background: surface }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div
              className="font-black text-2xl tracking-tighter"
              style={{ color: primary }}
            >
              BrandLogo
            </div>
            <nav className="hidden md:flex gap-6 font-medium">
              <a
                href="#"
                className={`hover:underline transition-colors`}
                style={{ color: text }}
              >
                Produtos
              </a>
              <a
                href="#"
                className={`hover:underline transition-colors`}
                style={{ color: text }}
              >
                Serviços
              </a>
              <a
                href="#"
                className={`hover:underline transition-colors`}
                style={{ color: text }}
              >
                Sobre
              </a>
            </nav>
            <button
              className={` px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer`}
              style={{ color: surface, background: primary }}
            >
              Entrar
            </button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transforme suas ideias em{" "}
            <span style={{ color: primary }}>realidade</span>
          </h1>
          <p className="text-lg opacity-80 mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            tempora tenetur necessitatibus aut deleniti, doloribus impedit rerum
            aspernatur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-3 rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-transform cursor-pointer"
              style={{ color: surface, background: primary }}
            >
              Começar Agora
            </button>
            <button
              className=" px-8 py-3 rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-transform cursor-pointer"
              style={{ color: surface, background: primary }}
            >
              Ver Demonstração
            </button>
          </div>
        </main>

        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-8 rounded-2xl shadow-md flex flex-col items-start "
            style={{ background: surface }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6"
              style={{ background: primary, color: surface }}
            >
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Alta Performance</h3>
            <p className="opacity-75 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit, laudantium, modi, facere consequuntur voluptas aliquid quos
              non asperiores numquam dolore debitis.
            </p>
          </div>

          <div
            className="p-8 rounded-2xl shadow-md flex flex-col items-start "
            style={{ background: surface }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6"
              style={{ background: primary, color: surface }}
            >
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Design Flexível</h3>
            <p className="opacity-75 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam odio eaque saepe commodi totam voluptas.
            </p>
          </div>

          <div
            className=" p-8 rounded-2xl shadow-md flex flex-col items-start "
            style={{ background: surface }}
          >
            <div
              className=" w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6"
              style={{ background: primary, color: surface }}
            >
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Acessibilidade</h3>
            <p className="opacity-75 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, consequatur. Illo nam deserunt sunt sapiente qui
              facilis itaque.
            </p>
          </div>
        </section>

        <footer
          className="bg-surface mt-12 py-8"
          style={{ background: surface }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center opacity-60 font-medium">
            <p>Criado para testar geradores de cores.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default DefaultPreview;
