const { writeFile } = require('./fileModule.js')
const { read } = require('./fileModule.js')
// writeFile('hello.txt', 'Hello world!');

let lines = '';

for (let i = 1; i <= 300; i++) {
  if (i === 200) {
    lines += 'I might be Clement\n';
  } else if (i === 250) {
    lines += 'I am not Clement\n';
  } else {
    lines += 'I am Clement\n';
  }
}

writeFile('class.txt', lines )
read('class.txt')