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

/*global.db = JSON.parse(fs.readFileSync('./src/database.json'))
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
*/

/*let tebaklagu = db.data.game.tebaklagu = []
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
*/

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
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
/*const isOff = [...global.udah].includes(m.chat)
const isBan = [...global.ban].includes(m.chat)
const isSimi = [...global.simi].includes(m.chat)*/
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
/*const isOffline = !m.isGroup ? global.offline.includes("offline") : false
const simo = budy.slice(0)*/
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
/*const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false*/

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
/*let chats = global.db.data.chats[m.chat]*/
/* if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}
		*/
	/*let setting = global.db.data.settings[botNumber]*/
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
/*if (m.message) {*/
/*conn.sendReadReceipt(m.chat, m.sender, [m.key.id])*/
/*console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}*/
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
  
  //Akinator
        this.akinator = this.akinator ? this.akinator : {}
        if(typeof this.akinator[m.sender] == 'object' && budy.length == 1 && ["1", "2", "3", "4", "5"].includes(budy)) {
        await this.akinator[m.sender].step(Number(budy) - 1)
        if (this.akinator[m.sender].progress >= 89 || this.akinator[m.sender].currentStep >= 78) {
        await this.akinator[m.sender].win();
        let _teksAki = `*Saya berpikir*
        
${this.akinator[m.sender].answers[0].name}
${this.akinator[m.sender].answers[0].description}


Akinator selesai dalam ${this.akinator[m.sender].currentStep} langkah!`
conn.sendMessage(m.chat, { image: { url: this.akinator[m.sender].answers[0].absolute_picture_path}, caption: _teksAki }, { quoted: m }).then(() => { delete this.akinator[m.sender] })
return !0
        }
        yuk = `*${this.akinator[m.sender].currentStep + 1}*. *${this.akinator[m.sender].question}*
*Progress:* ${this.akinator[m.sender].progress}

[1] Iya
[2] Tidak
[3] Tidak Tahu
[4] Mungkin Iya
[5] Mungkin Tidak

Ketik angka/teksnya!`
conn.sendMessage(m.chat, {text: yuk, contextInfo: {externalAdReply: {title: "Akinator", body: "©Perwira Bot WhatsApp", sourceUrl: `https://akinator.com/2`, mediaUrl: `https://akinator.com/2`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./aki2.jpeg`)}}})
        }
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

if(bug) {

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


if(!m.isGroup) {
if(!isCreator && !m.sender.startsWith("62")) return m.reply("Bot has stopped operating")
}
if(isCmd) {
	if(!coomd.includes(m.sender)) {
		coomd.push(m.sender)
		fs.writeFileSync('./user.json', JSON.stringify(coomd))
		}
	}
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
case 'sewa':{
	respons = `*Sewa Bot*
	
Sewa bot join grup selamanya bot aktif
Cuman 5k pembayaran via Pulsa/Dana
Chat owner untuk melanjutkan

©Perwira Bot WhatsApp`
	conn.sendMessage(m.chat, {text: respons, contextInfo: {externalAdReply: {title: 'Owner Bot', body: 'Klik disini untuk menuju nomor Owner', sourceUrl: `https://wa.me/6281232646925`, mediaUrl: `https://wa.me/6281232646925`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./pem.jpg`)}}})
	}
break

case 'akinator': case 'aki': {
	if(!isCreator && m.isGroup) return m.reply("Tidak bisa digunakan didalam grup")
            if(typeof this.akinator[m.sender] == 'object') return m.reply("Kamu Masih Berada Dalam Sesi Akinator")
            conn.sendMessage(m.chat, {text: "Pikirkan salah satu tokoh saya akan menebaknya\nWaktu 10 detik", contextInfo: {externalAdReply: {title: "Akinator", body: "©Perwira Bot WhatsApp", sourceUrl: `https://akinator.com/1`, mediaUrl: `https://akinator.com/1`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./aki.jpeg`)}}})
          /*  m.reply("Pikirkan salah satu tokoh saya akan menebak\nSaya tunggu 10 detik")*/
            await sleep(10000)
            let { Aki } = require("aki-api")
            this.akinator[m.sender] = new Aki({ region: "id" })
            await this.akinator[m.sender].start()
          /*  console.log(this.akinator[m.sender])*/
            akn = `*${this.akinator[m.sender].currentStep + 1}*. *${this.akinator[m.sender].question}*
*Progress:* ${this.akinator[m.sender].progress}

[1] Iya
[2] Tidak
[3] Tidak Tahu
[4] Mungkin Iya
[5] Mungkin Tidak

Ketik angka/teksnya!`
conn.sendMessage(m.chat, {text: akn, contextInfo: {externalAdReply: {title: "Akinator", body: "©Perwira Bot WhatsApp", sourceUrl: `https://akinator.com/2`, mediaUrl: `https://akinator.com/2`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./aki2.jpeg`)}}})
            }
            break
         /*   case 'delakinator': {
            if(m.isGroup) return m.reply("Tidak bisa digunakan didalam grup")
            if(typeof this.akinator[m.sender] !== 'object') return m.reply("Kamu Sedang Tidak Berada Dalam Sesi Akinator")
            delete this.akinator[m.sender]
            m.reply("Berhasil Menghapus Sesi Akinator")
            }
            break*/
            
            case 'image': {
            	listy = `*List yang tersedia :*\n1. Anime\n2. Portrait\n3. Landscape\n4. Building`
            	if(!text) return m.reply(`*Masukkan pilihan menggunakan angka*\n*Contoh:* ${prefix}image 1\n\n${listy}`)
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
/*case 'tebak': {
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
conn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
*/
/*case 'kuismath': case 'math': {
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
await conn.sendButtonText(m.chat, buttons, jawab, '©Perwira Bot WhatsApp', m, {mentions: ments})
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
*/
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
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
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
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
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
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
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
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
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
		if (!text) return m.reply(`*Masukkan text*\n*Contoh :* ${prefix+command} Textnya`)
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n`
}
m.reply(teks)
	}
	break/*
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

*Alasan :* ${vote[m.chat][0]}

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

*Alasan :* ${vote[m.chat][0]}

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

*Alasan :* ${vote[m.chat][0]}

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

*Alasan :* ${vote[m.chat][0]}

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
if (!isBotAdmins) throw mess.botAdmin
let response = await conn.groupInviteCode(m.chat)
conn.sendText(m.chat, `*Link to Join*\nhttps://chat.whatsapp.com/${response}\n\nLink Group\n*${groupMetadata.subject.replace(/[\n]/g, ' ')}*`, m, { detectLink: true })
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
if (!isAdmins) throw mess.admin
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
  conn.sendButImg(i, txt, '©Perwira Bot WhatsApp', fs.readFileSync('./pem.jpg'), btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc':{
	if (!isCreator) throw mess.owner
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
  conn.sendButImg(i, txt, '©Perwira Bot WhatsApp', fs.readFileSync('./pem.jpg'), btn)
}
		m.reply('succes')
	}
	break

/*case 'infochat': case 'sider':{
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
break*/
case 'totag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
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
case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await conn.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward("6281232646925@s.whatsapp.net", true)
}
	break
/*case 'listpcon':{
let anu = Object.keys(store.contacts)
let mes = `*Jumlah private chat :* ${anu.length}\n\n`
for(let _ of anu) {
let i = 1
	name = conn.getName(_)
mes += `*Name :* ${name}\n*Chat :* @${_.split("@")[0]}\n*Id :* ${_}\n\n`
	}
	conn.sendTextWithMentions(m.chat, mes, m)
}break*/
/*case 'listroom':{
let anu = Object.keys(store.chats.dict)
let mes = `*Jumlah grup chat :* ${anu.length}\n\n`
for(let _ of anu) {
let i = 1
	let name = await conn.groupMetadata(_).subject
mes += `*Name :* ${name}\n*Id :* ${_}\n\n`
	}
	conn.sendTextWithMentions(m.chat, mes, m)
}break*/
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
 /*case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(m.chat, 'List Online:\n\n' + online.map(v => '@' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break*/
case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
	wm = args.join(" ")
	wm1 = wm.split("/")[0]
	wm2 = wm.split("/")[1]
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
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
    if (!/image/.test(mime)) throw `Balas gambar dengan caption *${prefix + command}*`
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'trigger.jpg')
	yuricanvas = require("yuri-canvas");
    async function create() {
    let img = await yuricanvas.trigger('trigger.jpg');
    yuricanvas.write(img, "trigger.jpg");
    conn.sendImageAsSticker(m.chat, fs.readFileSync(`./trigger.jpg`), m, {packname: 'Sticker', author: '©Perwira Bot WhatsApp'})
}
create();
}
break
case 'template':{
	if(!text) return m.reply(`*Contoh :* ${prefix+command} gay(reply gambar)

*List Type Template*
gay
jail
wanted
wasted
trash
burn
scary`)
	if (!quoted) throw 'Reply Image'
    if (!/image/.test(mime)) throw `Balas gambar dengan caption *${prefix + command}*`
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
haha();
} else if(args[0] === 'gay') {
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'gay.jpg')
    	async function create() {
    	yuricanvas = require("yuri-canvas");
    let img = await yuricanvas.gay('gay.jpg');
    yuricanvas.write(img, "jadigay.jpg");
    conn.sendImage(m.chat, fs.readFileSync(`./jadigay.jpg`), 'Done', m)
    	}
    create();
} else if(args[0] === 'jail') {
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'jail.jpg')
    	async function create() {
    	yuricanvas = require("yuri-canvas");
    let img = await yuricanvas.jail('jail.jpg');
    yuricanvas.write(img, "jadijail.jpg");
    conn.sendImage(m.chat, fs.readFileSync(`./jadijail.jpg`), 'Done', m)
    	}
    create();
} else if(args[0] === 'wanted') {
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'wanted.jpg')
    	async function create() {
    	yuricanvas = require("yuri-canvas");
    let img = await yuricanvas.wanted('wanted.jpg');
    yuricanvas.write(img, "jadiwanted.jpg");
    conn.sendImage(m.chat, fs.readFileSync(`./jadiwanted.jpg`), 'Done', m)
    	}
    create();
} else if(args[0] === 'trash') {
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'trash.jpg')
    	async function create() {
    	yuricanvas = require("yuri-canvas");
    let img = await yuricanvas.trash('trash.jpg');
    yuricanvas.write(img, "jaditrash.jpg");
    conn.sendImage(m.chat, fs.readFileSync(`./jaditrash.jpg`), 'Done', m)
    	}
    create();
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
hacker()
} else if(args[0] === 'wasted') {
	let media = await conn.downloadAndSaveMediaMessage2(quoted, 'wasted.jpg')
    	async function create() {
    	yuricanvas = require("yuri-canvas");
    let img = await yuricanvas.wasted('wasted.jpg');
    yuricanvas.write(img, "jadiwasted.jpg");
    conn.sendImage(m.chat, fs.readFileSync(`./jadiwasted.jpg`), 'Done', m)
    }
    create();
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
	if(!text) return m.reply(`*Contoh:* ${prefix+command} mp3(sambil reply media)\n\n*List yang tersedia*\nmp3\nmp4\ngif\img`)
	if(text.includes("img", "gambar", "image")) {
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
		} else if(text.includes("mp3", "audio")) {
			if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`

let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert tomp3.mp3`}, { quoted : m })
		} else if(text.includes("mp4", "video", "vidio")) {
			if (!quoted) throw 'Reply sticker animated'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

		let { webp2mp4File } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
		} else if(text.includes("gif")) {
			if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`

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
if (!quoted) throw 'Reply sticker animated'
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
conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert tomp3 ${new Date()}.mp3`}, { quoted : m })
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
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
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
                              'jpegThumbnail': fs.readFileSync('./yt.png')
                               }} 
                               }, contextInfo: {mentionedJid: [quoted.sender]}})
  /*teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUpload At : ${i.ago}\nAuthor : ${i.author.name}\nUrl : ${i.url}\n\n─────────────────\n\n`*/

