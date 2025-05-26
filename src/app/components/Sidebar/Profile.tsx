import { LogOut } from "lucide-react";

export default function Profile() {
    return (
        <div className="flex items-center gap-3 px-2 py-2">
            <img
                src="https://github.com/FelipeFerneda.png"
                className="w-10 h-10 rounded-full border-0"
                alt=""
            />
            <div className="flex flex-col flex-1 min-w-0">
                <span className="text-sm font-semibold text-gray-50 truncate">Felipe Ferneda</span>
                <span className="text-sm text-gray-50 truncate">felipe.ferneda@pucpr.edu.br</span>
            </div>
            <button
                type="button"
                className="rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-gray-500/60"
            >
                <LogOut className="h-5 w-5 text-[#FEF2F2] shrink-0 transition-colors duration-200 ease-in-out hover:text-[#ef4444]" />
            </button>
        </div>
    );
}