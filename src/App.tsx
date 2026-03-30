import { useState } from "react";
import ColorCard from "./components/ColorCard";
import "./App.css";
import { generatePalette } from "./utils/generatePalette";
import ColorRoot from "./components/ColorRoot";

type PaletteType = "triad" | "complementary" | "mono" | "analog";

function App() {
  const [palette, setPalette] = useState([]);
  const [type, setType] = useState<PaletteType>("mono");
  const [mode, setMode] = useState(true);

  const monoPalette = {
    bg: palette[0],
    surface: "#fff",
    text: palette[3],
    primary: palette[1],
    secondary: palette[2],
  }

  const generateRandom = (type: PaletteType) => {
    setPalette(generatePalette(type));
    console.log(palette);
  };

  const exportCSS = () => {
    let variables = "";
    for (let i = 0; i < palette.length; i++) {
      variables += `   --color-${i + 1}: ${palette[i]}; \n`;
    }
    const css = `:root {\n${variables}}`;
    navigator.clipboard.writeText(css);
  };

  return (
    <>
      <div className="max-w-8xl mx-auto px-6 flex shadow-2xl">
        <div className="bg-[#1b1f2b] flex flex-col p-7 border border-[#ffffff13] rounded-bl-md rounded-tl-md">
          <label
            htmlFor="colorOption"
            className="text-white font-semibold mb-2"
          >
            Tipo:{" "}
          </label>
          <select
            name="colorOption"
            className="text-white bg-[#151922] border border-[#ffffff2d] p-2 w-55 rounded-md mb-4  outline-none"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setType(e.target.value as PaletteType)
            }
          >
            <option value="mono" selected>
              Monocromático
            </option>
            <option value="complementary">Complementar</option>
            <option value="triad">Tríade</option>
            <option value="analog">Análogo</option>
          </select>
          <button
            className="bg-[#f89917] py-3 rounded-md font-semibold cursor-pointer"
            onClick={() => generateRandom(type)}
          >
            Gerar Paleta
          </button>
          <button
            className="bg-[#00000046] text-white border-[#f89917] border-2 py-3 rounded-md font-semibold cursor-pointer mt-4"
            onClick={() => setMode(!mode)}
          >
            {mode ? "Visualizar Preview" : "Visualizar Paleta"}
          </button>
        </div>
        <div className="bg-[#141821] flex flex-col h-[85vh] border border-[#ffffff13] rounded-br-md rounded-tr-md">
          {mode ? (
            <>
              <div className="grid grid-cols-4 gap-2 w-270 p-7 h-250 ">
                {palette.map((color, i) => (
                  <ColorCard key={i} color={color} />
                ))}
              </div>
              <div className="bg-[#141821] flex flex-col border-t border-[#ffffff1f] p-7">
                <p className="text-white text-xl font-semibold mb-3">
                  Exportar CSS:
                </p>
                <div className="bg-[#141821] flex flex-col p-5 border border-[#ffffff23] rounded-md relative">
                  <p className="text-white font-mono">:root {" { "}</p>
                  <div className="flex flex-col pl-5">
                    {palette.map((color, i) => (
                      <ColorRoot num={i} color={color} />
                    ))}
                  </div>
                  <p className="text-white font-mono">{" } "}</p>
                  <button
                    className="border border-[#ffffff23] text-white font-semibold text-md px-6 py-2 bottom-3 right-3 rounded-md absolute cursor-pointer"
                    onClick={exportCSS}
                  >
                    Copiar Código
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-270 overflow-auto" style={{ backgroundColor: monoPalette.bg }}>
                <header className="shadow-sm" style={{ background: monoPalette.surface }}>
                  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="font-black text-2xl tracking-tighter" style={{ color: monoPalette.primary }}>
                      BrandLogo
                    </div>
                    <nav className="hidden md:flex gap-6 font-medium">
                      <a
                        href="#"
                        className={`hover:underline transition-colors`}
                        style={{ color: monoPalette.text }}
                      >
                        Produtos
                      </a>
                      <a
                        href="#"
                        className={`hover:underline transition-colors`}
                        style={{ color: monoPalette.text }}
                      >
                        Serviços
                      </a>
                      <a
                        href="#"
                        className={`hover:underline transition-colors`}
                        style={{ color: monoPalette.text }}
                      >
                        Sobre
                      </a>
                    </nav>
                    <button className={` px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer`} style={{ color: monoPalette.surface, background: monoPalette.primary }}>
                      Entrar
                    </button>
                  </div>
                </header>

                <main className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
                  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Transforme suas ideias em{" "}
                    <span style={{ color: monoPalette.secondary }}>realidade</span>

                  </h1>
                  <p className="text-lg opacity-80 mb-10 max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora tenetur necessitatibus aut deleniti, doloribus impedit rerum aspernatur.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" style={{ color: monoPalette.surface, background: monoPalette.primary }}>
                      Começar Agora
                    </button>
                    <button className=" px-8 py-3 rounded-lg font-bold shadow-lg hover:-translate-y-1 transition-transform cursor-pointer" style={{ color: monoPalette.surface, background: monoPalette.primary }}>
                      Ver Demonstração
                    </button>
                  </div>
                </main>

                <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-2xl shadow-md flex flex-col items-start" style={{ background: monoPalette.surface }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6" style={{ background: monoPalette.primary, color: monoPalette.surface }}>
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-3">Alta Performance</h3>
                    <p className="opacity-75 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit, laudantium, modi, facere consequuntur voluptas aliquid quos non asperiores numquam dolore debitis. 
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl shadow-md flex flex-col items-start border-secondary" style={{ background: monoPalette.surface, borderColor: monoPalette.secondary }}>
                    <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6" style={{ background: monoPalette.primary, color: monoPalette.surface }}>
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-3">Design Flexível</h3>
                    <p className="opacity-75 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio eaque saepe commodi totam voluptas.
                    </p>
                  </div>

                  <div className=" p-8 rounded-2xl shadow-md flex flex-col items-start" style={{ background: monoPalette.surface}}>
                    <div className=" w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6" style={{ background: monoPalette.primary, color: monoPalette.surface }}>
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-3">Acessibilidade</h3>
                    <p className="opacity-75 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, consequatur. Illo nam deserunt sunt sapiente qui facilis itaque.
                    </p>
                  </div>
                </section>

                <footer className="bg-surface mt-12 py-8" style={{ background: monoPalette.surface }}>
                  <div className="max-w-6xl mx-auto px-4 text-center opacity-60 font-medium">
                    <p>
                      Criado para testar geradores de
                      cores.
                    </p>
                  </div>
                </footer>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
