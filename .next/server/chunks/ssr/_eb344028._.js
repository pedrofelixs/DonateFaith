module.exports = {

"[project]/src/app/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$input$2d$mask$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-input-mask/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LoginPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirmarSenha: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleForm = ()=>{
        setIsLogin(!isLogin);
        setErrors({});
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const validate = ()=>{
        const newErrors = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }
        if (!isLogin) {
            if (!/^[\w\s]{3,}$/.test(formData.nome)) {
                newErrors.nome = "Nome inválido";
            }
            if (!/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(formData.cpf)) {
                newErrors.cpf = "CPF inválido";
            }
            if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.senha)) {
                newErrors.senha = "Senha deve ter ao menos 6 caracteres e conter letras e números";
            }
            if (formData.senha !== formData.confirmarSenha) {
                newErrors.confirmarSenha = "As senhas não coincidem";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validate()) {
            alert(isLogin ? "Login realizado!" : "Cadastro realizado!");
            router.push("/");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6",
                    children: isLogin ? "Entrar" : "Criar Conta"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "nome",
                                    placeholder: "Nome completo",
                                    value: formData.nome,
                                    onChange: handleChange,
                                    className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, this),
                                errors.nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.nome
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 45
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            value: formData.email,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: errors.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 97,
                            columnNumber: 38
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$input$2d$mask$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    mask: "999.999.999-99",
                                    value: formData.cpf,
                                    onChange: handleChange,
                                    children: (inputProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...inputProps,
                                            name: "cpf",
                                            type: "text",
                                            className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                                            placeholder: "CPF",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/login/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 25
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 21
                                }, this),
                                errors.cpf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.cpf
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            name: "senha",
                            placeholder: "Senha",
                            value: formData.senha,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        errors.senha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: errors.senha
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 133,
                            columnNumber: 38
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    name: "confirmarSenha",
                                    placeholder: "Confirmar senha",
                                    value: formData.confirmarSenha,
                                    onChange: handleChange,
                                    className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, this),
                                errors.confirmarSenha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.confirmarSenha
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition",
                            children: isLogin ? "Entrar" : "Cadastrar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-center text-gray-600 dark:text-gray-300",
                    children: [
                        isLogin ? "Não tem uma conta?" : "Já tem uma conta?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: toggleForm,
                            className: "ml-2 text-sky-600 hover:underline",
                            children: isLogin ? "Cadastre-se" : "Entrar"
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 160,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/login/page.tsx",
            lineNumber: 68,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/login/page.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = LoginPage;
}}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}}),
"[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}}),
"[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 'use strict';
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}}),
"[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : ("TURBOPACK unreachable", undefined);
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}}),
"[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else {
    "TURBOPACK unreachable";
}
}}),
"[project]/node_modules/invariant/invariant.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var NODE_ENV = ("TURBOPACK compile-time value", "development");
var invariant = function(condition, format, a, b, c, d, e, f) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;
}}),
"[project]/node_modules/warning/warning.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}}),
"[project]/node_modules/react-input-mask/lib/react-input-mask.development.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var React__default = _interopDefault(React);
var reactDom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var PropTypes = _interopDefault(__turbopack_context__.r("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)"));
var invariant = _interopDefault(__turbopack_context__.r("[project]/node_modules/invariant/invariant.js [app-ssr] (ecmascript)"));
var warning = _interopDefault(__turbopack_context__.r("[project]/node_modules/warning/warning.js [app-ssr] (ecmascript)"));
function _defaults2(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) {
            Object.defineProperty(obj, key, value);
        }
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _defaults2(subClass, superClass);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function defer(fn) {
    return requestAnimationFrame(fn);
}
function cancelDefer(deferId) {
    cancelAnimationFrame(deferId);
}
function setInputSelection(input, start, end) {
    if (end === undefined) {
        end = start;
    }
    input.setSelectionRange(start, end);
}
function getInputSelection(input) {
    var start = input.selectionStart;
    var end = input.selectionEnd;
    return {
        start: start,
        end: end,
        length: end - start
    };
}
function isInputFocused(input) {
    var inputDocument = input.ownerDocument;
    return inputDocument.hasFocus() && inputDocument.activeElement === input;
}
// Element's window may differ from the one within React instance
// if element rendered within iframe.
// See https://github.com/sanniassin/react-input-mask/issues/182
function getElementDocument(element) {
    return element == null ? void 0 : element.ownerDocument;
}
function getElementWindow(element) {
    var _getElementDocument;
    return (_getElementDocument = getElementDocument(element)) == null ? void 0 : _getElementDocument.defaultView;
}
function isDOMElement(element) {
    var elementWindow = getElementWindow(element);
    return !!elementWindow && element instanceof elementWindow.HTMLElement;
}
function isFunction(value) {
    return typeof value === "function";
}
function findLastIndex(array, predicate) {
    for(var i = array.length - 1; i >= 0; i--){
        var x = array[i];
        if (predicate(x, i)) {
            return i;
        }
    }
    return -1;
}
function repeat(string, n) {
    if (n === void 0) {
        n = 1;
    }
    var result = "";
    for(var i = 0; i < n; i++){
        result += string;
    }
    return result;
}
function toString(value) {
    return "" + value;
}
function useInputElement(inputRef) {
    return React.useCallback(function() {
        var input = inputRef.current;
        var isDOMNode = typeof window !== "undefined" && isDOMElement(input); // workaround for react-test-renderer
        // https://github.com/sanniassin/react-input-mask/issues/147
        if (!input || !isDOMNode) {
            return null;
        }
        if (input.nodeName !== "INPUT") {
            input = input.querySelector("input");
        }
        if (!input) {
            throw new Error("react-input-mask: inputComponent doesn't contain input node");
        }
        return input;
    }, [
        inputRef
    ]);
}
function useDeferLoop(callback) {
    var deferIdRef = React.useRef(null);
    var runLoop = React.useCallback(function() {
        // If there are simulated focus events, runLoop could be
        // called multiple times without blur or re-render
        if (deferIdRef.current !== null) {
            return;
        }
        function loop() {
            callback();
            deferIdRef.current = defer(loop);
        }
        loop();
    }, [
        callback
    ]);
    var stopLoop = React.useCallback(function() {
        cancelDefer(deferIdRef.current);
        deferIdRef.current = null;
    }, []);
    React.useEffect(function() {
        if (deferIdRef.current) {
            stopLoop();
            runLoop();
        }
    }, [
        runLoop,
        stopLoop
    ]);
    React.useEffect(cancelDefer, []);
    return [
        runLoop,
        stopLoop
    ];
}
function useSelection(inputRef, isMasked) {
    var selectionRef = React.useRef({
        start: null,
        end: null
    });
    var getInputElement = useInputElement(inputRef);
    var getSelection = React.useCallback(function() {
        var input = getInputElement();
        return getInputSelection(input);
    }, [
        getInputElement
    ]);
    var getLastSelection = React.useCallback(function() {
        return selectionRef.current;
    }, []);
    var setSelection = React.useCallback(function(selection) {
        var input = getInputElement(); // Don't change selection on unfocused input
        // because Safari sets focus on selection change (#154)
        if (!input || !isInputFocused(input)) {
            return;
        }
        setInputSelection(input, selection.start, selection.end); // Use actual selection in case the requested one was out of range
        selectionRef.current = getSelection();
    }, [
        getInputElement,
        getSelection
    ]);
    var selectionLoop = React.useCallback(function() {
        selectionRef.current = getSelection();
    }, [
        getSelection
    ]);
    var _useDeferLoop = useDeferLoop(selectionLoop), runSelectionLoop = _useDeferLoop[0], stopSelectionLoop = _useDeferLoop[1];
    React.useLayoutEffect(function() {
        if (!isMasked) {
            return;
        }
        var input = getInputElement();
        input.addEventListener("focus", runSelectionLoop);
        input.addEventListener("blur", stopSelectionLoop);
        if (isInputFocused(input)) {
            runSelectionLoop();
        }
        return function() {
            input.removeEventListener("focus", runSelectionLoop);
            input.removeEventListener("blur", stopSelectionLoop);
            stopSelectionLoop();
        };
    });
    return {
        getSelection: getSelection,
        getLastSelection: getLastSelection,
        setSelection: setSelection
    };
}
function useValue(inputRef, initialValue) {
    var getInputElement = useInputElement(inputRef);
    var valueRef = React.useRef(initialValue);
    var getValue = React.useCallback(function() {
        var input = getInputElement();
        return input.value;
    }, [
        getInputElement
    ]);
    var getLastValue = React.useCallback(function() {
        return valueRef.current;
    }, []);
    var setValue = React.useCallback(function(newValue) {
        valueRef.current = newValue;
        var input = getInputElement();
        if (input) {
            input.value = newValue;
        }
    }, [
        getInputElement
    ]);
    return {
        getValue: getValue,
        getLastValue: getLastValue,
        setValue: setValue
    };
}
function useInputState(initialValue, isMasked) {
    var inputRef = React.useRef();
    var _useSelection = useSelection(inputRef, isMasked), getSelection = _useSelection.getSelection, getLastSelection = _useSelection.getLastSelection, setSelection = _useSelection.setSelection;
    var _useValue = useValue(inputRef, initialValue), getValue = _useValue.getValue, getLastValue = _useValue.getLastValue, setValue = _useValue.setValue;
    function getLastInputState() {
        return {
            value: getLastValue(),
            selection: getLastSelection()
        };
    }
    function getInputState() {
        return {
            value: getValue(),
            selection: getSelection()
        };
    }
    function setInputState(_ref) {
        var value = _ref.value, selection = _ref.selection;
        setValue(value);
        setSelection(selection);
    }
    return {
        inputRef: inputRef,
        getInputState: getInputState,
        getLastInputState: getLastInputState,
        setInputState: setInputState
    };
}
function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function() {
        ref.current = value;
    });
    return ref.current;
}
var CONTROLLED_PROPS = [
    "disabled",
    "onBlur",
    "onChange",
    "onFocus",
    "onMouseDown",
    "readOnly",
    "value"
];
var defaultFormatChars = {
    "9": /[0-9]/,
    a: /[A-Za-z]/,
    "*": /[A-Za-z0-9]/
};
function validateMaxLength(props) {
    ("TURBOPACK compile-time truthy", 1) ? warning(!props.maxLength || !props.mask, "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.") : ("TURBOPACK unreachable", undefined);
}
function validateMaskPlaceholder(props) {
    var mask = props.mask, maskPlaceholder = props.maskPlaceholder;
    !(!mask || !maskPlaceholder || maskPlaceholder.length === 1 || maskPlaceholder.length === mask.length) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, "react-input-mask: maskPlaceholder should either be a single character or have the same length as the mask:\n" + ("mask: " + mask + "\n") + ("maskPlaceholder: " + maskPlaceholder)) : ("TURBOPACK unreachable", undefined) : void 0;
}
function validateChildren(props, inputElement) {
    var conflictProps = CONTROLLED_PROPS.filter(function(propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== props[propId];
    });
    !!conflictProps.length ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, "react-input-mask: the following props should be passed to the InputMask component, not to children: " + conflictProps.join(",")) : ("TURBOPACK unreachable", undefined) : void 0;
}
function parseMask(_ref) {
    var mask = _ref.mask, maskPlaceholder = _ref.maskPlaceholder;
    var permanents = [];
    if (!mask) {
        return {
            maskPlaceholder: null,
            mask: null,
            prefix: null,
            lastEditablePosition: null,
            permanents: []
        };
    }
    if (typeof mask === "string") {
        var isPermanent = false;
        var parsedMaskString = "";
        mask.split("").forEach(function(character) {
            if (!isPermanent && character === "\\") {
                isPermanent = true;
            } else {
                if (isPermanent || !defaultFormatChars[character]) {
                    permanents.push(parsedMaskString.length);
                }
                parsedMaskString += character;
                isPermanent = false;
            }
        });
        mask = parsedMaskString.split("").map(function(character, index) {
            if (permanents.indexOf(index) === -1) {
                return defaultFormatChars[character];
            }
            return character;
        });
    } else {
        mask.forEach(function(character, index) {
            if (typeof character === "string") {
                permanents.push(index);
            }
        });
    }
    if (maskPlaceholder) {
        if (maskPlaceholder.length === 1) {
            maskPlaceholder = mask.map(function(character, index) {
                if (permanents.indexOf(index) !== -1) {
                    return character;
                }
                return maskPlaceholder;
            });
        } else {
            maskPlaceholder = maskPlaceholder.split("");
        }
        permanents.forEach(function(position) {
            maskPlaceholder[position] = mask[position];
        });
        maskPlaceholder = maskPlaceholder.join("");
    }
    var prefix = permanents.filter(function(position, index) {
        return position === index;
    }).map(function(position) {
        return mask[position];
    }).join("");
    var lastEditablePosition = mask.length - 1;
    while(permanents.indexOf(lastEditablePosition) !== -1){
        lastEditablePosition--;
    }
    return {
        maskPlaceholder: maskPlaceholder,
        prefix: prefix,
        mask: mask,
        lastEditablePosition: lastEditablePosition,
        permanents: permanents
    };
}
/* eslint no-use-before-define: ["error", { functions: false }] */ var MaskUtils = function MaskUtils(options) {
    var _this = this;
    this.isCharacterAllowedAtPosition = function(character, position) {
        var maskPlaceholder = _this.maskOptions.maskPlaceholder;
        if (_this.isCharacterFillingPosition(character, position)) {
            return true;
        }
        if (!maskPlaceholder) {
            return false;
        }
        return maskPlaceholder[position] === character;
    };
    this.isCharacterFillingPosition = function(character, position) {
        var mask = _this.maskOptions.mask;
        if (!character || position >= mask.length) {
            return false;
        }
        if (!_this.isPositionEditable(position)) {
            return mask[position] === character;
        }
        var charRule = mask[position];
        return new RegExp(charRule).test(character);
    };
    this.isPositionEditable = function(position) {
        var _this$maskOptions = _this.maskOptions, mask = _this$maskOptions.mask, permanents = _this$maskOptions.permanents;
        return position < mask.length && permanents.indexOf(position) === -1;
    };
    this.isValueEmpty = function(value) {
        return value.split("").every(function(character, position) {
            return !_this.isPositionEditable(position) || !_this.isCharacterFillingPosition(character, position);
        });
    };
    this.isValueFilled = function(value) {
        return _this.getFilledLength(value) === _this.maskOptions.lastEditablePosition + 1;
    };
    this.getDefaultSelectionForValue = function(value) {
        var filledLength = _this.getFilledLength(value);
        var cursorPosition = _this.getRightEditablePosition(filledLength);
        return {
            start: cursorPosition,
            end: cursorPosition
        };
    };
    this.getFilledLength = function(value) {
        var characters = value.split("");
        var lastFilledIndex = findLastIndex(characters, function(character, position) {
            return _this.isPositionEditable(position) && _this.isCharacterFillingPosition(character, position);
        });
        return lastFilledIndex + 1;
    };
    this.getStringFillingLengthAtPosition = function(string, position) {
        var characters = string.split("");
        var insertedValue = characters.reduce(function(value, character) {
            return _this.insertCharacterAtPosition(value, character, value.length);
        }, repeat(" ", position));
        return insertedValue.length - position;
    };
    this.getLeftEditablePosition = function(position) {
        for(var i = position; i >= 0; i--){
            if (_this.isPositionEditable(i)) {
                return i;
            }
        }
        return null;
    };
    this.getRightEditablePosition = function(position) {
        var mask = _this.maskOptions.mask;
        for(var i = position; i < mask.length; i++){
            if (_this.isPositionEditable(i)) {
                return i;
            }
        }
        return null;
    };
    this.formatValue = function(value) {
        var _this$maskOptions2 = _this.maskOptions, maskPlaceholder = _this$maskOptions2.maskPlaceholder, mask = _this$maskOptions2.mask;
        if (!maskPlaceholder) {
            value = _this.insertStringAtPosition("", value, 0);
            while(value.length < mask.length && !_this.isPositionEditable(value.length)){
                value += mask[value.length];
            }
            return value;
        }
        return _this.insertStringAtPosition(maskPlaceholder, value, 0);
    };
    this.clearRange = function(value, start, len) {
        if (!len) {
            return value;
        }
        var end = start + len;
        var _this$maskOptions3 = _this.maskOptions, maskPlaceholder = _this$maskOptions3.maskPlaceholder, mask = _this$maskOptions3.mask;
        var clearedValue = value.split("").map(function(character, i) {
            var isEditable = _this.isPositionEditable(i);
            if (!maskPlaceholder && i >= end && !isEditable) {
                return "";
            }
            if (i < start || i >= end) {
                return character;
            }
            if (!isEditable) {
                return mask[i];
            }
            if (maskPlaceholder) {
                return maskPlaceholder[i];
            }
            return "";
        }).join("");
        return _this.formatValue(clearedValue);
    };
    this.insertCharacterAtPosition = function(value, character, position) {
        var _this$maskOptions4 = _this.maskOptions, mask = _this$maskOptions4.mask, maskPlaceholder = _this$maskOptions4.maskPlaceholder;
        if (position >= mask.length) {
            return value;
        }
        var isAllowed = _this.isCharacterAllowedAtPosition(character, position);
        var isEditable = _this.isPositionEditable(position);
        var nextEditablePosition = _this.getRightEditablePosition(position);
        var isNextPlaceholder = maskPlaceholder && nextEditablePosition ? character === maskPlaceholder[nextEditablePosition] : null;
        var valueBefore = value.slice(0, position);
        if (isAllowed || !isEditable) {
            var insertedCharacter = isAllowed ? character : mask[position];
            value = valueBefore + insertedCharacter;
        }
        if (!isAllowed && !isEditable && !isNextPlaceholder) {
            value = _this.insertCharacterAtPosition(value, character, position + 1);
        }
        return value;
    };
    this.insertStringAtPosition = function(value, string, position) {
        var _this$maskOptions5 = _this.maskOptions, mask = _this$maskOptions5.mask, maskPlaceholder = _this$maskOptions5.maskPlaceholder;
        if (!string || position >= mask.length) {
            return value;
        }
        var characters = string.split("");
        var isFixedLength = _this.isValueFilled(value) || !!maskPlaceholder;
        var valueAfter = value.slice(position);
        value = characters.reduce(function(value, character) {
            return _this.insertCharacterAtPosition(value, character, value.length);
        }, value.slice(0, position));
        if (isFixedLength) {
            value += valueAfter.slice(value.length - position);
        } else if (_this.isValueFilled(value)) {
            value += mask.slice(value.length).join("");
        } else {
            var editableCharactersAfter = valueAfter.split("").filter(function(character, i) {
                return _this.isPositionEditable(position + i);
            });
            value = editableCharactersAfter.reduce(function(value, character) {
                var nextEditablePosition = _this.getRightEditablePosition(value.length);
                if (nextEditablePosition === null) {
                    return value;
                }
                if (!_this.isPositionEditable(value.length)) {
                    value += mask.slice(value.length, nextEditablePosition).join("");
                }
                return _this.insertCharacterAtPosition(value, character, value.length);
            }, value);
        }
        return value;
    };
    this.processChange = function(currentState, previousState) {
        var _this$maskOptions6 = _this.maskOptions, mask = _this$maskOptions6.mask, prefix = _this$maskOptions6.prefix, lastEditablePosition = _this$maskOptions6.lastEditablePosition;
        var value = currentState.value, selection = currentState.selection;
        var previousValue = previousState.value;
        var previousSelection = previousState.selection;
        var newValue = value;
        var enteredString = "";
        var formattedEnteredStringLength = 0;
        var removedLength = 0;
        var cursorPosition = Math.min(previousSelection.start, selection.start);
        if (selection.end > previousSelection.start) {
            enteredString = newValue.slice(previousSelection.start, selection.end);
            formattedEnteredStringLength = _this.getStringFillingLengthAtPosition(enteredString, cursorPosition);
            if (!formattedEnteredStringLength) {
                removedLength = 0;
            } else {
                removedLength = previousSelection.length;
            }
        } else if (newValue.length < previousValue.length) {
            removedLength = previousValue.length - newValue.length;
        }
        newValue = previousValue;
        if (removedLength) {
            if (removedLength === 1 && !previousSelection.length) {
                var deleteFromRight = previousSelection.start === selection.start;
                cursorPosition = deleteFromRight ? _this.getRightEditablePosition(selection.start) : _this.getLeftEditablePosition(selection.start);
            }
            newValue = _this.clearRange(newValue, cursorPosition, removedLength);
        }
        newValue = _this.insertStringAtPosition(newValue, enteredString, cursorPosition);
        cursorPosition += formattedEnteredStringLength;
        if (cursorPosition >= mask.length) {
            cursorPosition = mask.length;
        } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
            cursorPosition = prefix.length;
        } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
            cursorPosition = _this.getRightEditablePosition(cursorPosition);
        }
        newValue = _this.formatValue(newValue);
        return {
            value: newValue,
            enteredString: enteredString,
            selection: {
                start: cursorPosition,
                end: cursorPosition
            }
        };
    };
    this.maskOptions = parseMask(options);
};
var InputMaskChildrenWrapper = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(InputMaskChildrenWrapper, _React$Component);
    function InputMaskChildrenWrapper() {
        return _React$Component.apply(this, arguments) || this;
    }
    var _proto = InputMaskChildrenWrapper.prototype;
    _proto.render = function render() {
        // eslint-disable-next-line react/prop-types
        var _this$props = this.props, children = _this$props.children, props = _objectWithoutPropertiesLoose(_this$props, [
            "children"
        ]);
        return React__default.cloneElement(children, props);
    };
    return InputMaskChildrenWrapper;
}(React__default.Component);
var InputMask = React.forwardRef(function InputMask(props, forwardedRef) {
    var alwaysShowMask = props.alwaysShowMask, children = props.children, mask = props.mask, maskPlaceholder = props.maskPlaceholder, beforeMaskedStateChange = props.beforeMaskedStateChange, restProps = _objectWithoutPropertiesLoose(props, [
        "alwaysShowMask",
        "children",
        "mask",
        "maskPlaceholder",
        "beforeMaskedStateChange"
    ]);
    validateMaxLength(props);
    validateMaskPlaceholder(props);
    var maskUtils = new MaskUtils({
        mask: mask,
        maskPlaceholder: maskPlaceholder
    });
    var isMasked = !!mask;
    var isEditable = !restProps.disabled && !restProps.readOnly;
    var isControlled = props.value !== null && props.value !== undefined;
    var previousIsMasked = usePrevious(isMasked);
    var initialValue = toString((isControlled ? props.value : props.defaultValue) || "");
    var _useInputState = useInputState(initialValue, isMasked), inputRef = _useInputState.inputRef, getInputState = _useInputState.getInputState, setInputState = _useInputState.setInputState, getLastInputState = _useInputState.getLastInputState;
    var getInputElement = useInputElement(inputRef);
    function onChange(event) {
        var currentState = getInputState();
        var previousState = getLastInputState();
        var newInputState = maskUtils.processChange(currentState, previousState);
        if (beforeMaskedStateChange) {
            newInputState = beforeMaskedStateChange({
                currentState: currentState,
                previousState: previousState,
                nextState: newInputState
            });
        }
        setInputState(newInputState);
        if (props.onChange) {
            props.onChange(event);
        }
    }
    function onFocus(event) {
        // If autoFocus property is set, focus event fires before the ref handler gets called
        inputRef.current = event.target;
        var currentValue = getInputState().value;
        if (isMasked && !maskUtils.isValueFilled(currentValue)) {
            var newValue = maskUtils.formatValue(currentValue);
            var newSelection = maskUtils.getDefaultSelectionForValue(newValue);
            var newInputState = {
                value: newValue,
                selection: newSelection
            };
            if (beforeMaskedStateChange) {
                newInputState = beforeMaskedStateChange({
                    currentState: getInputState(),
                    nextState: newInputState
                });
                newValue = newInputState.value;
                newSelection = newInputState.selection;
            }
            setInputState(newInputState);
            if (newValue !== currentValue && props.onChange) {
                props.onChange(event);
            } // Chrome resets selection after focus event,
            // so we want to restore it later
            defer(function() {
                setInputState(getLastInputState());
            });
        }
        if (props.onFocus) {
            props.onFocus(event);
        }
    }
    function onBlur(event) {
        var currentValue = getInputState().value;
        var lastValue = getLastInputState().value;
        if (isMasked && !alwaysShowMask && maskUtils.isValueEmpty(lastValue)) {
            var newValue = "";
            var newInputState = {
                value: newValue,
                selection: {
                    start: null,
                    end: null
                }
            };
            if (beforeMaskedStateChange) {
                newInputState = beforeMaskedStateChange({
                    currentState: getInputState(),
                    nextState: newInputState
                });
                newValue = newInputState.value;
            }
            setInputState(newInputState);
            if (newValue !== currentValue && props.onChange) {
                props.onChange(event);
            }
        }
        if (props.onBlur) {
            props.onBlur(event);
        }
    } // Tiny unintentional mouse movements can break cursor
    // position on focus, so we have to restore it in that case
    //
    // https://github.com/sanniassin/react-input-mask/issues/108
    function onMouseDown(event) {
        var input = getInputElement();
        var _getInputState = getInputState(), value = _getInputState.value;
        var inputDocument = getElementDocument(input);
        if (!isInputFocused(input) && !maskUtils.isValueFilled(value)) {
            var mouseDownX = event.clientX;
            var mouseDownY = event.clientY;
            var mouseDownTime = new Date().getTime();
            var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
                inputDocument.removeEventListener("mouseup", mouseUpHandler);
                if (!isInputFocused(input)) {
                    return;
                }
                var deltaX = Math.abs(mouseUpEvent.clientX - mouseDownX);
                var deltaY = Math.abs(mouseUpEvent.clientY - mouseDownY);
                var axisDelta = Math.max(deltaX, deltaY);
                var timeDelta = new Date().getTime() - mouseDownTime;
                if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
                    var _lastState = getLastInputState();
                    var newSelection = maskUtils.getDefaultSelectionForValue(_lastState.value);
                    var newState = _extends({}, _lastState, {
                        selection: newSelection
                    });
                    setInputState(newState);
                }
            };
            inputDocument.addEventListener("mouseup", mouseUpHandler);
        }
        if (props.onMouseDown) {
            props.onMouseDown(event);
        }
    } // For controlled inputs we want to provide properly formatted
    // value prop
    if (isMasked && isControlled) {
        var input = getInputElement();
        var isFocused = input && isInputFocused(input);
        var newValue = isFocused || alwaysShowMask || props.value ? maskUtils.formatValue(props.value) : props.value;
        if (beforeMaskedStateChange) {
            newValue = beforeMaskedStateChange({
                nextState: {
                    value: newValue,
                    selection: {
                        start: null,
                        end: null
                    }
                }
            }).value;
        }
        setInputState(_extends({}, getLastInputState(), {
            value: newValue
        }));
    }
    var lastState = getLastInputState();
    var lastSelection = lastState.selection;
    var lastValue = lastState.value;
    React.useLayoutEffect(function() {
        if (!isMasked) {
            return;
        }
        var input = getInputElement();
        var isFocused = isInputFocused(input);
        var previousSelection = lastSelection;
        var currentState = getInputState();
        var newInputState = _extends({}, currentState); // Update value for uncontrolled inputs to make sure
        // it's always in sync with mask props
        if (!isControlled) {
            var currentValue = currentState.value;
            var formattedValue = maskUtils.formatValue(currentValue);
            var isValueEmpty = maskUtils.isValueEmpty(formattedValue);
            var shouldFormatValue = !isValueEmpty || isFocused || alwaysShowMask;
            if (shouldFormatValue) {
                newInputState.value = formattedValue;
            } else if (isValueEmpty && !isFocused) {
                newInputState.value = "";
            }
        }
        if (isFocused && !previousIsMasked) {
            // Adjust selection if input got masked while being focused
            newInputState.selection = maskUtils.getDefaultSelectionForValue(newInputState.value);
        } else if (isControlled && isFocused && previousSelection) {
            // Restore cursor position if value has changed outside change event
            if (previousSelection.start !== null && previousSelection.end !== null) {
                newInputState.selection = previousSelection;
            }
        }
        if (beforeMaskedStateChange) {
            newInputState = beforeMaskedStateChange({
                currentState: currentState,
                nextState: newInputState
            });
        }
        setInputState(newInputState);
    });
    var inputProps = _extends({}, restProps, {
        onFocus: onFocus,
        onBlur: onBlur,
        onChange: isMasked && isEditable ? onChange : props.onChange,
        onMouseDown: isMasked && isEditable ? onMouseDown : props.onMouseDown,
        ref: function ref(_ref) {
            inputRef.current = reactDom.findDOMNode(_ref);
            if (isFunction(forwardedRef)) {
                forwardedRef(_ref);
            } else if (forwardedRef !== null && typeof forwardedRef === "object") {
                forwardedRef.current = _ref;
            }
        },
        value: isMasked && isControlled ? lastValue : props.value
    });
    if (children) {
        validateChildren(props, children); // We wrap children into a class component to be able to find
        // their input element using findDOMNode
        return React__default.createElement(InputMaskChildrenWrapper, inputProps, children);
    }
    return React__default.createElement("input", inputProps);
});
InputMask.displayName = "InputMask";
InputMask.defaultProps = {
    alwaysShowMask: false,
    maskPlaceholder: "_"
};
InputMask.propTypes = {
    alwaysShowMask: PropTypes.bool,
    beforeMaskedStateChange: PropTypes.func,
    children: PropTypes.element,
    mask: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(RegExp)
        ]))
    ]),
    maskPlaceholder: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onMouseDown: PropTypes.func
};
module.exports = InputMask;
}}),
"[project]/node_modules/react-input-mask/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable import/no-unresolved */ if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-input-mask/lib/react-input-mask.development.js [app-ssr] (ecmascript)");
}
}}),

};

//# sourceMappingURL=_eb344028._.js.map