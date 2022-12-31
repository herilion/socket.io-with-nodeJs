const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//appel de la page clien
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

//Ouverture de la connectioon socket.io
io.on('connection', function (socket) {
    console.log('un utilisateur est connecté')
    //socket.io qui gère si l'utilisateur est connecté
    socket.on('disconnect', function () {
        console.log('un utilisateur vient de se deconnecter')
    })
    //socket qui gère l'envoi et reception de l'information du client
    socket.on('chat message', function (msg) {
        console.log('message reçu : ' + msg);
        io.emit('chat message', msg)
    })
})
//
http.listen(8000, function () {
    console.log('server tourne au port 8000');
})