const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
http.listen(8000, function () {
    console.log('server tourne au port 8000');
})