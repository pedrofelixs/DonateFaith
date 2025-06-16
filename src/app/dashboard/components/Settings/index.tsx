"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState, useRef } from "react";
import { jwtDecode } from "jwt-decode";
import { QRCodeSVG } from "qrcode.react";

interface Igreja {
  name: string;
  email: string;
  code: string;
}

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative min-w-fit flex-shrink-0 px-2 pb-4 text-sm font-medium text-gray-50 hover:text-blue-400 data-[state=active]:text-blue-500"
    >
      <span>{title}</span>
      {isSelected && (
        <div className="absolute bottom-px left-0 right-0 h-0.5 bg-blue-500" />
      )}
    </Tabs.Trigger>
  );
}

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");
  const [igreja, setIgreja] = useState<Igreja | null>(null);
  const qrRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (currentTab === "tab1") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const id = parseInt(
            decoded[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
            ]
          );

          fetch(`http://localhost:5289/api/church/pastor/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => res.json())
            .then((data) => setIgreja(data))
            .catch((err) => console.error("Erro ao buscar pastor:", err));
        } catch (err) {
          console.error("Erro ao decodificar token:", err);
        }
      }
    }
  }, [currentTab]);

  // Função para baixar o QR Code (SVG -> PNG)
  const downloadQRCode = () => {
    const svg = qrRef.current;
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngFile;
        downloadLink.download = `${igreja?.code || "qrcode"}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <div className="w-full max-w-full overflow-hidden">
        <Tabs.List className="flex flex-nowrap overflow-x-auto scroll-smooth no-scrollbar w-full px-5 mt-6 gap-4 border-b border-gray-700/40">
          <TabItem value="tab1" title="Código" isSelected={currentTab === "tab1"} />
          <TabItem value="tab2" title="Cadastros" isSelected={currentTab === "tab2"} />
          <TabItem value="tab3" title="Planos" isSelected={currentTab === "tab3"} />
        </Tabs.List>
      </div>

      <div className="p-6">
        <Tabs.Content value="tab1">
          <div className="flex flex-col items-center gap-4 px-4 py-6 bg-gray-800 rounded-lg">
            <h2 className="text-lg font-bold text-white text-center">
              Este é o código da sua igreja, compartilhe com os fiéis
            </h2>

            <span className="text-4xl font-extrabold text-yellow-400">
              {igreja?.code || "Carregando..."}
            </span>

            <span className="text-sm text-gray-300">
              {igreja?.email || ""}
            </span>

            {igreja?.code && (
              <QRCodeSVG
                ref={qrRef}
                value={`http://localhost:3000/igreja?code=${igreja.code}`}
                size={150}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="H"
                includeMargin={true}
              />
            )}

            <button
              onClick={downloadQRCode}
              className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500"
            >
              Baixar QR Code
            </button>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <p>Conteúdo da aba Cadastros aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab3">
          <p>Conteúdo da aba Planos aqui...</p>
        </Tabs.Content>

      </div>
    </Tabs.Root>
  );
}
