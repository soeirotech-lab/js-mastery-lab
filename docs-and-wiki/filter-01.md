# 📚 filter() — Primeiro Exercício

## 📌 Código

```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

# 🧠 Explicação modo leigo

📌 Array

```js
const numeros = [1, 2, 3, 4, 5, 6];
```

É uma lista.

Imagine:

```caixa:
[1, 2, 3, 4, 5, 6]
```

📌 filter()

O filter() percorre cada item do array.

Tipo:

- pega 1
- pega 2
- pega 3
- pega 4
- pega 5
- pega 6

📌 numero => numero % 2 === 0

Significa:

```
pegue cada número
e verifique se ele é par
```

# 📌 Operador %

O % pega o resto da divisão.

Exemplo:

```js
4 % 2;
```

Resultado:

```
    0
```

Porque:

```
4 dividido por 2
não sobra nada
```

# 📌 Número par

Se o resultado for:

```
0
```

Então o número é par.

📌 Resultado

```js
[2, 4, 6];
```

# 📚 Como executar

No terminal:

```
node routine-drills/arrays/filter-01.js
```

🧠 Resultado esperado

```
[2, 4, 6]
```

# 📌 O que aprendi

- arrays
- filter()
- callback
- arrow function
- operador %
- comparação
- console.log()

# 📌 Dificuldades

- entender %
- entender condição
- entender true e false

# 📌 Analogia

O filter() funciona como uma peneira.

Ele deixa passar apenas os valores que seguem a regra.

Entrada

```
[1, 2, 3, 4, 5, 6]
```

# Regra

deixar apenas números pares
`

# Saída

```
[2, 4, 6]
```

# 🚀 Filosofia do Laboratório

```
Learn → Practice → Refactor → Document → Repeat
```

# 📖 Learn (Aprender)

Aprender:

- o que é filter()
- como percorrer arrays
- como filtrar valores

# ✍️ Practice (Praticar)

Criar exercícios como:

```
filter-01.js
filter-02.js
filter-03.js
```

🔧 Refactor (Melhorar)

Melhorar o código depois de entender.

Exemplo:

```js
const pares = numeros.filter((n) => n % 2 === 0);
```

📝 Document (Documentar)

Escrever:

o que aprendeu

- dificuldades
- analogias
- exemplos

# 🔁 Repeat (Repetir)

Repetir até ficar natural.

O objetivo é criar memória técnica e fluência em JavaScript.

```

```
