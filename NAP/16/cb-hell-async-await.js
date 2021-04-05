const fsp = require('fs').promises;


(async () => {
	console.log('Leitura de arquivos utilizando promises com syntax sugar (async/await)')
    try {
		    console.log(`Lendo o arquivo f1.txt`)
		    const fileName2 = await fsp.readFile('f1.txt', 'utf-8');
		    console.log(`Lendo o arquivo ${fileName2}`)
		    const fileName3 = await fsp.readFile(fileName2, 'utf-8');
	      console.log(`Lendo o arquivo ${fileName3}`)
	      const fileContent = await fsp.readFile(fileName3, 'utf-8');
        console.log('Conteudo: ', fileContent);
    } catch (err) {
        console.log(err);
    }
})();
