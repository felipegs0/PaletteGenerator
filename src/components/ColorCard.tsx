function ColorCard({ color }: { color: string }) {
  return (
    <div className="rounded-xl p-4 flex flex-col justify-end items-center" style={{ backgroundColor: color }}>
      <p className="text-white text-2xl font-semibold mb-3">{color}</p>
      <button className="bg-[#00000059] text-white text-xl px-10 py-2 rounded-md mb-3 cursor-pointer">
        Copiar
      </button>
    </div>
  );
}

export default ColorCard;
