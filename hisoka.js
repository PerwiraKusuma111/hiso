/**
* Create By Dika Ardnt.
* Contact Me on wa.me/6288292024190
* Follow https://github.com/DikaArdnt
*/
/**
* Create By Dika Ardnt.
* Contact Me on wa.me/6288292024190
* Follow https://github.com/DikaArdnt
*/


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

// read database
/*
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
*/
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = conn = async (conn, m, chatUpdate, store) => {
try {
	var cmd = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var prefix = /^[!?#/.,]/.test(cmd) ? cmd.match(/^[!?#/.,]/gi) : "/"
var body = (m.mtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption.startsWith(prefix) ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption.startsWith(prefix) ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text.startsWith(prefix) ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
/*var prefix = prefa ? /^[!?#$/.,]/gi.test(body) ? body.match(/^[!?#$/.,]/gi)[0] : "" : prefa ?? global.prefix*/
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOff = [...global.udah].includes(m.chat)
const isBan = [...global.ban].includes(m.chat)
const isSimi = [...global.simi]/*.map(v => v.replace(/[^0-9]/g, '') + '@g.us')*/.includes(m.chat)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isOffline = !m.isGroup ? global.offline.includes("offline") : false
const simo = args.join("")
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
  /*  let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
*/
let chats = global.db.data.chats[m.chat]
/* if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
		*/
	let setting = global.db.data.settings[botNumber]
/*if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	} else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	}
	*/
} catch (err) {
console.error(err)
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
 /*let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

	// auto set bio
	if (db.settings[botNumber].autobio) {
	let setting = global.db.data.settings[botNumber]
	if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await conn.setStatus(`${conn.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	}
	}
	*/
	  // Anti Link

  // Mute Chat
/*  if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
  return
  }*/
/*
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}
	
	if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
conn.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}
*/

/*
//TicTacToe
	this.game = this.game ? this.game : {}
	let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	if (room) {
	let ok
	let isWin = !1
	let isTie = !1
	let isSurrender = !1
	// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	isSurrender = !/^[1-9]$/.test(m.text)
	if (m.sender !== room.game.currentTurn) { // nek wayahku
	if (!isSurrender) return !0
	}
	if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	m.reply({
	'-3': 'Game telah berakhir',
	'-2': 'Invalid',
	'-1': 'Posisi Invalid',
	0: 'Posisi Invalid',
	}[ok])
	return !0
	}
	if (m.sender === room.game.winner) isWin = true
	else if (room.game.board === 511) isTie = true
	let arr = room.game.render().map(v => {
	return {
	X: '❌',
	O: '⭕',
	1: '1️⃣',
	2: '2️⃣',
	3: '3️⃣',
	4: '4️⃣',
	5: '5️⃣',
	6: '6️⃣',
	7: '7️⃣',
	8: '8️⃣',
	9: '9️⃣',
	}[v]
	})
	if (isSurrender) {
	room.game._currentTurn = m.sender === room.game.playerX
	isWin = true
	}
	let winner = isSurrender ? room.game.currentTurn : room.game.winner
	let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
	await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
	if (isTie || isWin) {
	delete this.game[room.id]
	}
	}

//Suit PvP
	this.suit = this.suit ? this.suit : {}
	let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	if (roof) {
	let win = ''
	let tie = false
	if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	delete this.suit[roof.id]
	return !0
	}
	roof.status = 'play'
	roof.asal = m.chat
	clearTimeout(roof.waktu)
	//delete roof[roof.id].waktu
	conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	roof.waktu_milih = setTimeout(() => {
	if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	else if (!roof.pilih || !roof.pilih2) {
	win = !roof.pilih ? roof.p2 : roof.p
	conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	}
	delete this.suit[roof.id]
	return !0
	}, roof.timeout)
	}
	let jwb = m.sender == roof.p
	let jwb2 = m.sender == roof.p2
	let g = /gunting/i
	let b = /batu/i
	let k = /kertas/i
	let reg = /^(gunting|batu|kertas)/i
	if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	roof.pilih = reg.exec(m.text.toLowerCase())[0]
	roof.text = m.text
	m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	}
	if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	roof.text2 = m.text
	m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	}
	let stage = roof.pilih
	let stage2 = roof.pilih2
	if (roof.pilih && roof.pilih2) {
	clearTimeout(roof.waktu_milih)
	if (b.test(stage) && g.test(stage2)) win = roof.p
	else if (b.test(stage) && k.test(stage2)) win = roof.p2
	else if (g.test(stage) && k.test(stage2)) win = roof.p
	else if (g.test(stage) && b.test(stage2)) win = roof.p2
	else if (k.test(stage) && b.test(stage2)) win = roof.p
	else if (k.test(stage) && g.test(stage2)) win = roof.p2
	else if (stage == stage2) tie = true
	conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	delete this.suit[roof.id]
	}
	}
	
	let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	 */
	
	//Updatenya
	/*fs.readdirSync('./commands').forEach((file) => {
if (path.extname(file).toLowerCase() == '.js') {
eval(fs.readFileSync('./commands/' + file,  'utf8'))
}
})*/


switch(command) {
	 /*case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
conn.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
	case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n13k Per Group via E-Walet 1 Month\n18k via pulsa 1 Month\n\n Premium Price Bot\n8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6288292024190 (Owner)\n\nDonate For Me : \n\nPaypal : https://www.paypal.me/Cakhaho\nSaweria : https://saweria.co/DikaArdnt` }, { quoted: m })
}
break
case 'sc': {
m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star\n\nDonate : 6281615075793 (Link Aja)\nSaweria : https://saweria.co/DikaArdnt\nPaypal : https://www.paypal.me/Cakhaho\n\n Dont Forget Donate')
}
break
*/
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) return m.reply('*Option :*\n1. archive\n2. unarchive\n3. read\n4. unread\n5. delete')
if (args[0] === 'archive') {
conn.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
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
/*
	case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await conn.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
*/
case 'tebak': {
if (!text) throw `Contoh : ${prefix + command} lagu\n*Option :* \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await conn.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
conn.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break

case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
conn.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'jodohku': {
if (!m.isGroup) return m.reply(mess.group)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, jawab, 'Perwira Bot WhatsApp', m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) return m.reply(mess.group)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, jawab, conn.user.name, m, {mentions: menst})
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await conn.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Contoh : ${prefix + command} packname|author`
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
}
break

case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) return m.reply(`Tag orangnya\nContoh: ${prefix}${command} @orangnya`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) return m.reply(`Masukkan nomor\nContoh: ${prefix}${command} 62+++++++++++`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) return m.reply(`Tag orangnya\nContoh: ${prefix}${command} @orangnya`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
/*if (!isCreator) return m.reply("_Only for Owner_")*/
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) return m.reply(`Tag orangnya\nContoh: ${prefix}${command} @orangnya`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Done')).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if(!text) return m.reply("_Tag atau masukkan nomor")
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if(!text) return m.reply("_Tag atau masukkan nomor")
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'setname': case 'setsubject': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await conn.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setnam': case 'setsub': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await conn.groupUpdateSubject(`${text}`, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
  case 'setdesc': case 'setdesk': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await conn.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
  case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await conn.downloadAndSaveMediaMessage(quoted)
await conn.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setpp': case 'ppchange': case 'changepp': {
	if(!isCreator) return m.reply("Khusus Owner")
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await conn.downloadAndSaveMediaMessage(quoted)
await conn.updateProfilePicture(`${text}`, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgrouup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
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
teks += `@${mem.id.split('@')[0]} `
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
	/*case 'style': case 'styletext': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
	}
	break
case 'vote': {
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Contoh: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: conn.user.name,
buttons: buttonsVote,
headerType: 1
}
conn.sendMessage(m.chat, buttonMessageVote)
	}
break
case 'upvote': {
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: conn.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
conn.sendMessage(m.chat, buttonMessageUpvote)
	}
 break
case 'devote': {
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: conn.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
conn.sendMessage(m.chat, buttonMessageDevote)
	}
break
 
case 'cekvote':
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${conn.user.id}
`
conn.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	}
break*/
case 'group': case 'grup': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
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
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
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
 /*case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Mode Antilink`, conn.user.name, m)
}
 }
 break*/
 /*case 'mute': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${conn.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${conn.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Mute Bot`, conn.user.name, m)
}
 }
 break*/
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply(mess.group)
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await conn.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await conn.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} fatih-san`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Script',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Info Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  conn.send5ButImg(i, txt, conn.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
  /*  m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)*/
		for (let yoi of anu) {
		
		/* let btn = [{
urlButton: {
displayText: 'Script',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Info Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  conn.send5ButImg(yoi, txt, conn.user.name, global.thumb, btn)*/
  await sleep(4000)
  conn.sendMessage(yoi, {text: `${text}`}, '')
		}
		m.reply('Sukses Broadcast')
}
break
case 'bckhus':{
	if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} fatih-san`
	let hunu = [
	"6285226629295@s.whatsapp.net",
	"628988847597@s.whatsapp.net",
	"62895336319587@s.whatsapp.net",
	"628979939377@s.whatsapp.net",
	"6281522825576@s.whatsapp.net",
	"6285795633174@s.whatsapp.net",
	"62895423478398@s.whatsapp.net",
	"6283171605607@s.whatsapp.net",
	"6281232646768@s.whatsapp.net",
	"6282230819722@s.whatsapp.net",
	"6285875005861@s.whatsapp.net",
	"6281239199485@s.whatsapp.net",
	"6282132078901@s.whatsapp.net",
	"6283135493117@s.whatsapp.net",
	"6287713842840@s.whatsapp.net",
	"6287749818580@s.whatsapp.net",
	"6283829752934@s.whatsapp.net",
	"6287882877431@s.whatsapp.net",
	"6285854719703@s.whatsapp.net",
	"601131720334@s.whatsapp.net",
	"6288804077758@s.whatsapp.net",
	"6281233471178@s.whatsapp.net",
	"6288742518009@s.whatsapp.net",
	"6282278931330@s.whatsapp.net",
	"6281220951879@s.whatsapp.net",
	"6282140820193@s.whatsapp.net",
	"6288211600060@s.whatsapp.net",
	"6282330365705@s.whatsapp.net",
	"6287773104099@s.whatsapp.net",
	"6285691091094@s.whatsapp.net",
	"6288213207821@s.whatsapp.net",
	"6287860052921@s.whatsapp.net",
	"6281517747290@s.whatsapp.net",
	"6288286590544@s.whatsapp.net",
	"6287724980413@s.whatsapp.net",
	"6285870767819@s.whatsapp.net",
	"6281947053327@s.whatsapp.net",
	"6285706483923@s.whatsapp.net",
	"628979530736@s.whatsapp.net",
	"6288276389517@s.whatsapp.net",
	"6282289970824@s.whatsapp.net",
	"6282210836752@s.whatsapp.net",
	"6285361763208@s.whatsapp.net",
	"6282332222307@s.whatsapp.net",
	"6289693149789@s.whatsapp.net",
	"6283156687953@s.whatsapp.net",
	"628987972049@s.whatsapp.net",
	"6283825289325@s.whatsapp.net",
	"6282131284203@s.whatsapp.net",
	"6281271733745@s.whatsapp.net",
	"6282119820744@s.whatsapp.net",
	"6283157766473@s.whatsapp.net",
	"6287851305872@s.whatsapp.net",
	"6283173175224@s.whatsapp.net",
	"6287883400128@s.whatsapp.net",
	"6288276447093@s.whatsapp.net",
	"6285608918878@s.whatsapp.net",
	"6283861297860@s.whatsapp.net",
	"628887809106@s.whatsapp.net",
	"6285559002866@s.whatsapp.net",
	"6285759392881@s.whatsapp.net",
	"6282143415448@s.whatsapp.net",
	"6281946945315@s.whatsapp.net",
	"6287755826850@s.whatsapp.net",
	"6281717339472@s.whatsapp.net",
	"6281235152671@s.whatsapp.net",
	"6282147828007@s.whatsapp.net",
	"6285945646705@s.whatsapp.net",
	"628818763270@s.whatsapp.net",
	"6281938807091@s.whatsapp.net",
	"6281327441039@s.whatsapp.net",
	"60194780929@s.whatsapp.net",
	"16075336978@s.whatsapp.net",
	"6285365349803@s.whatsapp.net",
	"6281275222648@s.whatsapp.net",
	"6281288572373@s.whatsapp.net",
	"6281231191651@s.whatsapp.net",
	"6281268161672@s.whatsapp.net",
	"62895801064800@s.whatsapp.net",
	"6289529448874@s.whatsapp.net",
	"6282123987449@s.whatsapp.net",
	"6285231028129@s.whatsapp.net",
	"62887436086778@s.whatsapp.net",
	"60189070078@s.whatsapp.net",
	"6281386851154@s.whatsapp.net",
	"6285856760275@s.whatsapp.net",
	"6285714753105@s.whatsapp.net",
	"6281585278066@s.whatsapp.net",
	"628125895306@s.whatsapp.net",
	"6285298729149@s.whatsapp.net",
	"628818845991@s.whatsapp.net",
	"19593010524@s.whatsapp.net",
	"6285782532180@s.whatsapp.net",
	"12708070343@s.whatsapp.net",
	"6285718620853@s.whatsapp.net",
	"6283890798608@s.whatsapp.net",
	"6285725397493@s.whatsapp.net",
	"628568390231@s.whatsapp.net",
	"6282158338101@s.whatsapp.net",
	"6281806884445@s.whatsapp.net",
	"6285651152822@s.whatsapp.net",
	"6288287255420@s.whatsapp.net",
	"6283871248804@s.whatsapp.net",
	"62895620106449@s.whatsapp.net",
	"6282183880844@s.whatsapp.net",
	"6283137550315@s.whatsapp.net",
	"6285762179624@s.whatsapp.net",
	"6283181190038@s.whatsapp.net",
	"6283809577348@s.whatsapp.net",
	"6281250236557@s.whatsapp.net",
	"573135715362@s.whatsapp.net",
	"6285232037071@s.whatsapp.net",
	"6285693492107@s.whatsapp.net",
	"6285751919200@s.whatsapp.net",
	"6285877280524@s.whatsapp.net",
	"6287765955947@s.whatsapp.net",
	"6282271297919@s.whatsapp.net",
	"6283832650680@s.whatsapp.net",
	"6288223605655@s.whatsapp.net",
	"6281331585437@s.whatsapp.net",
	"6283827376628@s.whatsapp.net",
	"6289508585962@s.whatsapp.net",
	"6281234577108@s.whatsapp.net",
	"6281387757112@s.whatsapp.net",
	"62895630598539@s.whatsapp.net",
	"6281376702928@s.whatsapp.net",
	"6283119436816@s.whatsapp.net",
	"6282249291451@s.whatsapp.net",
	"6282158025967@s.whatsapp.net",
	"6285156022128@s.whatsapp.net",
	"6281252374599@s.whatsapp.net",
	"6282131418921@s.whatsapp.net",
	"6281232722095@s.whatsapp.net",
	"6289616674275@s.whatsapp.net",
	"628895197941@s.whatsapp.net",
	"6288212632307@s.whatsapp.net",
	"6281232646925@s.whatsapp.net",
	"6283161870888@s.whatsapp.net",
	"6285724279429@s.whatsapp.net",
	"62895635132883@s.whatsapp.net",
	"6287888818744@s.whatsapp.net",
	"628990374749@s.whatsapp.net",
	"3197010205760@s.whatsapp.net",
	"6282130684587@s.whatsapp.net",
	"6281913084312@s.whatsapp.net",
	"628994433872@s.whatsapp.net",
	"6288232194606@s.whatsapp.net",
	"6288279650089@s.whatsapp.net",
	"62818301179@s.whatsapp.net",
	"6285779440598@s.whatsapp.net",
	"6285795451039@s.whatsapp.net",
	"6285266851437@s.whatsapp.net",
	"6289508401306@s.whatsapp.net",
	"60183251397@s.whatsapp.net",
	"62859130893066@s.whatsapp.net",
	"6282394897698@s.whatsapp.net",
	"6283150795996@s.whatsapp.net",
	"6285363416654@s.whatsapp.net",
	"628819445871@s.whatsapp.net",
	"6287892241001@s.whatsapp.net",
	"6282282668945@s.whatsapp.net",
	"6288270880697@s.whatsapp.net",
	"6285282319576@s.whatsapp.net",
	"6281311234335@s.whatsapp.net",
	"6287848725227@s.whatsapp.net",
	"6289530961722@s.whatsapp.net",
	"6281476664834@s.whatsapp.net",
	"6281805461542@s.whatsapp.net",
	"6289531344234@s.whatsapp.net",
	"6281461624151@s.whatsapp.net",
	"6285731435556@s.whatsapp.net",
	"62895368533090@s.whatsapp.net",
	"6285315859714@s.whatsapp.net",
	"6281276781153@s.whatsapp.net",
	"6281945742756@s.whatsapp.net",
	"6288270825958@s.whatsapp.net",
	"6281274670988@s.whatsapp.net",
	"6285330109132@s.whatsapp.net",
	"6285820671022@s.whatsapp.net",
	"6289696331005@s.whatsapp.net",
	"6288213585250@s.whatsapp.net",
	"6281360739896@s.whatsapp.net",
	"6281234184412@s.whatsapp.net",
	"6288213467131@s.whatsapp.net",
	"6285754972778@s.whatsapp.net",
	"6281292902099@s.whatsapp.net",
	"6289518862536@s.whatsapp.net",
	"6288705515179@s.whatsapp.net",
	"6285862958087@s.whatsapp.net",
	"6287732685819@s.whatsapp.net",
	"6285648023492@s.whatsapp.net",
	"6281215918537@s.whatsapp.net",
	"6285793854165@s.whatsapp.net",
	"6288210625717@s.whatsapp.net",
	"6281227990164@s.whatsapp.net",
	"6281258301075@s.whatsapp.net",
	"628976488388@s.whatsapp.net",
	"6289523956903@s.whatsapp.net",
	"6285256071988@s.whatsapp.net",
	"6285752632171@s.whatsapp.net",
	"6285848300025@s.whatsapp.net",
	"6282197003698@s.whatsapp.net",
	"6281219824565@s.whatsapp.net",
	"6289514372125@s.whatsapp.net",
	"6283169380598@s.whatsapp.net",
	"6288298842243@s.whatsapp.net",
	"6283844452429@s.whatsapp.net",
	"6287721788512@s.whatsapp.net",
	"6285715430733@s.whatsapp.net",
	"62895411136357@s.whatsapp.net",
	"6285822556851@s.whatsapp.net",
	"6283832513298@s.whatsapp.net",
	"6283895075401@s.whatsapp.net",
	"6287705551733@s.whatsapp.net",
	"6289636842932@s.whatsapp.net",
	"6287725002274@s.whatsapp.net",
	"6281239240822@s.whatsapp.net",
	"6285861751401@s.whatsapp.net",
	"62882001708769@s.whatsapp.net",
	"6282324450835@s.whatsapp.net",
	"6283806211924@s.whatsapp.net",
	"6281343765765@s.whatsapp.net",
	"6281355834656@s.whatsapp.net",
	"6288744947768@s.whatsapp.net",
	"6281325770987@s.whatsapp.net",
	"62882003958778@s.whatsapp.net",
	"6282198819894@s.whatsapp.net",
	"628993796156@s.whatsapp.net",
	"6285755332441@s.whatsapp.net",
	"6287851556300@s.whatsapp.net",
	"628816589124@s.whatsapp.net",
	"6285235374005@s.whatsapp.net",
	"6287828068392@s.whatsapp.net",
	"6287834324804@s.whatsapp.net",
	"6285822002557@s.whatsapp.net",
	"6288289748137@s.whatsapp.net",
	"6281931618610@s.whatsapp.net",
	"6287742224321@s.whatsapp.net",
	"6281342920552@s.whatsapp.net",
	"6287864760697@s.whatsapp.net",
	"60172532485@s.whatsapp.net",
	"6282235993965@s.whatsapp.net",
	"62881036002374@s.whatsapp.net",
	"6285748958211@s.whatsapp.net",
	"6283137212572@s.whatsapp.net",
	"62895338185370@s.whatsapp.net",
	"6283121779311@s.whatsapp.net",
	"6283800667603@s.whatsapp.net",
	"6285859456817@s.whatsapp.net",
	"6281388504572@s.whatsapp.net",
	"6287748085190@s.whatsapp.net",
	"6281259896312@s.whatsapp.net",
	"6287713433356@s.whatsapp.net",
	"6287784981514@s.whatsapp.net",
	"6288707853977@s.whatsapp.net",
	"6287852551533@s.whatsapp.net",
	"6285719804570@s.whatsapp.net",
	"6287710263283@s.whatsapp.net",
	"6282343111136@s.whatsapp.net",
	"6285784504627@s.whatsapp.net",
	"6285651076039@s.whatsapp.net",
	"6281998057267@s.whatsapp.net",
	"6285695395659@s.whatsapp.net",
	"6289624531281@s.whatsapp.net",
	"6283825205832@s.whatsapp.net",
	"6285715745271@s.whatsapp.net",
	"6281350946587@s.whatsapp.net",
	"6285789713503@s.whatsapp.net",
	"6281273291041@s.whatsapp.net",
	"6288270887746@s.whatsapp.net",
	"6281269877322@s.whatsapp.net",
	"6283181311383@s.whatsapp.net",
	"6283140445073@s.whatsapp.net",
	"6282247018946@s.whatsapp.net",
	"6282267094750@s.whatsapp.net",
	"6283171490959@s.whatsapp.net",
	"6282336596051@s.whatsapp.net",
	"6289509739393@s.whatsapp.net",
	"6283173540497@s.whatsapp.net",
	"6285157200560@s.whatsapp.net",
	"6285607787830@s.whatsapp.net",
	"6281292720856@s.whatsapp.net",
	"6287731484077@s.whatsapp.net",
	"6285891927919@s.whatsapp.net",
	"6285761391237@s.whatsapp.net",
	"6281251068913@s.whatsapp.net",
	"6287814447247@s.whatsapp.net",
	"6281385149610@s.whatsapp.net",
	"6285786133071@s.whatsapp.net",
	"6285793430061@s.whatsapp.net",
	"62895340686671@s.whatsapp.net",
	"6285696530632@s.whatsapp.net",
	"6285648126053@s.whatsapp.net",
	"6287828821861@s.whatsapp.net",
	"6281617630597@s.whatsapp.net",
	"62895421837514@s.whatsapp.net",
	"6285373701646@s.whatsapp.net",
	"6282331345109@s.whatsapp.net",
	"6283123791571@s.whatsapp.net",
	"6289504221001@s.whatsapp.net",
	"62895405246161@s.whatsapp.net",
	"6281288169165@s.whatsapp.net",
	"6287788685300@s.whatsapp.net",
	"6281325870643@s.whatsapp.net",
	"62882000847488@s.whatsapp.net",
	"6281808858294@s.whatsapp.net",
	"6287847069704@s.whatsapp.net",
	"6282297631772@s.whatsapp.net",
	"6285805135794@s.whatsapp.net",
	"6281323990585@s.whatsapp.net",
	"6285290836197@s.whatsapp.net",
	"6283870135642@s.whatsapp.net",
	"6281242779127@s.whatsapp.net",
	"6282351430562@s.whatsapp.net",
	"6281386636674@s.whatsapp.net",
	"6282167473114@s.whatsapp.net",
	"6282231789998@s.whatsapp.net",
	"6285691775837@s.whatsapp.net",
	"601125246187@s.whatsapp.net",
	"6285883362685@s.whatsapp.net",
	"60136875102@s.whatsapp.net",
	"62881026969385@s.whatsapp.net",
	"6281908757450@s.whatsapp.net",
	"6283808173547@s.whatsapp.net",
	"6285156578605@s.whatsapp.net",
	"6281329889149@s.whatsapp.net",
	"6285280692168@s.whatsapp.net",
	"6283854660295@s.whatsapp.net",
	"6285394143008@s.whatsapp.net",
	"6283173473168@s.whatsapp.net",
	"6288291796673@s.whatsapp.net",
	"6283153427482@s.whatsapp.net",
	"6289634825222@s.whatsapp.net",
	"6289619834001@s.whatsapp.net",
	"6285767723008@s.whatsapp.net",
	"6285732067248@s.whatsapp.net",
	"62895360948691@s.whatsapp.net",
	"6289531677842@s.whatsapp.net",
	"6283174194561@s.whatsapp.net",
	"6287780873588@s.whatsapp.net",
	"6281266898934@s.whatsapp.net",
	"6283168261902@s.whatsapp.net",
	"6282165029322@s.whatsapp.net",
	"6281809637816@s.whatsapp.net",
	"6282257603343@s.whatsapp.net",
	"6283164104566@s.whatsapp.net"
]
for (let yop of hunu) {
	await sleep(4000)
conn.sendMessage(yop, {text: `${text}`}, '')
  }
}
break
case 'infochat': case 'sider':{
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `@${i.userJid.split('@')[0]}\n`
teks += ` ┗━*Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
conn.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await conn.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward("6281232646925@s.whatsapp.net", true)
}
	break
case 'listpcon':{
let anu = Object.keys(store.contacts)
let mes = `*Jumlah private chat :* ${anu.length}\n\n`
for(let _ of anu) {
let i = 1
	name = conn.getName(_)
mes += `*Name :* ${name}\n*Chat :* @${_.split("@")[0]}\n*Id :* ${_}\n\n`
	}
	conn.sendTextWithMentions(m.chat, mes, m)
}break
case 'listroom':{
let anu = Object.keys(store.chats.dict)
let mes = `*Jumlah grup chat :* ${anu.length}\n\n`
for(let _ of anu) {
let i = 1
	let name = await conn.groupMetadata(_).subject
mes += `*Name :* ${name}\n*Id :* ${_}\n\n`
	}
	conn.sendTextWithMentions(m.chat, mes, m)
}break
/*case 'listpc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 conn.sendTextWithMentions(m.chat, teks, m)
 }
 break*/
/*case 'listgc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await conn.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 conn.sendTextWithMentions(m.chat, teks, m)
 }
 break*/
 case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(m.chat, 'List Online:\n\n' + online.map(v => '@' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
  /*  case 'ebinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
m.reply(eb)
}
break
case 'dbinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let db = await dBinary(teks)
m.reply(db)
}
break*/
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
	/*case 'semoji': {
		try {
	if(!text) return m.reply(`Masukkan emoji nya!\n*Contoh :* ${prefix+command} 😎`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
		} catch {
			m.reply("Masukkan emoji yang jelas!")
			}
	}
	break*/
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'triggered':
case 'trigger':{
	if (!quoted) throw 'Reply Image'
    if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'trigger.jpg')
	yuricanvas = require("yuri-canvas");

    async function create() {
    let img = await yuricanvas.trigger(media);
    yuricanvas.write(img, "triggered.webp");
    conn.sendImageAsSticker(m.chat, fs.readFileSync(`./triggered.webp`), m, {packname: 'Sticker', author: 'Perwira Bot WhatsApp'})
}

create();
}
break
	case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

		let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

		let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {

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
case 'imagenobg': case 'removebg': case 'remove-bg': {
	if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	let remobg = require('remove.bg')
	let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
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
	}
	break
	case 'yts': case 'ytsearch': {
if (!text) throw `Contoh : ${prefix + command} story wa anime`
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
"rowId": `ytmp3 ${i.url}`
})
kunni.push({
"title": `${po++}.${i.title}`,
"description": `•Upload : ${i.ago}\n•Duration : ${i.timestamp}`,
"rowId": `ytmp4 ${i.url}`
})
}
let listMessage = {
text: 'Hasil penelusuran lain',
footer: `Perwira Bot WhatsApp`,
title: `*YouTube Search*\n\nIni adalah penelusuran yang ditemukan.`,
buttonText: "Hasil Penelusuran",
sections: [{
"title": `Hasil penelusuran dalam bentuk Audio`,
"rows": kunn}, {
"title": `Hasil penelusuran dalam bentuk Video`,
"rows": kunni
}],
}
conn.sendMessage(m.chat, listMessage)
  /*teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n\n─────────────────\n\n`*/

/* conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })*/
}
break
case 'google': {
if (!text) throw `Contoh : ${prefix + command} fatih arridho`
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
  /*  case 'gimage': {
if (!text) throw `Contoh : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break*/
case 'sewa': case 'sewabot':{
let texti = `*Sewa Bot*
1 Hari=1k
1 Minggu =5k
1 bulan=10k
Permanen=20k
Untuk melanjutkan chat owner`
let btnz = [{buttonId: 'menu', buttonText: {displayText: 'Menu'}, type:1}, {buttonId: 'owner', buttonText: {displayText: 'Owner'}, type:1}]
await conn.sendButtonText(m.chat, btnz, texti, `Perwira Bot WhatsApp`, m)
}
break
case 'gans': {
let texti = `Thanks you Jelek 😜`
let btnz = [{buttonId: 'menu', buttonText: {displayText: 'Menu'}, type:1}, {buttonId: 'owner', buttonText: {displayText: 'Owner'}, type:1}]
await conn.sendButtonText(m.chat, btnz, texti, `Perwira Bot WhatsApp`, m)
}
break
case 'tsticker':
case 'telesticker': 
case 'tstiker': {
	try {
			if (m.isGroup) return m.reply("Tidak bisa digunakan di group")
			if (!text) return m.reply(`Contoh: ${prefix+command} https://t.me/addstickers/geestickerpack`)
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
case 'tes':
let sections = [
{
title: "Section 1",
rows: [
{title: "Option 1", rowId: "option1"},
{title: "Option 2", rowId: "option2", description: "This is a description"}
]
},
{
title: "Section 2",
rows: [
{title: "Option 3", rowId: "option3"},
{title: "Option 4", rowId: "option4", 
description: "This is a description V2"}
]
},
]

let listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

await conn.sendMessage(m.chat, listMessage)
break
	case 'play': case 'ytplay': 
if (!text) throw `Contoh : ${prefix + command} story wa anime`
try {
let yts = require("yt-search")
let { yta } = require('./lib/y2mate')
let search = await yts(text)
let aramat = search.all
/*search.videos[Math.floor(Math.random() * search.videos.length)]*/
let res = await yta(`${search.videos[0].url}`)
/*let get_img = await getBuffer(res.thumb)*/
if (res.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "Perwira Bot WhatsApp", mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, mediaType: 1, thumbnail: fs.readFileSync(`./yt.png`)}}}, {}).catch((e) => m.reply(String(e))).then(() => {

let kunnu = []
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
footer: `Perwira Bot WhatsApp`,
title: `*YouTube Play*\n\nJika hasil diatas salah berikut\nadalah hasil penelusuran\nyang berbeda`,
buttonText: "Hasil Penelusuran",
sections: [{
"title": `Hasil penelusuran`,
"rows": kunnu
}],
}
conn.sendMessage(m.chat, listMessage)

	})
} catch(e) {
	m.reply(String(e))
	}
break
	  
case 'ytmp3': 
case 'ytaudio': 
try {
if(text.includes("youtu")) {
let { yta } = require('./lib/y2mate')
if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
/*let quality = args[1] ? args[1] : '360p'*/
let res = await yta(text)
  /*  let ythumb = await getBuffer(res.thumb)*/
if (res.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(res))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync(`./yt.png`)}}}, {}).catch((e) => m.reply(String(e)))
} else {
	m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
	m.reply(String(e))
	}

