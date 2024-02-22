//require("./global")
const {default: Baileys, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@whiskeysockets/baileys');
  
  const {
    Boom
  } = require("@hapi/boom");
  const pino = require("pino");
  const fs = require("fs");
  
  
    const FileType = require('file-type')
  const path = require('path')
  const { exec, spawn, execSync } = require("child_process")
  const PhoneNumber = require('awesome-phonenumber')
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExifBug, writeExifNew} = require('./lib/exif')
  const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

global.packname = '@ryu.keehl'
global.author = 'Terbayang bayang kamu'
//global.sessionName = 'hisoka'
global.limitawal = {
	"premium" : 999999999,
	"free" : 10
	}
global.nama = "Perwira"
global.wm = "©Perwira Kusuma"
global.myid = '6282230819722@s.whatsapp.net'
global.prefa = [',','!','.','?','#','/']
global.owner = ['6282230819722', '6282230819722@s.whatsapp.net']
global.premium = ['6282230819722', '6282230819722@s.whatsapp.net']
  global.store = makeInMemoryStore({
    logger: pino().child({
      level: "silent", stream: "store"
    }),
  });

  const startConnect = async () => {
    
    const {
      state, saveCreds
    } = await useMultiFileAuthState(
      "./utils/baileys/sessions"
    );
    let {
      version, isLatest
    } = await fetchLatestBaileysVersion();
    const conn = Baileys({
      printQRInTerminal: true,
      auth: state,
      logger: pino({
        level: "silent"
      }),
      version,
      patchMessageBeforeSending: (message) => {
        const requiresPatch = !!(
          message.buttonsMessage ||
          message.templateMessage ||
          message.listMessage
        );
        if (requiresPatch) {
          message = {
            viewOnceMessageV2: {
              message: {
                messageContextInfo: {
                  deviceListMetadataVersion: 2,
                  deviceListMetadata: {},
                },
                ...message,
              },
            },
          };
        }
        
        return message;
      },
    });
    
    conn.ev.on("messages.upsert",
      async (chatUpdate) => {
        const chat = chatUpdate.messages[0];
        if(!chat.message) return
        chat.message = (Object.keys(chat.message)[0] === 'ephemeralMessage') ? chat.message.ephemeralMessage.message : chat.message
        if (chat.key && chat.key.remoteJid === 'status@broadcast') return
        if (chat.key.id.startsWith("BAE5") && chat.key.id.length === 16) return;
        const type = chat.message ? Object.keys(chat.message)[0]: "";
        if (chat && type == "protocolMessage") conn.ev.emit("message.delete", chat.message.protocolMessage.key);
          m = smsg(conn, chat)
          
      //  require("./handler/autoread-story")(ms, conn);
        require("./hisoka")(conn, m, chatUpdate)
        
      });
      
   conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
 let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
 let buffer
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
 } else {
buffer = await videoToWebp(buff)
 }
 
 await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
 return buffer
   }
   
conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
}

return buffer
} 

  conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
 let vtype
 if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessageV2.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessageV2.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessageV2.message
}
}
 
 let mtype = Object.keys(message.message)[0]
 let content = await generateForwardMessageContent(message, forceForward)
 let ctype = Object.keys(content)[0]
 let context = {}
 if (mtype != "conversation") context = message.message[mtype].contextInfo
 content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
 }
 const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
 } : {})
 await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
 return waMessage
}

   conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
  }

conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

   conn.linkUp = async (jid, tex, url, img, ttle, bdy, qtd = []) => {
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
extendedTextMessage: {
 text: tex, contextInfo: {mentionedJid: qtd, externalAdReply: {title: ttle, body: bdy, renderLargerThumbnail: true, mediaType: 1, mediaUrl: url, sourceUrl: url, thumbnail: img}}
},
}), {});conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
   conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
   
      conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.ev.on("creds.update", saveCreds);
store.bind(conn.ev);

    conn.ev.on("contacts.update",
      (m) => {
        const decodeJid = (jid) => {
          if (/:\d+@/gi.test(jid)) {
            const decode = jidDecode(jid) || {};
            return (
              (decode.user && decode.server && decode.user + "@" + decode.server) ||
              jid
            ).trim();
          } else return jid;
        };
        for (let kontak of m) {
          let jid = decodeJid(kontak.id);
          if (store && store.contacts)
            store.contacts[jid] = {
            jid,
            name: kontak.notify
          };
        }
      });

    conn.ev.on("connection.update",
      async (connect) => {
        const {
          lastDisconnect,
          connection
        } = connect;
        if (connection == "connecting")
          console.log("[ Start ] Connecting to the WhatsApp Bot...");
        if (connection == "open")
          console.log("[ Start ] Successfully connected to whatsapp");
        if (connection) {
          if (connection != "connecting")
            console.log("[ Start ] Connection: " + connection);
        }
        if (connection === "close") {
          let reason = new Boom(lastDisconnect.error).output.statusCode;
          if (reason === DisconnectReason.badSession) {
            console.log(
              `Bad Session File, Please Delete ${session} and Scan Again`
            );
            conn.logout();
          } else if (reason === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            startConnect();
          } else if (reason === DisconnectReason.connectionLost) {
            console.log("Connection Lost from Server, reconnecting...");
            startConnect();
          } else if (reason === DisconnectReason.connectionReplaced) {
            console.log(
              "Connection Replaced, Another New Session Opened, Please Close Current Session First"
            );
            conn.logout();
          } else if (reason === DisconnectReason.loggedOut) {
            console.log(
              `Device Logged Out, Please Delete ${session} and Scan Again.`
            );
            conn.logout();
          } else if (reason === DisconnectReason.restartRequired) {
            console.log("Restart Required, Restarting...");
            startConnect();
          } else if (reason === DisconnectReason.timedOut) {
            console.log("Connection TimedOut, Reconnecting...");
            startConnect();
          } else {
            conn.end(`Unknown DisconnectReason: ${reason}|${lastDisconnect.error}`);
          }
        }
      });

    /*
  conn.ws.on("CB:call", async (json) => {
		if (json.content[0].tag == "offer") {
			conn.sendMessage(json.content[0].attrs["call-creator"], {
				text: `Nomor kamu akan di-banned karena melanggar aturan.`
			});
			await require("delay")(8000);
			await conn.updateBlockStatus(json.content[0].attrs["call-creator"], "block");
		}
	});
	*/

    // Wellcome handler
/*    conn.ev.on("group-participants.update",
      async (m) => {
        require("./handler/welcome")(conn, m)
      });*/
      
    // message handler
    

  };

  startConnect();
  
  let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})