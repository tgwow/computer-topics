const download = require('download');

// Este script demorou aproximadamente 2000 ms a mais para fazer o download,
// pelo fato dele ter 4 promises que são executadas separadamente.
(async () => {
    const start = new Date();

    await download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
    await download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
    await download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
    await download('https://f-droid.org/repo/index.xml', 'res');

    const execTime = new Date() - start;
    console.log(`Exec time: ${execTime} ms`);
})();
