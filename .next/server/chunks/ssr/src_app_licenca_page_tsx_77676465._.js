module.exports = {

"[project]/src/app/licenca/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
const planos = [
    {
        nome: "Mensal",
        preco: "R$19,90 / mês",
        beneficios: [
            "Acesso total ao sistema",
            "Suporte padrão",
            "Atualizações mensais"
        ],
        id: "mensal"
    },
    {
        nome: "Anual",
        preco: "R$159,00 / ano",
        beneficios: [
            "Economize 17% comparado ao mensal",
            "Suporte prioritário",
            "Atualizações automáticas"
        ],
        id: "anual"
    },
    {
        nome: "Vitalícia",
        preco: "R$499,00 (pagamento único)",
        beneficios: [
            "Acesso permanente",
            "Suporte premium vitalício",
            "Todas as futuras atualizações incluídas"
        ],
        id: "vitalicia"
    }
];
const LicencasPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleComprar = (tipo)=>{
        alert(`Licença ${tipo} comprada com sucesso!`);
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl",
            children: planos.map((plano)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center flex flex-col justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-900 dark:text-white mb-4",
                            children: plano.nome
                        }, void 0, false, {
                            fileName: "[project]/src/app/licenca/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mb-6 space-y-2 text-gray-700 dark:text-gray-300 text-left list-disc list-inside",
                            children: plano.beneficios.map((beneficio, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: beneficio
                                }, idx, false, {
                                    fileName: "[project]/src/app/licenca/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/licenca/page.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-4xl font-extrabold text-sky-600 mb-6",
                            children: plano.preco
                        }, void 0, false, {
                            fileName: "[project]/src/app/licenca/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleComprar(plano.nome),
                            className: "w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition",
                            children: [
                                "Comprar ",
                                plano.nome
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/licenca/page.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, plano.id, true, {
                    fileName: "[project]/src/app/licenca/page.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/licenca/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/licenca/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LicencasPage;
}}),

};

//# sourceMappingURL=src_app_licenca_page_tsx_77676465._.js.map