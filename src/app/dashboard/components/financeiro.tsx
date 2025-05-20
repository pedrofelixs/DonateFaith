const Financeiro = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Relatórios Mensais</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Visualize os relatórios financeiros da igreja.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Ver Relatórios</button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Doações Recebidas</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Veja todas as doações feitas pelos membros.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Ver Doações</button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Contas a pagar</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Gerencie suas despesas.</p>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">Ver Contas</button>
      </div>
    </div>
  );
};

export default Financeiro;
