console.log("Script.js is loaded.");

// Connect to the socket
let socket = io();
socket.on('number', (msg) => {
 console.log('Random number: ' + msg);
});
