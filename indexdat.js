/**
 * * Create By Dika Ardnt.halo
 * * Contact Me on wa.me/6288292024190
 * * Follow https://github.com/DikaArdnt
 * */
 /**
  * * Create By Dika Ardnt.
  * * Contact Me on wa.me/6288292024190
  * * Follow https://github.com/DikaArdnt
  * */
  const fs = require('fs')
  const chalk = require('chalk')
  /*const axios = require('axios')*/
  
  // Website Api
  global.APIs = {
zenz: 'https://zenzapi.xyz',
  }
  
  // Apikey Website Api
  global.APIKeys = {
'https://zenzapi.xyz': 'Your Key',
  }
  
  // Other
  
  global.chatDB = []
  global.friend = ['6281232646925@s.whatsapp.net','6285645867736@s.whatsapp.net', '6285735943384@s.whatsapp.net', '6283167714830@s.whatsapp.net', '85298460539@s.whatsapp.net', '6281546767920@s.whatsapp.net', '6281327441039@s.whatsapp.net','6285708245723@s.whatsapp.net', '6281381805728@s.whatsapp.net', '6285785054965@s.whatsapp.net', '6285815427062@s.whatsapp.net', '6285812329872@s.whatsapp.net', '6285607586882@s.whatsapp.net', '6285244139602@s.whatsapp.net', '6281232646951@s.whatsapp.net', '6285748931271@s.whatsapp.net', '6281615097730@s.whatsapp.net', '6281216694714@s.whatsapp.net', '6285759790621@s.whatsapp.net', '6281554817088@s.whatsapp.net', '6281554824661@s.whatsapp.net', '6281615978155@s.whatsapp.net', '6281232646955@s.whatsapp.net', '6285812227231@s.whatsapp.net', '6285706379396@s.whatsapp.net', '6282230819722@s.whatsapp.net', '6287881033411@s.whatsapp.net', '6285731169379@s.whatsapp.net', '6281615378493@s.whatsapp.net', '6281232646957@s.whatsapp.net', '6282131600454@s.whatsapp.net', '6285859456817@s.whatsapp.net', '6283156403405@s.whatsapp.net', '6281232646952@s.whatsapp.net', '6281232646927@s.whatsapp.net', '6287878607374@s.whatsapp.net', '6285784580861@s.whatsapp.net', '6281554551692@s.whatsapp.net', '6281806454513@s.whatsapp.net', '6285804820803@s.whatsapp.net', '6285832831782@s.whatsapp.net', '6281546767925@s.whatsapp.net', '6281387757112@s.whatsapp.net', '6281232646768@s.whatsapp.net' ]
  kickadd = JSON.parse(fs.readFileSync('./database/kick.json'))
  global.bug = JSON.parse(fs.readFileSync('./database/bug.json'))
  global.insta = JSON.parse(fs.readFileSync('./database/insta.json'))
  /*global.coomd = JSON.parse(fs.readFileSync('./database/user.json'))*/
  global.ban = ["6281553391495@s.whatsapp.net"]
  global.owner = ['6281232646925@s.whatsapp.net', '6283167714830@s.whatsapp.net', '85298460539@s.whatsapp.net', '6281546767920@s.whatsapp.net', '6282230819722', '6281327441039@s.whatsapp.net', '6282230819722@s.whatsapp.net']
  global.premium = ['6288292024190']
  global.packname = '@per_1440\n\n\n\n\n\n\n\n\n\n'
  global.author = 'P-Bot WhatsApp free sticker maker\n\n\n\n\n\n\n\n\n\n\n\n'
  global.sessionName = 'hisoka'
  global.prefa = [',','!','.','?','#','/']
  global.sp = 'тнФ'
  //global.pub = true
  global.mess = {
success: 'Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
  }
  global.limitawal = {
premium: "Infinity",
free: 100
  }
  
  /*let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })*/
  
  const { default: connConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage/*, makeInMemoryStore*/, jidDecode, proto } = require("@adiwajshing/baileys")
  const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
  const pino = require('pino')
  const { Boom } = require('@hapi/boom')
  /*const fs = require('fs')
  const chalk = require('chalk')*/
  const FileType = require('file-type')
  const path = require('path')
  const { exec, spawn, execSync } = require("child_process")
  const PhoneNumber = require('awesome-phonenumber')
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExifBug, writeExifNew} = require('./lib/exif')
  const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
  
