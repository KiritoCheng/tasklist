module.exports = function (app) {
    app.get('/test', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
        res.end('Hello');
    })
}