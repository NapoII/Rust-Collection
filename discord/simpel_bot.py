import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = 

# Deine vorgegebene Channel-ID hier einfügen
CHANNEL_ID =   # Hier die richtige Channel-ID eintragen

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
        description="""👋 Welcome to our Rust Information Hub Discord!

We're delighted to have you here. Our Discord server serves as a dedicated space for discussing and improving our Rust information website.
If you have any questions about the content on our website, need clarification on Rust-related topics, or have suggestions on how we can enhance our information pool, you're in the right place! Feel free to share your thoughts and ideas; your feedback helps us make our website even better.

In the spirit of open collaboration, we encourage you to engage in discussions, share your insights, and help us create a valuable resource for the Rust community.
Relax, make yourself at home, and enjoy your time here. Your input is highly appreciated, and together, we can build an outstanding Rust information hub!

🚀 Let's make our Rust knowledge base the best it can be!

Suggestions for the website --> <#1152314539757555724>
Questions this way --> <#1152317069665243188>
""",
        color=discord.Color.blue()  # Farbe des Embeds
    )

    # Set the image URL in the embed
    image_url = "https://raw.githubusercontent.com/NapoII/Rust-Collection/main/discord/ideogram.jpeg"
    embed.set_image(url=image_url)

    # Add a field with a link
    website_url = "https://napoii.github.io/Rust-Collection/"
    embed.add_field(name="Rust-Collection", value=f"[Lets go to Rust-Collection]({website_url})")

    await channel.send(embed=embed)

client.run(TOKEN)
