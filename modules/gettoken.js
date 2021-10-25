const https = require('https')

// Load configuration from cfg.json
const cfg = require('../config/config.json')


const data = new TextEncoder().encode(
    JSON.stringify({"device_id": `${cfg.gettoken.device_id}`})
  )

const options = {
  hostname: 'booyah.live',
  port: 443,
  path: `/api/v3/users/${cfg.gettoken.userID}/chat-tokens`,
  method: 'POST',
  headers: {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en",
    "booyah-session-key": `${cfg.gettoken.booyah_session_key}`,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-csrf-token": `${cfg.gettoken.x_csrf_token}`,
    "x-request-id": "web_5c5129d0-344a-11ec-bc85-1bbed6871c56",
    "cookie": `${cfg.gettoken.cookie}`
  },
  // Uses your channel (userID) as referrer
  "referrer": `https://booyah.live/channels/${cfg.gettoken.userID}`,
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"device_id\":\"${cfg.gettoken.device_id}\"}`,
  "mode": "cors"
}



function gettoken() {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8'); 
      let response = '';

      res.on('data', (chunk) => {
        response += chunk;
      });
      
      res.on('end', () => {
        const parsed = (JSON.parse(response))

        let token = parsed.token

        console.log(token)
        resolve(token);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(data)
    req.end();
  });
}

module.exports = gettoken
