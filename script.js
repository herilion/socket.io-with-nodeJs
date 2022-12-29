const socket = io();
const send = () => {
    const text = document.querySelector(".messageInput").value;
    socket.emit('chat message', text);
};
const receive = (msg) => {
    const li = document.createElement('li');
    li.innerText = msg;
    document.querySelector('.messageList').appendChild(li)
}
socket.on('chat message', receive)