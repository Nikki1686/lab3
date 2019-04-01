'use strict';

const fs = require('fs');

//const file = process.argv.slice(2); ?????
const file = `${_dirname}/test.txt`;

//Reads the file
const data = fs.readFileSync(file, (err) => {
    if(err) console.error(err);
});
console.log(data.toString('utf8'));

//Create random value and input in to file - Buffer
const randomValue = Math.random() * 100;
const newFile = Buffer.from(`${file} ${randomValue}`);
console.log(newFile.toString('utf8'));

//fs.write file method-write data files asynchronously-create new file and save
fs.writeFile(file, newFile, (err) => {
    if (err) console.error(err);
    console.log('file saved');
});


