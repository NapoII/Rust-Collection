import os
from pathlib import Path
from PIL import Image

# Verzeichnis, in dem sich diese Python-Datei befindet
verzeichnis = os.path.dirname(os.path.abspath(__file__))

# Alle Dateinamen im Verzeichnis auflisten, die mit ".png" enden
png_dateien = [datei for datei in os.listdir(verzeichnis) if datei.endswith(".png")]

# Die Liste der PNG-Dateien ausgeben
print(png_dateien)

def convert_to_webp(source):
    """Convert image to WebP.

    Args:
        source (pathlib.Path): Path to source image

    Returns:
        pathlib.Path: path to new image
    """
    destination = source.with_suffix(".webp")

    image = Image.open(source)  # Open image
    image.save(destination, format="webp")  # Convert image to webp

    return destination

len_png_dateien = len(png_dateien)
x = -1
while True:
    x = x + 1
    if x == len_png_dateien:
        break
    
    print(f"convert: {png_dateien[x]}")
    convert_to_webp(Path(verzeichnis) / png_dateien[x])
