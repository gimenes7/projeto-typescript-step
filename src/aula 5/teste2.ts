const numeros = [10, 20, 30, 40];
const nomes = ["Ana", "João", "Maria"];
const ativo = [true, false, true];

function filtrar<T>(array: T[], callback: (item: T) => boolean): T[] {
  return array.filter(callback);
}

function mostrarMaioresQue25(): void {
  console.log(filtrar(numeros, (item) => item > 25));
}

function mostrarNomesGrandes(): void {
  console.log(filtrar(nomes, (item) => item.length > 3));
}

function mostrarInativos(): void {
  console.log(filtrar(ativo, (item) => item === false));
}

mostrarMaioresQue25(); 
mostrarNomesGrandes(); 
mostrarInativos();     