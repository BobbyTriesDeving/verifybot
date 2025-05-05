const { Client, GatewayIntentBits, Partials, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel]
});

client.once('ready', () => {
    console.log(`Bot ready as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
    if (message.content === "!verify") {
        const embed = new EmbedBuilder()
            .setTitle("Verification Required")
            .setDescription(`Welcome to **Changeme**

To get Verified follow the steps below:

🔗 You can use the **Connect** button below to launch your FiveM and connect to **servername**.

✅ After you have successfully connected to **Server 1** and spawned in, type \`/link\` in-game!

❓ If the problem persists, please make a ticket and a staff member will assist you.`)
            .setColor(0x3498db)
            .setImage("https://your-image-url-here.png")
            .setFooter({ text: "BobbyTriesDeving" });

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Connect")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://cfx.re/join/r9odzj"),
                new ButtonBuilder()
                    .setLabel("Get Verified")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://cfx.re/join/r9odzj")
            );

        await message.channel.send({ embeds: [embed], components: [row] });
    }
});


client.login('Yourtoken');
