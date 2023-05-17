require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

// Event handler for when the bot is ready
bot.once('ready', () => {
    console.log(`Bot connected as ${bot.user.tag}`);
});

// Event handler for incoming messages
bot.on('messageCreate', (message) => {
    // Your code to handle incoming messages
    if (message.author.bot) return; // Ignore bot messages
    // 
    if (message.content === 'hello') { 
        message.channel.send('Hello I am bot');
    }
    console.log('Message received');
console.log(message.content);
});

bot.on('interactionCreate', (interaction) => {
    
    if (!interaction.isChatInputCommand()) return;
    // Your code to handle interactions
    console.log('Interaction received');
    console.log(interaction);
    if (interaction.commandName === 'hello') {
        interaction.reply('Hello I am bot');
    }
});


// Log in to the Discord server using your bot token
bot.login(process.env.DISCORD_tOKEN);



