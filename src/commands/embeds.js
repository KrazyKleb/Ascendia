const { SlashCommandBuilder } = require(`@discordjs/builders`)

const { EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`embeds`)
    .setDescription(`List the embeds - Coded by KrazyKleb`),
    async execute (interaction) {
        const embed = new EmbedBuilder()
        .setColor(`Blue`)
        .setTitle(`Embed list`)
        .setFields(
            { name: `Information Embed (/infoembed)`, value: `Information Embed, goes in the <#1146060384638349352> channel` },
            { name: `Rules Embed (/infoembed)`, value: `Rules Embed, goes in the <#1145921287319990413> channel` },
        )

        interaction.reply({ embeds: [embed], ephemeral: true })
    }
}