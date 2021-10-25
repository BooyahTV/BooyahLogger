const gettoken = require('./gettoken.js')

async function getconfig(){
    const token = await gettoken()

    var config = {};
    config.wsurl = ("wss://chat.booyah.live:9511/ws/v2/chat/conns?room_id=79543340&uid=85598510&chat_alert=0&device_id=1ec194b0-344a-11ec-b944-5db82526327d&scene=Channel&token=" + token);

    console.log(config) 

    return await config 
}

module.exports.getconfig = getconfig;
