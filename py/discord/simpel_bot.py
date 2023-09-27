import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = ""

# Deine vorgegebene Channel-ID hier einfügen
CHANNEL_ID =

website_url = "https://napoii.github.io/Rust-Collection/"

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
        description="""Hello on the Rust Collection Discord
🌟 Explore Our New Feature: Upgrade Calc!

Greetings, Rust Enthusiasts!

We are excited to introduce a fantastic addition to our Rust information website - the Starter Base Materials Calculator! Your feedback and suggestions have driven us to create this indispensable tool that will make your Rust gaming experience even more enjoyable.

🏡 What Does the Starter Base Materials Calculator Do?
With this new tool, you can effortlessly and swiftly calculate the materials required for your starter base construction. No more guesswork or tedious manual calculations! Know exactly how much you need to gather before you embark on your building adventure.

""",
        color=discord.Color.blue()  # Farbe des Embeds
    )

    # Set the image URL in the embed
    image_url = "https://i.imgur.com/APz0sxZ.png"
    embed.set_image(url=image_url)

    # Add a field with a link
    website_url = "https://napoii.github.io/Rust-Collection/"
    embed.add_field(name="Rust-Collection",
                    value=f"[Lets go to Rust-Collection]({website_url})")

    await channel.send(embed=embed)

client.run(TOKEN)
