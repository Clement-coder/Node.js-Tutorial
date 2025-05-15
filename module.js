const http = require('http')
const { writeFile } = require('./fileModule.js')
writeFile('data.txt', 'Hello world!');


http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
  }).listen(8001)