break

case 'ytmp4': 
case 'ytvideo': 
try {
if(text.includes("youtu")) {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
/*let quality = args[1] ? args[1] : '360p'*/
let res = await ytv(text)
if (res.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(res))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'video/mp4', fileName: `${res.title}.mp4`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync(`./yt.png`)}}},{})
} else {
	m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
	m.reply(String(e))
	}
break
	/* case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Contoh : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
conn.sendImage(m.chat, media.thumb, `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${urls[text - 1]}\nExt : MP3\nResolusi : ${args[1] || '128kbps'}`, m)
conn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Contoh : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
conn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Title : ${media.title}\nFile Size : ${media.filesizeF}\nUrl : ${urls[text - 1]}\nExt : MP3\nResolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break*/
 /*case 'pinterest': {
		let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat, { image: { url: result }, caption: 'Media Url : '+result }, { quoted: m })
}
break*/
case 'wikipedia':{
if(!q) return m.reply(`Masukkan query\n*Contoh :* ${prefix+command} Naruto`)
let axios = require("axios")
let cheerio = require("cheerio")
async function wikipedia(querry) {
  try {
const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $("meta[property=\"og:image\"]").attr('content') || `https://i.ibb.co/nzqPBpC/http-error-404-not-found.png`
/*let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`*/
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
  let penjelasan = $(Ra).find('p').text().trim()
  isi.push(penjelasan)
})
for (let i of isi) {
  const data = {
status: link.status,
result: {
  judul: judul,
  thumb: thumb,
  isi: i
}
  }
  return data
}
  } catch (err) {
var notFond = {
  status: link.status,
  Pesan: eror
}
return notFond
  }
}

