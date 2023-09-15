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
        title='Hello on the Rust Collection Discord',
        description='Dies ist eine einfache Embed-Nachricht, die einmal gesendet wird.',
        color=discord.Color.blue()  # Farbe des Embeds
    )

    # Set the image URL in the embed
    image_url = "https://raw.githubusercontent.com/NapoII/Rust-Collection/main/discord/ideogram.jpeg"
    embed.set_image(url=image_url)

    # Add a field with a link
    website_url = "https://napoii.github.io/Rust-Collection/"
    embed.add_field(name="Website", value=f"[Visit Website]({website_url})")

    await channel.send(embed=embed)

client.run(TOKEN)
