let preferenceScreen = document.querySelector(".preference-screen");

function displayPreferences() {

    preferenceScreen.classList.add("active");

    const preferenceButtons = document.getElementById('preference-buttons');
    const doneButton = document.getElementById('done-button');
    let preferences = {};

    // Fetch the JSON data from preferences.json
    try {
        let response = localStorage.getItem('userPreferences');
        let data = JSON.parse(response);
        if (data == null) {
            fetch('data/preferences.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPreferenceButtons(data);
            })
            .catch(error => console.error('Error fetching data: ' + error));
        } else {
            setPreferenceButtons(data);
        }
        

    } catch {
        fetch('data/preferences.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPreferenceButtons(data);
        })
        .catch(error => console.error('Error fetching data: ' + error));

    }

    function setPreferenceButtons(data) {
        preferences = data;
        preferenceButtons.innerHTML = "";
        for (const preference in data) {
            createPreferenceButton(preference, data[preference]);
        };
    }

    // Add a click event to the "Done" button
    doneButton.addEventListener('click', () => {
        // Save the preferences to local storage
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        closePreferences();
        // Fetch and read the events-details.json file
        fetch('../data/event-details.json')
        .then(response => response.json())
        .then(events => {
            const filteredEvents = filterEventsByType(events, preferences);
            displayEvents(filteredEvents);
        })
        .catch(error => {
            console.error("Error fetching and processing events-details.json:", error);
        });
   
    });

    // Function to create preference buttons
    function createPreferenceButton(preference, selected) {

        const button = document.createElement('button');
        button.textContent = preference;
        button.classList.add(selected ? 'selected' : 'unselected');

        // Add a click event to toggle the preference
        button.addEventListener('click', () => {
            preferences[preference] = !preferences[preference]; // Toggle the preference
            updateButtonStyle(button, preferences[preference]);
            console.log("preferences: ", preferences);
        });

        preferenceButtons.appendChild(button);
        // return button;
    }

    // Function to update the button style
    function updateButtonStyle(button, selected) {
        if (selected) {
            button.classList.remove('unselected');
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
            button.classList.add('unselected');
        }
    }
}

function closePreferences() {
    preferenceScreen.classList.remove("active");
}


// Displaying the filtered events ---------------------------------------------------
const localStorageData = JSON.parse(localStorage.getItem('userPreferences'));

// Function to filter events based on the types in localStorage
function filterEventsByType(events, types) {
    return events.filter(event => types[event["Event-type"]] === true);
}

// Function to display filtered events with all details
function displayEvents(filteredEvents) {

    filteredEvents.forEach((event, index) => {
        console.log(event);
        document.querySelector(`.event${index+1} .box-header .organiser-logo`).innerHTML = `<img class='list-view-organisers' src='../Images/${event["Event-organiser-logo"]}' alt='logo'/>`;
        document.querySelector(`.event${index+1} .box-header h5`).innerHTML = `${event["Event-organiser"]}`;
        document.querySelector(`.event${index+1} .poster`).innerHTML = `<img src='../Images/${event["Event-image"]}' alt='trade show poster'/>`;
        document.querySelector(`.event${index+1} .eventInfo .event-time`).innerHTML = `${event["Event-datetime"]}`;
        document.querySelector(`.event${index+1} .eventInfo .event-title`).innerHTML = `${event["Event-name"]}`;
        document.querySelector(`.event${index+1} .attendees .attendees-image`).innerHTML = `${event["Event-attendees"] == "" ? "" : `<img src='../Images/${event["Event-attendees"]}'/>` }`;
        document.querySelector(`.event${index+1} .attendees p`).innerHTML = `${event["Event-attendees"] == "" ? "" : "Your friends are going to this event" }`;

        let eventInfo = document.querySelector(`.event${index+1} .eventInfo`);
        let reaction = document.querySelector(`.event${index+1} .social-info .reaction`);
        if (reaction.classList.contains("removed")) {
            reaction.classList.remove("removed");
            eventInfo.classList.remove("removed");
        }

    });

    let alreadyThere = document.querySelector(".all-events");
    let eventsAlreadyThere = alreadyThere.getElementsByClassName("event-collection");
    console.log("events already there: ", eventsAlreadyThere.length);

    for (let i=0; i < eventsAlreadyThere.length; i++) {
        console.log(i);
        if (i+1 > filteredEvents.length) {
            document.querySelector(`.event${i+1} .box-header .organiser-logo`).innerHTML ="";
            document.querySelector(`.event${i+1} .box-header h5`).innerHTML = "";
            document.querySelector(`.event${i+1} .poster`).innerHTML = "";
            document.querySelector(`.event${i+1} .eventInfo .event-time`).innerHTML = "";
            document.querySelector(`.event${i+1} .eventInfo .event-title`).innerHTML = "";
            document.querySelector(`.event${i+1} .attendees .attendees-image`).innerHTML = "";
            document.querySelector(`.event${i+1} .social-info .reaction`).classList.add("removed");
            document.querySelector(`.event${i+1} .eventInfo`).classList.add("removed");
            // document.querySelector(`.event${i+1}`).innerHTML = "";
        }
    }

}

// window.addEventListener('load', displayPreferences);
// ------------------------------------------------------------------------------------
