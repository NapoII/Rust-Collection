import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = "MTE3MjAxNzY1MjY1MTI2NjE0MA.GBv9XO.euJBoXegu5t3j7T9dG_L29wHyGj7K26CYrL5Nw"

# Deine vorgegebene Channel-ID hier einfügen
CHANNEL_ID = 859611175032455198

website_url = "discord.gg/gGjW9AY"

# Initialisierung des Discord-Clients
intents = discord.Intents.default()
intents.typing = False
intents.presences = False
client = discord.Client(intents=intents)


def create_embed(game, server, when, event, players, description):
    embed = discord.Embed(title="Server Incident Report", color=0xFF5733)
    embed.add_field(name="Game", value=game, inline=False)
    embed.add_field(name="Server", value=server, inline=False)
    embed.add_field(name="When", value=when, inline=False)
    embed.add_field(name="Event", value=event, inline=False)
    embed.add_field(name="Players on the Server", value=players, inline=False)
    embed.add_field(name="Description", value=description, inline=False)
    embed.set_footer(text="Incident Report Example")


@client.event
async def on_ready():
    print(f'Eingeloggt als {client.user.name}')
    channel = client.get_channel(CHANNEL_ID)

    embed = discord.Embed(title="Rule",
                        description="The Rules will append depending on what is happening. Usually we follow a free based rule of respecting each other. Stay legal and treat other like you would treat yourself. That should be all. Oh and dont spam. If somebody is not answering, be patient.",
                        colour=0x00b0f4)

    embed.set_image(url="https://i.imgur.com/s2afMEh.png")


    content = "  <@&1102063023516033114>"
    await channel.send(embed=embed)




client.run(TOKEN)
