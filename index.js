// console.log("Hello from node.js");

// const Person = require('./person.js');
// const person1 = new Person('John', 43);

// person1.greeting();

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const PORT = process.env.PORT || 5000;


http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'content-type': 'text/html' });
    //         res.end(data);
    //     });
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'content-type': 'text/html' });
    //         res.end(data);
    //     });
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'John', age: 40 },
    //         {name: 'Hari', age: 35}
    //     ];

    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    

}).listen(PORT, () => {
    console.log(`Server is running at port ${PORT}.`); 
});