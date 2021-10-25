const WebSocket = require("ws");
const tmi = require("tmi.js");

const { getconfig } = require("./modules/config");

// Init twitch users
const cfg = require("./config/config.json");

const twitchClient = new tmi.Client({
  connection: {
    secure: "true",
    reconnect: "true",
  },
  options: { debug: false },
  identity: {
    username: `${cfg.tmiconfig.username}`,
    password: `${cfg.tmiconfig.oauth}`,
  },
  channels: [`${cfg.tmiconfig.channels}`],
});

const twitchClient2 = new tmi.Client({
  connection: {
    secure: "true",
    reconnect: "true",
  },
  options: { debug: false },
  identity: {
    username: `${cfg.tmiconfig.username2}`,
    password: `${cfg.tmiconfig.oauth2}`,
  },
  channels: [`${cfg.tmiconfig.channels}`],
});

twitchClient.connect().catch(console.error);
twitchClient2.connect().catch(console.error);

// hacemos una Auto-execute async function para poder obtener los
// datos de la configuracion ya que se nesesita de una llamada asyncrona
// a una api de booyah.live

async () => {
  const hearthBeatRate = 1000 * 60;
  const config = await getconfig();

  const ws = new WebSocket(config.wsurl);

  /** Funcion que envia el mensaje "{"msg":""}" al websocket de booyah
   * Esto sirve para mantener conexion y evitar la desconexión por error 1006
   */
  function HeartBeatMessageInterval() {
    ws.send('{"msg":""}');
    console.debug(
      "\x1b[42m ~HeartBeat enviado, esperando " +
        hearthBeatRate / 1000 +
        " segundos más para volver enviar \x1b[0m"
    );
  }

  // Conexion al WebSocket de booyah!
  ws.on("open", function open() {
    console.log("\x1b[32mConectado al WebSocket de booyah");
    setInterval(() => {
      HeartBeatMessageInterval();
    }, hearthBeatRate);
  });

  ws.on("error", function error(code) {
    console.error("\x1b[31mError en la conexión, codigo de error:", code);
    process.exit(1);
  });

  // Detecta si la conexión es cerrada
  ws.on("close", function close(code) {
    console.warn(
      "\x1b[31mConexión cerrada, codigo de error:",
      code,
      "Tratando de reconectar"
    );
    twitchClient.say(
      `${cfg.tmiconfig.ownerchannel}`,
      "Connection closed, error code: " + code
    );
    ws;
  });

  /** Recive mensajes desde el websocket de Booyah!
   * Luego convierte el mensaje recibido por websocket (Buffer) a formato UTF-8 (Humano)
   * Formatea el mensaje recibido (JSON)
   * Filtra la salida de JSON para que solo muestre el mensaje y usuario en la salida de la consola
   */
  ws.on("message", function incoming(messageRawData) {
    var messageData = JSON.parse(messageRawData.toString("utf8"));

    const nickname = messageData[0].data.nickname;
    const message = messageData[0].data.msg;
    const uid = messageData[0].data.uid;

    try {
      const nickname0 = messageData[0].data.nickname;
      const message0 = messageData[0].data.msg;
      const uid0 = messageData[0].data.uid;
      //console.log("ID:" + uid0, nickname0 + ":", message0);
      twitchClient
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid0} ${nickname0}: ${message0}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname1 = messageData[1].data.nickname;
      const message1 = messageData[1].data.msg;
      const uid1 = messageData[1].data.uid;
      // console.log("ID:" + uid1, nickname1 + ":", message1);
      twitchClient2
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid1} ${nickname1}: ${message1}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname2 = messageData[2].data.nickname;
      const message2 = messageData[2].data.msg;
      const uid2 = messageData[2].data.uid;
      //console.log("ID:" + uid2, nickname2 + ":", message2);
      twitchClient
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid2} ${nickname2}: ${message2}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname3 = messageData[3].data.nickname;
      const message3 = messageData[3].data.msg;
      const uid3 = messageData[3].data.uid;
      //console.log("ID:" + uid3, nickname3 + ":", message3);
      twitchClient2
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid3} ${nickname3}: ${message3}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname4 = messageData[4].data.nickname;
      const message4 = messageData[4].data.msg;
      const uid4 = messageData[4].data.uid;
      //console.log("ID:" + uid4, nickname4 + ":", message4);
      twitchClient
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid4} ${nickname4}: ${message4}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname5 = messageData[5].data.nickname;
      const message5 = messageData[5].data.msg;
      const uid5 = messageData[5].data.uid;
      //console.log("ID:" + uid5, nickname5 + ":", message5);
      twitchClient2
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid5} ${nickname5}: ${message5}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname6 = messageData[6].data.nickname;
      const message6 = messageData[6].data.msg;
      const uid6 = messageData[6].data.uid;
      //console.log("ID:" + uid6, nickname6 + ":", message6);
      twitchClient
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid6} ${nickname6}: ${message6}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname7 = messageData[7].data.nickname;
      const message7 = messageData[7].data.msg;
      const uid7 = messageData[7].data.uid;
      //console.log("ID:" + uid7, nickname7 + ":", message7);
      twitchClient2
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid7} ${nickname7}: ${message7}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
      const nickname8 = messageData[8].data.nickname;
      const message8 = messageData[8].data.msg;
      const uid8 = messageData[8].data.uid;
      //console.log("ID:" + uid8, nickname8 + ":", message8);
      twitchClient
        .say(`${cfg.tmiconfig.channel}`, `ID:${uid8} ${nickname8}: ${message8}`)
        .then((data) => {
          // data returns [channel]
          // console.log(data);
        })
        .catch((err) => {
          console.log("twitch client error", err);
        });
    } catch (e) {}
  });
};
