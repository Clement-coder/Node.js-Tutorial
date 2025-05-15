const fs = require('fs');

function read(filename) {
    console.log(`reading from ${filename}`)
    fs.readFileSync(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }
        console.log(`File content: ${data}`);
    });

}

function writeFile(filename, data) {
    console.log(`Wrtting to ${filename}`);
    console.log(`Data: ${data}`);

    fs.writeFile(filename, data,(err) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }
        console.log(`File written successfully`);
    });

    console.log('Write operation completed');
}

 module.exports = {
    read,
    writeFile,
 };