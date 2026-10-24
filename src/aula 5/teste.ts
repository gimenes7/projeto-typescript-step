type Pessoa = {
  nome: string;
  dataNascimento: string;
};

const objeto: Pessoa = {
  nome: "Guilherme",
  dataNascimento: "01/01/2000",
};

function calcularIdade(dataNascimento: string): number {
  const [dia, mes, ano] = dataNascimento.split("/").map(Number);

  const hoje = new Date();
  let idade = hoje.getFullYear() - ano;

  const fezAniversario =
    hoje.getMonth() + 1 > mes ||
    (hoje.getMonth() + 1 === mes && hoje.getDate() >= dia);

  if (!fezAniversario) idade--;

  return idade;
}

console.log(`${objeto.nome} tem ${calcularIdade(objeto.dataNascimento)} anos`);