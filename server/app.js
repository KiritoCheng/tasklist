var express = require('express');
var cookieParser = require('cookie-parser');//?�A���꘢���Cookie�I�H��B��?req.cookies�Ȏ擞??���Icookie�C��c��??��?�ہB
var bodyParser = require('body-parser');//node.js ��?���C�p��?�� JSON, Raw, Text �a URL ??�I�����B
var path = require('path');
var app = express();


// ?����?��
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
    console.log("?�p?��C??�n��? http://%s:%s", host, port)
})