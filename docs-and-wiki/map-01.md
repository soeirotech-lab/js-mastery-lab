# map() — Exercício 01

## Enunciado

Crie um array com alguns números.

Depois:

- use `map()`
- dobre cada número do array
- salve o novo array em uma variável chamada `dobrados`
- mostre o resultado no console

---

## Código do aluno

```js
const numeros = [1, 2, 3, 4];

// cria novo array dobrando os números
const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
```

---

## Correção

O código está correto.

```js
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
```

---

## Explicação modo leigo

Imagine que o array é uma caixa com vários números:

```js
[1, 2, 3, 4];
```

O `map()` passa por cada número dessa caixa e cria uma nova caixa com os valores transformados.

Neste exercício, a transformação é:

```txt
pegar cada número e multiplicar por 2
```

Então:

- `1` vira `2`
- `2` vira `4`
- `3` vira `6`
- `4` vira `8`

O resultado final é:

```js
[2, 4, 6, 8];
```

---

## Análise técnica

O método `map()` percorre todos os itens de um array e retorna um novo array com o resultado da função callback.

Neste código:

```js
numeros.map((numero) => numero * 2);
```

- `numeros` é o array original
- `map()` executa uma função para cada item
- `numero` representa o item atual
- `numero * 2` é o valor retornado para o novo array
- `dobrados` recebe o novo array

O array original não é alterado.

---

## Conceitos usados

- array
- `map()`
- callback
- arrow function
- retorno
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

Criar o exercício `map-02.js`, transformando um array de nomes em um novo array com todos os nomes em letras maiúsculas.