wikipedia(text).then(res => {
	kunu = `*Judul :* ${res.result.judul}
	
	*Hasil penelusuran*
	${res.result.isi}
	`
conn.sendMessage(m.chat, {image: {url: res.result.thumb }, caption: kunu})
})
}break
case 'pinterest': 
			if(!q) return m.reply(`Masukkan query\n*Contoh :* ${prefix+command} Naruto`)
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
 /*  	let we = await getBuffer(res.image).catch(err => reply(`*Error*
${util.format(err)}`))*/
  	  conn.sendMessage(m.chat, {image: {url : res.image}, caption: 'From Pinterest', mimetype: 'image/jpeg'}, {quoted: m}).catch(e => m.reply(`*Error* ${String(e)}`))
  }).catch(e => m.reply(`*Error* ${String(e)}`))
 break
/*case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
m.reply(mess.wait)
conn.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
}
break
	case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
	break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `Title : ${result.title}\nSource : ${result.source}\nMedia Url : ${result.image}`,
footer: conn.user.name,
buttons: buttons,
headerType: 4
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
	case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
let buttons = [
{buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: anu.result.message,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!text) throw `Contoh : ${prefix + command} text`
m.reply(mess.wait)
conn.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	}
break
	case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
conn.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
conn.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
}
break*/
	case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Contoh : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nomor HP :* ${anu.message.nomer_hp}\n*Angka Shuzi :* ${anu.message.angka_shuzi}\n*Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n*Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Contoh : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Mimpi :* ${anu.message.mimpi}\n*Arti :* ${anu.message.arti}\n*Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama Suami :* ${anu.message.suami.nama}\n*Lahir Suami :* ${anu.message.suami.tgl_lahir}\n*Nama Istri :* ${anu.message.istri.nama}\n*Lahir Istri :* ${anu.message.istri.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama Anda :* ${anu.message.nama_anda.nama}\n*Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n*Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n*Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Life Path :* ${anu.message.life_path}\n*Destiny :* ${anu.message.destiny}\n*Destiny Desire :* ${anu.message.destiny_desire}\n*Personality :* ${anu.message.personality}\n*Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
conn.sendImage(m.chat,  anu.message.gambar, `*Nama Anda :* ${anu.message.nama_anda}\n*Nama Pasangan :* ${anu.message.nama_pasangan}\n*Sisi Positif :* ${anu.message.sisi_positif}\n*Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Tanggal Pernikahan :* ${anu.message.tanggal}\n*karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Rezeki :* ${anu.message.rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Lahir :* ${anu.message.hari_lahir}\n*Pekerjaan :* ${anu.message.pekerjaan}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Contoh : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Angka Akar :* ${anu.message.angka_akar}\n*Sifat :* ${anu.message.sifat}\n*Elemen :* ${anu.message.elemen}\n*Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Analisa :* ${anu.message.analisa}\n*Sektor :* ${anu.message.sektor}\n*Elemen :* ${anu.message.elemen}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendImage(m.chat, anu.message.image, `*Lahir :* ${anu.message.tgl_lahir}\n*Simbol Tarot :* ${anu.message.simbol_tarot}\n*Arti :* ${anu.message.arti}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tahun_lahir}\n*Gender :* ${anu.message.jenis_kelamin}\n*Angka Kua :* ${anu.message.angka_kua}\n*Kelompok :* ${anu.message.kelompok}\n*Karakter :* ${anu.message.karakter}\n*Sektor Baik :* ${anu.message.sektor_baik}\n*Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Kala Tinantang :* ${anu.message.kala_tinantang}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}\n*Info :* ${anu.message.info}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Hari Naas :* ${anu.message.hari_naas}\n*Info :* ${anu.message.catatan}\n*Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*Tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Naga Hari :* ${anu.message.arah_naga_hari}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Hari Lahir :* ${anu.message.hari_lahir}\n*tanggal Lahir :* ${anu.message.tgl_lahir}\n*Arah Rezeki :* ${anu.message.arah_rejeki}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Tanggal :* ${anu.message.tanggal}\n*Jumlah Neptu :* ${anu.message.jumlah_neptu}\n*Watak Hari :* ${anu.message.watak_hari}\n*Naga Hari :* ${anu.message.naga_hari}\n*Jam Baik :* ${anu.message.jam_baik}\n*Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Nama :* ${anu.message.nama}\n*Lahir :* ${anu.message.tgl_lahir}\n*Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Tanggal :* ${anu.message.tgl_memancing}\n*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Hasil :* ${anu.message.result}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Contoh : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Zodiak :* ${anu.message.zodiak}\n*Nomor :* ${anu.message.nomor_keberuntungan}\n*Aroma :* ${anu.message.aroma_keberuntungan}\n*Planet :* ${anu.message.planet_yang_mengitari}\n*Bunga :* ${anu.message.bunga_keberuntungan}\n*Warna :* ${anu.message.warna_keberuntungan}\n*Batu :* ${anu.message.batu_keberuntungan}\n*Elemen :* ${anu.message.elemen_keberuntungan}\n*Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n*Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
conn.sendText(m.chat, `*Hasil :* ${anu.message}`, m)
}
break
/*
	case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
if (!text) return m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
let [type, id, zone] = args
if (type.toLowerCase() == 'ff') {
if (!id) throw `No Query id, Contoh ${prefix + command} ff 552992060`
let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ml') {
if (!id) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
if (!zone) throw `No Query id, Contoh : ${prefix + command} ml 214885010 2253`
let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'aov') {
if (!id) throw `No Query id, Contoh ${prefix + command} aov 293306941441181`
let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'cod') {
if (!id) throw `No Query id, Contoh ${prefix + command} cod 6290150021186841472`
let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'pb') {
if (!id) throw `No Query id, Contoh ${prefix + command} pb riio46`
let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ig') {
if (!id) throw `No Query username, Contoh : ${prefix + command} ig cak_haho`
let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
if (anu.status == false) return m.reply(anu.result.message)
conn.sendMedia(m.chat, anu.caption.profile_hd, '', `Full Name : ${anu.caption.full_name}\nUser Name : ${anu.caption.user_name}\nID ${anu.caption.user_id}\nFollowers : ${anu.caption.followers}\nFollowing : ${anu.caption.following}\nBussines : ${anu.caption.bussines}\nProfesional : ${anu.caption.profesional}\nVerified : ${anu.caption.verified}\nPrivate : ${anu.caption.private}\nBio : ${anu.caption.biography}\nBio Url : ${anu.caption.bio_url}`, m)
		db.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'npm') {
if (!id) throw `No Query username, Contoh : ${prefix + command} npm scrape-primbon`
let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`Name : ${anu.name}\nVersion : ${Object.keys(anu.versions)}\nCreated : ${tanggal(anu.time.created)}\nModified : ${tanggal(anu.time.modified)}\nMaintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\nDescription : ${anu.description}\nHomepage : ${anu.homepage}\nKeywords : ${anu.keywords}\nAuthor : ${anu.author.name}\nLicense : ${anu.license}\nReadme : ${anu.readme}`)
		db.users[m.sender].limit -= 1
} else {
m.reply(`Contoh : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
}
}
break*/
	/* case 'tiktok': case 'tiktoknowm': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
let buttons = [
{buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.nowatermark },
caption: `Download From ${text}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'tiktokwm': case 'tiktokwatermark': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
let buttons = [
{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.watermark },
caption: `Download From ${text}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break*/
case 'ttmp4':
case 'tiktok':
case 'ttdl':
case 'tiktokdl':
case 'tiktoknowm':{
if (text.includes("tiktok.com")) {
	try {
let { TiktokDownloader } = require('./lib/scraper')
let res = await TiktokDownloader(text)
got_vid = await getBuffer(res.result.nowatermark).catch(e => m.reply("Error"))
conn.sendMessage(m.chat, {video: got_vid, mimetype: 'video/mp4'}, {quoted: m})
} catch(e) {
	m.reply(String(e))
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
	let { downloader } = require(`./lib/scraper`)
	let res = await downloader(text)
	conn.sendMessage(m.chat, {video: {url: `${res.medias[1].url}`}, mimetype: 'video/mp4', caption: '*Tiktok Downloader*'}, {quoted: m})
	} catch(e) {
	m.reply(String(e))
	}
	} else { m.reply(`Link yang anda masukkan tidak tepat!\nHarap masukkan link yang benar\n*Contoh :* ${prefix}ttdl2 https://vt.tiktok.com/ZSdeUA8T2/?k=1`) }
	}
