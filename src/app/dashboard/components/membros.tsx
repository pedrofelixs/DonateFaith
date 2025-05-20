const Membros = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Gerenciar Membros</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Edite ou remova membros da igreja.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Acessar</button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Cadastrar Membros</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Adicione membros na igreja.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Acessar</button>
      </div>
    </div>
  );
};

export default Membros;
