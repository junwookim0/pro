const socket = io();

socket.on("connect" , function(){
    const input = document.querySelector("#test");
    input.value = "접속됨";
});

function send(){
    const message = document.querySelector("#test").value;
    document.querySelector('#test').value="";
    //소켓을 통해 값 전달하기.
    socket.emit('send', { msg : message});
}

socket.on("send", function(data) {
    
    const chating = document.querySelector('#chating');
    const item = document.createElement('li');
    item.textContent = data.msg;
    chating.appendChild(item);
});
    
    



