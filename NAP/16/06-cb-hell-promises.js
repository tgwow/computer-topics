const fsp = require('fs').promises;

console.log('Leitura de arquivos utilizando promises')
console.log(`Lendo o arquivo f1.txt`)
fsp.readFile('f1.txt', 'utf-8')
    .then((fileName2) => {
	    console.log(`Lendo o arquivo ${fileName2}`)
	    return fsp.readFile(fileName2, 'utf-8');
    })
    .then((fileName3) => {
	    console.log(`Lendo o arquivo ${fileName3}`)
	    return fsp.readFile(fileName3, 'utf-8');
    })
    .then((fileContent) => {
        console.log('Conteudo: ', fileContent);
    })
    .catch((err) => {
        console.log(err);
    });