/*  var low
  try {
low = require('lowdb')
  } catch (e) {
low = require('./lib/lowdb')
  }
  const { Low, JSONFile } = low*/
  
  global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
  /*const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })*/
  /*global.db = new Low(new JSONFile(`src/database.json`))
  global.db.data = {
  users: {},
  chats: {},
  sticker: {},
  database: {},
  game: {},
  settings: {},
  others: {},
  ...(global.db.data || {})
  }
  */
  /*if (global.db) setInterval(async () => {
  if (global.db.data) await global.db.write()
  }, 30 * 1000)*/
  
async function startHisoka() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const conn = connConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Bot Multi Device','Chrome','1.0.0'],
auth: state,
version
})

/*store.bind(conn.ev)*/

conn.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let pa7rick = await conn.sendMessage(callerId, {contacts: {displayName: '1',contacts:[{
"displayName": "Perwira Kusuma (Owner)",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Perwira Kusuma (Owner);;;\nFN:Perwira Kusuma (Owner)\nitem1.TEL;waid=6282230819722:+62 822-3081-9722\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Kamu menelfon bot hubungi owner untuk di unblock\nX-WA-BIZ-NAME:Perwira Kusuma (Owner)\nEND:VCARD",
"contextInfo": {
  externalAdReply:{title: 'Per144 (Subscribe Now)', body: 'Support me on YouTube - Click here',mediaUrl: 'https://www.youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w', sourceUrl: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w', mediaType: 0, renderLargerThumbnail: true, showAdAttribution: true}
}
}]
}
})
await sleep(3000)
conn.sendMessage(callerId, {text: 'Kamu melakukan pelanggaran yaitu menelfon bot, chat owner untuk diunblock.\n\nAnda akan diblokir dalam waktu 5 detik lagi'}, {quoted: pa7rick})
await sleep(5000)
await conn.updateBlockStatus(callerId, "block")
try {
let ppuser = await conn.profilePictureUrl(callerId, 'image')
} catch {
 let ppuser = './image/nothing.jpg'
}
conn.sendButGamc("6282230819722@s.whatsapp.net", [{ buttonId: `unblock23 ${callerId.split('@')[0]}`, buttonText: { displayText: 'Unblock' },type: 1}], `*Call Block User*\nhttps://wa.me/${callerId.split("@")[0]}`, '©P-Bot 2022\nThis is simple Bot WhatsApp', ppuser) 

}
})

conn.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
//if (!mek.key.fromMe && chatUpdate.type === 'notify') return
/*if(!global.owner.includes(mek.sender)) {
if(!conn.public) return a
}*/
//if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(conn, mek/*, store*/)
require("./hisoka")(conn, m, chatUpdate/*, store*/)
} catch (err) {
console.log(err)
}
})


// Setting
conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

/*  conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})*/

/*conn.getName = (jid, withoutContact  = false) => {
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === conn.decodeJid(conn.user.id) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}*/

/*  conn.presenceSubscribe = async (jid) => {
}*/
/*  conn.sendPresenceUpdate("composing", jid) => {
jid = args.join(" ")
}*/



conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await conn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:perwiraanjay111@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/perwira_kusuma1\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

conn.setStatus = (status) => {
conn.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

//conn.public = true

conn.serializeM = (m) => smsg(conn, m/*, store*/)

/*   conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting....");startHisoka(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting...");startHisoka();}
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting...");startHisoka()}
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting...");startHisoka()}
else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`);startHisoka()
}
console.log('Connected...', update)
})*/

conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); hisoka.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startHisoka(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startHisoka(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); hisoka.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); hisoka.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startHisoka(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startHisoka(); }
else if (reason === DisconnectReason.Multidevicemismatch) { console.log("Multi device mismatch, please scan again"); hisoka.logout(); }
else hisoka.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})
conn.ev.on('creds.update', saveState)

