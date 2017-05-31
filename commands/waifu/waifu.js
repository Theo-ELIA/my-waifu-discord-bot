const Commando = require('discord.js-commando');
const WaifuManager = require('../../waifu-manager')
module.exports = class BeginQuizzCommand extends Commando.Command {

	constructor(client) {
		super(client, {
			name: 'waifu',
			aliases : ['mamandesacha'],
			group: 'waifu',
			memberName: 'waifu',
			details: 'À chaque personne, sa waifu !',
			description: `Donne-moi un nom de personne et je te dirai qui est sa waifu !`,
			examples: ['meredesacha'],
			args : [
				{
					key : 'person',
					prompt : 'De quelle personne voulez-vous connaître la waifu ?',
					type : 'string'
				}
			]
		});
	}

	async run(message, args) {

		let waifu = await WaifuManager.getWaifuMatch(args.person);
		message.channel.send(`La waifu de ${args.person} est...`);
		message.channel.send(`${waifu.content.display_picture}`);
		message.channel.send(`${waifu.url}`);
	}
}
