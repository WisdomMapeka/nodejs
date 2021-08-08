// THIS IS THE FILE SYSTEM REFERENCE FILE

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("folder created");
// })

// CREATE F FILE AND WRITE TO IT
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err => {
//     if (err) throw err;
//     console.log("file create and written to it");
    
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Nod is not that bad', err => {
//         if (err) throw err;
//         console.log("file create and written to it");
//     })
// })

// READ FILE 
// fs.readFile(path.join(__dirname, './test', 'hello.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


// rename file
fs.rename(path.join(__dirname, './test', 'hello.txt'), path.join(__dirname, './test', 'helloworld.txt'), err => {
    if (err) throw err;
    console.log('file renamed ... ');
})