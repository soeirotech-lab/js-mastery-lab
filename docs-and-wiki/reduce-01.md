# reduce() — Exercício 01

## Enunciado

Crie um array com vários números.

Depois:

- use `reduce()`
- some todos os números do array
- salve o resultado em uma variável chamada `somaTotal`
- mostre o resultado no console

---

## Código do aluno

```js
const numeros = [1, 2, 3, 4, 5, 6];

const somaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0,
);

console.log(somaTotal);
```

---

## Correção

O código está correto.

```js
const numeros = [1, 2, 3, 4, 5, 6];

const somaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0,
);

console.log(somaTotal);
```

---

## Explicação modo leigo

Imagine que o array é uma caixa com vários números:

```js
[1, 2, 3, 4, 5, 6];
```

O `reduce()` pega todos esses números e transforma tudo em um único resultado.

Neste exercício, o único resultado desejado é a soma total:

```txt
1 + 2 + 3 + 4 + 5 + 6
```

O cálculo acontece passo a passo:

```txt
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
```

O resultado final é:

```js
21;
```

---

## Análise técnica

O método `reduce()` percorre todos os itens de um array e acumula um resultado final.

Neste código:

```js
numeros.reduce((acumulador, numero) => acumulador + numero, 0);
```

- `numeros` é o array original
- `reduce()` executa uma função para cada item
- `acumulador` guarda o resultado parcial
- `numero` representa o item atual
- `acumulador + numero` soma o valor atual ao total parcial
- `0` é o valor inicial do acumulador
- `somaTotal` recebe o resultado final

O array original não é alterado.

---

## Conceitos usados

- array
- `reduce()`
- callback
- arrow function
- acumulador
- valor inicial
- soma acumulativa
- `console.log`

---

## Checklist de aprendizado

- [ ] Entendi o enunciado
- [ ] Entendi o array usado
- [ ] Entendi a função usada
- [ ] Entendi o retorno
- [ ] Entendi o `console.log`
- [ ] Sei explicar esse exercício com minhas palavras

---

## Próximo passo sugerido

Criar o exercício `reduce-02.js`, somando os preços de uma lista de produtos.
