const Commando = require('discord.js-commando');
const path = require('path');

const Settings = require('./settings');

const client = new Commando.Client({
	owner: Settings.owner_id
});

client.registry
	// Registers your custom command groups
	.registerGroups([
		['waifu', '']
	])
	.registerDefaults()
	.registerCommandsIn(path.join(__dirname, 'commands'));


client.login(Settings.client_token);