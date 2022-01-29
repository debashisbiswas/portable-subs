const WebSocket = require('ws');
let mpv = require('mpv-ipc');

let port = 8081;
const wss = new WebSocket.Server({ port: port });
console.log(`WebSocket server running on port ${port}`)

let player = new mpv.MPVClient('\\\\.\\pipe\\mpv-pipe');

wss.on('connection', function connection(ws) {
  console.log("Received connection")
  player.observeProperty('sub-text', (subtitle) => {
    ws.send(subtitle);
  });

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
});
