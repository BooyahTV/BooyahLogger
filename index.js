#!node

const WebSocket = require("ws");
const { wsurl } = require("./config");

const ws = new WebSocket(wsurl);

if (typeof wsurl.includes("token") === "false") {
  console.log("Logueado como anonimo, seras desconectado del chat en 2 minutos");
}

if (typeof wsurl.includes("token") === "true") {
  console.log("Logueado con Token");
} 

/** Funcion que envia el mensaje "{"msg":""}" al websocket de booyah
 * Esto sirve para mantener conexion y evitar la desconexión por error 1006
 */
function messageInterval() {
  ws.send('{"msg":""}');
  console.log(
    "\x1b[33m HeartBeat enviado, esperando 15 segundos más para volver enviar \x1b[0m"
  );
}

// Conexion al WebSocket de booyah!
ws.on("open", function open() {
  console.log("\x1b[32mConectado al WebSocket de booyah");
  setInterval(() => {
    messageInterval();
  }, 15000);
});

ws.on("close", function close(code) {
  console.log("\x1b[31mConexión cerrada, numero de error:", code);
});

/** Recive mensajes desde el websocket de Booyah!
 * Luego convierte el mensaje recibido por websocket (Buffer) a formato UTF-8 (Humano)
 * Formatea el mensaje recibido (JSON)
 * Filtra la salida de JSON para que solo muestre el mensaje y usuario en la salida de la consola
 */
ws.on("message", function incoming(message) {
  const json = message.toString("utf8");
  const jsonp = JSON.parse(json);
  const user = jsonp[0].data.nickname + ":";
  const msg = jsonp[0].data.msg;
 
  console.log(user, msg);
});
