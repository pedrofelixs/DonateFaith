'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend } from "recharts";
import * as XLSX from "xlsx";

interface Donation {
  id: number;
  name: string;
  goalsAmount: number;
  amount: number;
  date: string;
  description: string;
  userId: number;
  churchId: number;
  parentDonationId: number | null;
}

interface TokenData {
  token: string;
  role: string;
  userName: string;
  churchId: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA66CC"];

const Relatorios = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [churchCode, setChurchCode] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Token salvo no localStorage:", storedToken);

    if (!storedToken) {
      console.warn("Nenhum token encontrado no localStorage.");
      return;
    }

    const tempTokenData: TokenData = {
      token: storedToken,
      role: "Pastor",
      userName: "felps",
      churchId: 1
    };

    const tempChurchCode = "1FLOW9";

    setTokenData(tempTokenData);
    setChurchCode(tempChurchCode);

    const fetchDonations = async () => {
      try {
        const response = await axios.get(`http://localhost:5289/api/Donation/by-church-code/${tempChurchCode}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        });
        console.log("Dados recebidos da API:", response.data);
        setDonations(response.data);
      } catch (error) {
        console.error("Erro ao buscar doações:", error);
      }
    };

    fetchDonations();
  }, []);

  const exportExcel = (data: any[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Relatório");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const usuariosMaisDoaram = () => {
    const result: Record<string, number> = {};
    donations
      .filter((d) => d.parentDonationId !== null)
      .forEach((d) => {
        result[d.userId] = (result[d.userId] || 0) + d.amount;
      });

    return Object.entries(result).map(([userId, amount]) => ({
      userId,
      amount,
    }));
  };

  const totalPorMeta = () => {
    const metas = donations.filter((d) => d.parentDonationId === null);
    return metas.map((meta) => {
      const relacionadas = donations.filter((d) => d.parentDonationId === meta.id);
      const total = relacionadas.reduce((sum, d) => sum + d.amount, 0);
      return { meta: meta.name || `Meta #${meta.id}`, total };
    });
  };

  const progressoDiarioPorMeta = () => {
    const metas = donations.filter((d) => d.parentDonationId === null);
    const progresso: Record<string, { dia: string; total: number }[]> = {};

    metas.forEach((meta) => {
      const relacionadas = donations.filter((d) => d.parentDonationId === meta.id);
      const porDia: Record<string, number> = {};

      relacionadas.forEach((d) => {
        const dia = new Date(d.date).toLocaleDateString();
        porDia[dia] = (porDia[dia] || 0) + d.amount;
      });

      progresso[meta.name || `Meta #${meta.id}`] = Object.entries(porDia).map(
        ([dia, total]) => ({ dia, total })
      );
    });

    return progresso;
  };

  const metaComMaisDoacoes = () => {
    const contagem: Record<number, number> = {};
    donations.forEach((d) => {
      if (d.parentDonationId !== null) {
        contagem[d.parentDonationId] = (contagem[d.parentDonationId] || 0) + 1;
      }
    });

    const metas = donations.filter((d) => d.parentDonationId === null);
    return metas.map((m) => ({
      meta: m.name || `Meta #${m.id}`,
      quantidade: contagem[m.id] || 0,
    }));
  };

  const porcentagemConclusaoMetas = () => {
    const metas = donations.filter((d) => d.parentDonationId === null);
    return metas.map((m) => {
      const doacoes = donations.filter((d) => d.parentDonationId === m.id);
      const totalDoado = doacoes.reduce((sum, d) => sum + d.amount, 0);
      const porcentagem = (totalDoado / m.goalsAmount) * 100;
      return {
        meta: m.name || `Meta #${m.id}`,
        porcentagem: Number(porcentagem.toFixed(2)),
      };
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Relatórios e Gráficos</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Usuários que mais doaram</h2>
        <BarChart width={500} height={300} data={usuariosMaisDoaram()}>
          <XAxis dataKey="userId" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded" onClick={() => exportExcel(usuariosMaisDoaram(), "usuarios-mais-doaram")}>Exportar Excel</button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Total doado por meta</h2>
        <PieChart width={400} height={300}>
          <Pie data={totalPorMeta()} dataKey="total" nameKey="meta" cx="50%" cy="50%" outerRadius={100}>
            {totalPorMeta().map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded" onClick={() => exportExcel(totalPorMeta(), "total-por-meta")}>Exportar Excel</button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Progresso diário por meta</h2>
        {Object.entries(progressoDiarioPorMeta()).map(([meta, dados]) => (
          <div key={meta} className="mb-4">
            <h3 className="font-bold">{meta}</h3>
            <LineChart width={500} height={250} data={dados}>
              <XAxis dataKey="dia" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Meta com maior número de doações</h2>
        <BarChart width={500} height={300} data={metaComMaisDoacoes()}>
          <XAxis dataKey="meta" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantidade" fill="#82ca9d" />
        </BarChart>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded" onClick={() => exportExcel(metaComMaisDoacoes(), "meta-mais-doacoes")}>Exportar Excel</button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Porcentagem de Conclusão das Metas</h2>
        <BarChart width={500} height={300} data={porcentagemConclusaoMetas()}>
          <XAxis dataKey="meta" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="porcentagem" fill="#ff7300" />
        </BarChart>
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded" onClick={() => exportExcel(porcentagemConclusaoMetas(), "porcentagem-conclusao")}>Exportar Excel</button>
      </div>
    </div>
  );
};

export default Relatorios;
