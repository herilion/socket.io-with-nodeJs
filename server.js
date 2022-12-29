const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
//
io.on('connection', function (socket) {
    console.log('un utilisateur est connecté')
    socket.on('disconnect', function () {
        console.log('un utilisateur vient de se deconnecter')
    })
    socket.on('chat message', function (msg) {
        console.log('message reçu : ' + msg);
        io.emit('chat message', msg)
    })
})
//
http.listen(8000, function () {
    console.log('server tourne au port 8000');
})