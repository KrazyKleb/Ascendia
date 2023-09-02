const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`rulesembed`)
    .setDescription(`Sends the rules embed`),
    async execute (interaction) {
        const rulesEmbed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle(`__**Rules!**__`)
        .setDescription(`__**Rules!**__`)
        .addFields(
            { name: `**1. Follow Discord's TOS**`, value: `> https://discordapp.com/terms\n> https://discordapp.com/guidelines` },
            { name: ``, value: `` },
        )
    }
}