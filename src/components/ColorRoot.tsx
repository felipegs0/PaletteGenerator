function ColorRoot({ color, num }: { color: string, num: number }) {
  return (
    <p className="text-[#f89917] font-mono">
      --color-{num}: <span className="text-white">{color};</span>
    </p>
  );
}

export default ColorRoot;
