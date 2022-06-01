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

function wsearch(search) {
	return new Promise((resolve, reject) => {
axios.get('https://wallpapercave.com/search?q=' + search).then((response) => {
	if(response.status === 200) {
		const html = response.data
		const $ = cheerio.load(html)
		data = []
		$("div.aall").each(function(a, b) {
			data.push({
			"channel": $(b).find("div.albumphoto").attr("title"),
			"photos": $(b).attr("photos"),
            "link": "https://wallpapercave.com"+$(b).find("div.albumphoto").attr("href")
              })
			
			})
			
			resolve({result: data})
		}
	})
	})
	}
	
	 
function wallpaper(quer) {
		return new Promise((resolve, reject) => {
	axios.get(quer).then((response) => {
	if(response.status === 200) {
		const html = response.data
		const $ = cheerio.load(html)
		datas = []
		$("a.wpinkw").each(function(a, b) {
			data.push({
			"title": $(b).find("img").attr("alt"),
            "link": "https://wallpapercave.com"+$(b).find("img").attr("src")
             })
			
			})
			resolve({result: data})
		}
	})
	})
	}
	
	
	
module.exports = { wsearch, wallpaper }