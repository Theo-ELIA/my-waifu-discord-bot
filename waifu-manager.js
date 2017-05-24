const Request = require('request-promise-native');

let WaifuAssociation = new Map();

module.exports = class WaifuManager {

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
		let response = await Request({
				uri : 'https://mywaifulist.moe/random',
				resolveWithFullResponse: true
			})

		return response.request.uri.href;
		
	}
}