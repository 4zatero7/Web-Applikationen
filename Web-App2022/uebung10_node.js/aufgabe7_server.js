var http = require('http');
var url = require('url');
const fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    var q = url.parse(req.url, true);
    const vorn = q.query.uname;
    const teammate = q.query.uteam;
    fs.appendFile('anmeldungen.txt',`;${vorn}${teammate}<br>`, function (err) {
        if (err) throw err;
        res.write("Anmeldung hat geklappt!");//erscheint auf neue Seite als HTML-Code
        res.end();
        console.log('Saved!');
    });
}).listen(8080);