// Add Other
/** Send Button 5 Image
 * *
 * * @param {*} jid
 * * @param {*} text
 * * @param {*} footer
 * * @param {*} image
 * * @param [*] button
 * * @param {*} options
 * * @returns
 * */
 conn.sendButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
 let message = await prepareWAMessageMedia({ image: img }, { upload: conn.waUploadToServer })
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   imageMessage: message.imageMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButDoc = async (jid , text = '' , footer = '', docu, ic, mi, logos, but = [], options = {}) =>{
 let mgDoc = await prepareWAMessageMedia({ document: docu, jpegThumbnail: logos, fileName: ic, mimetype: mi}, { upload: conn.waUploadToServer })
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   documentMessage: mgDoc.documentMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButDoc2 = async (jid, foot = '', text1 = '', titl = '', bud = '',thum, surce, typ, _finame = '', doc = '', mimer= '', but = [], pio, gen = false) => {
 conn.sendMessage(jid, {document: {url: doc},
 fileName: _finame, mimetype: mimer, contextInfo: {
 externalAdReply: {
 title: titl,
 body: bud,
 sourceUrl: surce, 
 mediaUrl: surce, 
 renderLargerThumbnail: gen,
 mediaType: typ, 
 thumbnail: thum}},
 caption: text1,
 footer: foot,
 buttons: but,
 headerType: 4}, 
 {quoted: pio})
 }
 
 conn.sendVid = async (jid, uirl, options= {}) => {
 let message = await prepareWAMessageMedia({video: {url: uirl}, caption: "Tiktok Downloader"}, { upload: conn.waUploadToServer })
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 videoMessage: message.videoMessage,
 }), options)
 
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButVid = async (jid , text = '' , footer = '', iurl, but = [], options = {}) =>{
 let message = await prepareWAMessageMedia({video: {url: iurl}}, { upload: conn.waUploadToServer })
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   videoMessage: message.videoMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButGif = async (jid , text = '' , footer = '', iurl, but = [], options = {}) =>{
 let message = await prepareWAMessageMedia({video: iurl, gifPlayback:true, fileLength: 333}, { upload: conn.waUploadToServer })
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   videoMessage: message.videoMessage,
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
 /* let message = await prepareWAMessageMedia({ image: img }, { upload: conn.waUploadToServer })*/
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   locationMessage: {
 "jpegThumbnail": img},
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 conn.sendButtonText2 = async (jid , text = '' , footer = '', but = [], options = {}) =>{
 /* let message = await prepareWAMessageMedia({ image: img }, { upload: conn.waUploadToServer })*/
 var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
   /*imageMessage: message.imageMessage,*/
   "hydratedContentText": text,
   "hydratedFooterText": footer,
   "hydratedButtons": but
 }
 }
 }), options)
 conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 
 /**
* * 
* * @param {*} jid 
* * @param {*} buttons 
* * @param {*} caption 
* * @param {*} footer 
* * @param {*} quoted 
* * @param {*} options 
* */
conn.sendButDocLink = (jid, buttons = [], text, footer, link, img, doc, mim, namfile, quoted = '', options = {}) => {
let buttonMessage = {
doc,
mimetype: mim,
fileName: namfile,
contextInfo: {
externalAdReply: {
sourceUrl: link, 
mediaUrl: link, 
mediaType: 2, 
thumbnail: img}
},
text,
footer,
buttons,
headerType: 4,
...options
}
conn.sendMessage(jid, buttonMessage, {quoted, ...options})
}

conn.sendButDioc = async (jid, but = [], text1, foot, img) => {
conn.sendMessage(jid, {document: {url: 'setup.py'}, fileName: '𝗣-𝗕𝗼𝘁 ˢⁱᵐᵖˡᵉ ᵇᵒᵗ ʷʰᵃᵗˢᵃᵖᵖ', mimetype: "application/vnd.ms-excel", fileLength: 2222222222222222, jpegThumbnail: fs.readFileSync(img),
contextInfo: {
externalAdReply:{title: 'Viannna', body: 'My Instagram account - Follow now',mediaUrl: 'www.instagram.com/viiannn_a?r=nametag', sourceUrl: 'https://www.instagram.com/viiannn_a?r=nametag', mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true, showAdAttribution: true,thumbnail: fs.readFileSync('./image/vivi.jpg')}
},
caption: text1,
footer: foot,
buttons: but,
headerType: 4})
}