break
case 'tiktokaudio2':
case 'ttmp32':
case 'tiktokmp32': {
if(text.includes("tiktok.com")) {
	try {
	let { downloader } = require(`./lib/scraper`)
	let res = await downloader(text)
	conn.sendMessage(m.chat, {audio: {url: `${res.medias[2].url}`}, mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `Tiktok Downloader`, body: "Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync('./tiktok.png')}}}, {})
	} catch(e) {
	m.reply(String(e))
	}
	} else { m.reply(`Link yang anda masukkan tidak tepat!\nHarap masukkan link yang benar\n*Contoh :* ${prefix+command} https://vt.tiktok.com/ZSdeUA8T2/?k=1`) }
	}
break
case 'tiktokaudio':
case 'ttmp3':
case 'tiktokmp3': {
if (text.includes("tiktok.com")) {
	try {
let { TiktokDownloader } = require('./lib/scraper')
let res = await TiktokDownloader(text)
let media = await getBuffer(res.result.nowatermark)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendAudio(m.chat, audio, '', ptt = false, {mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `Tiktok Downloader`, body: "Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync('./tiktok.png')}}})
} catch(e) {
	m.reply(String(e))
	}
} else {
	m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://vt.tiktok.com/ZSextfjoX/`)
}
}
break
case 'igdl':
case 'igmp4':
case 'igvideo':
case 'instagramvideo':
if (text.includes("instagram.com")) {
	try {
let { igdownloader } = require('./lib/igdown')
igdownloader(text).then(async res => {
conn.sendMedia(m.chat, res.result.link, '', `Instagram Downloader`, m)
/*conn.sendMessage(m.chat, {video: {url: `${res.result.link}`}, mimetype: 'video/mp4', caption: '*Instagram Downloader*'}, {quoted: m})*//*.catch(err => m.reply(`*Error*\n${String(err)}`))*/
})
} catch(e) {
	m.reply(String(e))
	}
} else {
m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CA6yOumDruJ/?utm_medium=copy_link`)
}
break
/*case 'igmp3':
case 'igvaudio':
case 'instagramaudio':
if (text.includes("instagram.com")) {
	try {
let { igdownloader } = require('./lib/igdown')
igdownloader(text).then(async res => {
let media = await getBuffer(res.result.link)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendAudio(m.chat, audio, '', ptt = false, {mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `Instagram Audio`, body: "Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync('./instagram.png')}}})
})
} catch(e) {
	m.reply(String(e))
	}
} else {
m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CA6yOumDruJ/?utm_medium=copy_link`)
}
break*/
/*case 'tiktokmp3': case 'tiktokaudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
let buttons = [
{buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
{buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
]
let buttonMessage = {
text: `Download From ${text}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
}
break*/
	/* case 'instagram': case 'ig': case 'igdl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
for (let media of anu.data) conn.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
} else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
conn.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
}
}
break
		
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)

let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
conn.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
}
break*/
  /*  case 'joox': case 'jooxdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
let msg = await conn.sendImage(m.chat, anu.result.img, `Title : ${anu.result.lagu}\nAlbum : ${anu.result.album}\nSinger : ${anu.result.penyanyi}\nPublish : ${anu.result.publish}\nLirik :\n${anu.result.lirik.result}`, m)
conn.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
}
break
case 'soundcloud': case 'scdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
let msg = await conn.sendImage(m.chat, anu.result.thumb, `Title : ${anu.result.title}\nUrl : ${isUrl(text)[0]}`)
conn.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
}
break*/
	/* case 'twitdl': case 'twitter': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.HD || anu.result.SD },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
		image: { url: anu.result.thumb },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 4
}
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
}
break
	case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
conn.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `Title : ${anu.result.title}`}, { quoted: m })
}
break*/
	 /*case 'pindl': case 'pinterestdl': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
conn.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
}
break*/
/* case 'umma': case 'ummadl': {
	if (!text) throw `Contoh : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
		let buttonMessage = {
		image: { url: anu.author.profilePic },
			caption: `
Title : ${anu.title}
Author : ${anu.author.name}
Like : ${anu.like}
Caption : ${anu.caption}
Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: conn.user.name,
			buttons,
			headerType: 4
		}
		conn.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		anu.media.map(async (url) => {
		conn.sendMessage(m.chat, { image: { url }, caption: `Title : ${anu.title}\nAuthor : ${anu.author.name}\nLike : ${anu.like}\nCaption : ${anu.caption}` }, { quoted: m })
		})
		}
	}
	break
case 'ringtone': {
		if (!text) throw `Contoh : ${prefix + command} black rover`
let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	}
	break
		case 'iqra': {
		oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		conn.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		conn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Contoh : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		conn.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'  
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
conn.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Contoh : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Contoh : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	}
	m.reply(teks)
	}
	break
case 'delmsg': case 'deletemsg': {
	let msgs = global.db.data.database
	if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
	break
	case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
conn.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await conn.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, conn.user.name, m)
}
			break
case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await conn.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, conn.user.name, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await conn.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, conn.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await conn.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, conn.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, conn.user.name, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await conn.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await conn.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, conn.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await conn.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, conn.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, conn.user.name, m)
}
break

}*/
case 'attp':
{
try {
  if (args.length == 0) return m.reply(`Contoh: ${prefix+command} Halo`)
  stik = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
  conn.sendMessage(m.chat, {sticker: stik, mimetype: 'image/webp'}, {quoted: m})
  } catch(e) {
	m.reply(String(e))
	}
  }
  break
case 'public': {
if (!isCreator) throw mess.owner
conn.public = true
m.reply('Sukse Change To Public Usage')
}
break
/*case 'offline': {
if (!isCreator) throw mess.owner
if (isOffline) return m.reply("Kamu sedang dalam mode Offline")
global.offline.push("offline")
global.udah.splice(global.udah)
m.reply('You now Offline')
}
break
case 'online': {
if (!isCreator) throw mess.owner
if (!isOffline) return m.reply("Kamu sedang dalam mode Online")
global.offline.splice("offline", 1)
global.udah.splice(global.udah)
m.reply('You now Online')
}
break*/

case 'self': {
if (!isCreator) throw mess.owner
conn.public = false
m.reply('Sukses Change To Self Usage')
}
break
/* case 'nulis':{
 	try {
									if (args.length < 1) return m.reply(`Kirim perintah *${prefix+command}* teks`)
									let tulisan = q
									let splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									let fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./src/snulis.jpg',
									'-font',
									'./src/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./src/buku.jpg'
									])
									.on('error', () => m.reply("Error"))
									.on('exit', () => {
									conn.sendMessage(from, fs.readFileSync('./src/buku.jpg'), {mimetype: "image/jpeg", caption: "_Done_"}, {quoted: m}, {})
									})
									} catch(err) {
										m.reply("Error")
										}
									}
									break*/
									case 'tr2':{
if (!text) return conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `Perwira Bot WhatsApp`, m)
	let texti = args.join(" ")
/*let text2 = texti.split("/")[0]
let text1 = texti.split("/")[1]*/
 /*let totyp = m.quoted.text*/
let tr = require("translate-google-api")
let _tr = await tr(`${texti}`, {to: 'auto'})
m.reply(_tr[0])
}

break
case 'translate':
case 'tr':{
try {
if (!text) return conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `Perwira Bot WhatsApp`, m)
if (text.includes("/")) {

let texti = args.join(" ")
let text2 = texti.split("/")[0]
let text1 = texti.split("/")[1]

let tr = require("translate-google-api")
let _tr = await tr(`${text1}`, {to: text2})
m.reply(_tr[0])
} /*else if(text) {
let texti = args.join(" ")
let tr = require("translate-google-api")
let _tr = await tr(`${texti}`, {to: 'auto'})
m.reply(_tr[0])
} */else if(quoted) {
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
}
} catch(e) {
/*m.reply(String(e))*/
conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `Perwira Bot WhatsApp`, m)
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
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
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
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'nulis':
	try {
if (!text) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
nulli = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/nulis?text=${encodeURI(q)}`)
await conn.sendMessage(m.chat, {image: nulli, mimetype: 'image/jpeg', caption: 'Done'}, {quoted: m}).catch((e) => m.reply(String(e)))
} catch(e) {
	m.reply(`${String(e)}`)
}break

case 'tahta':
	try {
if (!text) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
gimgt = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=PerwiraGans&text=${q}`)
await conn.sendMessage(m.chat, {image: gimgt, mimetype: 'image/jpeg', caption: "_Sudah jadi kak_"}, {quoted: m}).catch((e) => m.reply(`*Error*\n${String(e)}`))
} catch(e) {
	m.reply(`${String(e)}`)
	}
break
case 'owner': case 'creator': {
conn.sendContact(m.chat, global.owner, '')
}
break
case 'list': case 'menu': case 'help': case '?': 
if(m.isGroup) {
anu = `*List Menu*

*Group Menu*
⊳ ${prefix}kick
⊳ ${prefix}add
⊳ ${prefix}promote
⊳ ${prefix}demote
⊳ ${prefix}group
⊳ ${prefix}linkgc
⊳ ${prefix}tagall
⊳ ${prefix}hidetag
⊳ ${prefix}sider
⊳ ${prefix}setname
⊳ ${prefix}setppgc

*Tools Menu*
⊳ ${prefix}translate
⊳ ${prefix}google
⊳ ${prefix}wikipedia
⊳ ${prefix}tomp3
⊳ ${prefix}tovideo
⊳ ${prefix}tourl
⊳ ${prefix}get

*Sticker Menu*
⊳ ${prefix}sticker
⊳ ${prefix}toimg
⊳ ${prefix}tovideo
⊳ ${prefix}togif
⊳ ${prefix}triggered

*Download Menu*
⊳ ${prefix}play
⊳ ${prefix}ytsearch
⊳ ${prefix}ytmp3
⊳ ${prefix}ytmp4
⊳ ${prefix}ttmp3
⊳ ${prefix}ttmp4
⊳ ${prefix}igdl
⊳ ${prefix}telesticker
⊳ ${prefix}emojimix

*Maker Menu*
⊳ ${prefix}gura
⊳ ${prefix}loli
⊳ ${prefix}loli2
⊳ ${prefix}neko
⊳ ${prefix}catboy
⊳ ${prefix}ghoul

*Other Menu*
⊳ ${prefix}simi
⊳ ${prefix}nulis
⊳ ${prefix}tahta
⊳ ${prefix}attp
⊳ ${prefix}pinterest

*Attention!*
  Harap baca *rules*
`
/*let term = {
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {
extendedTextMessage: {
text: "Nama Bot",
}
}
}
}*/
let btnz = [{buttonId: 'owner', buttonText: {displayText: 'Owner'}, type:1},{buttonId: 'profile', buttonText: {displayText: 'Profile'}, type:1},{buttonId: 'jebak', buttonText: {displayText: 'Aku\n'}, type:1}]
let btn = [{
urlButton: {
displayText: 'Script',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Phone',
phoneNumber: '+62 8123-3264-6925'
}
}, {
quickReplyButton: {
displayText: 'Rules',
id: 'rules'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Speed',
id: 'ping'
}
}]
await conn.sendButtonText2(m.chat, anu, `Perwira Bot WhatsApp`, btn)
	} else if(!m.isGroup) {
anu = `*List Menu*

*Tools Menu*
⊳ ${prefix}translate
⊳ ${prefix}google
⊳ ${prefix}wikipedia
⊳ ${prefix}tomp3
⊳ ${prefix}tourl
⊳ ${prefix}get

*Sticker Menu*
⊳ ${prefix}sticker
⊳ ${prefix}toimg
⊳ ${prefix}tovideo
⊳ ${prefix}togif
⊳ ${prefix}triggered

*Download Menu*
⊳ ${prefix}play
⊳ ${prefix}ytsearch
⊳ ${prefix}ytmp3
⊳ ${prefix}ytmp4
⊳ ${prefix}ttmp3
⊳ ${prefix}ttmp4
⊳ ${prefix}igdl
⊳ ${prefix}telesticker
⊳ ${prefix}emojimix

*Maker Menu*
⊳ ${prefix}gura
⊳ ${prefix}loli
⊳ ${prefix}loli2
⊳ ${prefix}neko
⊳ ${prefix}catboy
⊳ ${prefix}ghoul

*Other Menu*
⊳ ${prefix}simi
⊳ ${prefix}nulis
⊳ ${prefix}tahta
⊳ ${prefix}attp
⊳ ${prefix}pinterest

*Attention!*
  Harap baca *rules*
`
/*let terem = {
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {
extendedTextMessage: {
text: "Nama Bot"
}
}
}
}*/
let btntz = [{buttonId: 'owner', buttonText: {displayText: 'Owner'}, type:1},{buttonId: 'profile', buttonText: {displayText: 'Profile'}, type:1},{buttonId: 'jebak', buttonText: {displayText: 'Aku\n'}, type:1}]
let btn = [{
urlButton: {
displayText: 'Script',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'Phone',
phoneNumber: '+62 8123-3264-6925'
}
}, {
quickReplyButton: {
displayText: 'Rules',
id: 'rules'
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Speed',
id: 'ping'
}
}]
await conn.sendButtonText2(m.chat, anu, `Perwira Bot WhatsApp`, btn)
	}
break
case 'ghoul':{
	if(!text) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Perwira`)
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gfx1()
    .setName(text)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}
break
case 'gura':{
	if(!text) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Perwira`)
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gura()
    .setName(text)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}

