"use strict";
const numeros = [10, 20, 30, 40];
const nomes = ["Ana", "João", "Maria"];
const ativo = [true, false, true];
function filtrar(array, callback) {
    return array.filter(callback);
}
function mostrarMaioresQue25() {
    console.log(filtrar(numeros, (item) => item > 25));
}
function mostrarNomesGrandes() {
    console.log(filtrar(nomes, (item) => item.length > 3));
}
function mostrarInativos() {
    console.log(filtrar(ativo, (item) => item === false));
}
mostrarMaioresQue25(); // [30, 40]
mostrarNomesGrandes(); // ["João", "Maria"]
mostrarInativos(); // [false]
