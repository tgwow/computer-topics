// Este codigo faz a leitura de dados para apps coletadas do Google Play

const fs = require('fs');
const csvparse = require('csv-parse/lib/sync');

// Le cada linha do arquivo csv como um objeto e armazena no array 'app'
let apps = csvparse(fs.readFileSync('./gplaydata.csv', 'utf-8'), {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true
});
// converte alguns atributos que sao inicialmente lidos com strings
apps = apps.map(elem => {
    elem.score = parseFloat(elem.score);
    elem.installs = parseInt(elem.installs);
    elem.androidVersion = parseFloat(elem.androidVersion);
    return elem;
});

console.log('Total de objetos deste array:', apps.length);
console.log('A estrutura do 1.o objeto:');
console.log(apps[0]);

// EXERCICIO 1: use reduce() para calcular o numero total de installs para todas as apps.
const installsAmount = apps.reduce((acc, curr) => {
	if (typeof acc === 'object')
		return acc.installs + curr.installs
	return acc + curr.installs
},)
console.log('Número total de instalações: ')
console.log(installsAmount)

// EXERCICIO 2: use filter() para selecionar somente apps com score maior que quatro (> 4)
const scoreGreaterThan4 = apps.filter(app => app.score > 4)
console.log('Apps com score maior que 4: ')
console.log(scoreGreaterThan4)

// EXERCICIO 3: use map() para mudar o atributo appname para lowerCase

const toLowerCase = apps.map(app => ({ ...app, appname: app.appname.toLowerCase() }))
console.log('Atributo appname para loweCase: ');
console.log(toLowerCase)
