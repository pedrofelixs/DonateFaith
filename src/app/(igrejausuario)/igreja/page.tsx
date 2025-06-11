"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import  Link  from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
}

interface Donation {
  id: number;
  name: string;
  amount: number;
  goalsAmount: number;
  date: string;
  description: string;
}

interface Church {
  name: string;
  address: string;
}

const IgrejaPage = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        setUserName(id);
      } catch (err) {
        console.error("Erro ao decodificar token:", err);
      }
    }
  }, []);

  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const [church, setChurch] = useState<Church | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!code) return;

    setLoading(true);

    const churchRequest = axios.get(`http://localhost:5289/api/church/code/${code}`);
    const eventsRequest = axios.get(`http://localhost:5289/api/Event/by-church-code/${code}`);
    const donationsRequest = axios.get(`http://localhost:5289/api/Donation/code/${code}`);

    Promise.all([churchRequest, eventsRequest, donationsRequest])
      .then(([churchRes, eventsRes, donationsRes]) => {
        setChurch(churchRes.data);

        const mappedEvents = eventsRes.data.map((e: any) => ({
          id: e.id,
          title: e.name,
          date: e.startDate,
          description: e.description,
          location: e.location,
        }));
        setEvents(mappedEvents);

        const mappedDonations = donationsRes.data
        .filter((d: any) => d.parentDonationId === null)
        .map((d: any) => ({
          id: d.id,
          name: d.name,
          amount: d.amount,
          goalsAmount: d.goalsAmount,
          date: d.date,
          description: d.description,
        }));
        setDonations(mappedDonations);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [code]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;
  if (!church) return <p className="text-center mt-10">Igreja não encontrada.</p>;

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HEADER COM LOGO */}
      <header className="w-full bg-gray-800 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
          <Image
            src="/images/Logo/Logo.svg"
            alt="logo"
            width={50}
            height={50}
            quality={100}
          />
          <span className="text-2xl font-semibold">DonateFaith</span>
        </div>
      </header>

      {/* LOGIN/USERNAME */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-4 flex justify-end">
        {userName ? (
          <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">
            {userName}
          </span>
        ) : (
          <button
            onClick={() => router.push("/logindoador")}
            className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline"
          >
            Fazer login
          </button>
        )}
      </div>

      {/* MAIN */}
      <main className="px-4 md:px-0 pt-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-700">{church.name}</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          <strong>Endereço:</strong> {church.address}
        </p>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">Igreja errada?  {" "}
          <Link href="/codigo" className="text-sky-600 hover:underline">
            Insira o código novamente
        </Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
          {/* DOAÇÕES */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Campanhas de Doação</h2>
            {donations.length > 0 ? (
              <ul className="space-y-4">
                {donations.map((donation) => (
                  <li
                    key={donation.id}
                    className="border-l-4 border-green-500 pl-4 bg-gray-50 dark:bg-gray-700 p-4 rounded"
                  >
                    <p className="font-bold text-lg">{donation.name}</p>
                    <p className="text-sm text-gray-500 mb-1">
                      {new Date(donation.date).toLocaleDateString()}
                    </p>
                    <p className="mb-2">{donation.description}</p>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                      Arrecadado: <strong>R${donation.amount.toFixed(2)}</strong> / Meta:{" "}
                      <strong>R${donation.goalsAmount.toFixed(2)}</strong>
                    </p>
                    <button
                      className="mt-2 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      onClick={() => router.push(`/doar?code=${code}&id=${donation.id}`)}
                    >
                      Doar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhuma campanha ativa no momento.</p>
            )}
          </div>

          {/* EVENTOS */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Eventos</h2>
            {events.length > 0 ? (
              <ul className="space-y-4">
                {events.map((event) => (
                  <li key={event.id} className="border-l-4 border-sky-500 pl-4">
                    <p className="font-bold">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()} - <em>{event.location}</em>
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
      </main>
    </div>
  );
};

export default IgrejaPage;
