from datetime import datetime, timedelta

# Gegebenes Format
given_format = "%Y-%m-%dT01:00:00+02:00"
given_date_str = "2023-12-11T01:00:00+02:00"

# Wandele das gegebene Datum ins DateTime-Objekt um
given_date = datetime.strptime(given_date_str, given_format)

# Erstelle das gewünschte Format
desired_format = "%Y-%m-%dT%H:%M:%S%z"

# Füge die Zeitzoneinformation hinzu
desired_date_str = given_date.strftime(desired_format)

print(desired_date_str)
