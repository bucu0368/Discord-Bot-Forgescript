const { ForgeClient } = require("@tryforge/forgescript")

const client = new ForgeClient({
    intents: [ // intents, add or remove based on your needs
        "Guilds",
        "MessageContent",
        "GuildMessages",
        "GuildMembers",
        "DirectMessages",
        "GuildInvites",
        "GuildModeration",
        "GuildVoiceStates"
    ],
    events: [ // events you will use, add or remove based on your needs
        "messageCreate",
        "ready",
        "guildAuditLogEntryCreate",
        "guildMemberAdd",
        "interactionCreate"
    ],
    useInviteSystem: false, // if you will track invites, put this to true, and keep the GuildInvites intent
    prefixes: [
        "!", "?" // your bot's prefix or prefixes
    ],
    restrictions: {
    },
    extensions: [ // extensions below, if any.

    ]
})

client.commands.load("./commands")

// This part puts something on the console once bot is online
client.commands.add({
    type: "ready",
    code: `
    $log[- Bot $username[$botID] ID "$botID" is online!]
    `
})

// Change "Your token" by your bot token.
client.login("Your token");
