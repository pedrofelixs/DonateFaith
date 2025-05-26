import SettingsTabs from "@/app/components/Settings/index";
import LineChartExample from "./components/Graphics/Charts/LineChartExample";

export default function Home() {
    return (
        <>
            <h1 className="text-3xl px-5 py-5 font-medium text-gray-50">Geral</h1>

            <SettingsTabs />

            <div className="flex flex-col gap-6 px-5 py-5">
                <h2 className="text-2xl font-medium text-gray-50">Teste</h2>
                <p className="text-gray-400">Texto de exemplo pro formulario</p>
            </div>

            <main className="p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6 text-gray-50">Exemplo</h1>
                    <div className="grid grid-cols-1 gap-6">
                        <LineChartExample />
                    </div>
                </div>
            </main>
        </>
    );
}