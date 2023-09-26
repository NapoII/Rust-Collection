from datetime import datetime

def format_countdown_date(input_date):
    try:
        # Das Eingabedatum analysieren
        parsed_date = datetime.strptime(input_date, '%B %dth %Y')

        # Das Countdown-Datum im gewünschten Format erstellen
        countdown_date = parsed_date.strftime('%Y-%m-%dT01:00:00+02:00')
        return countdown_date
    except ValueError:
        # Fehlerbehandlung für ungültiges Eingabeformat
        return "Ungültiges Datum"

# Beispiel-Eingabe: "October 12th 2023"
input_date = input("Geben Sie das Datum im Format 'Month Dayth Year' ein (z.B. October 12th 2023): ")
countdown_date = format_countdown_date(input_date)
print("Countdown-Datum:", countdown_date)
