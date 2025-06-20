module.exports = {
    name: "say",
    aliases: ["ev", "make"],
    type: "messageCreate",
    code: `
    $replace[$message;@;] $c[This will repeat your message, removing @ to it to avoid abuse of mentions]
    `,
    unprefixed: false
}
