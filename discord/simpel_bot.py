import discord

# Deine Discord-Bot-Token hier einfügen
TOKEN = ""

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
        description="""📣 **Welcome to the Suggestions Channel!**

This is the place where you can have a direct impact on our Rust information website. We're always looking for ways to improve and expand, and your suggestions play a crucial role in making that happen.

🚀 **What Can You Suggest?**
Feel free to share any ideas or suggestions related to our Rust information hub. Whether it's a concept for a new guide, a web tool that would be useful for Rust players, or any other improvement you can think of, your input is highly valuable.

✍️ **How to Share Your Suggestions**
To submit your suggestion, simply create a new post in this channel. Be as detailed as possible so that we can understand your idea clearly. Your fellow community members and our team will be here to discuss, refine, and appreciate your contributions.

🌟 **Recognition**
We greatly appreciate your involvement in enhancing our Rust resource. Outstanding suggestions may even receive special recognition, and contributors will be credited for their valuable contributions on our website.

Thank you for being part of our community and helping us make our Rust information hub the best it can be. Your creativity and insight are what drive us forward!

Happy suggesting! 🌐


Suggestions for the website --> <#1152314539757555724>
Questions this way --> <#1152317069665243188>
""",
        color=discord.Color.blue()  # Farbe des Embeds
    )

    # Set the image URL in the embed
    image_url = "https://raw.githubusercontent.com/NapoII/Rust-Collection/main/discord/suggestion.jpeg"
    embed.set_image(url=image_url)

    # Add a field with a link
    website_url = "https://napoii.github.io/Rust-Collection/"
    embed.add_field(name="Rust-Collection",
                    value=f"[Lets go to Rust-Collection]({website_url})")

    await channel.send(embed=embed)

client.run(TOKEN)
