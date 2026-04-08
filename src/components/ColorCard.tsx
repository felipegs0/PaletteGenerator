import { useState } from "react";
import { motion } from "motion/react";

function ColorCard({ color }: { color: string }) {
  const [hover, setHover] = useState(false);

  const copyColor = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <div
      className="rounded-xl relative overflow-hidden"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <motion.div
          initial={{ opacity: 1, y: 900 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute -inset-px flex flex-col justify-end rounded-[inherit] bg-linear-to-t from-black/96 via-black/38 to-black/2 p-4"
        >
          <p className="mb-3 text-center text-lg font-semibold tracking-[0.18em] text-white/95 uppercase">
            {color}
          </p>
          <button
            className="w-full rounded-lg border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-white uppercase cursor-pointer transition duration-200 hover:bg-white hover:text-black"
            onClick={copyColor}
          >
            Copiar
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default ColorCard;
