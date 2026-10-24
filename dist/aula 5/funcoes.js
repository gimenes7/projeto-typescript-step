"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// --- Funções básicas ---
function somar(a, b) {
    return a + b;
}
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}!`;
}
// --- Arrow functions ---
const dobrar = (x) => x * 2;
const ehPar = (n) => n % 2 === 0;
// --- Callbacks tipados ---
function processar(lista, callback) {
    for (const item of lista) {
        callback(item);
    }
}
const frutas = ["Maçã", "Banana", "Laranja"];
processar(frutas, (fruta) => console.log(`Fruta: ${fruta}`));
// --- Closure: contador ---
function criarContador() {
    let count = 0;
    return () => {
        count++;
        return count;
    };
}
const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
// --- Closure: cache ---
function criarCache(fn) {
    const cache = new Map();
    return (key) => {
        if (cache.has(key))
            return cache.get(key);
        const resultado = fn(key);
        cache.set(key, resultado);
        return resultado;
    };
}
const buscaComCache = criarCache((key) => `Dados de ${key}`);
console.log(buscaComCache("usuarios")); // busca
console.log(buscaComCache("usuarios")); // cache hit
// --- Async/await ---
function buscarDado(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Dado #${id}`), 500);
    });
}
function executar() {
    return __awaiter(this, void 0, void 0, function* () {
        const dado1 = yield buscarDado(1);
        const dado2 = yield buscarDado(2);
        console.log(`${dado1}, ${dado2}`);
    });
}
executar();
