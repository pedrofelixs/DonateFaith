'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface Event {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  maxNumber: number;
  churchId: number;
  organizerId: number;
}

interface Church {
  code: string;
  id: number;
  name: string;
}

const Eventos = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editEvent, setEditEvent] = useState<Event | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token não encontrado. Faça login novamente.');
      setLoading(false);
      return;
    }

    const decoded: any = jwtDecode(token);
    const pastorId = parseInt(
      decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    );

    fetch(`http://localhost:5289/api/church/pastor/${pastorId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((church: Church) =>
        fetch(`http://localhost:5289/api/Event/by-church-code/${church.code}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then((res) => res.json())
      .then((data: Event[]) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Tem certeza que deseja deletar este evento?');
    if (!confirm) return;

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:5289/api/Event/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error('Erro ao deletar evento');

      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      alert('Erro ao deletar evento');
      console.error(err);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editEvent) return;
    const { name, value } = e.target;
    setEditEvent({ ...editEvent, [name]: value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    if (!editEvent) return;

    try {
      const res = await fetch('http://localhost:5289/api/Event', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editEvent),
      });

      if (!res.ok) throw new Error('Erro ao atualizar evento');

      alert('Evento atualizado com sucesso!');
      setEvents((prev) =>
        prev.map((e) => (e.id === editEvent.id ? { ...editEvent } : e))
      );
      setEditEvent(null);
    } catch (err) {
      alert('Erro ao atualizar evento');
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Carregando eventos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Eventos da Igreja
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Nenhum evento encontrado.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-2"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{event.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(event.startDate).toLocaleDateString()} -{' '}
                {new Date(event.endDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Local: {event.location}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Máximo: {event.maxNumber}
              </p>
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => setEditEvent(event)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Editar Evento</h2>
            <input
              name="name"
              value={editEvent.name}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Nome"
            />
            <textarea
              name="description"
              value={editEvent.description}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Descrição"
            />
            <input
              name="location"
              value={editEvent.location}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Local"
            />
            <input
              name="startDate"
              type="date"
              value={editEvent.startDate.split('T')[0]}
              onChange={(e) =>
                setEditEvent({ ...editEvent, startDate: `${e.target.value}T00:00:00` })
              }
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            />
            <input
              name="endDate"
              type="date"
              value={editEvent.endDate.split('T')[0]}
              onChange={(e) =>
                setEditEvent({ ...editEvent, endDate: `${e.target.value}T00:00:00` })
              }
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            />
            <input
              name="maxNumber"
              type="number"
              value={editEvent.maxNumber}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Máximo de participantes"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditEvent(null)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eventos;