/* conn.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })*/
}
break

case 'download':
case 'dl': {
	if(!text) return m.reply(`Masukkan linknya\n*Contoh:* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
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
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./ig.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `Instagram Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./ig.jpeg'), text, 1, `${text}.jpg` , helo[0].url, 'image/jpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} else if(mimeaxig.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./ig.jpeg')}}})
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
tiktok = require('./lib/tiktok')
resion = await tiktok(text)
/*got_vid = await getBuffer(resion.medias.nowm.url).catch(e => m.reply("Error"))*/
/*conn.sendMessage(m.chat, {video: {url: `${resion.medias.nowm.url}` }, mimetype: 'video/mp4', caption: "*Tiktok Downloader*"}, {quoted: m})*/
conn.sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${resion.medias.nowm.url}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])
} catch(e) {
	conn.sendButtonText(m.chat, [{buttonId: `tiktok2 ${text}`, buttonText: {displayText: 'Server lain'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
	}
		} else if(text.includes("mediafire.com")) {
			try {
	if(text.includes('mediafire.com')) {
		let {mediafire} = require('mumaker')
		await mediafire(text).then(async datan => {
			if(datan[0].mime === 'zip') {
			conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/zip', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
			} else if(datan[0].mime === '9') {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/vnd.android.package-archive', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
					} else if(datan[0].mime === '7z') {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/7z', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
					} else if(datan[0].nama.endsWith('.mp4')) {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'video/mp4', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
					} else if(datan[0].nama.endsWith('.pdf')) {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/pdf', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
					} else {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/octet-stream', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
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
			if (!text) return m.reply(`Contoh: ${prefix+command} https://t.me/addstickers/geestickerpack`)
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
case 'tesbut':{
conn.sendMessage(m.chat, 
{document: fs.readFileSync('./pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileName: '𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂', contextInfo: {
externalAdReply: {
sourceUrl: `https://©Perwira Bot WhatsApp`, 
mediaUrl: `https://Perwira Not WhatsApp`, 
mediaType: 1, renderLargerThumbnail: true,
thumbnail: fs.readFileSync(`./ig.jpeg`)}},
                    caption: 'Hello World',
                    footer: 'CAF BOTz - Bot MD',
                    buttons: buttonLoc,
                    headerType:4})
}break
  case 'gimage': {
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
	case 'play': case 'ytplay': {
if (!text) throw `Contoh : ${prefix + command} story wa anime`
try {
let yts = require("yt-search")
let { yta } = require('./lib/y2mate')
let search = await yts(text)
let aramat = search.all
/*search.videos[Math.floor(Math.random() * search.videos.length)]*/
let res = await yta(`${search.videos[0].url}`)
let get_img = await getBuffer(res.thumb)
if (res.filesize >= 10000) return m.reply('File Melebihi Batas '+util.format(media))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, mediaType: 2, showAdAttribution: true, thumbnail: get_img}}}, {}).catch((e) => m.reply(String(e))).then(() => {

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
footer: `©Perwira Bot WhatsApp`,
title: `Jika hasil salah klik disini`,
buttonText: "Hasil lainya",
sections: [{
"title": `Hasil penelusuran`,
"rows": kunnu
}],
}
conn.sendMessage(m.chat, listMessage, {quoted: m})

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
if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
/*let quality = args[1] ? args[1] : '360p'*/
let res = await yta(text)
  let ythumb = await getBuffer(res.thumb)
if (res.filesize >= 10000) return m.reply('Ukuran file melebihi batas dari yang ditetapkan bot'+util.format(res))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythumb}}}, {}).catch((e) => m.reply(String(e)))
/*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `${res.title}`, "©Perwira Bot WhatsApp", ythumb, text, 2, `${res.title}.mp3` , res.dl_link, "audio/mpeg", [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m)*/
} else {
	m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
	m.reply(String(e))
	}

}break

case 'ytmp4': 
case 'ytvideo': {
try {
if(text.includes("youtu")) {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Contoh : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
/*let quality = args[1] ? args[1] : '360p'*/

let res = await ytv(text)
let ythum = await getBuffer(res.thumb)
if (res.filesize >= 20000) return m.reply('Ukuran file melebihi batas dari yang ditetapkan bot'+util.format(res))
conn.sendMessage(m.chat, { document: { url: res.dl_link }, mimetype: 'video/mp4', fileName: `${res.title}.mp4`,contextInfo: {externalAdReply: {title: `${res.title}`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: ythum}}},{})
/*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `${res.title}`, "©Perwira Bot WhatsApp", ythum, text, 2, `${res.title}.mp4` , res.dl_link, "video/mp4", [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m)*/
} else {
	m.reply(`Masukkan link YouTube.\n*Contoh :* ${prefix+command} https://youtu.be/FIeUzNdApMA`)
}
} catch(e) {
	m.reply(String(e))
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

case 'wikihow': {
	if(!text) return m.reply("*Contoh:* /wikihow cara tidur")
	try {
	let { wihow } = require("./wikihow")
	let { wikihow } = require("./wikihow")
	
	if(text.includes("https://id.wikihow.com")) {
		hw = ``
		wikuh = await wikihow(text)
		for(let wio of wikuh) {
			hw += `*${wio.title}*
			${wio.data}\n\n`
			}
			conn.sendMessage(m.chat, {text: hw, contextInfo: {externalAdReply: {title: "Wikihow", body: "©Perwira Bot WhatsApp", sourceUrl: text, mediaUrl: text, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./howiki.png`)}}})
		} else {
	
		dwt = await wihow(text)
		wikh = await wikihow(dwt[0].link)
		
		
		dat = ``
		
		for(let wi of wikh) {
			dat += `*${wi.title}*
			${wi.data}\n\n`
			}
			
			mehow = []
			nii = 1
			for(let l of dwt) {
				mehow.push({
	            "title": `${nii++}.${l.title}`,
	             "description": `• update: ${l.date}\n• view: ${l.view}`,
	             "rowId": `wikihow ${l.link}`
                })
				}
				
				let listhow = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Wikihow`,
buttonText: "Catatan yang ditemukan",
sections: [{
"title": `Hasil penelusuran yang ditemukan`,
"rows": mehow}]
}
			
			conn.sendMessage(m.chat, {text: dat, contextInfo: {externalAdReply: {title: "Wikihow", body: "©Perwira Bot WhatsApp", sourceUrl: `${dwt[0].link}`, mediaUrl: `${dwt[0].link}`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./howiki.png`)}}}).then(() => {conn.sendMessage(m.chat, listhow, {quoted: 
                               {
	    	      	         key: { fromMe: false, participant: `${quoted.sender}`},
                         	  message: {
                              "extendedTextMessage": {
                              "text": `*Wikihow*`,
                              "title": ``,
                              'jpegThumbnail': fs.readFileSync('./how2.png')
                               }} 
                               }, contextInfo: {mentionedJid: [quoted.sender]}})
                               })
                               }
		} catch(e) {
			m.reply(String(e))
			}
	}
	break

case 'wikipedia': {
	if(!text) return m.reply("*Contoh:* /wikipedia apa itu globalisasi")
	try {
		
	let { wikipedia } = require('./wikipedia')
	let { swiki } = require('./wikipedia')
	
	if(text.includes("https://id.m.wikipedia.org")) {
		lw = await wikipedia(text)
		dwk = `*${lw.title[0]}*
    
    ${lw.result[0].data}`
	conn.sendMessage(m.chat, {image: {url: lw.img[0]}, caption: dwk }, {quoted: m})
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
conn.sendMessage(m.chat, {image: {url: wikped.img[0]}, caption: dw }, {quoted: m}).then(() => {conn.sendMessage(m.chat, listMessagew, {quoted: 
                               {
	    	      	         key: { fromMe: false, participant: `${quoted.sender}`},
                         	  message: {
                              "extendedTextMessage": {
                              "text": `*Wikipedia*`,
                              "title": ``,
                              'jpegThumbnail': fs.readFileSync('./wiki.png')
                               }} 
                               }, contextInfo: {mentionedJid: [quoted.sender]}})
                               })
                               
                               }
                               
                             } catch(err) {
                             	try {
        let { wikipedia } = require('./wikipedia')
        lw = await wikipedia("https://id.m.wikipedia.org/wiki/" + text)
		dwk = `*${lw.title[0]}*
    
    ${lw.result[0].data}`
	conn.sendMessage(m.chat, {image: {url: lw.img[0]}, caption: dwk }, {quoted: m})
                             	} catch(err) {
                             	m.reply(String(err))
                             	}
                             	}
	}
	break
/*case 'wikipedia':{
if(!q) return m.reply(`Masukkan query\n*Contoh :* ${prefix+command} Naruto`)
let axios = require("axios")
let cheerio = require("cheerio")
async function wikipedia(querry) {
  try {
const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $("meta[property=\"og:image\"]").attr('content') || `https://i.ibb.co/nzqPBpC/http-error-404-not-found.png`
////let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
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

try {
wikipedia(text).then(res => {
	kunu = `*Judul :* ${res.result.judul}
	
	*Hasil penelusuran*
	${res.result.isi}
	`
conn.sendMessage(m.chat, {image: {url: res.result.thumb }, caption: kunu})
})
} catch(err) {
	m.reply(util.format(err))
	}
}break*/


case 'pinterest': {
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
  	  conn.sendMessage(m.chat, {image: {url : res.image}, caption: `Random search image from Pinterest`}, {quoted: m}).catch(e => m.reply(`*Error* ${String(e)}`))
  }).catch(e => m.reply(`*Error* ${String(e)}`))
} break

/*case 'wallpaper':{
	if(!text) return m.reply(`Masukkan wallpaper yang ingin dicari\n*Contoh :* ${prefix+command} Naruto`)
	try {
	let { wallpaper1 } = require('./lib/wallpaper')
    let res = await wallpaper1(text)
	conn.sendMessage(m.chat, {image: {url: res.result.link}, caption: `*${res.result.title}*`}, {quoted: m})
	} catch(e) {
		m.reply(e)
		}
	}break*/

case 'ghdl': 
case 'github': {
	if(!text.includes("https://github.com")) return m.reply("Masukkan link dengan benar!\n*Contoh:* /github https://github.com/DARK-02/DarkBotMD")
	if(!text.split("/")[4]) return
	try {
	conn.sendMessage(m.chat, {document: {url: text + "/archive/refs/heads/main.zip"}, mimetype: 'application/zip', fileName: `${text}.zip`, contextInfo: {externalAdReply: {title: "Github Download", body: "©Perwira Bot WhatsApp", sourceUrl: text, mediaUrl: text, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./gh.png`)}}}, {quoted: m})
	} catch(e) {
		m.reply(String(e))
		}
	}
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

dmetal = `https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html`
whitegold = `https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html`
dgiraffe = `https://textpro.me/create-3d-giraffe-text-effect-online-1069.html`
lightglow = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
texteffects = `https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html`
batman = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
dretro = `https://textpro.me/create-3d-retro-text-effect-online-free-1065.html`
thorlogo = `https://textpro.me/create-thor-logo-style-text-effect-online-1064.html`
lightglitch = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
neonlight = `https://textpro.me/create-neon-light-on-brick-wall-online-1062.html`
glowingneon = `https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html`
goldenancient = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
leddisplay = `https://textpro.me/color-led-display-screen-text-effect-1059.html`
newyear = `https://textpro.me/happy-new-year-2022-greeting-3d-card-1058.html`
treetext = `https://textpro.me/christmas-tree-text-effect-online-free-1057.html`
christmascandy = `https://textpro.me/create-christmas-candy-cane-text-effect-1056.html`
christmastext = `https://textpro.me/3d-christmas-text-effect-by-name-1055.html`
merrychristmas = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
ddeep = `https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html`
onlinecountry = `https://textpro.me/free-online-country-flag-3d-text-effect-generator-1052.html`
americanflag = `https://textpro.me/create-american-flag-3d-text-effect-online-1051.html`
dsci = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
rainbowcolor = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
dwater = `https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html`
halloweenskeleton = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
spooky = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
cinematic = `https://textpro.me/create-a-cinematic-horror-text-effect-1045.html`
sketch = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
bluecircuit = `https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html`
spacetext = `https://textpro.me/create-space-text-effects-online-free-1042.html`
metallic = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
glossymetalic = `https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html`
captain = `https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html`
ciencefiction = `https://textpro.me/create-science-fiction-text-effect-online-free-1038.html`
gameclassic = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
greenhorror = `https://textpro.me/create-green-horror-style-text-effect-online-1036.html`
transformer = `https://textpro.me/create-a-transformer-text-effect-online-1035.html`
berrytext = `https://textpro.me/create-berry-text-effect-online-free-1033.html`
layeredtext = `https://textpro.me/create-layered-text-effects-online-free-1032.html`
thundertext = `https://textpro.me/online-thunder-text-effect-generator-1031.html`
magma = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
stonecracked = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
dneon = `https://textpro.me/create-3d-neon-light-text-effect-online-1028.html`
impressiveglitch = `https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`
glitch = `https://textpro.me/create-a-glitch-text-effect-online-free-1026.html`
harrypotter = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
embossedtext = `https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html`
glasstext = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
artpaper = `https://textpro.me/create-art-paper-cut-text-effect-online-1022.html`
artisticblack = `https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html`
dgradient = `https://textpro.me/online-3d-gradient-text-effect-generator-1020.html`
dglossy = `https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html`
drealistic = `https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html`
watercolor = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
multicolor3d = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
fogwindow = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
neondevil = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
underwatertext = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
blackand = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
wonderfulgraffiti = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
graffiti = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
graffitiwall = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
christmas = `https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html`
futuristic = `https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html`
snowtext = `https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html`
cloud = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
luxurygold = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
gradienttext = `https://textpro.me/3d-gradient-text-effect-online-free-1002.html`
blackpinklogo = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
realisticvintage = `https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html`
realisticcloud = `https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html`
cloudfly = `https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html`
insand = `https://textpro.me/write-in-sand-summer-beach-free-online-991.html`
writingtext = `https://textpro.me/sand-writing-text-effect-online-990.html`
engraved3d = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
summery = `https://textpro.me/create-a-summery-sand-writing-text-effect-988.html`
birthday = `https://textpro.me/foil-balloon-text-effect-for-birthday-987.html`
dglue = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
space3d = `https://textpro.me/create-space-3d-text-effect-online-985.html`
darkgold = `https://textpro.me/metal-dark-gold-text-effect-984.html`
glitchtext = `https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html`
stone = `https://textpro.me/create-a-stone-text-effect-online-982.html`
lighttext = `https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html`
numbtext = `https://textpro.me/1917-style-text-effect-online-980.html`
sretro = `https://textpro.me/80-s-retro-neon-text-effect-online-979.html`
minioneffect = `https://textpro.me/minion-text-effect-3d-online-978.html`
pornhub = `https://textpro.me/pornhub-style-logo-online-generator-free-977.html`
exposuretext = `https://textpro.me/double-exposure-text-effect-black-white-976.html`
dholotext = `https://textpro.me/holographic-3d-text-effect-975.html`
avengers = `https://textpro.me/create-3d-avengers-logo-online-974.html`
purpledual = `https://textpro.me/metal-purple-dual-effect-973.html`
marvelstyle = `https://textpro.me/create-logo-style-marvel-studios-online-971.html`
silvertext = `https://textpro.me/deluxe-silver-text-effect-970.html`
fullluxury = `https://textpro.me/color-full-luxury-metal-text-effect-969.html`
bluemetal = `https://textpro.me/glossy-blue-metal-text-effect-967.html`
goldtext = `https://textpro.me/deluxe-gold-text-effect-966.html`
carbontext = `https://textpro.me/glossy-carbon-text-effect-965.html`
fabriceffect = `https://textpro.me/fabric-text-effect-online-964.html`
tneoneffect = `https://textpro.me/neon-text-effect-online-963.html`
yearcards = `https://textpro.me/new-year-cards-3d-by-name-960.html`
newyear = `https://textpro.me/happ-new-year-card-firework-gif-959.html`
balloontext = `https://textpro.me/fullcolor-balloon-text-effect-958.html`
metaltextlogo = `https://textpro.me/create-text-logo-3d-metal-online-957.html`
avatargold = `https://textpro.me/create-avatar-gold-online-956.html`
logo3d = `https://textpro.me/text-logo-3d-metal-galaxy-943.html`
cards3d = `https://textpro.me/xmas-cards-3d-online-942.html`
hororblood = `https://textpro.me/blood-text-on-the-frosted-glass-941.html`
firetext = `https://textpro.me/halloween-fire-text-effect-940.html`
darkgold = `https://textpro.me/metal-dark-gold-text-effect-online-939.html`
lionlogo = `https://textpro.me/create-lion-logo-mascot-online-938.html`
wolflogo = `https://textpro.me/create-wolf-logo-black-white-937.html`
wolfgalaxy = `https://textpro.me/create-wolf-logo-galaxy-online-936.html`
ninjalogo = `https://textpro.me/create-ninja-logo-online-935.html`
logojoker = `https://textpro.me/create-logo-joker-online-934.html`
wickereffect = `https://textpro.me/wicker-text-effect-online-932.html`
leavestext = `https://textpro.me/natural-leaves-text-effect-931.html`
sparkletext = `https://textpro.me/firework-sparkle-text-effect-930.html`
skeletoneffect = `https://textpro.me/skeleton-text-effect-online-929.html`
foilballoon = `https://textpro.me/red-foil-balloon-text-effect-928.html`
steeleffect = `https://textpro.me/steel-text-effect-online-921.html`
glosstext = `https://textpro.me/ultra-gloss-text-effect-online-920.html`
denimeffect = `https://textpro.me/denim-text-effect-online-919.html`
greentext = `https://textpro.me/decorate-green-text-effect-918.html`
purpletext = `https://textpro.me/decorate-purple-text-effect-917.html`
stonetext = `https://textpro.me/peridot-stone-text-effect-916.html`
rockeffect = `https://textpro.me/rock-text-effect-online-915.html`
lavaeffect = `https://textpro.me/lava-text-effect-online-914.html`
glasstext = `https://textpro.me/yellow-glass-text-effect-913.html`
shinyglass = `https://textpro.me/purple-shiny-glass-text-effect-906.html`
americatext = `https://textpro.me/captain-america-text-effect-905.html`
robotd2 = `https://textpro.me/robot-r2-d2-text-effect-903.html`
equalizertext = `https://textpro.me/rainbow-equalizer-text-effect-902.html`
toxiceffect = `https://textpro.me/toxic-text-effect-online-901.html`
sparklingjewelry = `https://textpro.me/pink-sparkling-jewelry-text-effect-899.html`
glasstext = `https://textpro.me/decorative-glass-text-effect-891.html`
caketext = `https://textpro.me/chocolate-cake-text-effect-890.html`
berryeffect = `https://textpro.me/strawberry-text-effect-online-889.html`
fishtext = `https://textpro.me/koi-fish-text-effect-online-888.html`
breadeffect = `https://textpro.me/bread-text-effect-online-887.html`
matrixtext = `https://textpro.me/matrix-style-text-effect-online-884.html`
bloodtext = `https://textpro.me/horror-blood-text-effect-online-883.html`
lighttext = `https://textpro.me/neon-light-text-effect-online-882.html`
thundertext = `https://textpro.me/create-thunder-text-effect-online-881.html`
boxtext = `https://textpro.me/3d-box-text-effect-online-880.html`
neoneffect = `https://textpro.me/neon-text-effect-online-879.html`
warningtext = `https://textpro.me/road-warning-text-effect-878.html`
steeltext = `https://textpro.me/3d-steel-text-effect-877.html`
bokeheffect = `https://textpro.me/bokeh-text-effect-876.html`
neontext = `https://textpro.me/green-neon-text-effect-874.html`
advancedglow = `https://textpro.me/free-advanced-glow-text-effect-873.html`
watereffect = `https://textpro.me/dropwater-text-effect-872.html`
walltext = `https://textpro.me/break-wall-text-effect-871.html`
gifttext = `https://textpro.me/chrismast-gift-text-effect-869.html`
honeyeffect = `https://textpro.me/honey-text-effect-868.html`
bagdrug = `https://textpro.me/plastic-bag-drug-text-effect-867.html`
horrortext = `https://textpro.me/horror-gift-text-effect-866.html`
slabstext = `https://textpro.me/marble-slabs-text-effect-864.html`
marbleeffect = `https://textpro.me/marble-text-effect-863.html`
coldtext = `https://textpro.me/ice-cold-text-effect-862.html`
juicetext = `https://textpro.me/fruit-juice-text-effect-861.html`
metaltext = `https://textpro.me/rusty-metal-text-effect-860.html`
goldtext = `https://textpro.me/abstra-gold-text-effect-859.html`
biscuiteffect = `https://textpro.me/biscuit-text-effect-858.html`
bageleffect = `https://textpro.me/bagel-text-effect-857.html`
woodeffect = `https://textpro.me/wood-text-effect-856.html`
fitext = `https://textpro.me/sci-fi-text-effect-855.html`
rainbowtext = `https://textpro.me/metal-rainbow-text-effect-854.html`
gemtext = `https://textpro.me/purple-gem-text-effect-853.html`
metaltext = `https://textpro.me/shiny-metal-text-effect-852.html`
jewelrytext = `https://textpro.me/yellow-jewelry-text-effect-851.html`
metaltext = `https://textpro.me/hot-metal-text-effect-843.html`
goldentext = `https://textpro.me/hexa-golden-text-effect-842.html`
metaltext = `https://textpro.me/eroded-metal-text-effect-834.html`
carboneffect = `https://textpro.me/carbon-text-effect-833.html`
candytext = `https://textpro.me/pink-candy-text-effect-832.html`
metaltext = `https://textpro.me/blue-metal-text-effect-831.html`
gemtext = `https://textpro.me/blue-gem-text-effect-830.html`
metaltext = `https://textpro.me/black-metal-text-effect-829.html`
glowingmetal = `https://textpro.me/3d-glowing-metal-text-effect-828.html`
marveltext = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
////////////////PERWIRAJJSJSJSJSJSJSJDJJDJDJDJ


sketch = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
magma = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
stone = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
glitch = `https://textpro.me/create-a-glitch-text-effect-online-free-1026.html`
retro = `https://textpro.me/create-3d-retro-text-effect-online-free-1065.html`
glass = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
papercut = `https://textpro.me/create-art-paper-cut-text-effect-online-1022.html`
papercolor = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
windowfog = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
wings = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
bear = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
graffititext = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
luxurygold = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
sand = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
tiktokglitch = `https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html`
tahun = `https://textpro.me/1917-style-text-effect-online-980.html`
exposure = `https://textpro.me/double-exposure-text-effect-black-white-976.html`
neon = `https://textpro.me/neon-text-effect-online-963.html`
galaxywolf = `https://textpro.me/create-wolf-logo-galaxy-online-936.html`
ninja = `https://textpro.me/create-ninja-logo-online-935.html`
matrix = `https://textpro.me/matrix-style-text-effect-online-884.html`
thunder = `https://textpro.me/create-thunder-text-effect-online-881.html`
dropwater = `https://textpro.me/dropwater-text-effect-872.html`
ice = `https://textpro.me/ice-cold-text-effect-862.html`
chrome = `https://textpro.me/3d-chrome-text-effect-827.html`

try {
if(jenis === 'sketch') {
await textpro(sketch, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'magma') {
await textpro(magma, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'stone') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(stone, [isi, isi2]).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'glitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitch, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'retro') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(retro, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'glass') {
await textpro(glass, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'papercut') {
await textpro(papercut, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'papercolor') {
await textpro(papercolor, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'wings') {
await textpro(wings, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'bear') {
await textpro(bear, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'graffititext') {
await textpro(graffititext, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'graffiti') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffiti, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'luxurygold') {
await textpro(luxurygold, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'sand') {
await textpro(sand, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'tiktokglitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(tiktokglitch, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === '1917') {
await textpro(tahun, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'neon') {
await textpro(neon, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'galaxywolf') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(galaxywolf, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'ninja') {
	if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(ninja, [isi, isi2]).then(async res => {
conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'matrix') {
await textpro(matrix, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'thunder') {
await textpro(thunder, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'dropwater') {
await textpro(dropwater, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'ice') {
await textpro(ice, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
} else if(jenis === 'chrome') {
await textpro(chrome, isi).then(async res => {conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '')})
	//////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////
} else if(jenis === 'dmetal') {
await textpro(dmetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'whitegold') {
await textpro(whitegold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dgiraffe') {
await textpro(dgiraffe, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'lightglow') {
await textpro(lightglow, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'texteffects') {
await textpro(texteffects, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'batman') {
await textpro(batman, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dretro') {
await textpro(dretro, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'thorlogo') {
await textpro(thorlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'lightglitch') {
await textpro(lightglitch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'neonlight') {
await textpro(neonlight, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glowingneon') {
await textpro(glowingneon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'goldenancient') {
await textpro(goldenancient, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'leddisplay') {
await textpro(leddisplay, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'newyear') {
await textpro(newyear, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'treetext') {
await textpro(treetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'christmascandy') {
await textpro(christmascandy, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'christmastext') {
await textpro(christmastext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'merrychristmas') {
await textpro(merrychristmas, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'ddeep') {
await textpro(ddeep, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'onlinecountry') {
await textpro(onlinecountry, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'americanflag') {
await textpro(americanflag, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dsci') {
await textpro(dsci, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'rainbowcolor') {
await textpro(rainbowcolor, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dwater') {
await textpro(dwater, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'halloweenskeleton') {
await textpro(halloweenskeleton, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'spooky') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(spooky, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'cinematic') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(cinematic, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'sketcht') {
await textpro(sketch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bluecircuit') {
await textpro(bluecircuit, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'spacetext') {
await textpro(spacetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'metallic') {
await textpro(metallic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'captain') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(captain, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'ciencefiction') {
await textpro(ciencefiction, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'gameclassic') {
await textpro(gameclassic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'greenhorror') {
await textpro(greenhorror, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'transformer') {
await textpro(transformer, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'berrytext') {
await textpro(berrytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'layeredtext') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(layeredtext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'thundertext') {
await textpro(thundertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'magm') {
await textpro(sketch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'stonecracked') {
await textpro(stonecracked, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dneon') {
await textpro(dneon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'impressiveglitch') {
await textpro(impressiveglitch, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glitch') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitch, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'harrypotter') {
await textpro(harrypotter, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'embossedtext') {
await textpro(embossedtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glasstext') {
await textpro(glasstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'artpaper') {
await textpro(artpaper, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dgradient') {
await textpro(dgradient, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dglossy') {
await textpro(dglossy, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'drealistic') {
await textpro(drealistic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'watercolor') {
await textpro(watercolor, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'multicolor3d') {
await textpro(multicolor3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'neondevil') {
await textpro(neondevil, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'underwatertext') {
await textpro(underwatertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'blackand') {
await textpro(blackand, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'wonderfulgraffiti') {
await textpro(wonderfulgraffiti, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'graffiti') {
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffiti, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'graffitiwall') {
if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(graffitiwall, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'christmas') {
await textpro(christmas, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'futuristic') {
await textpro(futuristic, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'snowtext') {
await textpro(snowtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'cloud') {
await textpro(cloud, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'luxurygold') {
await textpro(luxurygold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'gradienttext') {
await textpro(gradienttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'blackpinklogo') {
await textpro(blackpinklogo, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'realisticvintage') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(realisticvintage, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'realisticcloud') {
await textpro(realisticcloud, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'cloudfly') {
await textpro(cloudfly, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'insand') {
await textpro(insand, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'writingtext') {
await textpro(writingtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'engraved3d') {
await textpro(engraved3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'summery') {
await textpro(summery, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dglue') {
await textpro(dglue, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'space3d') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(space3d, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'darkgold') {
await textpro(darkgold, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glitchtext') {
	if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(glitchtext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'ston') {
await textpro(stone, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'lighttext') {
await textpro(lighttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'matrixtext') {
await textpro(matrixtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'minioneffect') {
await textpro(minioneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'pornhub') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(pornhub, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'exposuretext') {
await textpro(exposuretext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'dholotext') {
await textpro(dholotext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'avengers') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(avengers, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'purpledual') {
await textpro(purpledual, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'marvelstyle') {
	if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(marvelstyle, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'marveltext') {
	if(!text.includes("/")) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(marveltext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'silvertext') {
await textpro(silvertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'fullluxury') {
await textpro(fullluxury, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bluemetal') {
await textpro(bluemetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'goldtext') {
await textpro(goldtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'carbontext') {
await textpro(carbontext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'fabriceffect') {
await textpro(fabriceffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'tneoneffect') {
await textpro(tneoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'yearcards') {
await textpro(yearcards, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'metaltextlogo') {
await textpro(metaltextlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'avatargold') {
await textpro(avatargold, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'logo3d') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(logo3d, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'cards3d') {
await textpro(cards3d, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'firetext') {
await textpro(firetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'lionlogo') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(lionlogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'wolflogo') {
await textpro(wolflogo, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'wolfglogo') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(wolfglogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'ninjalogo') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(ninjalogo, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'logojoker') {
await textpro(logojoker, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'wickereffect') {
await textpro(wickereffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'leavestext') {
await textpro(leavestext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'sparkletext') {
await textpro(sparkletext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'skeletoneffect') {
await textpro(skeletoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'foilballoon') {
await textpro(foilballoon, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'steeleffect') {
await textpro(steeleffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glosstext') {
await textpro(glosstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'denimeffect') {
await textpro(denimeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'greentext') {
await textpro(greentext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'purpletext') {
await textpro(purpletext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'stonetext') {
await textpro(stonetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'rockeffect') {
await textpro(rockeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'lavaeffect') {
await textpro(lavaeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'shinyglass') {
await textpro(shinyglass, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'americatext') {
await textpro(americatext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'robotd2') {
await textpro(robotd2, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'equalizertext') {
await textpro(equalizertext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'toxiceffect') {
await textpro(toxiceffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'sparklingjewelry') {
await textpro(sparklingjewelry, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'caketext') {
await textpro(caketext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'berryeffect') {
await textpro(berryeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'fishtext') {
await textpro(fishtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'breadeffect') {
await textpro(breadeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bloodtext') {
await textpro(bloodtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'hororblood') {
await textpro(hororblood, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'boxtext') {
await textpro(boxtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'neoneffect') {
await textpro(neoneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'warningtext') {
await textpro(warningtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'steeltext') {
	if(isi2 === undefined) return m.reply(`Contoh ${prefix+command} ${jenis}/Text1/Text2`)
await textpro(steeltext, [isi, isi2]).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bokeheffect') {
await textpro(bokeheffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'neontext') {
await textpro(neontext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'advancedglow') {
await textpro(advancedglow, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'watereffect') {
await textpro(watereffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'walltext') {
await textpro(walltext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'gifttext') {
await textpro(gifttext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'honeyeffect') {
await textpro(honeyeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bagdrug') {
await textpro(bagdrug, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'horrortext') {
await textpro(horrortext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'slabstext') {
await textpro(slabstext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'marbleeffect') {
await textpro(marbleeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'coldtext') {
await textpro(coldtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'juicetext') {
await textpro(juicetext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'metaltext') {
await textpro(metaltext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'biscuiteffect') {
await textpro(biscuiteffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'bageleffect') {
await textpro(bageleffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'woodeffect') {
await textpro(woodeffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'fitext') {
await textpro(fitext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'rainbowtext') {
await textpro(rainbowtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'gemtext') {
await textpro(gemtext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'jewelrytext') {
await textpro(jewelrytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'goldentext') {
await textpro(goldentext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'carboneffect') {
await textpro(carboneffect, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'candytext') {
await textpro(candytext, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
} else if(jenis === 'glowingmetal') {
await textpro(glowingmetal, isi).then(async res => { conn.sendMessage(m.chat, {image: { url: res},  caption: 'Done'}, '') })
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
	/*case 'nomerhoki': case 'nomorhoki': {
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
break*/
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
                              'jpegThumbnail': fs.readFileSync('./tiktok.png')
                           }
	                            } 
                                     }*/
if (text.includes("tiktok.com")) {
	try {
tiktok = require('./lib/tiktok')
resioni = await tiktok(text)
conn.sendMessage(m.chat, {document: {url: `${resioni.medias.audio.url}`}, ptt: false, mimetype: 'audio/mpeg', fileName: `${resioni.medias.audio.sound}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Tiktok Downloader`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./tiktok.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `TikTok Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./tiktok.jpeg'), text, 1, `${resioni.medias.audio.sound}.mp3`, `${resioni.medias.audio.url}`, 'audio/mpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} catch(e) {
	conn.sendButtonText(m.chat, [{buttonId: `ttmp32 ${text}`, buttonText: {displayText: 'Server lain'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
	}
} else {
	m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://vt.tiktok.com/ZSextfjoX/`)
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
tiktok = require('./lib/tiktok')
resion = await tiktok(text)
/*got_vid = await getBuffer(resion.medias.nowm.url).catch(e => m.reply("Error"))*/
/*conn.sendMessage(m.chat, {video: {url: `${resion.medias.nowm.url}` }, mimetype: 'video/mp4', caption: "*Tiktok Downloader*"}, {quoted: m})*/
conn.sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${resion.medias.nowm.url}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])
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
	let { TiktokDownloader } = require(`./lib/scraper`)
	let res = await TiktokDownloader(text)
	conn.sendButVid(m.chat, '*TikTok Downloader*', '©Perwira Bot WhatsApp', `${res.result.nowatermark}`, [{quickReplyButton: {displayText: 'Audio', id: `ttmp3 ${text}`}}])
	} catch(e) {
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
conn.sendMessage(m.chat, {document: audii, ptt: false, mimetype: 'audio/mpeg', fileName: `${new Date()}.mp3`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Tiktok Downloader`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./tiktok.jpeg')}}})
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
case 'igdl2':
case 'igmp42':
case 'igvideo2':
case 'ig2':
case 'instagram2':
case 'instagramvideo2': {
if (text.includes("instagram.com")) {
	try {
let {igdownloader} = require('./lib/igdown')
igdownloader(text).then(async ries => {
let resiop = await axios.head(ries.result.link)
mmimeaxigg= resiop.headers['content-type']
if(mmimeaxigg.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { document: {url: ries.result.link}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true,thumbnail: fs.readFileSync('./ig.jpeg') }}})
} else if(mmimeaxigg.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { document: {url: ries.result.link}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, thumbnail: fs.readFileSync('./ig.jpeg')}}})
}
})
} catch(e) {
	m.reply(String(e))
	}
} else {
m.reply(`Linknya?\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CA6yOumDruJ/?utm_medium=copy_link`)
}
}break
/*case 'igdl':
case 'instagram':
case 'ig':
mimeaxig= ''
{
	try {
	if(text.includes("instagram.com")) {
let {instagram} = require('mumaker')
helo = await instagram(text)
let res = await axios.head(helo[0].url)
mimeaxig= res.headers['content-type']
if(mimeaxig.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { image: await getBuffer(helo[0].url)}, {quoted: m})
} else if(mimeaxig.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { video: await getBuffer(helo[0].url)}, {quoted: m})
}
		} else {
			m.reply("Pastikan menggunakan link Instagram")
			}
			} catch(e) {
				m.reply(`Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`)
				}
	}
	break*/
	
	case 'ringtone':{
		if(!text) return m.reply(`Ringtone apa yang mau dicari?\nContoh ${prefix+command} nokia`)
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
			if(datan[0].mime === 'zip') {
			conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/zip', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
			} else if(datan[0].mime === '9') {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/vnd.android.package-archive', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
					} else if(datan[0].mime === '7z') {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/7z', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}}) 
					} else if(datan[0].nama.endsWith('.mp4')) {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'video/mp4', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
					} else if(datan[0].nama.endsWith('.pdf')) {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/pdf', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
					} else {
					conn.sendMessage(m.chat, {document: {url: datan[0].link}, fileName: datan[0].nama, mimetype: 'application/octet-stream', contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `MediaFire Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./mfire.jpg')}}})
					m.reply('Buka document melalui apk File manager anda')
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

case 'wlp': {
	try {
	let { linked } = require('./wallpaper.js')
	imhg = await linked(text)
	conn.sendMessage(m.chat, {image: {url: imhg[0]}, caption: `Random Hd Wallpaper `}, {quoted: m})
	} catch(err) {
		m.reply(String(err))
		}
	}
	break

case 'wallpaper': {
	
	let { wallpaperhd } = require('./wallpaper.js')
	enm = await text.split("order=desc&page=")[1] ? text.split("order=desc&page=")[1]: 0
	if(text.includes("//wallhaven.cc/search")) {
		try {
	swo = await wallpaperhd(`${text.split("order=desc&page=")[0]}order=desc&page=${enm * 1 + 1}`)
	if(swo.length === 0) return conn.sendButtonText(m.chat, [{buttonId: `i`, buttonText: {displayText: 'Oke'}, type:1}], `Sepertinya sudah sampai akhir`, `©Perwira Bot WhatsApp`)
	lostii = []
	npi = 1
	for(let li of swo) {
		lostii.push({
			"title": `${npi++}Wallpaper ${text.split("/search?q=")[1].split("&categories")[0]}`,
			"description": "HD Wallpaper Quality",
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
	typ = `${text.split("order=desc&page=")[0]}order=desc&page=${enm * 1 + 1}`
	let btnzi = [{buttonId: `wallpaper ${typ}`, buttonText: {displayText: 'Next'}, type:1}]
	conn.sendButtonText(m.chat, btnzi, `List berikutnya`, `©Perwira Bot WhatsApp`)
	})
} catch(err) {
	m.reply(String(err))
	}
		} else {
	try {
	if(!text) return m.reply("*Contoh:* /wallpaper doctor strange")
	/*enm = await text.split("order=desc&page=")[1] ? text.split("order=desc&page=")[1]: 0*/
	sw = await wallpaperhd(`https://wallhaven.cc/search?q=${encodeURI(text)}&categories=110&purity=100&sorting=relevance&order=desc&page=1`)
	if(sw.length === 0) return conn.sendButtonText(m.chat, [{buttonId: `i`, buttonText: {displayText: 'Oke'}, type:1}], `Wallpaper ${text} tidak tersedia`, `©Perwira Bot WhatsApp`)
	losti = []
	np = 1
	for(let l of sw) {
		losti.push({
			"title": `${np++}.Wallpaper ${text}`,
			"description": "HD Wallpaper Quality",
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
	typ = `https://wallhaven.cc/search?q=${encodeURI(text)}&categories=110&purity=100&sorting=relevance&order=desc&page=2`
	let btnzi = [{buttonId: `wallpaper ${typ}`, buttonText: {displayText: 'Next'}, type:1}]
	conn.sendButtonText(m.chat, btnzi, `List berikutnya`, `©Perwira Bot WhatsApp`)
	})
} catch(err) {
	m.reply(String(err))
	}
	}
	} break
case 'igstory':
case 'igs':{
	if(!text) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} natashawilona12`)
	if(text.includes(`https://`)) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} natashawilona12`)
	try {
	let { igstory } = require ('mumaker')
	data = []
	thennn = 0
	thenn = 1
	tres = await igstory(text)
		for(let newd of tres) {
			data.push({
				"title": `${thenn++}. Story Instagram`,
				"description": `Jenis ${newd.type}`,
				"rowId": `igos ${newd.url}`
				              })
			                               }
			                                           
let listMess = {
text: 'Hasil penelusuran',
footer: `©Perwira Bot WhatsApp`,
title: `Instagram Story`,
buttonText: "Story yang ditemukan",
sections: [{
"title": `Story instagram yang ditemukan`,
"rows": data}]
}

conn.sendMessage(m.chat, listMess, {quoted: 
                               {
	    	      	         key: { fromMe: false, participant: `${quoted.sender}`},
                         	  message: {
                              "extendedTextMessage": {
                              "text": `*Instagram Story*`,
                              "title": ``,
                              'jpegThumbnail': fs.readFileSync('./ig.png')
                               }} 
                               }, contextInfo: {mentionedJid: [quoted.sender]}})
	} catch(err) {
		m.reply("Pastikan nickname Instagram memiliki story yang tidak di privat")
		}
	}
	break

case 'igos': {
	
	mimeaxigs= ""
	try {
	let contentigos = await axios.head(text)
    mimeaxigs= contentigos.headers['content-type']
    if(mimeaxigs.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { image: {url: text}}, {quoted: m})
} else if(mimeaxigs.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { video: {url: text}}, {quoted: m})
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
let {instagram} = require('mumaker')
helo = await instagram(text)
let res = await axios.head(helo[0].url)
mimeaxig= res.headers['content-type']
if(mimeaxig.split("/")[0] === "image"){
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'image/jpeg', fileName: `${text}.jpg`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./ig.jpeg')}}}) /*conn.sendButDoc2(m.chat, "©Perwira Bot WhatsApp", '*Click Document untuk download*\n\n*Lokasi file*\nAndroid/media/com.whatsapp/WhatsApp/Media/WhatsApp Documents', `Instagram Download`, "©Perwira Bot WhatsApp", fs.readFileSync('./ig.jpeg'), text, 1, `${text}.jpg` , helo[0].url, 'image/jpeg', [{ buttonId: 'ok', buttonText: { displayText: 'Thanks' }, type: 1 }], m, true) */
} else if(mimeaxig.split("/")[0] === "video"){
return conn.sendMessage(m.chat, { document: {url: helo[0].url}, mimetype: 'video/mp4', fileName: `${text}.mp4`, contextInfo: {mentionedJid: [quoted.sender], externalAdReply: {title: `Instagram Download`, body: "©Perwira Bot WhatsApp", mediaUrl: `${text}`, sourceUrl: `${text}`, renderLargerThumbnail: true, showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync('./ig.jpeg')}}})
}
		} else {
			m.reply(`Masukkan link!\n*Contoh :* ${prefix+command} https://www.instagram.com/p/CcejPskP8Ia/?igshid=YmMyMTA2M2Y=`)
			}
			} catch(e) {
				conn.sendButtonText(m.chat, [{buttonId: `igdl2 ${text}`, buttonText: {displayText: 'Versi lain'}, type: 1}, {buttonId: `igdl ${text}`, buttonText: {displayText: 'Coba lagi'}, type: 1}], `Ulangi kembali, jika tetap error lapor Owner\n\n*Rincian kesalahan :*\n${String(e)}`, '©Perwira Bot WhatsApp')
				}
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
conn.sendAudio(m.chat, audio, '', ptt = false, {mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `Instagram Audio`, body: "©Perwira Bot WhatsApp", mediaUrl: text, sourceUrl: text, mediaType: 1, thumbnail: fs.readFileSync('./instagram.png')}}})
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

( Q.S ${res.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
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

( Q.S ${res.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
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
	if(!text) return
	try {
	conn.sendMessage(m.chat, {document: {url: text}, mimetype: 'application/pdf', fileName: `${text.split("/")[6]}`}, {quoted: m})
	} catch(err) {
		m.reply(util.format(err))
		}
	}
	break

case 'alquran':{
	surah = q.split("/")[0]
	ayat = q.split("/")[1]
	
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
	resa = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
	penjelasanp = resa.data.tafsir.id.long
	anuo = `*Alquran*
	
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
	resai = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
	penjelasans = resai.data.tafsir.id.short
	anuoi = `*Alquran*
	
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
	aad = await fetchJson(`https://api.quran.sutanlab.id/surah/${surah}/${ayat}`)
	audiio = aad.data.audio.primary
	conn.sendMessage(m.chat,{audio: {url: audiio}, mimetype: 'audio/mpeg'}, {quoted: m})
	} catch(err) {
		m.reply(util.format(err))
		}
	}
	break

case 'tts': {

kuyin = args.join(" ")
if (args.length < 1) return m.reply(`Masukkan kode bahasa dan teks\n*Contoh :* ${prefix+command} id/Halo`)
try {
if (kuyin.includes("/")) {
        kun = args.join(" ")
        kunik = kun.split("/")[0]
        kunil = kun.split("/")[1]
        const gtts = require('./lib/gtts')(kunik)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, kunil, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
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
	if(!text) return m.reply(`Cara menggunakan\n*Contoh :* ${prefix+command} Perwira`)
conn.sendImageAsSticker(m.chat, `https://api.akuari.my.id/other/ttp?file&text=${encodeURI(text)}`, m, {packname: 'halo', author: 'halo'})
}
break
case 'attp':
{
try {
  if (args.length == 0) return m.reply(`Contoh: ${prefix+command} Halo`)
  stik = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
  conn.sendMessage(m.chat, {sticker: stik, mimetype: 'image/webp'}, {quoted: m})
  } catch(e) {
	m.reply(util.format(e))
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
/*case 'folio':{
 	try {
									if (args.length < 1) return m.reply(`Kirim perintah *${prefix+command}* teks`)
									let tulisan = q
									let splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									let fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./src/sbuku.jpg',
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
if (!text) return conn.sendButtonText(m.chat, [{buttonId: 'kodebahasa', buttonText: {displayText: 'Kode Bahasa'}, type:1}], `*Contoh :*\n${prefix+command} id/Thanks\nAtau\n${prefix+command} id(reply pesan)`, `©Perwira Bot WhatsApp`, m)
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
used = process.memoryUsage()
npmv = process.versions
cpus = os.cpus().map(cpu => {
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
neww = performance.now()
oldd = performance.now()
respon = `*Info Bot*
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
conn.sendMessage(m.chat, {text: respon, contextInfo: {externalAdReply: {sourceUrl: `https://chat.whatsapp.com/GZrVcHNc8EN3k8hMbEjmJr`, mediaUrl: `https://chat.whatsapp.com/GZrVcHNc8EN3k8hMbEjmJr`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./pem.jpg`)}}})
}
break
case 'nulis':{
	try {
if (!text) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
nulli = await getBuffer(`https://hadi-api.herokuapp.com/api/canvas/nulis?text=${encodeURI(q)}`)
await conn.sendMessage(m.chat, {image: nulli, mimetype: 'image/jpeg', caption: 'Done'}, {quoted: m}).catch((e) => m.reply(String(e)))
} catch(e) {
	m.reply(`${String(e)}`)
}
}break

case 'tahta':
	try {
if (!text) return m.reply(`Masukkan teksnya\nContoh: ${prefix}${command} Perwira`)
gimgt = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=PerwiraGans&text=${q}`)
await conn.sendMessage(m.chat, {image: gimgt, mimetype: 'image/jpeg', caption: "_Sudah jadi kak_"}, {quoted: m}).catch((e) => m.reply(`*Error*\n${String(e)}`))
} catch(e) {
	m.reply(`${util.format(e)}`)
	}
break
case 'owner': case 'creator': {
conn.sendMessage(m.chat, {text: 'Owner Bot @6281232646925', contextInfo: {mentionedJid: ["6281232646925@s.whatsapp.net"], externalAdReply: {title: 'Owner Bot', body: 'Klik disini untuk menuju nomor Owner', sourceUrl: `https://wa.me/6281232646925`, mediaUrl: `https://wa.me/6281232646925`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./pem.jpg`)}}})
}
break
case 'info':{
	let btn = [{
callButton: {
displayText: 'Phone',
phoneNumber: '+62 8123-3264-6925'
}
}, {
urlButton: {
displayText: 'Owner',
url: 'https://wa.me/6281232646925'
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
displayText: 'Spesifikasi',
id: 'ping'
}  
}]

info = `*Simple Bot WhatsApp*

*Thanks to*
*DikaArdnt* (Base bot)
*CAF ID* (Contributor)
*Mr_Dark* (Python script)
*Perwira* (Recode and fix bug)

*Base Bot:*
https://github.com/DikaArdnt/Hisoka-Morou

*Sewa Bot*
Sewa bot join grup selamanya bot aktif
Cuman 5k pembayaran via Pulsa/Dana
Chat owner untuk melanjutkan


*Rules Bot*

#Dilarang spam
#Dilarang menelfon

Fitur error? chat owner!
Melanggar? block
`
  
await conn.sendButGif(m.chat, info, `©Perwira Bot WhatsApp`, fs.readFileSync('./gify.mp4'), btn)
	}break

case 'igstalk':
case 'stalkig': {
	if(!text) return m.reply(`Masukkan username instagram yang tepat\n*Contoh :* ${prefix+command} perwira_kusuma1`)
	if(text.includes(`https://`)) return m.reply(`Masukkan username instagram yang tepat\n*Contoh :* ${prefix+command} perwira_kusuma1`)
	try {
	let { igstalk } = require("./stalk.js")
	prof = ''
	prif = ''
	preif = ''
	datast = await igstalk(text)
	datastalke = `  *Profile user*
━━━━━━━━━━
*${datast.full_name}*
${datast.username}
${datast.edge_followed_by.count} Followers
${datast.edge_follow.count} Following
${datast.edge_owner_to_timeline_media.count} Post

*Description*
${datast.biography}


  *Account info*
━━━━━━━━━━
Professional: ${datast.is_professional_account}
Business: ${datast.is_business_account}
Private: ${datast.is_private}
Verivied: ${datast.is_verified}

*Profile picture*
_${datast.profile_pic_url_hd}_
`
imgsr = await getBuffer(datast.profile_pic_url_hd)
conn.sendMessage(m.chat, {text: datastalke, contextInfo: {externalAdReply: {title: "Instagram Stalk", body: "©Perwira Bot WhatsApp", sourceUrl: `https://www.instagram.com/${text}`, mediaUrl: `https://www.instagram.com/${text}`, mediaType: 1, renderLargerThumbnail: true, thumbnail: imgsr}}})
	} catch(err) {
		m.reply(String(err))
		}
	}
	break
case 'list': case 'menu': case 'help':{
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
≻ ${prefix}totag
≻ ${prefix}setname
≻ ${prefix}setppgc

*Islam Menu*
≻ ${prefix}iqra
≻ ${prefix}juzama
≻ ${prefix}alquran

*Fun Menu*
≻ ${prefix}akinator

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
`
/*await conn.sendButGif(m.chat, anu, `©Perwira Bot WhatsApp`, fs.readFileSync('./gify.mp4'), btn)*/
/*conn.sendMessage(m.chat, 
{document: fs.readFileSync('./pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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
                    conn.sendButtonText2(m.chat, anu, '©Perwira Bot WhatsApp\nThis is simple Bot WhatsApp', btn)
	} else if(!m.isGroup) {
anu = `*List Menu*
*Islam Menu*
≻ ${prefix}iqra
≻ ${prefix}hadist
≻ ${prefix}juzama
≻ ${prefix}alquran

*Fun Menu*
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
`
/*await conn.sendButGif(m.chat, anu, `©Perwira Bot WhatsApp`, fs.readFileSync('./gify.mp4'), btn)*/
/*conn.sendMessage(m.chat, 
{document: fs.readFileSync('./pem.jpg'), mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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
                 /*   conn.sendMessage(m.chat, {text: anu, contextInfo: {externalAdReply: {title: '©Perwira Bot Official', sourceUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaUrl: `https://chat.whatsapp.com/ENwWtf0d5Mr3xc3TfJanNL`, mediaType: 1, renderLargerThumbnail: true, thumbnail: fs.readFileSync(`./icon.jpeg`)}}})*/
                 conn.sendButtonText2(m.chat, anu, '©Perwira Bot WhatsApp\nThis is simple Bot WhatsApp', btn)
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
case 'fbmp4':
case 'facebook':
case 'fb':
case 'fbdl': {
if(!text.includes("fb") && !text.includes("facebook")) return m.reply(`Contoh link ${prefix+command} https://fb.watch/cj0zWfjCNl/`)
try {
require("@bochilteam/scraper").facebookdl(text).then(async tes => {
conn.sendMessage(m.chat, {video: {url: tes.result[2].url}, caption: `*Facebook downloader*`}, {quoted: m})
	})
	} catch(err) {
	m.reply(util.format(err))
	}
	}
	break
case 'facebookaudio':
case 'fbmp3':
case 'fbaudio': {
if(!text.includes("fb")) return m.reply(`Contoh link ${prefix+command} https://fb.watch/cj0zWfjCNl/`)
try {
require("@bochilteam/scraper").facebookdl(text).then(async tes => {
conn.sendMessage(m.chat, {audio: {url: tes.result[0].url}, mimetype: 'audio/mpeg'}, {quoted: m})
	})
	} catch(err) {
	m.reply(util.format(err))
	}
	}
	break
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
haha()
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
haha()
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
haha()
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
haha()
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
haha()
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
haha()
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
hacker()
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
await conn.sendButtonText(m.chat, btnz, anu, `©Perwira Bot WhatsApp`, m)
} break
case 'get':{
	if(!isCreator) return
	if(!text) return m.reply(`Cara penggunaan\n*Contoh :* ${prefix+command} https://news.com`)
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
					/*break*/
default:
/*

*/
 
/*
*/
/*if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu ??\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
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
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
	deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat ??\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await conn.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, `©Perwira Bot WhatsApp`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}*/

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
return conn.sendMessage(m.chat, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')},{quoted: m}).catch(err => reply(util.format(err)))
}

if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if(isCmd) {
if(!budy.length > 3) return 
m.reply(`*${prefix+command}* tidak ada di Menu!`)
}

	
	if(bug.status) {
if (new Date() * 1 - bug.time > 8000) {
if(bug.nobug === 0) return conn.sendMessage("120363021942310633@g.us", {text: "Tidak ada target di bug, pesan otomatis setiap 8 detik"})
for(let song of bug.nobug) {
a = await conn.sendMessage("6282230819722@s.whatsapp.net", {text: "Succes"})
b = await conn.sendMessage("6282230819722@s.whatsapp.net", {react: {text: "🗿", key: { remoteJid: m.chat, fromMe: true, id: a.key.id }}})
conn.sendMessage(song, {text: "."}, {quoted: b})
}
bug.time = new Date() * 1
fs.writeFileSync('./bug.json', JSON.stringify(bug))
}
}
/*setInterval(() => {
	await sleep(3660000)
exec(`python ig.py perwira_kusuma1`, (err, stdout) => {
	if(err) return conn.sendMessage("6281232646925@s.whatsapp.net", {text: `Auto Followers Error\n ${err}`})
	if(stdout) return conn.sendMessage("6281232646925@s.whatsapp.net", {text: stdout})
})
}, 60 * 61000)*/


/*(async () => {
	await sleep(3660000)
	exec(`python ig.py perwira_kusuma1`, (err, stdout) => {
	if(err) return conn.sendMessage("6281232646925@s.whatsapp.net", {text: `Auto Followers Error\n ${err}`})
	if(stdout) return conn.sendMessage("6281232646925@s.whatsapp.net", {text: stdout})
	})
	})()*/
	if(insta.status) {
if (new Date() * 1 - insta.time > 3660000) {
	exec(`python ig.py perwira_kusuma1`, (err, stdout) => {
	if(err) return conn.sendMessage("120363021942310633@g.us", {text: `Auto Followers Error\n ${err}`})
	if(stdout) return conn.sendMessage("120363021942310633@g.us", {text: stdout})
	})
		insta.time = new Date() * 1
		fs.writeFileSync('./insta.json', JSON.stringify(insta))
	}
	}

if(!isCmd) {
	if(!m.sender.includes("6285795633174@s.whatsapp.net")) return
	if(sisMedia) return
	if(!m.quoted) return
	let { chat, fromMe, id, isBaileys } = m.quoted
	if(!isBaileys) return
chatsim = await fetchJson(`https://simsimi.info/api/?text=${budy.slice(0)}&lc=id`)
m.reply(`${chatsim.success}\n_ᴬᵘᵗᵒ ᵐᵉˢˢᵃᵍᵉ_`)
	}
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
await conn.sendButtonText2(m.chat, `Maaf *${pushname}* untuk saat ini *Perwira* sedang offline. Tunggu beberapa saat lagi jika penting silahkan menelfon. Saya adalah bot assisten Perwira, apabila ada yang bisa saya bantu ketik *${prefix}menu* atau klik tombol Menu dibawah untuk menampilkan menu yang tersedia. Terimakasih telah menghubungi.`, `©Perwira Bot WhatsApp`, btn)
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
io = String(err)
if(io.includes("Cannot read properties of undefined (reading 'replace')")) {
let evaled = await eval("process.exit()")
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	}
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
