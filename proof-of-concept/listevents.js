// Retrieve types from localStorage
const localStorageData = JSON.parse(localStorage.getItem('userPreferences'));

// Function to filter events based on the types in localStorage
function filterEventsByType(events, types) {
    return events.filter(event => types[event["Event-type"]] === true);
}

// Function to display filtered events with all details
function displayEvents(filteredEvents) {
    const eventList = document.getElementById("list-event");

    filteredEvents.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");

        const eventTitle = document.createElement("h2");
        eventTitle.textContent = event["Event-name"];

        const eventDetails = document.createElement("div");
        eventDetails.classList.add("event-details");
        eventDetails.innerHTML = `
            <p><strong>Organiser:</strong> ${event["Event-organiser"]}</p>
            <p><strong>Date, Venue, Time:</strong> ${event["Event-date-venue-time"]}</p>
            <p><strong>Location:</strong> ${event["Event-location"]}</p>
            <p><strong>Type:</strong> ${event["Event-type"]}</p>
        `;

        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventDetails);

        eventList.appendChild(eventItem);
    });
}

// Fetch and read the events-details.json file
fetch('events-details.json')
    .then(response => response.json())
    .then(events => {
        const filteredEvents = filterEventsByType(events, localStorageData);
        displayEvents(filteredEvents);
    })
    .catch(error => {
        console.error("Error fetching and processing events-details.json:", error);
    });
