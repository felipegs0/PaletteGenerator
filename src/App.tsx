import { useState } from "react";
import ColorCard from "./components/ColorCard";
import "./App.css";
import { generatePalette } from "./utils/generatePalette";
import ColorRoot from "./components/ColorRoot";
import DefaultPreview from "./components/DefaultPreview";
import FormPreview from "./components/FormPreview";
import defaultPreview from "./components/DefaultPreview";

type PaletteType = "triad" | "complementary" | "mono" | "analog";
type PreviewType = "default" | "form";

type PaletteColors = {
  bg: string;
  surface: string;
  text: string;
  primary: string;
  secondary: string;
};

const Previews = {
  form: FormPreview,
  default: defaultPreview
};

function App() {
  const [palette, setPalette] = useState<PaletteColors | null>(null);
  const [typePalette, setTypePalette] = useState<PaletteType>("mono");
  const [typePreview, setTypePreview] = useState<PreviewType>("default");
  const [mode, setMode] = useState(true);

  const PreviewComponent = Previews[typePreview];

  const generateRandom = (typePalette: PaletteType) => {
    setPalette(generatePalette(typePalette));
  };

  const exportCSS = () => {
    const variables = Object.values(palette).join("\n");

    const css = `:root {\n${variables}\n}`;
    navigator.clipboard.writeText(css);
  };

  return (
    <>
      <div className="max-w-8xl mx-auto px-6 flex shadow-2xl">
        <div className="bg-[#1b1f2b] flex flex-col p-7 border border-[#ffffff13] rounded-bl-md rounded-tl-md">
          {mode ? (
            <>
              <label
                htmlFor="colorOption"
                className="text-white font-semibold mb-2"
              >
                Tipo de paleta:{" "}
              </label>
              <select
                name="colorOption"
                className="text-white bg-[#151922] border border-[#ffffff2d] p-2 w-55 rounded-md mb-4  outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTypePalette(e.target.value as PaletteType)
                }
                value={typePalette}
              >
                <option value="mono">
                  Monocromático
                </option>
                <option value="complementary">Complementar</option>
                <option value="triad">Tríade</option>
                <option value="analog">Análogo</option>
              </select>
            </>
          ) : (
            <>
              <label
                htmlFor="colorOption"
                className="text-white font-semibold mb-2"
              >
                Tipo de preview:{" "}
              </label>
              <select
                name="previewOption"
                className="text-white bg-[#151922] border border-[#ffffff2d] p-2 w-55 rounded-md mb-4  outline-none"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setTypePreview(e.target.value as PreviewType)
                }
                value={typePreview}
              >
                <option value="default">
                  Padrão
                </option>
                <option value="form">Formulário</option>
              </select>
            </>
          )}

          <button
            className="bg-[#f89917] py-3 rounded-md font-semibold cursor-pointer"
            onClick={() => generateRandom(typePalette)}
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
          {mode && palette ? (
            <>
              <div className="grid grid-cols-5 gap-2 w-270 p-7 h-250 ">
                {Object.entries(palette).map(([i, color]) => (
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
                    {Object.entries(palette).map(([role, color]) => (
                      <ColorRoot role={role} color={color} />
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
          ) : palette ? (
            <PreviewComponent
              bg={palette.bg}
              surface={palette.surface}
              text={palette.text}
              primary={palette.primary}
              secondary={palette.secondary}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
