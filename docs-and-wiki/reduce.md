# 📚 reduce() — Primeiro Exercício

## 📌 Código

```js
const numeros = [1, 2, 3, 4, 5, 6];

const somaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0,
);

console.log(somaTotal);
```

---

# 🧠 Explicação modo leigo

## 📌 Array

```js
const numeros = [1, 2, 3, 4, 5, 6];
```

É uma lista de números.

Imagine:

```text
caixa:
[1, 2, 3, 4, 5, 6]
```

---

## 📌 reduce()

O `reduce()` percorre cada item do array.

Mas diferente do `map()` e do `filter()`:

```text
o reduce()
transforma tudo
em UM único valor
```

---

## 📌 acumulador + numero

```js
(acumulador, numero) => acumulador + numero;
```

Significa:

```text
pegue o valor acumulado
e some com o próximo número
```

---

## 📌 acumulador

O acumulador guarda o resultado parcial.

---

## 📌 Funcionamento mental

### 1️⃣ Primeiro passo

```text
0 + 1
```

Resultado:

```text
1
```

---

### 2️⃣ Segundo passo

```text
1 + 2
```

Resultado:

```text
3
```

---

### 3️⃣ Terceiro passo

```text
3 + 3
```

Resultado:

```text
6
```

---

### 4️⃣ Continua...

```text
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
```

---

## 📌 Resultado

```js
21;
```

---

# 📚 Como executar

No terminal:

```bash
node routine-drills/arrays/reduce-01.js
```

---

# 🧠 Resultado esperado

```bash
21
```

---

# 📌 O que aprendi

- arrays
- reduce()
- callback
- arrow function
- acumulador
- soma acumulativa
- console.log()

---

# 📌 Dificuldades

- entender acumulador
- entender fluxo do reduce()
- entender retorno

---

# 📌 Analogia

O `reduce()` funciona como uma calculadora acumulando valores.

## Entrada

```js
[1, 2, 3, 4, 5, 6];
```

---

## Processo

```text
0 + 1
1 + 2
3 + 3
6 + 4
10 + 5
15 + 6
```

---

## Saída

```js
21;
```

---

# 🚀 Filosofia do Laboratório

```text
Learn → Practice → Refactor → Document → Repeat
```

---

# 📖 Learn (Aprender)

Aprender:

- o que é `reduce()`
- como acumular valores
- como transformar vários itens em um valor

---

# ✍️ Practice (Praticar)

Criar exercícios como:

```text
reduce-01.js
reduce-02.js
reduce-03.js
```

---

# 🔧 Refactor (Melhorar)

Melhorar o código depois de entender.

Exemplo:

```js
const somaTotal = numeros.reduce((acc, n) => acc + n, 0);
```

---

# 📝 Document (Documentar)

Escrever:

- o que aprendeu
- dificuldades
- analogias
- exemplos

---

# 🔁 Repeat (Repetir)

Repetir até ficar natural.

O objetivo é criar memória técnica e fluência em JavaScript.
