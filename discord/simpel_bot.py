import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = ""

# Deine vorgegebene Channel-ID hier einfügen
CHANNEL_ID =   # Hier die richtige Channel-ID eintragen

# Initialisierung des Discord-Clients
intents = discord.Intents.default()
intents.typing = False
intents.presences = False
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f'Eingeloggt als {client.user.name}')
    channel = client.get_channel(CHANNEL_ID)

    # Erstelle ein Embed
    embed = discord.Embed(
        title='Einfache Embed-Nachricht',
        description='Dies ist eine einfache Embed-Nachricht, die einmal gesendet wird.',
        color=discord.Color.blue()  # Farbe des Embeds
    )

    await channel.send(embed=embed)

client.run(TOKEN)