break
case 'loli':{
	if(!text) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Perwira`)
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gfx2()
    .setName(text)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}

break
case 'catboy':{
	if(!text.includes("/")) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Perwira/Bot`)
let textn = args.join(" ")
let text1 = textn.split("/")[0]
let text2 = textn.split("/")[1]
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gfx3()
    .setText1(text1)
    .setText2(text2)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}
break
case 'neko':{
	if(!text.includes("/")) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Perwira/Bot`)
let textn = args.join(" ")
let text1 = textn.split("/")[0]
let text2 = textn.split("/")[1]
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gfx4()
    .setText1(text1)
    .setText2(text2)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}
break
case 'loli2':{
var pathh = 'out.png'
haha = async () => {
var knights = require("knights-canvas")
var image = await new knights.Gfx5()
    .setText(text)
    .toAttachment();
  data = image.toBuffer();
  await fs.writeFileSync(pathh, data)
conn.sendMessage(m.chat, {image: {url: pathh}})
}
haha()
}
break
/*case 'virtex':{
let mes = await conn.sendMessage(m.chat, {text: 'Virtex Boom', contextInfo: {externalAdReply: {title: 'Virtex', body: 'This is Virtex', sourceUrl: `https://github.com`, mediaUrl: `https://github.com`, mediaType: 1, thumbnail: fs.readFileSync(`./vir.jpg`) }}})
setTimeout(() => {
conn.deleteMessage(from, mes.key)
}, 30000)
}
break*/
case 'rules':{
/*let term = {
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {
extendedTextMessage: {
text: "Nama Bot"
}
}
}
}*/
anu = "*Rules Bot*\n\n/> Dilarang spam\n/> Dilarang menelfon\n\nFitur error? chat owner!\nMelanggar? block"
let btnz = [{buttonId: 'ididiidjdjdhdhdhdg', buttonText: {displayText: 'Oke'}, type:1}]
await conn.sendButtonText(m.chat, btnz, anu, `Perwira Bot WhatsApp`, m)
} break
case 'get':
let mimeax = ''
try {
let res = await axios.head(q)
mimeax = res.headers['content-type']
if (mimeax.split("/")[1] === "gif") {
return conn.sendMessage(m.chat, { video: await getBuffer(q), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
} else if(mimeax.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { image: await getBuffer(q)}, {quoted: m})
} else if(mimeax.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { video: await getBuffer(q)}, {quoted: m})
} else if(mimeax.split("/")[0] === "audio"){
return conn.sendMessage(m.chat, { audio: await getBuffer(q), mimetype: 'audio/mpeg'}, {quoted: m })
} else { 
fetch(q).then((res) => res.text()).then((bu) => {
m.reply(bu)
})
}
} catch (e){
m.reply(e)
}
break
case 'simi':{
	if(!text) return m.reply(`Masukkan teks!\n*Contoh :* ${prefix+command} Haiii`)
try {
let simi = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${budy.slice(0)}&lc=id`)
conn.sendMessage(m.chat, {text: `${simi.success}\n_ᴬᵘᵗᵒ ᵐᵉˢˢᵃᵍᵉ_`}, {quoted: m})
} catch(err) {
m.reply(`*Error*\n${String(err)}`)
}
}
/*let btnz = [{buttonId: 'simi off', buttonText: {displayText: 'Off'}, type:1},{buttonId: 'simi on', buttonText: {displayText: 'On'}, type:1}]
					if (args.length < 1) return conn.sendButtonText(m.chat, btnz, `Pilih opsi dibawah untuk mengunakan`, `Perwira Bot WhatsApp`)
					if ((args[0]) === 'on') {
						if (isSimi) return m.reply('_Fitur simi sudah aktif sebelum nya_')
						simi.push(m.chat)
						m.reply('_Sukses mengaktifkan mode simi di group ini_')
					} else if ((args[0]) === 'off') {
						simi.splice(m.chat, 1)
						m.reply('_Sukses menonaktifkan mode simi di group ini_')
					} else {
						conn.sendButtonText(m.chat, btnz, `Pilih opsi dibawah untuk mengunakan`, `Perwira Bot WhatsApp`)
					}*/
					break
default:
/*

*/
 if (budy.startsWith('=>')) {
 if (!isCreator) return m.reply(mess.owner)
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
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
 } catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('x')){
if (!isCreator) return m.reply("_Owner Only_")
return conn.sendMessage(m.chat, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')},{quoted: m}).catch(err => reply(util.format(err)))
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

/*if(budy.startsWith(`${prefix}${command}`)) {
let non = [{buttonId: "owner", buttonText: {displayText: "Owner"}, type: 1}, {buttonId: "menu", buttonText: {displayText: "Menu"}, type: 1}]
conn.sendButtonText(m.chat,non ,`Command *${prefix+command}* tidak ada di Menu\nLihat kembali list men`, `Perwira Bot WhatsApp`, m, {})
}
*/
/* if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
	deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat ??\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `Perwira Bot WhatsApp`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}*/

break

 }
			
			

		 /*if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			*/
			


  /* if(!isCmd) {
			if(!isOffline) return
if(mek.key.fromMe) return
			if(m.isGroup) return
if(isOff) return
if(isBan) return
if(budy.startsWith(prefix)) return
let btn = [{
urlButton: {
displayText: 'Instagram',
url: 'https://www.instagram.com/perwira_kusuma1/'
}
}, {
urlButton: {
displayText: 'YouTube',
url: 'https://youtube.com/channel/UCiA1c3DgEqjfCm5t6UwQ37w'
}
}, {
quickReplyButton: {
displayText: 'Rules',
id: 'rules'
}
}, {
quickReplyButton: {
displayText: 'Speed',
id: 'ping'
}  
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
await conn.sendButtonText2(m.chat, `Maaf *${pushname}* untuk saat ini *Perwira* sedang offline. Tunggu beberapa saat lagi jika penting silahkan menelfon. Saya adalah bot assisten Perwira, apabila ada yang bisa saya bantu ketik *${prefix}menu* atau klik tombol Menu dibawah untuk menampilkan menu yang tersedia. Terimakasih telah menghubungi.`, `Perwira Bot WhatsApp`, btn)
global.udah.push(m.chat)
}
*/

/*if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}*/

 /*
 */
/*if (isCmd && budy.toLowerCase() != undefined) {
		if (m.chat.endsWith('broadcast')) return
		if (m.isBaileys) return
		let msgs = global.db.data.database
		if (!(budy.toLowerCase() in msgs)) return
		conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}*/
} catch(err) {
m.reply(`*Attention*\n${String(err)}`)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
