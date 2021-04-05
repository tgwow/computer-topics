const download = require('download');

// Este script fez os downloads mais rápido que o outro,
// pois as 4 promises utilizam um método mais performático para execução de múltiplas promises.
const start = new Date();

const p1 = download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
const p2 = download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
const p3 = download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
const p4 = download('https://f-droid.org/repo/index.xml', 'res');

Promise.all([p1, p2, p3, p4])
    .then(() => {
        const execTime = new Date() - start;
        console.log(`Exec time: ${execTime} ms`);
    });
