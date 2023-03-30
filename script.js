// --------------- PRÁTICA GUIADA ---------------
/* Em uma escola, são aplicadas 4 provas por bimestre.
Tendo como base o array de cada bimestre, crie um programa que mostre a média e a soma das notas de cada bimestre.
Para esse programa, considere o seguinte formato: */
/* notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]
Como saída, o programa deve exibir os valores da média e da soma em uma mensagem parecida com essa:
"A soma das notas do bimestre 1 é: 40
A média do bimestre 1 é: 10"
Exiba a mensagem acima para cada um dos bimestres.
Dica:  para percorrer arrays dentro de arrays, utilize dois laços! */

bimestre1 = [7,8,9,6]
bimestre2 = [6,8,9,6]
bimestre3 = [6,6,8,9]
bimestre4 = [9,9,10,9]

notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

for( let i = 0; i < notasDoAno.length; i++){
  let soma=0

  for(let j = 0; j < notasDoAno[i].length; j++){
    soma += notasDoAno[i][j]
  }
  //console.log(`A soma das notas do bimestre ${i+1} é: ${soma}
 // A média do bimestre ${i+1} é: ${soma/notasDoAno[i].length}`)}
}



// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let i = 0; i < filmes.length; i++ ){

  console.log(`Filme: ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)

    for (let j = 0; j < filmes[i].length; j++){
      console.log(filmes[i].elenco[j])

     } 
         }
//exercicio 2 Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

//Utilize o for...in para resolver

const numero = parseInt(prompt("Digite um número:"));
const tabuada = [];

for(let i in Array(10).fill("")) {
  tabuada.push(`${numero} x ${parseInt(i) + 1} = ${numero * (parseInt(i) + 1)}`);
}

console.log(tabuada.join("\n"));


//Exercício 1
/* Uma pessoa analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco for que itere pelo array deixado no arquivo script.js, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo: */

const atacantes = [
  ["Atacante A", [10, 5, 8, 12, 15]],
  ["Atacante B", [20, 17, 21, 19, 23]],
  ["Atacante C", [7, 8, 6, 10, 12]],
  ["Atacante D", [14, 15, 16, 13, 11]],
  ["Atacante E", [9, 11, 13, 8, 10]]
];

for (let i = 0; i < atacantes.length; i++) {
  const nomeAtacante = atacantes[i][0];
  const golsPorTemporada = atacantes[i][1];

  console.log(`\n${nomeAtacante}:`);
  for (let j = 0; j < golsPorTemporada.length; j++) {
    const temporada = j + 1;
    const gols = golsPorTemporada[j];
    console.log(`Temporada ${temporada}: ${gols} gols`);
  }
}

/* Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:
Utilize o for...of para resolver */

const strings = ["Primeiro lugar", "Segundo lugar", "Terceiro lugar", "Quarto lugar", "Quinto lugar"];

for (let [index, string] of strings.entries()) {
  console.log(`${index + 1}º lugar: ${string}`);
}