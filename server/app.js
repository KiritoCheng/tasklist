var express = require('express');
var cookieParser = require('cookie-parser');//?A₯κ’πΝCookieIHοBΚ?req.cookiesΒΘζ??IcookieCσc??¬?ΫB
var bodyParser = require('body-parser');//node.js ?Cp°? JSON, Raw, Text a URL ??IB
var path = require('path');
var app = express();


// ?ό?
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
    console.log("?p?αC??n¬? http://%s:%s", host, port)
})