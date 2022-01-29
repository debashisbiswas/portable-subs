let socket = new WebSocket("ws://192.168.0.61:8081");

socket.onopen = function(event) {
    // alert("[open] Connection established");
};

socket.onmessage = function(event) {
    let textdisplay = document.getElementById("textdisplay");
    textdisplay.innerHTML = event.data;
};

socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert(`[close] Connection died: ${event.code} (${event.reason})`);
    }
};

socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
};
