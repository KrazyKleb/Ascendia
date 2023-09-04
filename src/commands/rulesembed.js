const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require(`discord.js`)

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`rulesembed`)
    .setDescription(`Sends the rules embed`),
    async execute (interaction) {
        
        const jsonData = {
            "content": null,
            "embeds": [
              {
                "color": 3092790,
                "image": {
                  "url": "https://cdn.discordapp.com/attachments/1145247944581337180/1147808963694448690/image_2023-09-03_182218279-removebg-preview.png"
                }
              },
              {
                "color": 3092790,
                "fields": [
                  {
                    "name": "_ _",
                    "value": "**__You are requested to follow the following rules in order to keep the server safe.__**"
                  }
                ]
              },
              {
                "color": 3092790,
                "fields": [
                  {
                    "name": "__**General Rules**__",
                    "value": "_ _\nNo spam \n- This includes but is not limited to loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message spam.\n\nNo inappropriate content \n- This includes gory, sexual or scary content and content which might include screamer links, porn, nudity, death. Profile pictures, nicknames and statuses also have to follow this rule.\n\nNo harassment \n- Including sexual harassment or encouraging any form of harassment.\nMild swearing is allowed as long as it isn't directed towards another member.\nModerators and Admins reserve the right to delete and edit posts.\nMass mentioning (@everyone and/or @here) is strictly forbidden. The concerned messages will be immediately deleted and the poster might be expelled from the server."
                  },
                  {
                    "name": "_ _",
                    "value": "Be excellent to one another.\n-No put downs, bullying, harassment, or abuse. Everyone is welcome and supported on this server.\n\nNo harassment, abuse, bullying, or trolling.\n-We have zero tolerance for harming or antagonizing others.\n\nNo racist, sexist, anti-LGBTQ+ speech, or other offensive content.\n-We have no tolerance for hate speech.\n\nNo political or religious topics.\n-These complex subjects result in controversial and offensive posts. Refrain from talking about such topics here, even if intended in an ironic or joking manner.\n\nNo swearing or other behavior that would not be allowed in the building.\n-This server is an extension of the physical building, so the same rules apply."
                  }
                ]
              },
              {
                "color": 3092790,
                "fields": [
                  {
                    "name": "__**Voice Rules**__",
                    "value": "_ _\n-No annoying, loud or high pitch noises.\nReduce the amount of background noise, if possible.\n\n-Moderators reserve the right to disconnect you from a voice channel if your sound quality is poor.\n\n-Moderators reserve the right to disconnect, mute, deafen, or move members to and from voice channels."
                  }
                ]
              },
              {
                "color": 3092790,
                "fields": [
                  {
                    "name": "WARNINGS, MUTES, & BANS You may get a couple warnings. If you ignore our warnings, it will result in a mute. How long you are muted will depend on how many warnings and mutes you’ve gotten.\n_ _",
                    "value": "Warnings (vary on importance based on the rules)\n1st mute can range from 10 minutes to 24 hours.\n2nd mute will be 3 days.\n3rd mute will be one week.\n4th mute will be a permanent ban.\n\nYou are not promised three strikes/warnings/mutes. Depending on the severity of the infraction, you may end up skipping a warning level in favor of a steeper penalty.\nExample: Game Discord server rules"
                  }
                ]
              },
              {
                "color": 3092790,
                "fields": [
                  {
                    "name": "**__Consequences of Rule Breakage__**",
                    "value": "_ _\n-The server uses bots for moderation (specifically, MEE6 and Carl-bot) which send a message to the concerned person if several emojis, repeated letters or multiple capitals are used. A report is filed which can be then viewed by the Moderators for action.\nOur bots document each and every edit or delete to messages, so no one can get away by modifying their offensive content after posting it.\n\nMore serious offences can involve message deletion, a warning or even direct expulsion from the server.\n\nEach and every case will be subjected to the decision of the Moderators and Admins which will be final and binding."
                  },
                  {
                    "name": "__**The board of administrators will be the final arbiters of the rules in case of any breaches.**__",
                    "value": "_ _"
                  }
                ]
              }
            ],
            "attachments": []
          }
        
        const embed = new RichEmbed(jsonData);

        interaction.reply({ embeds: [embed] });
    }
}