import { Animal, Cachorro, Gato } from "./heranca";

// src/polimorfismo.ts

// --- Polimorfismo com herança ---
abstract class FormaGeometrica {
  constructor(public nome: string) {}
  abstract calcularArea(): number;
}

class Circulo extends FormaGeometrica {
  constructor(public raio: number) {
    super("Círculo");
  }
  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Retangulo extends FormaGeometrica {
  constructor(public largura: number, public altura: number) {
    super("Retângulo");
  }
  calcularArea(): number {
    return this.largura * this.altura;
  }
}

// Mesma função, diferentes comportamentos
function imprimirArea(forma: FormaGeometrica): void {
  console.log(`${forma.nome}: ${forma.calcularArea().toFixed(2)}`);
}

imprimirArea(new Circulo(5));       // Círculo: 78.54
imprimirArea(new Retangulo(4, 6));  // Retângulo: 24.00

// --- instanceof ---
function processarAnimal(animal: Animal): void {
  if (animal instanceof Cachorro) {
    animal.latir();
  } else if (animal instanceof Gato) {
    animal.miar();
  }
}

// --- Polimorfismo com interfaces ---
interface MetodoPagamento {
  pagar(valor: number): boolean;
  getDescricao(): string;
}

class Pix implements MetodoPagamento {
  constructor(private chave: string) {}
  pagar(valor: number): boolean {
    console.log(`PIX: R$ ${valor} para ${this.chave}`);
    return true;
  }
  getDescricao(): string { return `PIX (${this.chave})`; }
}

class CartaoCredito implements MetodoPagamento {
  constructor(private numero: string, private parcelas: number = 1) {}
  pagar(valor: number): boolean {
    console.log(`Crédito: ${this.parcelas}x de R$ ${(valor / this.parcelas).toFixed(2)}`);
    return true;
  }
  getDescricao(): string { return `Cartão (final ${this.numero.slice(-4)})`; }
}

function checkout(valor: number, metodo: MetodoPagamento): void {
  console.log(`\n--- Checkout ---`);
  console.log(`Método: ${metodo.getDescricao()}`);
  metodo.pagar(valor);
  console.log("Pedido confirmado!");
}

checkout(150, new Pix("ana@email.com"));
checkout(300, new CartaoCredito("4111111111111234", 3));