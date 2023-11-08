import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = "MTEwMzQwNzU1MDkxOTA4NjE1MQ.GhVJnA.jbgHRDTT7qhCyHnI8ZjAGGjHQet5erv7RcXHR0"

# Deine vorgegebene Channel-ID hier einfügen
CHANNEL_ID = 1152263133109424159

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
        description="""🚧 Hello, Rust Innovators! 🌟
🔧 Explore Our Newest Feature: Fertilizer Sales Estimator! 💰

Greetings, Rust Fanatics!

We're thrilled to unveil an exciting addition to our Rust gaming toolkit - the Fertilizer Sales Estimator! Your feedback and suggestions have inspired us to create this invaluable feature that will elevate your Rust gaming experience to the next level.

💼 What Can You Do with the Fertilizer Sales Estimator?
With this latest update, you can now effortlessly and swiftly calculate your profits from selling fertilizers. No more guesswork or tedious manual calculations! Know precisely how much you're making when you cash in your fertilizers. Get ready to maximize your farming profits! 🌾💰🚜
You can find it in the diesel calculator
""",
        color=discord.Color.blue()  # Farbe des Embeds
    )

    # Set the image URL in the embed
    image_url = "https://i.imgur.com/XSx2Kfy.png"
    embed.set_image(url=image_url)

    # Add a field with a link
    website_url = "https://napoii.github.io/Rust-Collection/"
    embed.add_field(name="Rust-Collection",
                    value=f"[Lets go to Rust-Collection]({website_url})")

    await channel.send(embed=embed)

client.run(TOKEN)
