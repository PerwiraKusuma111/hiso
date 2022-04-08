const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
let fs = require('fs')

function pickRandom(input) {
    return input[Math.floor(Math.random() * input.length)]
}


function imgupload(url) {
 return new Promise((resolve, reject) => {
axios('https://api.kraken.io/v1/url', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: {"auth":{"api_key": "f34968c1a3d71e4eb787121155e7d9c4", "api_secret": "a065684928ed7d884472efe26dfb7a64109e42e0"}, "wait":true, "url": url}
    })
    .then(({ data }) => {
    resolve(data.kraked_url)
    })
  })
}




function pickRandom(input) {
    return input[Math.floor(Math.random() * input.length)]
}
function wallpaper1(text) {
	return new Promise((resolve, reject) => {
/*const data = JSON.parse(fs.readFileSync('./data.json'))*/
axios.get(`https://wallpapercave.com/search?q=${q}`).then((response) => {
	if(response.status === 200) {
		const dataHt = response.data
		const $ = cheerio.load(dataHt)
		let hasil = []
            $('#suwp a').each(function (a, b) {
                hasil.push({ title: `${$(b).attr('title')}`,
                link: `https://wallpapercave.com/uwp${$(b).find('img').attr('src').split("/fuwp")[1]}`
                	})
            })
        /*data['perwira'] = hasil*/
        /*fs.writeFileSync("./data.html", dataHt)*/
        hasilku = {result: pickRandom(hasil)}
            console.log(hasilku)
            resolve(hasilku)
       /*console.log(dataHt)*/
		}
		})
		})
		}
		



async function wallpaper2(q) {
  return new Promise(async(resolve, reject) => {
  axios.get("https://www.wallpapercave.com/search?q="+q)
  .then(({ data }) => {
       const $ = require('cheerio').load(data)
       mek = $('#popular > a > div')
       if (!mek.text()) return { status: false, creator: 'CAF-ID', result: [] }
        res = []
        resimg = []
        mek.each((a, b) => {
          res.push('https://www.wallpapercave.com'+$(b).find('div.albumphoto').attr("href"))
         })
        axios.get(pickRandom(res)).then(({ data }) => {
          $$ = require("cheerio").load(data)
          haha = $$('body > div#web > div#album > div#albumwp > div.wallpaper')
          haha.each((a, b) => {
              url = 'https://wallpapercave.com'+$$(b).find('a.wpinkw > picture > img.wimg').attr('src')
              resimg.push(url)
           })
           _hasil = pickRandom(resimg)
             imgupload(_hasil).then(async hasil => {
               resolve({ status: true, creator: 'CAF-ID', result: hasil })
             })
          })
       })
   })
}


	
	
module.exports = { wallpaper1, wallpaper2 }