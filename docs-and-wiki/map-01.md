# 📚 map() — Primeiro Exercício

## 📌 Código

```js
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);
```

---

# 🧠 Explicação modo leigo

## 📌 Array

```js
const numeros = [1, 2, 3, 4];
```

É uma lista.

Imagine:

```text
caixa:
[1, 2, 3, 4]
```

---

## 📌 map()

O `map()` percorre cada item do array.

Tipo:

- pega 1
- pega 2
- pega 3
- pega 4

---

## 📌 numero => numero \* 2

Significa:

```text
pegue cada número
e multiplique por 2
```

---

## 📌 Resultado

```js
[2, 4, 6, 8];
```

---

# 📚 Como executar

No terminal:

```bash
node routine-drills/arrays/map-01.js
```

---

# 🧠 Resultado esperado

```bash
[ 2, 4, 6, 8 ]
```

---

# 📌 O que aprendi

- arrays
- map()
- callback
- arrow function
- console.log()

---

# 📌 Dificuldades

- entender callback
- entender arrow function

---

# 📌 Analogia

O `map()` funciona como uma máquina de transformação.

## Entrada

```js
[1, 2, 3, 4];
```

## Saída

```js
[2, 4, 6, 8];
```

---

# 🚀 Filosofia do Laboratório

```text
Learn → Practice → Refactor → Document → Repeat
```

---

# 📖 Learn (Aprender)

Aprender:

- o que é `map()`
- como percorrer arrays
- como transformar valores

---

# ✍️ Practice (Praticar)

Criar exercícios como:

```text
map-01.js
map-02.js
map-03.js
```

---

# 🔧 Refactor (Melhorar)

Melhorar o código depois de entender.

Exemplo:

```js
const dobrados = numeros.map((n) => n * 2);
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

---
