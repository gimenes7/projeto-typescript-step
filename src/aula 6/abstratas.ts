// src/abstratas.ts

// --- Classe abstrata ---
abstract class FormaGeometrica {
  constructor(public nome: string) {}

  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;

  describer(): string {
    return `${this.nome}: Área=${this.calcularArea().toFixed(2)}, Perímetro=${this.calcularPerimetro().toFixed(2)}`;
  }
}

class Circulo extends FormaGeometrica {
  constructor(public raio: number) {
    super("Círculo");
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.raio;
  }
}

class Retangulo extends FormaGeometrica {
  constructor(public largura: number, public altura: number) {
    super("Retângulo");
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}

// const f = new FormaGeometrica("Teste"); // ERRO: abstrata
const circulo = new Circulo(5);
const retangulo = new Retangulo(4, 6);

console.log(circulo.describer());
console.log(retangulo.describer());