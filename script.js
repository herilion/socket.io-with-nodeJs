const socket = io();
const btnSend = document.querySelector('.btnSend')
const send = () => {
    const text = document.querySelector(".messageInput").value;
    socket.emit('chat message', text);
};
btnSend.addEventListener('click', send());

const receive = (msg) => {
    const li = document.createElement('li');
    li.innerText = msg;
    document.querySelector('.messageList').appendChild(li)
}
socket.on('chat message', receive)