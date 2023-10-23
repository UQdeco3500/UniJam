console.log(document.querySelector(".tab-bar .map-view").classList);

let activeIcon;

if (window.location.href.includes("map.html")) {

    activeIcon = document.querySelector(".tab-bar .map-view").classList;
    activeIcon.add("active");
    console.log(activeIcon);
    
} else if (window.location.href.includes("list.html")) {
    
    activeIcon = document.querySelector(".tab-bar .list-view").classList;
    activeIcon.add("active");

}

let attendeesPopup = document.querySelector(".attendees-popup").classList;

function showAttendees() {
    // console.log("attendees clicked");
    attendeesPopup.add("active");
}

function closeAttendees() {
    attendeesPopup.remove("active");
}


const attendees = [
    {
        name: "Shivam",
        image: "Images/shivam-user-icon.png",
    },
    {
        name: "Sharon",
        image: "Images/sharon-user-icon.png"
    },
    {
        name: "Deepanshi",
        image: "Images/deepanshi-user-icon.png"
    },
    {
        name: "Mihir",
        image: "Images/mihir-user-icon.png"
    }
];

const events = [
    {
        name: "2023 TRADE SHOW",
        poster: "Images/trade-show-poster.png"
    },
    {
        name: "MANA OF THE PACIFIC",
        poster: "Images/Mana of the pacific logo.jpeg",
    },
    {
        name: "INDIEOPIA - MUSIC FESTIVAL",
        poster: "Images/Indeopia.jpeg"
    },
    {
        name: "MOON FESTIVAL",
        poster: "Images/moon festival logo.jpg"
    }
]

let attendeeEvents = document.querySelector(".attendee-events-popup").classList;

let shivam = document.querySelector(".attendees-list .shivam");
let sharon = document.querySelector(".attendees-list .sharon");
let deepanshi = document.querySelector(".attendees-list .deepanshi");
let mihir = document.querySelector(".attendees-list .mihir");

function showAttendeeEvents(event) {

    if (shivam.contains(event.target)) {
        // console.log(true);
        document.querySelector(".attendee-events-popup .attendee-headline").innerHTML = 
        "<img src='Images/shivam-user-icon.png' /> <p>Shivam is going to: </p>";
    } else if (sharon.contains(event.target)) {
        console.log(true);
        document.querySelector(".attendee-events-popup .attendee-headline").innerHTML = 
        "<img src='Images/sharon-user-icon.png' /> <p>Sharon is going to: </p>";
    } else if (deepanshi.contains(event.target)) {
        document.querySelector(".attendee-events-popup .attendee-headline").innerHTML = 
        "<img src='Images/deepanshi-user-icon.png' /> <p>Deepanshi is going to: </p>";
    } else if (mihir.contains(event.target)) {
        document.querySelector(".attendee-events-popup .attendee-headline").innerHTML = 
        "<img src='Images/mihir-user-icon.png' /> <p>Mihir is going to: </p>";
    };

    let eventHtml = "";
    for (let i = 0; i < events.length; i++) {
        eventHtml += `<h3>${events[i].name}</h3><img src='${events[i].poster}'/><hr>`;
    }

    document.querySelector(".attendee-events-popup .attendee-events").innerHTML = eventHtml;

    attendeeEvents.add("active");

}; 

function closeAttendeeEvents() {
    attendeeEvents.remove("active");
};
