const Request = require('request-promise-native');
const cheerio = require('cheerio')

let WaifuAssociation = new Map();

class WaifuManager {

	static async getWaifuMatch(person) {

		let newWaifu = '';

		if(WaifuAssociation.has(person)) {
			return WaifuAssociation.get(person)
		}
		else {
			newWaifu = await WaifuManager.getRandomWaifu()
			WaifuAssociation.set(person,newWaifu);
			console.log('Waifu found ' + newWaifu);
			return newWaifu;
		}
	}

	static async getRandomWaifu() {
		let waifu = {};
		let response = await Request({
				uri : 'https://mywaifulist.moe/random',
				resolveWithFullResponse: true,
				pool: false
			})

		const $ = cheerio.load(response.body)
		waifu = { content : JSON.parse($('waifucore')[0].attribs['waifu-json']) , url : response.request.uri.href }
		return waifu;
		
	}
}

module.exports = WaifuManager;

WaifuManager.getWaifuMatch('Guy Roux');
