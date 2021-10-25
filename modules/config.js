const gettoken = require('./gettoken.js')
const cfg = require('../config/config.json')

async function getconfig(){
    const token = await gettoken()

    var config = {};
    config.wsurl = (`wss://chat.booyah.live:9511/ws/v2/chat/conns?room_id=${cfg.chat.channelID}&uid=${cfg.gettoken.userID}&chat_alert=0&device_id=${cfg.gettoken.device_id}&scene=Channel&token=` + token);

    console.log(config) 

    return await config 
}

module.exports.getconfig = getconfig;
