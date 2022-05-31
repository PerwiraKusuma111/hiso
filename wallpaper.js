 const axios = require("axios")
 const cheerio = require("cheerio")
 
 function wallpaperhd(link) {
	return new Promise((resolve, reject) => {
	axios.get(link).then((response) => {
	if(response.status === 200) {
		const html = response.data
		const $ = cheerio.load(html)
		data = []
		/*$("ul.pagination").each(function(a, b) {
			data.jumlah.push($(b).attr("data-pagination").split('total":')[1].split(',')[0])
			})*/
		$("a.preview").each(function(a, b) {
			data.push({ "link": $(b).attr("href") })
			
			})
			resolve(data)
		}
	})
	})
	}
	
	function linked(linkid) {
		return new Promise((resolve, reject) => {
	axios.get(linkid).then((response) => {
	if(response.status === 200) {
		const html = response.data
		const $ = cheerio.load(html)
		const u = cheerio.load(html)
		data = []
		$("#wallpaper").each(function(a, b) {
			data.push($(b).attr("src"))
			
			})
			resolve(data)
		}
	})
	})
	}
 
 
 module.exports = { wallpaperhd, linked }