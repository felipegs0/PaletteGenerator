import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 1, y: 500 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 1, y: 500 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="absolute -inset-px flex flex-col justify-center rounded-[inherit] bg-black/60 p-4"
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
      </AnimatePresence>
    </div>
  );
}

export default ColorCard;
