import json
events = [
    {
        "name": "Arts and Craft Workshop",
        "type": "Art"
    },
    {
        "name": "Arts Mural",
        "type": "Art"
    },
    {
        "name": "International Food Festival",
        "type": "Food"
    },
    {
        "name": "Bubble tea workshop",
        "type": "Food"
    },
    {
        "name": "Dumpling workshop",
        "type": "Food"
    },
    {
        "name": "Welcome Games",
        "type": "Sports"
    },
    {
        "name": "IC football championship",
        "type": "Sports"
    },
    {
        "name": "Lunar New Year",
        "type": "Culture"
    },
    {
        "name": "Holi",
        "type": "Culture"
    },
    {
        "name": "Moon Festival",
        "type": "Culture"
    },
    {
        "name": "Mana of the Pacific",
        "type": "Culture"
    },
    {
        "name": "TOGA Party",
        "type": "Music"
    },
    {
        "name": "Live Music",
        "type": "Music"
    },
    {
        "name": "Indeopia Music Festival",
        "type": "Music"
    },
    {
        "name": "Visa expiry session",
        "type": "Music"
    },
    {
        "name": "Employability workshop",
        "type": "Music"
    },
]


# The JSON file path 
json_file_path = "proof-of-concept/data.json"

# Saving the raw data to the JSON file
with open(json_file_path, "w") as json_file:
    json.dump(events, json_file, indent=4)

print(f"Raw data saved to {json_file_path}")