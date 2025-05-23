(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0105a2aa._.js", {

"[project]/src/app/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$input$2d$mask$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-input-mask/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const LoginPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirmarSenha: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6",
                    children: isLogin ? "Entrar" : "Criar Conta"
                }, void 0, false, {
                    fileName: "[project]/src/app/login/page.tsx",
                    lineNumber: 69,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                errors.nome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.nome
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 45
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: errors.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 97,
                            columnNumber: 38
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$input$2d$mask$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    mask: "999.999.999-99",
                                    value: formData.cpf,
                                    onChange: handleChange,
                                    children: (inputProps)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...inputProps,
                                            type: "text",
                                            name: "cpf",
                                            placeholder: "CPF",
                                            className: "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/login/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 9
                                }, this),
                                errors.cpf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.cpf
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        errors.senha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm",
                            children: errors.senha
                        }, void 0, false, {
                            fileName: "[project]/src/app/login/page.tsx",
                            lineNumber: 133,
                            columnNumber: 38
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                errors.confirmarSenha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm",
                                    children: errors.confirmarSenha
                                }, void 0, false, {
                                    fileName: "[project]/src/app/login/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-center text-gray-600 dark:text-gray-300",
                    children: [
                        isLogin ? "Não tem uma conta?" : "Já tem uma conta?",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(LoginPage, "rJt6qvF2TnlKq2NeNTxr5uhinaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
const __TURBOPACK__default__export__ = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/invariant/browser.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
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
"[project]/node_modules/warning/warning.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
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
"[project]/node_modules/react-input-mask/lib/react-input-mask.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = _interopDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var reactDom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var invariant = _interopDefault(__turbopack_context__.r("[project]/node_modules/invariant/browser.js [app-client] (ecmascript)"));
var warning = _interopDefault(__turbopack_context__.r("[project]/node_modules/warning/warning.js [app-client] (ecmascript)"));
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
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function setInputSelection(input, start, end) {
    if ('selectionStart' in input && 'selectionEnd' in input) {
        input.selectionStart = start;
        input.selectionEnd = end;
    } else {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
    }
}
function getInputSelection(input) {
    var start = 0;
    var end = 0;
    if ('selectionStart' in input && 'selectionEnd' in input) {
        start = input.selectionStart;
        end = input.selectionEnd;
    } else {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
            start = -range.moveStart('character', -input.value.length);
            end = -range.moveEnd('character', -input.value.length);
        }
    }
    return {
        start: start,
        end: end,
        length: end - start
    };
}
var defaultFormatChars = {
    '9': '[0-9]',
    'a': '[A-Za-z]',
    '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';
function parseMask(mask, maskChar, formatChars) {
    var parsedMaskString = '';
    var prefix = '';
    var lastEditablePosition = null;
    var permanents = [];
    if (maskChar === undefined) {
        maskChar = defaultMaskChar;
    }
    if (formatChars == null) {
        formatChars = defaultFormatChars;
    }
    if (!mask || typeof mask !== 'string') {
        return {
            maskChar: maskChar,
            formatChars: formatChars,
            mask: null,
            prefix: null,
            lastEditablePosition: null,
            permanents: []
        };
    }
    var isPermanent = false;
    mask.split('').forEach(function(character) {
        if (!isPermanent && character === '\\') {
            isPermanent = true;
        } else {
            if (isPermanent || !formatChars[character]) {
                permanents.push(parsedMaskString.length);
                if (parsedMaskString.length === permanents.length - 1) {
                    prefix += character;
                }
            } else {
                lastEditablePosition = parsedMaskString.length + 1;
            }
            parsedMaskString += character;
            isPermanent = false;
        }
    });
    return {
        maskChar: maskChar,
        formatChars: formatChars,
        prefix: prefix,
        mask: parsedMaskString,
        lastEditablePosition: lastEditablePosition,
        permanents: permanents
    };
}
/* eslint no-use-before-define: ["error", { functions: false }] */ function isPermanentCharacter(maskOptions, pos) {
    return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
    var mask = maskOptions.mask, formatChars = maskOptions.formatChars;
    if (!character) {
        return false;
    }
    if (isPermanentCharacter(maskOptions, pos)) {
        return mask[pos] === character;
    }
    var ruleChar = mask[pos];
    var charRule = formatChars[ruleChar];
    return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
    return value.split('').every(function(character, i) {
        return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
    });
}
function getFilledLength(maskOptions, value) {
    var maskChar = maskOptions.maskChar, prefix = maskOptions.prefix;
    if (!maskChar) {
        while(value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)){
            value = value.slice(0, value.length - 1);
        }
        return value.length;
    }
    var filledLength = prefix.length;
    for(var i = value.length; i >= prefix.length; i--){
        var character = value[i];
        var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);
        if (isEnteredCharacter) {
            filledLength = i + 1;
            break;
        }
    }
    return filledLength;
}
function isFilled(maskOptions, value) {
    return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
    var maskChar = maskOptions.maskChar, mask = maskOptions.mask, prefix = maskOptions.prefix;
    if (!maskChar) {
        value = insertString(maskOptions, '', value, 0);
        if (value.length < prefix.length) {
            value = prefix;
        }
        while(value.length < mask.length && isPermanentCharacter(maskOptions, value.length)){
            value += mask[value.length];
        }
        return value;
    }
    if (value) {
        var emptyValue = formatValue(maskOptions, '');
        return insertString(maskOptions, emptyValue, value, 0);
    }
    for(var i = 0; i < mask.length; i++){
        if (isPermanentCharacter(maskOptions, i)) {
            value += mask[i];
        } else {
            value += maskChar;
        }
    }
    return value;
}
function clearRange(maskOptions, value, start, len) {
    var end = start + len;
    var maskChar = maskOptions.maskChar, mask = maskOptions.mask, prefix = maskOptions.prefix;
    var arrayValue = value.split('');
    if (!maskChar) {
        // remove any permanent chars after clear range, they will be added back by formatValue
        for(var i = end; i < arrayValue.length; i++){
            if (isPermanentCharacter(maskOptions, i)) {
                arrayValue[i] = '';
            }
        }
        start = Math.max(prefix.length, start);
        arrayValue.splice(start, end - start);
        value = arrayValue.join('');
        return formatValue(maskOptions, value);
    }
    return arrayValue.map(function(character, i) {
        if (i < start || i >= end) {
            return character;
        }
        if (isPermanentCharacter(maskOptions, i)) {
            return mask[i];
        }
        return maskChar;
    }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
    var mask = maskOptions.mask, maskChar = maskOptions.maskChar, prefix = maskOptions.prefix;
    var arrayInsertStr = insertStr.split('');
    var isInputFilled = isFilled(maskOptions, value);
    var isUsablePosition = function isUsablePosition(pos, character) {
        return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
    };
    var isUsableCharacter = function isUsableCharacter(character, pos) {
        return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
    };
    if (!maskChar && insertPosition > value.length) {
        value += mask.slice(value.length, insertPosition);
    }
    arrayInsertStr.every(function(insertCharacter) {
        while(!isUsablePosition(insertPosition, insertCharacter)){
            if (insertPosition >= value.length) {
                value += mask[insertPosition];
            }
            if (!isUsableCharacter(insertCharacter, insertPosition)) {
                return true;
            }
            insertPosition++; // stop iteration if maximum value length reached
            if (insertPosition >= mask.length) {
                return false;
            }
        }
        var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;
        if (!isAllowed) {
            return true;
        }
        if (insertPosition < value.length) {
            if (maskChar || isInputFilled || insertPosition < prefix.length) {
                value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
            } else {
                value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
                value = formatValue(maskOptions, value);
            }
        } else if (!maskChar) {
            value += insertCharacter;
        }
        insertPosition++; // stop iteration if maximum value length reached
        return insertPosition < mask.length;
    });
    return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
    var mask = maskOptions.mask, maskChar = maskOptions.maskChar;
    var arrayInsertStr = insertStr.split('');
    var initialInsertPosition = insertPosition;
    var isUsablePosition = function isUsablePosition(pos, character) {
        return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
    };
    arrayInsertStr.every(function(insertCharacter) {
        while(!isUsablePosition(insertPosition, insertCharacter)){
            insertPosition++; // stop iteration if maximum value length reached
            if (insertPosition >= mask.length) {
                return false;
            }
        }
        var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;
        if (isAllowed) {
            insertPosition++;
        } // stop iteration if maximum value length reached
        return insertPosition < mask.length;
    });
    return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
    for(var i = pos; i >= 0; --i){
        if (!isPermanentCharacter(maskOptions, i)) {
            return i;
        }
    }
    return null;
}
function getRightEditablePosition(maskOptions, pos) {
    var mask = maskOptions.mask;
    for(var i = pos; i < mask.length; ++i){
        if (!isPermanentCharacter(maskOptions, i)) {
            return i;
        }
    }
    return null;
}
function getStringValue(value) {
    return !value && value !== 0 ? '' : value + '';
}
function processChange(maskOptions, value, selection, previousValue, previousSelection) {
    var mask = maskOptions.mask, prefix = maskOptions.prefix, lastEditablePosition = maskOptions.lastEditablePosition;
    var newValue = value;
    var enteredString = '';
    var formattedEnteredStringLength = 0;
    var removedLength = 0;
    var cursorPosition = Math.min(previousSelection.start, selection.start);
    if (selection.end > previousSelection.start) {
        enteredString = newValue.slice(previousSelection.start, selection.end);
        formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);
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
            cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
        }
        newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
    }
    newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
    cursorPosition = cursorPosition + formattedEnteredStringLength;
    if (cursorPosition >= mask.length) {
        cursorPosition = mask.length;
    } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
        cursorPosition = prefix.length;
    } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
        cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
    }
    newValue = formatValue(maskOptions, newValue);
    if (!enteredString) {
        enteredString = null;
    }
    return {
        value: newValue,
        enteredString: enteredString,
        selection: {
            start: cursorPosition,
            end: cursorPosition
        }
    };
}
function isWindowsPhoneBrowser() {
    var windows = new RegExp('windows', 'i');
    var phone = new RegExp('phone', 'i');
    var ua = navigator.userAgent;
    return windows.test(ua) && phone.test(ua);
}
function isFunction(value) {
    return typeof value === 'function';
}
function getRequestAnimationFrame() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}
function getCancelAnimationFrame() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}
function defer(fn) {
    var hasCancelAnimationFrame = !!getCancelAnimationFrame();
    var deferFn;
    if (hasCancelAnimationFrame) {
        deferFn = getRequestAnimationFrame();
    } else {
        deferFn = function deferFn() {
            return setTimeout(fn, 1000 / 60);
        };
    }
    return deferFn(fn);
}
function cancelDefer(deferId) {
    var cancelFn = getCancelAnimationFrame() || clearTimeout;
    cancelFn(deferId);
}
var InputElement = /*#__PURE__*/ function(_React$Component) {
    _inheritsLoose(InputElement, _React$Component);
    function InputElement(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        _this.focused = false;
        _this.mounted = false;
        _this.previousSelection = null;
        _this.selectionDeferId = null;
        _this.saveSelectionLoopDeferId = null;
        _this.saveSelectionLoop = function() {
            _this.previousSelection = _this.getSelection();
            _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
        };
        _this.runSaveSelectionLoop = function() {
            if (_this.saveSelectionLoopDeferId === null) {
                _this.saveSelectionLoop();
            }
        };
        _this.stopSaveSelectionLoop = function() {
            if (_this.saveSelectionLoopDeferId !== null) {
                cancelDefer(_this.saveSelectionLoopDeferId);
                _this.saveSelectionLoopDeferId = null;
                _this.previousSelection = null;
            }
        };
        _this.getInputDOMNode = function() {
            if (!_this.mounted) {
                return null;
            }
            var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
            var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
            // https://github.com/sanniassin/react-input-mask/issues/147
            if (input && !isDOMNode) {
                return null;
            }
            if (input.nodeName !== 'INPUT') {
                input = input.querySelector('input');
            }
            if (!input) {
                throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
            }
            return input;
        };
        _this.getInputValue = function() {
            var input = _this.getInputDOMNode();
            if (!input) {
                return null;
            }
            return input.value;
        };
        _this.setInputValue = function(value) {
            var input = _this.getInputDOMNode();
            if (!input) {
                return;
            }
            _this.value = value;
            input.value = value;
        };
        _this.setCursorToEnd = function() {
            var filledLength = getFilledLength(_this.maskOptions, _this.value);
            var pos = getRightEditablePosition(_this.maskOptions, filledLength);
            if (pos !== null) {
                _this.setCursorPosition(pos);
            }
        };
        _this.setSelection = function(start, end, options) {
            if (options === void 0) {
                options = {};
            }
            var input = _this.getInputDOMNode();
            var isFocused = _this.isFocused(); // don't change selection on unfocused input
            // because Safari sets focus on selection change (#154)
            if (!input || !isFocused) {
                return;
            }
            var _options = options, deferred = _options.deferred;
            if (!deferred) {
                setInputSelection(input, start, end);
            }
            if (_this.selectionDeferId !== null) {
                cancelDefer(_this.selectionDeferId);
            } // deferred selection update is required for pre-Lollipop Android browser,
            // but for consistent behavior we do it for all browsers
            _this.selectionDeferId = defer(function() {
                _this.selectionDeferId = null;
                setInputSelection(input, start, end);
            });
            _this.previousSelection = {
                start: start,
                end: end,
                length: Math.abs(end - start)
            };
        };
        _this.getSelection = function() {
            var input = _this.getInputDOMNode();
            return getInputSelection(input);
        };
        _this.getCursorPosition = function() {
            return _this.getSelection().start;
        };
        _this.setCursorPosition = function(pos) {
            _this.setSelection(pos, pos);
        };
        _this.isFocused = function() {
            return _this.focused;
        };
        _this.getBeforeMaskedValueChangeConfig = function() {
            var _this$maskOptions = _this.maskOptions, mask = _this$maskOptions.mask, maskChar = _this$maskOptions.maskChar, permanents = _this$maskOptions.permanents, formatChars = _this$maskOptions.formatChars;
            var alwaysShowMask = _this.props.alwaysShowMask;
            return {
                mask: mask,
                maskChar: maskChar,
                permanents: permanents,
                alwaysShowMask: !!alwaysShowMask,
                formatChars: formatChars
            };
        };
        _this.isInputAutofilled = function(value, selection, previousValue, previousSelection) {
            var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
            // in case of autofill simulation in tests
            //
            // input.matches throws an exception if selector isn't supported
            try {
                if (input.matches(':-webkit-autofill')) {
                    return true;
                }
            } catch (e) {} // if input isn't focused then change event must have been triggered
            // either by autofill or event simulation in tests
            if (!_this.focused) {
                return true;
            } // if cursor has moved to the end while previousSelection forbids it
            // then it must be autofill
            return previousSelection.end < previousValue.length && selection.end === value.length;
        };
        _this.onChange = function(event) {
            var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)), beforePasteState = _assertThisInitialize.beforePasteState;
            var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)), previousSelection = _assertThisInitialize2.previousSelection;
            var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
            var value = _this.getInputValue();
            var previousValue = _this.value;
            var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
            // https://github.com/sanniassin/react-input-mask/issues/113
            if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
                previousValue = formatValue(_this.maskOptions, '');
                previousSelection = {
                    start: 0,
                    end: 0,
                    length: 0
                };
            } // set value and selection as if we haven't
            // cleared input in onPaste handler
            if (beforePasteState) {
                previousSelection = beforePasteState.selection;
                previousValue = beforePasteState.value;
                selection = {
                    start: previousSelection.start + value.length,
                    end: previousSelection.start + value.length,
                    length: 0
                };
                value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
                _this.beforePasteState = null;
            }
            var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
            var enteredString = changedState.enteredString;
            var newSelection = changedState.selection;
            var newValue = changedState.value;
            if (isFunction(beforeMaskedValueChange)) {
                var modifiedValue = beforeMaskedValueChange({
                    value: newValue,
                    selection: newSelection
                }, {
                    value: previousValue,
                    selection: previousSelection
                }, enteredString, _this.getBeforeMaskedValueChangeConfig());
                newValue = modifiedValue.value;
                newSelection = modifiedValue.selection;
            }
            _this.setInputValue(newValue);
            if (isFunction(_this.props.onChange)) {
                _this.props.onChange(event);
            }
            if (_this.isWindowsPhoneBrowser) {
                _this.setSelection(newSelection.start, newSelection.end, {
                    deferred: true
                });
            } else {
                _this.setSelection(newSelection.start, newSelection.end);
            }
        };
        _this.onFocus = function(event) {
            var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
            var _this$maskOptions2 = _this.maskOptions, mask = _this$maskOptions2.mask, prefix = _this$maskOptions2.prefix;
            _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount
            _this.mounted = true;
            if (mask) {
                if (!_this.value) {
                    var emptyValue = formatValue(_this.maskOptions, prefix);
                    var newValue = formatValue(_this.maskOptions, emptyValue);
                    var filledLength = getFilledLength(_this.maskOptions, newValue);
                    var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
                    var newSelection = {
                        start: cursorPosition,
                        end: cursorPosition
                    };
                    if (isFunction(beforeMaskedValueChange)) {
                        var modifiedValue = beforeMaskedValueChange({
                            value: newValue,
                            selection: newSelection
                        }, {
                            value: _this.value,
                            selection: null
                        }, null, _this.getBeforeMaskedValueChangeConfig());
                        newValue = modifiedValue.value;
                        newSelection = modifiedValue.selection;
                    }
                    var isInputValueChanged = newValue !== _this.getInputValue();
                    if (isInputValueChanged) {
                        _this.setInputValue(newValue);
                    }
                    if (isInputValueChanged && isFunction(_this.props.onChange)) {
                        _this.props.onChange(event);
                    }
                    _this.setSelection(newSelection.start, newSelection.end);
                } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
                    _this.setCursorToEnd();
                }
                _this.runSaveSelectionLoop();
            }
            if (isFunction(_this.props.onFocus)) {
                _this.props.onFocus(event);
            }
        };
        _this.onBlur = function(event) {
            var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
            var mask = _this.maskOptions.mask;
            _this.stopSaveSelectionLoop();
            _this.focused = false;
            if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
                var newValue = '';
                if (isFunction(beforeMaskedValueChange)) {
                    var modifiedValue = beforeMaskedValueChange({
                        value: newValue,
                        selection: null
                    }, {
                        value: _this.value,
                        selection: _this.previousSelection
                    }, null, _this.getBeforeMaskedValueChangeConfig());
                    newValue = modifiedValue.value;
                }
                var isInputValueChanged = newValue !== _this.getInputValue();
                if (isInputValueChanged) {
                    _this.setInputValue(newValue);
                }
                if (isInputValueChanged && isFunction(_this.props.onChange)) {
                    _this.props.onChange(event);
                }
            }
            if (isFunction(_this.props.onBlur)) {
                _this.props.onBlur(event);
            }
        };
        _this.onMouseDown = function(event) {
            // tiny unintentional mouse movements can break cursor
            // position on focus, so we have to restore it in that case
            //
            // https://github.com/sanniassin/react-input-mask/issues/108
            if (!_this.focused && document.addEventListener) {
                _this.mouseDownX = event.clientX;
                _this.mouseDownY = event.clientY;
                _this.mouseDownTime = new Date().getTime();
                var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
                    document.removeEventListener('mouseup', mouseUpHandler);
                    if (!_this.focused) {
                        return;
                    }
                    var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
                    var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
                    var axisDelta = Math.max(deltaX, deltaY);
                    var timeDelta = new Date().getTime() - _this.mouseDownTime;
                    if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
                        _this.setCursorToEnd();
                    }
                };
                document.addEventListener('mouseup', mouseUpHandler);
            }
            if (isFunction(_this.props.onMouseDown)) {
                _this.props.onMouseDown(event);
            }
        };
        _this.onPaste = function(event) {
            if (isFunction(_this.props.onPaste)) {
                _this.props.onPaste(event);
            } // event.clipboardData might not work in Android browser
            // cleaning input to get raw text inside onChange handler
            if (!event.defaultPrevented) {
                _this.beforePasteState = {
                    value: _this.getInputValue(),
                    selection: _this.getSelection()
                };
                _this.setInputValue('');
            }
        };
        _this.handleRef = function(ref) {
            if (_this.props.children == null && isFunction(_this.props.inputRef)) {
                _this.props.inputRef(ref);
            }
        };
        var _mask = props.mask, _maskChar = props.maskChar, _formatChars = props.formatChars, _alwaysShowMask = props.alwaysShowMask, _beforeMaskedValueChange = props.beforeMaskedValueChange;
        var defaultValue = props.defaultValue, _value = props.value;
        _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);
        if (defaultValue == null) {
            defaultValue = '';
        }
        if (_value == null) {
            _value = defaultValue;
        }
        var _newValue = getStringValue(_value);
        if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
            _newValue = formatValue(_this.maskOptions, _newValue);
            if (isFunction(_beforeMaskedValueChange)) {
                var oldValue = props.value;
                if (props.value == null) {
                    oldValue = defaultValue;
                }
                oldValue = getStringValue(oldValue);
                var modifiedValue = _beforeMaskedValueChange({
                    value: _newValue,
                    selection: null
                }, {
                    value: oldValue,
                    selection: null
                }, null, _this.getBeforeMaskedValueChangeConfig());
                _newValue = modifiedValue.value;
            }
        }
        _this.value = _newValue;
        return _this;
    }
    var _proto = InputElement.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true; // workaround for react-test-renderer
        // https://github.com/sanniassin/react-input-mask/issues/147
        if (!this.getInputDOMNode()) {
            return;
        }
        this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();
        if (this.maskOptions.mask && this.getInputValue() !== this.value) {
            this.setInputValue(this.value);
        }
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
        var previousSelection = this.previousSelection;
        var _this$props = this.props, beforeMaskedValueChange = _this$props.beforeMaskedValueChange, alwaysShowMask = _this$props.alwaysShowMask, mask = _this$props.mask, maskChar = _this$props.maskChar, formatChars = _this$props.formatChars;
        var previousMaskOptions = this.maskOptions;
        var showEmpty = alwaysShowMask || this.isFocused();
        var hasValue = this.props.value != null;
        var newValue = hasValue ? getStringValue(this.props.value) : this.value;
        var cursorPosition = previousSelection ? previousSelection.start : null;
        this.maskOptions = parseMask(mask, maskChar, formatChars);
        if (!this.maskOptions.mask) {
            if (previousMaskOptions.mask) {
                this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
                // call forceUpdate to keep it in sync
                this.forceUpdate();
            }
            return;
        } else if (!previousMaskOptions.mask && this.isFocused()) {
            this.runSaveSelectionLoop();
        }
        var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;
        if (!previousMaskOptions.mask && !hasValue) {
            newValue = this.getInputValue();
        }
        if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
            newValue = formatValue(this.maskOptions, newValue);
        }
        if (isMaskChanged) {
            var filledLength = getFilledLength(this.maskOptions, newValue);
            if (cursorPosition === null || filledLength < cursorPosition) {
                if (isFilled(this.maskOptions, newValue)) {
                    cursorPosition = filledLength;
                } else {
                    cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
                }
            }
        }
        if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
            newValue = '';
        }
        var newSelection = {
            start: cursorPosition,
            end: cursorPosition
        };
        if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
                value: newValue,
                selection: newSelection
            }, {
                value: this.value,
                selection: this.previousSelection
            }, null, this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
        }
        this.value = newValue;
        var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync
        if (isValueChanged) {
            this.setInputValue(this.value);
            this.forceUpdate();
        } else if (isMaskChanged) {
            this.forceUpdate();
        }
        var isSelectionChanged = false;
        if (newSelection.start != null && newSelection.end != null) {
            isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
        }
        if (isSelectionChanged || isValueChanged) {
            this.setSelection(newSelection.start, newSelection.end);
        }
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
        if (this.selectionDeferId !== null) {
            cancelDefer(this.selectionDeferId);
        }
        this.stopSaveSelectionLoop();
    };
    _proto.render = function render() {
        var _this$props2 = this.props, mask = _this$props2.mask, alwaysShowMask = _this$props2.alwaysShowMask, maskChar = _this$props2.maskChar, formatChars = _this$props2.formatChars, inputRef = _this$props2.inputRef, beforeMaskedValueChange = _this$props2.beforeMaskedValueChange, children = _this$props2.children, restProps = _objectWithoutPropertiesLoose(_this$props2, [
            "mask",
            "alwaysShowMask",
            "maskChar",
            "formatChars",
            "inputRef",
            "beforeMaskedValueChange",
            "children"
        ]);
        var inputElement;
        ("TURBOPACK compile-time truthy", 1) ? warning(// will be updated later in componentDidUpdate
        !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : ("TURBOPACK unreachable", undefined);
        if (children) {
            !isFunction(children) ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, 'react-input-mask: children must be a function') : ("TURBOPACK unreachable", undefined) : void 0;
            var controlledProps = [
                'onChange',
                'onPaste',
                'onMouseDown',
                'onFocus',
                'onBlur',
                'value',
                'disabled',
                'readOnly'
            ];
            var childrenProps = _extends({}, restProps);
            controlledProps.forEach(function(propId) {
                return delete childrenProps[propId];
            });
            inputElement = children(childrenProps);
            var conflictProps = controlledProps.filter(function(propId) {
                return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
            });
            !!conflictProps.length ? ("TURBOPACK compile-time truthy", 1) ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : ("TURBOPACK unreachable", undefined) : void 0;
            ("TURBOPACK compile-time truthy", 1) ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : ("TURBOPACK unreachable", undefined);
        } else {
            inputElement = React.createElement("input", _extends({
                ref: this.handleRef
            }, restProps));
        }
        var changedProps = {
            onFocus: this.onFocus,
            onBlur: this.onBlur
        };
        if (this.maskOptions.mask) {
            if (!restProps.disabled && !restProps.readOnly) {
                changedProps.onChange = this.onChange;
                changedProps.onPaste = this.onPaste;
                changedProps.onMouseDown = this.onMouseDown;
            }
            if (restProps.value != null) {
                changedProps.value = this.value;
            }
        }
        inputElement = React.cloneElement(inputElement, changedProps);
        return inputElement;
    };
    return InputElement;
}(React.Component);
module.exports = InputElement;
}}),
"[project]/node_modules/react-input-mask/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-input-mask/lib/react-input-mask.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_0105a2aa._.js.map