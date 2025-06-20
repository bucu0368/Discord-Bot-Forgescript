module.exports = {

    name: "clear",

    type: "messageCreate",

    code: `

$onlyIf[$hasPerms[$guildID;$authorID;Administrator]==true;You need admin perm just to use this.]

$onlyIf[$isNumber[$message[0]];Provide the amount to clear]

$let[cleared;$clearMessages[$channelID;$message[0]]]

$title[Cleared 🧹]

$description[Successfully deleted **$get[cleared]** Messages.]

$footer[Deleted by $username]

$color[#FFFF00]

`

}