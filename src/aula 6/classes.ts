// src/classes.ts

// --- Classe com construtor e modificadores ---
class ContaBancaria {
  private _saldo: number;
  private _historico: string[] = [];
  static totalContas: number = 0;

  constructor(
    public readonly titular: string,
    saldoInicial: number
  ) {
    this._saldo = saldoInicial;
    ContaBancaria.totalContas++;
    this.registrar(`Conta criada com R$ ${saldoInicial}`);
  }

  get saldo(): number {
    return this._saldo;
  }

  depositar(valor: number): void {
    if (valor <= 0) return;
    this._saldo += valor;
    this.registrar(`Depósito: R$ ${valor}`);
  }

  sacar(valor: number): boolean {
    if (valor > this._saldo) return false;
    this._saldo -= valor;
    this.registrar(`Saque: R$ ${valor}`);
    return true;
  }

  private registrar(msg: string): void {
    this._historico.push(msg);
  }

  getHistorico(): string[] {
    return [...this._historico];
  }
}

const ana = new ContaBancaria("Ana", 1000);
ana.depositar(500);
ana.sacar(200);
console.log(`Saldo Ana: R$ ${ana.saldo}`);
console.log("Histórico:", ana.getHistorico());

// --- Getters e Setters ---
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get fahrenheit(): number {
    return this._celsius * 1.8 + 32;
  }

  set celsius(valor: number) {
    if (valor < -273.15) {
      console.log("Temperatura inválida!");
      return;
    }
    this._celsius = valor;
  }

  get celsius(): number {
    return this._celsius;
  }
}

const temp = new Temperature(25);
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F`);
temp.celsius = 100;
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F`);