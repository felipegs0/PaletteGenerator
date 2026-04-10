function CardEcommerce({
  bg,
  surface,
  primary,
  secondary,
  category,
  title,
  price,
  badge
}: {
  bg: string;
  surface: string;
  primary: string;
  secondary: string;
  category: string;
  title: string;
  price: number;
  badge: string;
}) {
  return (
    <article
      key={title}
      className="overflow-hidden rounded-[1.75rem] shadow-lg"
      style={{ backgroundColor: surface }}
    >
      <div
        className="relative h-56"
        style={{
          background: `linear-gradient(140deg, ${secondary} 0%, ${primary} ${55 + 1 * 10}%, ${bg} 100%)`,
        }}
      >
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-2 text-xs font-bold"
          style={{ backgroundColor: bg, color: primary }}
        >
          {badge}
        </span>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold opacity-55">{category}</p>
        <h3 className="mt-2 text-2xl font-black">{title}</h3>
        <div className="mt-6 flex items-center justify-between">
          <strong className="text-2xl font-black" style={{ color: primary }}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </strong>
          <button
            className="rounded-full px-5 py-2.5 text-sm font-bold cursor-pointer"
            style={{ backgroundColor: primary, color: surface }}
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardEcommerce;