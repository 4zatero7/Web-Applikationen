var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    var q = url.parse(req.url, true);
    const w = +q.query.gewicht;
    const h = +q.query.groesse;
    const bmi = w / (h * h);
    res.write(bmi.toFixed(2));
    res.end();
}).listen(8080);