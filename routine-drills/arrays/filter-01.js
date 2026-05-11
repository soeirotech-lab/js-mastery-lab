// Enunciado da Questão
//
// Crie um array com vários números.
//
// Depois:
// - use filter()
// - filtre apenas os números pares
// - salve o novo array em uma variável chamada pares
// - mostre o resultado no console

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
