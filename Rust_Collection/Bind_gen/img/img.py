import os

def create_image_list_file():
    # Ordner, in dem das Skript ausgeführt wird
    current_directory = r"E:\Pr0grame\My_HTML\Rust_Collection\Rust_Collection\Bind_gen\img"

    # Liste der Dateien im aktuellen Ordner
    files_in_directory = os.listdir(current_directory)

    # Filtere nur Dateien mit den angegebenen Bildendungen (hier sind es 'jpg', 'jpeg' und 'png')
    image_extensions = ['.jpg', '.jpeg', '.png']
    image_files = [file for file in files_in_directory if any(file.lower().endswith(ext) for ext in image_extensions)]

    # Erstelle den Dateipfad für die Textdatei
    text_file_path = os.path.join(current_directory, 'image_list.txt')

    # Schreibe die Dateinamen (ohne Erweiterung) in die Textdatei
    with open(text_file_path, 'w') as file:
        for image_file in image_files:
            image_name = os.path.splitext(image_file)[0]
            file.write(image_name + '\n')

    print(f"Textdatei '{text_file_path}' wurde erstellt und die Bildernamen wurden hinzugefügt.")

if __name__ == "__main__":
    create_image_list_file()
