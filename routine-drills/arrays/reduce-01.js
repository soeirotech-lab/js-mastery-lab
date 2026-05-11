// ❓ Enunciado da Questão

// Crie um array com vários números.

// Depois:

// ✅ use reduce()
// ✅ some todos os números do array
// ✅ salve o resultado em uma variável chamada: somaTotal
// ✅ mostre o resultado no console.

const numeros = [1, 2, 3, 4, 5, 6];

const somaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0,
);

console.log(somaTotal);
