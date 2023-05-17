require('dotenv').config();
const { REST, Routes, ApplicationCommandType } = require('discord.js');

// const commands = [
//     {
//         name: 'hello',
//         description: 'Says hello to the user',
//     },
// ];

// options to /commands with default value
const commands = [
    {
        name: 'Add',
        description: 'Add two numbers',
        //array of objects
        options: [
            {
                name: 'First-number',
                description: 'First number',
                type: ApplicationCommandType.Number,
                //it will provide choice
                choices: [
                    {
                        name: 'One',
                        value: 1,
                    },
                    {
                        name: 'Two',
                        value: 2,
                    },
                    {
                        name: 'Three',
                        value: 3,
                    },
                ],
                required: true,
            },
            {
                name: 'Second-string',
                description: 'Second number',
                type: ApplicationCommandType.Number,
                required: true,
            },
        ], //
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => { 
    try {
        console.log('Started registering commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.SERVER_ID),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();