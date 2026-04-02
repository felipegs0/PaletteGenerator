function ColorRoot({ color, role }: { color: string, role: string }) {
  return (
    <p className="text-[#f89917] font-mono">
      --color-{role}: <span className="text-white">{color};</span>
    </p>
  );
}

export default ColorRoot;
