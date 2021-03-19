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

const gerentes = funcionarios.filter(func => func.categoria === 'gerente')

const nomeToUppercase = funcionarios.map(func => {
	return { ...func, nome: func.nome.toUpperCase() }
})

const menorId = funcionarios.reduce((acc, curr, index) => {
	if (index === 1) {
		return acc.id
	}
	if (acc < curr.id) return acc
	return curr.id
});

console.log({gerentes})
console.log({nomeToUppercase})
console.log({menorId})
