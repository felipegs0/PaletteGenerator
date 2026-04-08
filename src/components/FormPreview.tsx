type PaletteColors = {
  bg: string;
  surface: string;
  text: string;
  primary: string;
  secondary: string;
};

function FormPreview({
  bg,
  surface,
  text,
  primary,
  secondary,
}: PaletteColors) {
  return (
    <div
      className="w-270 overflow-auto px-6 py-13.5"
      style={{ backgroundColor: bg, color: text }}
    >
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="flex flex-col justify-center">
          <span
            className="mb-4 w-fit rounded-full px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: secondary, color: surface }}
          >
            Formulario de Contato
          </span>
          <h1 className="mb-5 text-5xl font-extrabold leading-tight">
            Fale com a equipe e receba uma proposta sob medida.
          </h1>
          <p className="max-w-xl text-lg opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequatur dolorum, excepturi iusto modi omnis praesentium quae?
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-2xl p-5 shadow-md"
              style={{ backgroundColor: surface }}
            >
              <p className="text-sm font-semibold opacity-70">Tempo medio</p>
              <strong
                className="mt-2 block text-3xl font-black"
                style={{ color: primary }}
              >
                24h
              </strong>
              <p className="mt-2 text-sm opacity-75">
                Retorno para novos contatos comerciais.
              </p>
            </div>

            <div
              className="rounded-2xl p-5 shadow-md"
              style={{ backgroundColor: surface }}
            >
              <p className="text-sm font-semibold opacity-70">Projetos ativos</p>
              <strong
                className="mt-2 block text-3xl font-black"
                style={{ color: primary }}
              >
                +120
              </strong>
              <p className="mt-2 text-sm opacity-75">
                Empresas utilizando identidades geradas pela plataforma.
              </p>
            </div>
          </div>
        </section>

        <section
          className="rounded-3xl p-8 shadow-xl"
          style={{ backgroundColor: surface }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Solicitar contato</h2>
            <p className="mt-2 opacity-70">
              Preencha os dados abaixo para testar contrastes e hierarquia.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  borderColor: primary,
                  backgroundColor: bg,
                  color: text,
                }}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="voce@empresa.com"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={{
                    borderColor: primary,
                    backgroundColor: bg,
                    color: text,
                  }}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="company"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nome da empresa"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={{
                    borderColor: primary,
                    backgroundColor: bg,
                    color: text,
                  }}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold" htmlFor="goal">
                Objetivo
              </label>
              <select
                id="goal"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  borderColor: primary,
                  backgroundColor: bg,
                  color: text,
                }}
                defaultValue="branding"
              >
                <option value="branding">Identidade visual</option>
                <option value="landing">Landing page</option>
                <option value="system">Design system</option>
              </select>
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Descreva o contexto do projeto"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  borderColor: primary,
                  backgroundColor: bg,
                  color: text,
                }}
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="rounded-xl px-6 py-3 font-bold transition-opacity hover:opacity-90"
                style={{ backgroundColor: primary, color: surface }}
              >
                Enviar formulario
              </button>
              <button
                type="button"
                className="rounded-xl border px-6 py-3 font-semibold"
                style={{ borderColor: secondary, color: text }}
              >
                Salvar rascunho
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default FormPreview;
