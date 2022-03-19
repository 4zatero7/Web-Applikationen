// 1. Möglichkeit einen Server aufzusetzen
const http = require('http');
const server = http.createServer();
server.on('request',
    function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Hallo!");
        res.end();
    }
);
server.listen(8070);


// 2. Möglichkeit einen Server aufzusetzen
var xx = require('http');

xx.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Worlaaad!');
}).listen(8080);

// Tag und Uhrzeit ausgeben über ein Modul (./myfirstmodule)
// req.url gibt die URL des clients an mit der er eine Anfrage stellt
var yy = require('http');
var dt = require('./myfirstmodule');

yy.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url + " ..The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(8090);

// File auslesen
var zz = require('http');
var fs = require('fs');
zz.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(9000);

// File erstellen

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

var fs = require('fs');

//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

var fs = require('fs');

//Replace the file with a new one:
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

var fs = require('fs');

//Delete the file mynewfile2.txt:
/*fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
*/
var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);