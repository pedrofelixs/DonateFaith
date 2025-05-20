const Eventos = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Cadastrar Evento</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Adicione um novo evento à programação da igreja.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Cadastrar</button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Gerenciar Eventos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Edite ou exclua eventos existentes.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Gerenciar</button>
      </div>

    
    </div>
  );
};

export default Eventos;
