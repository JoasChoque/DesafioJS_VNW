//Questão 1
//dia variavel boolean
let dia;
if (dia == true) {
  console.log("Claro");
} else {
  console.log("Escuro");
}

//Questão 2
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Questão 3
function imprimeMensagem() {
  console.log("Mensagem");
}

imprimeMensagem();

//Questão 4
function imprimeNome(nome) {
  console.log(`Meu nome é ${nome}`);
}

imprimeNome("Joas");

//Questão 5
function imprimeDados(nome, idade, estilo) {
  console.log(`Meu nome é ${nome}, tenho ${idade} anos e gosto de ${estilo}`);
}

imprimeDados("Joas", 23, "indie rock");

//Questão 6
function imprimeFilmeMusica(filme, musica) {
  console.log(`Filme: ${filme}
    Musica: ${musica}`);
}

imprimeFilmeMusica("Laland o filme", "Laland");

//Questão 7
function triplo(numero) {
  console.log(numero * 3);
}

let num = 3; //variavel para receber numero
triplo(num);

//Questão 8
function verificaVerdade(verifica) {
  if (verifica === true) {
    console.log("A variável é true");
  } else {
    console.log("A variavel é false");
  }
}

verificaVerdade(true);

//Questão 9
let itens = [1, 2, 3, 4, 5];

console.log(itens);

//Questão 10
let nomes = ["Malu", "Jade", "Kaiki"];
let novoNome = "Giovanna";

nomes.unshift(novoNome);
console.log(nomes);

//Questão 11 -> utilizando o mesmo array da questão anterior
nomes.pop();
console.log(nomes);

//Questão 12 -> utilizando o mesmo array da questão anterior
nomes.push("Bernardo", "Kaiki");
console.log(nomes);

//Questão 13 -> utilizando o mesmo array da questão anterior
nomes.shift();
console.log(nomes);

//Questão 14
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

//Questão 15
const eu = {
  nome: "Joas",
  idade: 23,
  aniversario: "12 de dezembro",
};

console.log(eu);

//Questão 16 -> utilizando o objeto criado na questão anterior
eu.cidade = "São Paulo";
console.log(eu);

//Questão 17 -> utilizando o objeto criado na questão anterior
delete eu.aniversario;
console.log(eu);

//Questão 18 -> utilizando o objeto criado na questão anterior
console.log(`Meu nome é ${eu.nome}, tenho ${eu.idade} anos e moro na cidade de ${eu.cidade}`);

//Questão 19
let cadastro = [
  {
    nome: "Joas",
    idade: 23,
    telefone: "(12)93456-7890",
    amigos: ["Gabrielle", "Martim", "Luana", "Miguel"],
  },
  {
    nome: "Joao",
    idade: 25,
    telefone: "(12)98765-4321",
    amigos: ["Caio", "Livia", "Alex", "Isabelle"],
  },
  {
    nome: "Vitoria",
    idade: 42,
    telefone: "(31)3233-9888",
    amigos: ["Cauã", "Lavinia", "Evelyn", "Mariana"],
  },
  {
    nome: "Lucas",
    idade: 56,
    telefone: "(21)6345-5274",
    amigos: ["Tânia", "Vitoria", "Julian", "Vitor"],
  },
  {
    nome: "Eduardo",
    idade: 43,
    telefone: "(18) 8061-4278",
    amigos: ["Nicolas", "Matheus", "Isabella", "Bruna"],
  },
];

//Questão 20
for (let i = 0; i < 5; i++) {
  console.log(`Primeiro amigo do(a) ${cadastro[i].nome}: ${cadastro[i].amigos[0]}`);
}
