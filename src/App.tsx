import { useState } from "react";
import ColorCard from "./components/ColorCard";
import "./App.css";
import { generatePalette } from "./utils/generatePalette";
import ColorRoot from "./components/ColorRoot";

type PaletteType = "triad" | "complementary" | "mono" | "analog";

function App() {
  const [palette, setPalette] = useState([]);
  const [type, setType] = useState<PaletteType>("mono");

  const generateRandom = (type: PaletteType) => {
    setPalette(generatePalette(type));
    console.log(palette);
  };

  const exportCSS = () => {
    let variables = "";
    for(let i = 0; i < palette.length; i++) {
      variables += `   --color-${i + 1}: ${palette[i]}; \n`
    }
    const css = `:root {\n${variables}}`
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
        </div>
        <div className="bg-[#141821] flex flex-col h-[85vh] border border-[#ffffff13] rounded-br-md rounded-tr-md">
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
              <button className="border border-[#ffffff23] text-white font-semibold text-md px-6 py-2 bottom-3 right-3 rounded-md absolute cursor-pointer" onClick={exportCSS}>
                Copiar Código
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
