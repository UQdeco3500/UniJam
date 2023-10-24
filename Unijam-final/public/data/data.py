import json
events = [
    {
        "Event-organiser": "Organiser 1",
        "Event-organiser-logo": "UQUnionLogo.png",
        "Event-image": "image1.jpg",
        "Event-date": "2023-11-15",
        "Event-venue": "Venue 1",
        "Event-time": "10:00 AM",
        "Event-name": "Event 1",
        "Event-location": "Location 1",
        "Event-type": "Culture"
    },
    {
        "Event-organiser": "Organiser 2",
        "Event-organiser-logo": "UQUnionLogo.png",
        "Event-image": "image1.jpg",
        "Event-date": "2023-11-20",
        "Event-venue": "Venue 2",
        "Event-time": "9:00 AM",
        "Event-name": "Event 2",
        "Event-location": "Location 2",
        "Event-type": "Art"
    },
    {
        "Event-organiser": "Organiser 3",
        "Event-organiser-logo": "UQUnionLogo.png",
        "Event-image": "image1.jpg",
        "Event-date": "2023-12-25",
        "Event-venue": "Venue 3",
        "Event-time": "1:00 PM",
        "Event-name": "Event 3",
        "Event-location": "Location 3",
        "Event-type": "Educational"
    }
]


# The JSON file path 
json_file_path = "proof-of-concept/events-details.json"

# Saving the raw data to the JSON file
with open(json_file_path, "w") as json_file:
    json.dump(events, json_file, indent=4)