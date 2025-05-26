"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface Church {
  name: string;
  address: string;
  events: Event[];
}

const IgrejaPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [church, setChurch] = useState<Church | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (code) {
      axios
        .get(`http://localhost:5289/api/church/code/${code}`)
        .then((res) => {
          setChurch(res.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar igreja:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [code]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  if (!church) return <p className="text-center mt-10">Igreja não encontrada.</p>;

  return (
    <div className="min-h-screen w-full p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-700">{church.name}</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        <strong>Endereço:</strong> {church.address}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
        {/* Doação */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Contribua com a Igreja</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Sua doação ajuda a manter as atividades e projetos da igreja.
          </p>
          <button className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Fazer Doação
          </button>
        </div>

        {/* Eventos */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Eventos</h2>
          {church.events?.length > 0 ? (
            <ul className="space-y-4">
              {church.events.map((event) => (
                <li key={event.id} className="border-l-4 border-sky-500 pl-4">
                  <p className="font-bold">{event.title}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhum evento cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IgrejaPage;