conn.sendButLocc = async (jid, but = [], text1, foot, img) => {
conn.sendMessage(jid, {location: {
degreesLongitude: 0,
degreesLatitude: 0,
jpegThumbnail: img},
caption: text1,
footer: foot,
buttons: but,
headerType: 4})
}


conn.sendButVidc = async (jid, but = [], text1, foot, ul) => {
conn.sendMessage(jid, {video: {url: ul},
caption: text1,
footer: foot,
buttons: but,
headerType: 4})
}
conn.sendButGamc = async (jid, but = [], text1, foot, ul) => {
conn.sendMessage(jid, {image: {url: ul},
caption: text1,
footer: foot,
buttons: but,
headerType: 4})
}


conn.sendButtonMenf = (jid, m, buttons = [], text, footer, quoted = '', options = {}) => {
let buttoniMessage = {
text,
mentions: [m],
footer,
buttons,
headerType: 2,
...options
}
conn.sendMessage(jid, buttoniMessage, { quoted, ...options })
}

conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
conn.sendMessage(jid, buttonMessage, { quoted, ...options })
}


/**
 * * 
 * * @param {*} jid 
 * * @param {*} text 
 * * @param {*} quoted 
 * * @param {*} options 
 * * @returns 
 * */
 conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })
 
 /**
* * 
* * @param {*} jid 
* * @param {*} path 
* * @param {*} caption 
* * @param {*} quoted 
* * @param {*} options 
* * @returns 
* */
conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}


/**
 * * 
 * * @param {*} jid 
 * * @param {*} path 
 * * @param {*} caption 
 * * @param {*} quoted 
 * * @param {*} options 
 * * @returns 
 * */
 conn.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
 let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
 return await conn.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
 }
 
 /**
* * 
* * @param {*} jid 
* * @param {*} path 
* * @param {*} quoted 
* * @param {*} mime 
* * @param {*} options 
* * @returns 
* */
conn.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
  let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
  return await conn.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

/**
 * * 
 * * @param {*} jid 
 * * @param {*} text 
 * * @param {*} quoted 
 * * @param {*} options 
 * * @returns 
 * */
 conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 
 /**
  * * 
  * * @param {*} jid 
  * * @param {*} path 
  * * @param {*} quoted 
  * * @param {*} options 
  * * @returns 
  * */
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
  
  conn.sendstikk = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifNew(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
  }
  
  conn.sendStickerBug = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author || options.categories)) {
buffer = await writeExifBug(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
  }
  
  /**
   * * 
   * * @param {*} jid 
   * * @param {*} path 
   * * @param {*} quoted 
   * * @param {*} options 
   * * @returns 
   * */
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
   
   /**
* * 
* * @param {*} message 
* * @param {*} filename 
* * @param {*} attachExtension 
* * @returns 
* */
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

conn.downloadAndSaveMediaMessage2 = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
 buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
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

/**
 * * 
 * * @param {*} jid 
 * * @param {*} path 
 * * @param {*} filename
 * * @param {*} caption
 * * @param {*} quoted 
 * * @param {*} options 
 * * @returns 
 * */
 /*  conn.sendImgVid = async (jid, lik) => {
 mimeaxig = ''
 let res = axios.head(lik)
 mimeaxig = res.headers['content-type']
 if(mimeaxig.split("/")[0] === "image"){
 return conn.sendMessage(jid, { image: await getBuffer(lik)}, {quoted: m})
 } else if(mimeaxig.split("/")[0] === "video"){
 return conn.sendMessage(jid, { video: await getBuffer(lik)}, {quoted: m})
 }
 }*/
 conn.linkUp = async (jid, tex, url, img, ttle, bdy, qtd = []) => {
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
extendedTextMessage: {
 text: tex, contextInfo: {mentionedJid: qtd, externalAdReply: {title: ttle, body: bdy, renderLargerThumbnail: true, mediaType: 1, mediaUrl: url, sourceUrl: url, thumbnail: img}}
},
}), {});conn.relayMessage(jid, template.message, { messageId: template.key.id })
 }
 conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await conn.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
 }
 
 /**
* * 
* * @param {*} jid 
* * @param {*} message 
* * @param {*} forceForward 
* * @param {*} options 
* * @returns 
* */
conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
 let vtype
 if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
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

conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
 //let copy = message.toJSON()
 let mtype = Object.keys(copy.message)[0]
 let isEphemeral = mtype === 'ephemeralMessage'
 if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
 }
 let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
 let content = msg[mtype]
 if (typeof content === 'string') msg[mtype] = text || content
 else if (content.caption) content.caption = text || content.caption
 else if (content.text) content.text = text || content.text
 if (typeof content !== 'string') msg[mtype] = {
...content,
...options
 }
 if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
 else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
 if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
 else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
 copy.key.remoteJid = jid
 copy.key.fromMe = sender === conn.user.id
 
 return proto.WebMessageInfo.fromObject(copy)
}


/**
* * 
* * @param {*} path 
* * @returns 
* */
conn.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
 let metadata = await conn.groupMetadata(anu.id)
 /**
* * @return 
* * @param {string} length Enter the length of the character you want to create.
* */

function gen(length) {
if(length < 1) Err('You must enter a number greater than 1!')
else{
let a = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789abcdefghijklnmopqrstuvwxyz'
let temp = ''
for (let i = 0; i < length; i++) {
  var land = Math.floor(Math.random() * a.length)
  temp += a[land]
}
return temp
}
}

let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User


if (anu.action == 'add') {
/*conn.sendMessage(anu.id, {text: "Selamat datang"})*/
 /* let namanya = conn.getName(num)*/
 /*
let capti = `*Selamat datang di grup*
*${metadata.subject.replace(/[\n]/g, ' ')}*

Halo @${num.split("@")[0]}
Perkenalkan diri anda

*Nama Panggilan:* ...
*Asal kota:* ...
*Umur:* ...

*Baca rules grup!!!*`

salma = async () => {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = fs.readFileSync('./image/nothing.jpg')
}
*/
// Get Profile Picture Group
/*
try {
ppgroup = await conn.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = fs.readFileSync('./image/nothing.jpg')
}
var pathw = 'ouuti.png'

var knights = require('./lib/knights-canvas')
var image = await new knights.Welcome()
.setAvatar(ppuser)
.setUsername(`+${num.split("@")[0]}`)
.setGuildIcon(ppgroup)
.setMemberCount(`${metadata.participants.length}`) 
.setGuildName(`${metadata.subject.replace(/[\n]/g, ' ')}`)
.toAttachment();
let datai = image.toBuffer();
await fs.writeFileSync(pathw, datai)
}
await salma()
let gon = gen(12345)
await conn.linkUp(anu.id, `${capti}`, `https://whatsapp.com/${gon}`, fs.readFileSync('./ouuti.png'), `${metadata.subject.replace(/[\n]/g, ' ')}`, 'Sambutan untuk member baru', [`${num}`])
await fs.unlinkSync('ouuti.png')
*/
 /*conn.sendMessage(anu.id, {text: capti, contextInfo: {mentionedJid: [num], externalAdReply: {mediaUrl: `https://whatsapp.com/${gon}`, sourceUrl: `https://whatsapp.com/${gon}`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync('./ouuti.png')}}})*/
} else if (anu.action == 'remove') {
/*conn.relayMessage(anu.id, template.message)*/
}
}
} catch (err) {
 console.log(err)
}
})

conn.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
 mime: 'application/octet-stream',
 ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
 res,
 filename,
 size: await getSizeMedia(data),
 ...type,
 data
}

}

return conn
  }
  
startHisoka().catch(err => {startHisoka()})
  
  
  /*let file = require.resolve(__filename)
  fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
  })*/
  
