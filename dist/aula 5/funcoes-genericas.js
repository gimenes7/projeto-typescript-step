"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
// --- Função genérica básica ---
function primeiro(arr) {
    return arr[0];
}
console.log(primeiro(["Ana", "João"])); // "Ana"
console.log(primeiro([10, 20, 30])); // 10
// --- Com constraint ---
function buscarPorId(lista, id) {
    return lista.find(item => item.id === id);
}
const usuarios = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bob" }];
const produtos = [{ id: 1, nome: "Notebook", preco: 3500 }];
console.log((_a = buscarPorId(usuarios, 1)) === null || _a === void 0 ? void 0 : _a.nome); // "Ana"
console.log((_b = buscarPorId(produtos, 2)) === null || _b === void 0 ? void 0 : _b.nome); // undefined
// --- Função genérica de filtro ---
function filtrarPor(lista, prop, valor) {
    return lista.filter(item => item[prop] === valor);
}
const todosProdutos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 89 },
    { id: 3, nome: "Teclado", preco: 199 }
];
const baratos = filtrarPor(todosProdutos, "preco", 89);
console.log(baratos.map(p => p.nome)); // ["Mouse"]
function processarDados(dados) {
    if (!dados) {
        return { ok: false, erro: "Dados inválidos" };
    }
    return { ok: true, dados };
}
const r1 = processarDados({ nome: "Ana" });
const r2 = processarDados(null);
if (r1.ok) {
    console.log(r1.dados.nome); // "Ana"
}
if (!r2.ok) {
    console.log(r2.erro); // "Dados inválidos"
}
