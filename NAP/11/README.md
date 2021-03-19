# Functional Programming with JS

This brand solves exercise 11 using High Order Functions of Array.prototype

## Exercise 11


Consider the following array:

```javascript
const funcionarios = [
  {
    id: 11,
    nome: 'joao da silva',
    cpf: '111.222.333-44',
    categoria: 'tecnico'
  },
  {
    id: 22,
    nome: 'joana da silva',
    cpf: '111.222.333-55',
    categoria: 'tecnico'
  },
  {
    id: 23,
    nome: 'joana da Mata',
    cpf: '111.222.333-66',
    categoria: 'analista'
  },
  {
    id: 24,
    nome: 'joana da Mata',
    cpf: '23456789-00',
    categoria: 'gerente'
  },
  {
    id: 45,
    nome: 'joana da Mata',
    cpf: '111222333-44',
    categoria: 'gerente'
  },
  {
    id: 36,
    nome: 'joana da Mata',
    cpf: '654321987-23',
    categoria: 'gerente'
  },
  {
    id: 27,
    nome: 'joana da Mata',
    cpf: '098876654-99',
    categoria: 'gerente'
  }
];
```

Implement and submit code in JS using Node.js that:
- Use filter() to retrieve an array with only objects of the category 'manager'
- Use reduce() to return the object with the lowest id
- Use map() to place all names in UpperCase format.
