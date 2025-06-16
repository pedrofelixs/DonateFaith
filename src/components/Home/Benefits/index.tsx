const Benefits = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="text-center mb-12">
          <p className="text-sky-600 uppercase tracking-[0.3em] mb-4">
            Por que usar?
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
            Vantagens exclusivas para pastores e administradores
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Acompanhamento em tempo real
            </h3>
            <p className="text-gray-700 dark:text-white/80">
              Visualize doações, metas e relatórios com clareza, diretamente do painel administrativo.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Transparência e confiança
            </h3>
            <p className="text-gray-700 dark:text-white/80">
              Gere relatórios e compartilhe resultados com os membros da igreja de forma simples.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-sky-600 mb-2">
              Mais praticidade para os fiéis
            </h3>
            <p className="text-gray-700 dark:text-white/80">
              Os membros podem doar via Pix, cartão ou boleto — de forma rápida e segura, no celular ou computador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
