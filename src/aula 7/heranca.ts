// src/heranca.ts

// --- Classe base ---
export class Animal {
  constructor(
    public nome: string,
    public especie: string
  ) {}

  descrever(): string {
    return `${this.nome} é um ${this.especie}`;
  }
}

// --- Herança ---
export class Cachorro extends Animal {
  constructor(nome: string, public raca: string) {
    super(nome, "cachorro");
  }

  latir(): void {
    console.log(`${this.nome}: Au au!`);
  }

  override descrever(): string {
    return `${super.descrever()} da raça ${this.raca}`;
  }
}

export class Gato extends Animal {
  constructor(nome: string) {
    super(nome, "gato");
  }

  miar(): void {
    console.log(`${this.nome}: Miau!`);
  }
}

// --- Herança de interfaces ---
interface IVeiculo {
  ligar(): void;
  desligar(): void;
  getInfo(): string;
}

interface IEletrico {
  carregar(): void;
  nivelBateria: number;
}

// Implementação múltipla de interfaces
class CarroEletrico implements IVeiculo, IEletrico {
  nivelBateria: number = 100;

  constructor(
    public marca: string,
    public modelo: string
  ) {}

  ligar(): void {
    console.log(`${this.modelo} ligado.`);
  }

  desligar(): void {
    console.log(`${this.modelo} desligado.`);
  }

  getInfo(): string {
    return `${this.marca} ${this.modelo} — Bateria: ${this.nivelBateria}%`;
  }

  carregar(): void {
    this.nivelBateria = 100;
    console.log("Bateria carregada!");
  }
}

// --- Testes ---
const rex = new Cachorro("Rex", "Labrador");
const mimi = new Gato("Mimi");

rex.latir();                    // Rex: Au au!
console.log(rex.descrever());   // Rex é um cachorro da raça Labrador
mimi.miar();                    // Mimi: Miau!

const tesla = new CarroEletrico("Tesla", "Model 3");
tesla.ligar();
console.log(tesla.getInfo());