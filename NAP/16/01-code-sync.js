const fs = require('fs');

const t1 = fs.readFileSync('ex1.txt', 'utf-8');
console.log(`Texto do arquivo ex1.txt: `, t1);
const t2 = fs.readFileSync('ex2.txt', 'utf-8');
console.log(`Texto do arquivo ex2.txt: `, t2);
const t3 = fs.readFileSync('ex3.txt', 'utf-8');
console.log(`Texto do arquivo ex3.txt: `, t3);

console.log('end script');
