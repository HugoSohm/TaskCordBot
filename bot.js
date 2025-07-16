const { Client, Events, GatewayIntentBits } = require('discord.js');
const phxbot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const dotenv = require('dotenv');

dotenv.config();

var today = new Date();
var freq, date, time;

function generateRandomRadio() {
    generateDateTime();

    var rand = Math.random() * (512 - 30) + 30;
    var power = Math.pow(10, 1);
    freq = Math.floor(rand * power) / power;
    return freq;
}

function generateDateTime() {
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    time = today.getHours() + ":" + today.getMinutes();
    return date, time;
}

function displayMessage(string, msg, command) {
    d = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    t = today.getHours() + ":" + today.getMinutes();

    msg.reply(string)
        .then(console.log("[" + d + " " + t + "] " + command + " par " + msg.member.user.tag + " dans " + msg.channel))
        .catch(console.error);
}

phxbot.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

phxbot.on(Events.MessageCreate, message => {
    if (message.author.bot) return;
    
    var command = message.content;
    if (command === '!newradio') {
        displayMessage("La nouvelle fréquence radio est " + generateRandomRadio(), message, command);
    }
    if (command === '!radio') {
        if (freq == null)
            displayMessage("Aucune fréquence n'est définie, écrit !newradio pour en générer une", message, command);
        else
            displayMessage("La fréquence radio actuelle est " + freq + " [Création le " + date + " à " + time + "]", message, command);
    }
    if (command === "!commands")
        displayMessage("!newradio pour générer une nouvelle fréquence | !radio pour afficher la fréquence actuelle", message, command);
});

phxbot.login(process.env.DISCORD_TOKEN);