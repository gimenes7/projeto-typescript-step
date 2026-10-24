export {};

// src/interfaces.ts

// --- Interface básica ---
interface Produto {
  id: number;
  nome: string;
  preco: number;
}

function exibirProduto(p: Produto): void {
  console.log(`${p.nome}: R$ ${p.preco}`);
}

exibirProduto({ id: 1, nome: "Notebook", preco: 3500 });

// --- Propriedades opcionais e readonly ---
interface Configuracao {
  readonly host: string;
  port: number;
  timeout?: number;
}

const config: Configuracao = { host: "localhost", port: 3000 };
// config.host = "outro"; // ERRO: readonly

// --- Estendendo interfaces ---
interface Animal {
  nome: string;
  idade: number;
}

interface Mamifero extends Animal {
  domesticado: boolean;
}

const rex: Mamifero = { nome: "Rex", idade: 5, domesticado: true };

// --- Interface para função ---
interface Comparador<T> {
  (a: T, b: T): number;
}

const compararNumeros: Comparador<number> = (a, b) => a - b;
console.log([3, 1, 2].sort(compararNumeros));

// --- Usando implements ---
interface Forma {
  calcularArea(): number;
}

class Circulo implements Forma {
  constructor(public raio: number) {}

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

const c = new Circulo(5);
console.log(`Área: ${c.calcularArea().toFixed(2)}`);