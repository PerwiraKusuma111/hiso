const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function igstalk (user) {
return new Promise((resolve, reject) => {
    axios('https://www.instagram.com/'+ user +'/?__a=1',{
    	method: 'GET',
	    headers: {
           'authority': 'www.instagram.com',
           'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
           'accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7',
           'cookie': 'mid=YLREfQALAAHPeUSfqfJSn0nvhXpp; ig_did=34BB6410-8A26-4B2A-A103-E2FAAF7A0B89; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=PqSwWB04gGulnNutPdsU31ECOlZfdTJd; ds_user_id=48345828491; sessionid=48345828491%3ANnpJfzmzoCVt8E%3A2; shbid="19070\\05448345828491\\0541684719022:01f7a05eb7aa375400dc27b2d78005166c1ad5980bf097c9ea0dfedeea3a82cf01cdbeda"; shbts="1653183022\\05448345828491\\0541684719022:01f7d88186086841f402b10a249b0b979d997bf2cfd7ddd0d4bb5101f220d75c3b4ed641"; rur="EAG\\05448345828491\\0541684719126:01f72bcad89db7da0374c5a29ae92b5b66ee3fb030515daafcbdfd8801c9364ddc8e9890"',
           'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Microsoft Edge";v="101"',
           'sec-ch-ua-mobile': '?0',
           'sec-ch-ua-platform': '"Windows"',
           'sec-fetch-dest': 'document',
           'sec-fetch-mode': 'navigate',
           'sec-fetch-site': 'none',
           'sec-fetch-user': '?1',
           'upgrade-insecure-requests': '1',
           'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53'
        }
   }).then(({ data }) => {
			resolve(data.graphql.user)
       })
   })
}

module.exports = { igstalk }