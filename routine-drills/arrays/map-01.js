// Enunciado da Questão
//
// Crie um array com alguns números.
//
// Depois:
// - use map()
// - dobre cada número do array
// - salve o novo array em uma variável chamada dobrados
// - mostre o resultado no console

const numeros = [1, 2, 3, 4];

// cria novo array dobrando os números
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
