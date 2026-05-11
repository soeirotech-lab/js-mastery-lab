# filter() — Exercício 01

## Enunciado

Crie um array com vários números.

Depois:

- use `filter()`
- filtre apenas os números pares
- salve o novo array em uma variável chamada `pares`
- mostre o resultado no console

---

## Código do aluno

```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

---

## Correção

O código está correto.

```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

---

## Explicação modo leigo

Imagine que o array é uma caixa com vários números:

```js
[1, 2, 3, 4, 5, 6];
```

O `filter()` funciona como uma peneira. Ele olha para cada item e deixa passar apenas os valores que obedecem a uma regra.

Neste exercício, a regra é:

```txt
o número precisa ser par
```

A expressão usada para testar isso é:

```js
numero % 2 === 0;
```

O operador `%` pega o resto da divisão. Quando um número dividido por `2` tem resto `0`, ele é par.

O resultado final é:

```js
[2, 4, 6];
```

---

## Análise técnica

O método `filter()` percorre todos os itens de um array e retorna um novo array apenas com os itens que passaram no teste da função callback.

Neste código:

```js
numeros.filter((numero) => numero % 2 === 0);
```

- `numeros` é o array original
- `filter()` executa uma função para cada item
- `numero` representa o item atual
- `numero % 2 === 0` retorna `true` para números pares
- `pares` recebe o novo array filtrado

O array original não é alterado.

---

## Conceitos usados

- array
- `filter()`
- callback
- arrow function
- operador `%`
- comparação
- booleano
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

Criar o exercício `filter-02.js`, filtrando apenas nomes com mais de cinco letras.
