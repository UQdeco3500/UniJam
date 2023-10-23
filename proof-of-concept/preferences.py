import json

#Defining the preference as a Python Dictionary

preferences = {
    "Art" : False,
    "Culture" : False,
    "Music" : False,
    "Sports" : False,
    "Educational" : False
}

#Name of the json file 
fileName = "preferences.json"

#Writing the preferences to the JSON file
with open(fileName, "w") as json_file:
    json.dump(preferences, json_file, indent = 4)

