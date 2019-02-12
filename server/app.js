var express = require('express');
var cookieParser = require('cookie-parser');//?就是一个解析Cookie的工具。通?req.cookies可以取到??来的cookie，并把它??成?象。
var bodyParser = require('body-parser');//node.js 中?件，用于?理 JSON, Raw, Text 和 URL ??的数据。
var path = require('path');
var app = express();


// ?入中?件
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


var test = require('./api/test')
test(app)

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../public/dist', 'index.html'))
})

var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port
    host = host == '::' ? "localhost" : host;
    console.log("?用?例，??地址? http://%s:%s", host, port)
})