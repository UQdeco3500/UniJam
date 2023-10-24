//script.js
/*document.addEventListener("DOMContentLoaded", function () {
    const boxList = document.getElementById("boxList");

    // Function to add a new rectangular box to the list
    function addBox(text) {
        const box = document.createElement("div");
        box.className = "box";
        box.textContent = text;
        boxList.appendChild(box);
    }

    // Example: Add new rectangular boxes to the list
    addBox("Box 1");
    addBox("Box 2");

    // You can call the addBox function to add more boxes dynamically
});*/

// let popup = document.querySelector(".popup-content").classList;

function closePopup(event) {
    console.log("close button clicked!");

    let popup;
    if (event1.contains(event.target)) {
        popup = document.querySelector(".event1 .popup-content").classList;
    } else if (event2.contains(event.target)) {
        popup = document.querySelector(".event2 .popup-content").classList;
    } else if (event3.contains(event.target)) {
        popup = document.querySelector(".event3 .popup-content").classList;
    }

    popup.remove("active");

}

let event1 = document.querySelector(".event1");
let event2 = document.querySelector(".event2");
let event3 = document.querySelector(".event3");

function openPopup(event) {
    console.log(event);
    let popup;
    if (event1.contains(event.target)) {
        popup = document.querySelector(".event1 .popup-content").classList;
    } else if (event2.contains(event.target)) {
        popup = document.querySelector(".event2 .popup-content").classList;
    } else if (event3.contains(event.target)) {
        popup = document.querySelector(".event3 .popup-content").classList;
    }

    popup.add("active");
}

function activeFunction() {

    const currentUrl = new URL(window.location.href);
    console.log(currentUrl);

  let currentEventsFilter = document.getElementById("current-events");
  let upcomingEventsFilter = document.getElementById("upcoming-events");


  if (currentEventsFilter.checked) {
    currentUrl.searchParams.set("filter", "current-events");
    document.querySelector(".list-events .title-header h2").innerHTML = "What's On Today";


    // Mana of the Pacific --------------------------------------------------------------------------------------------------------------------------------------------
    // document.querySelector(".event1 .event-image").innerHTML = "<img src='Images/image1.jpg' alt='uqu mana of pacific poster'/>";
    // document.querySelector(".event1 .event-details .time-and-date").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event1 .event-details .event-name").innerHTML = "<h2>MANA OF THE PACIFIC</h2>";
    // document.querySelector(".event1 .popup-content .event-name").innerHTML = "<h2>MANA OF THE PACIFIC</h2>";
    // document.querySelector(".event1 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event1 .popup-content .popup-event-image").innerHTML = "<img src='Images/image1.jpg' alt='Mana of Pacific Poster'>";
    // document.querySelector(".event1 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Mana of the pacific_1.jpg' alt='market day image 1'>";

    document.querySelector(".event1 .poster").innerHTML = "<img src='Images/trade-show-poster.png' alt='trade show poster'/>";
    document.querySelector(".event1 .eventInfo .event-time").innerHTML = "THU, 26 Oct 2023 | ANDREW LIVERIS BUILDING | FROM 08:00 AM";
    document.querySelector(".event1 .eventInfo .event-title").innerHTML = "2023 DECO3500 Trade Show";
    document.querySelector(".event1 .attendees .attendees-image").innerHTML = "<img src='Images/attendees-plus.png'/>";
    document.querySelector(".event1 .attendees p").innerHTML = "You friends are going to this event";
    document.querySelector(".event1 .popup-content .popup-attendees").innerHTML = "<img src='Images/attendees-plus.png'/>";
    document.querySelector(".event1 .popup-content .event-name").innerHTML = "<h2>2023 DECO3500 Trade Show</h2>";
    document.querySelector(".event1 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | ANDREW LIVERIS BUILDING | FROM 08:00 AM</h4>";
    document.querySelector(".event1 .popup-content .popup-event-image").innerHTML = "<img src='Images/trade-show-poster.png' alt='trade show poster'>";
    document.querySelector(".event1 .popup-content .popup-venue").innerHTML = "<p>Andrew N. Liveris Building - Staff House Rd, St Lucia QLD 4067</p>"
    document.querySelector(".event1 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/trade-show-1.jpg' alt='tradeshow image 1'>";

    const tradeshowImageFiles = [
        "trade-show-2.jpg",
        "trade-show-3.jpg",
        "trade-show-4.jpg",
        "trade-show-5.jpg",
        "trade-show-6.jpg",
        "trade-show-7.jpg",
    ];

    let tradeshowImages = "";

    for (let i = 0; i < tradeshowImageFiles.length; i++) {
        console.log("looping through images array");
        tradeshowImages += `<img src='Images/${tradeshowImageFiles[i]}'/>`;
    }

    document.querySelector(".event1 .popup-content .previous-event-photos .image-grid").innerHTML = tradeshowImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------


    // Speed Friending --------------------------------------------------------------------------------------------------------------------------------------------
    // document.querySelector(".event2 .event-image").innerHTML = "<img src='Images/Speed Friending.jpeg' alt='Speed Friending poster'/>";
    // document.querySelector(".event2 .event-details .time-and-date").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event2 .event-details .event-name").innerHTML = "<h2>SPEED FRIENDING</h2>";
    // document.querySelector(".event2 .popup-content .event-name").innerHTML = "<h2>SPEED FRIENDING</h2>";
    // document.querySelector(".event2 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event2 .popup-content .popup-event-image").innerHTML = "<img src='Images/Speed Friending.jpeg' alt='Speed Friending Poster'>";
    // document.querySelector(".event2 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Speed Friending_1.jpg' alt='speed friending image 1'>";

    document.querySelector(".event2 .poster").innerHTML = "<img src='Images/Speed Friending.jpeg' alt='Speed Friending poster'/>";
    document.querySelector(".event2 .eventInfo .event-time").innerHTML = "THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event2 .eventInfo .event-title").innerHTML = "SPEED FRIENDING";
    document.querySelector(".event2 .popup-content .event-name").innerHTML = "<h2>SPEED FRIENDING</h2>";
    document.querySelector(".event2 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event2 .popup-content .popup-event-image").innerHTML = "<img src='Images/Speed Friending.jpeg' alt='Speed Friending Poster'>";
    document.querySelector(".event2 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Speed Friending_1.jpg' alt='speed friending image 1'>";

    const speedFriendingImageFiles = [
        "Speed Friending_2.jpg",
        "Speed Dating_1.jpg",
        "Speed Dating_2.jpg",
        "Speed Dating_3.jpg",
        "Speed Dating_4.jpg",
        "Speed Dating_5.jpg",
        "Speed Dating_6.jpg",
        "Speed Dating_7.jpg",
        "Speed Dating_8.jpg",
        "Speed Dating_9.jpg",
    ];

    let speedFriendingImages = "";

    for (let i = 0; i < speedFriendingImageFiles.length; i++) {
        console.log("looping through images array");
        speedFriendingImages += `<img src='Images/${speedFriendingImageFiles[i]}'/>`;
    }

    document.querySelector(".event2 .popup-content .previous-event-photos .image-grid").innerHTML = speedFriendingImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------
    document.querySelector(".event3 .poster").innerHTML = "<img src='Images/image1.jpg' alt='uqu mana of pacific poster'/>";
    document.querySelector(".event3 .eventInfo .event-time").innerHTML = "THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event3 .eventInfo .event-title").innerHTML = "MANA OF THE PACIFIC";
    document.querySelector(".event3 .popup-content .event-name").innerHTML = "<h2>MANA OF THE PACIFIC</h2>";
    document.querySelector(".event3 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event3 .popup-content .popup-event-image").innerHTML = "<img src='Images/image1.jpg' alt='Mana of Pacific Poster'>";
    document.querySelector(".event3 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Mana of the pacific_1.jpg' alt='market day image 1'>";

    const manaOfPacificImageFiles = [
        "Mana of the pacific_2.jpg",
        "Mana of the pacific_3.jpg",
        "Mana of the pacific_4.jpg",
        "Mana of the pacific_5.jpg",
        "Mana of the pacific_6.jpg",
        "Mana of the pacific_7.jpg",
        "Mana of the pacific_8.jpg",
        "Mana of the pacific_9.jpg",
        "Mana of the pacific_10.jpg",
        "Mana of the pacific_11.jpg",
        "Mana of the pacific_12.jpg",
    ];

    let manaOfPacificImages = "";

    for (let i = 0; i < manaOfPacificImageFiles.length; i++) {
        console.log("looping through images array");
        manaOfPacificImages += `<img src='Images/${manaOfPacificImageFiles[i]}'/>`;
    }

    document.querySelector(".event1 .popup-content .previous-event-photos .image-grid").innerHTML = manaOfPacificImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------



  } else if (upcomingEventsFilter.checked) {
    currentUrl.searchParams.set("filter", "upcoming-events");
    document.querySelector(".list-events .title-header h2").innerHTML = "Upcoming Events";

    // Market Day --------------------------------------------------------------------------------------------------------------------------------------------
    // document.querySelector(".event1 .event-image").innerHTML = "<img src='Images/Market day.jpeg' alt='market day poster'/>";
    // document.querySelector(".event1 .event-details .time-and-date").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event1 .event-details .event-name").innerHTML = "<h2>MARKET DAY</h2>";
    // document.querySelector(".event1 .popup-content .event-name").innerHTML = "<h2>MARKET DAY</h2>";
    // document.querySelector(".event1 .popup-content .time-date-location").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event1 .popup-content .popup-event-image").innerHTML = "<img src='Images/Market day.jpeg' alt='Mana of Pacific Poster'>";
    // document.querySelector(".event1 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Market day_1.jpg' alt='market day image 1'>";

    document.querySelector(".event1 .poster").innerHTML = "<img src='Images/Market day.jpeg' alt='market day poster'/>";
    document.querySelector(".event1 .eventInfo .event-time").innerHTML = "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event1 .eventInfo .event-title").innerHTML = "MARKET DAY";
    document.querySelector(".event1 .attendees .attendees-image").innerHTML = "";
    document.querySelector(".event1 .attendees p").innerHTML = "";
    document.querySelector(".event1 .popup-content .popup-attendees").innerHTML = "";
    document.querySelector(".event1 .popup-content .event-name").innerHTML = "<h2>MARKET DAY</h2>";
    document.querySelector(".event1 .popup-content .time-date-location").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event1 .popup-content .popup-event-image").innerHTML = "<img src='Images/Market day.jpeg' alt='Mana of Pacific Poster'>";
    document.querySelector(".event1 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Market day_1.jpg' alt='market day image 1'>";

    const marketDayImageFiles = [
        "Market day_2.jpg",
        "Market day_3.jpg",
        "Market day_4.jpg",
        "Market day_5.jpg",
        "Market day_6.jpg",
        "Market day_7.jpg",
        "Market day_8.jpg",
        "Market day_9.jpg",
        "Market day_10.jpg",
        "Market day_11.jpg",
        "Market day_12.jpg"
    ]

    let marketDayImages = "";

    for (let i = 0; i < marketDayImageFiles.length; i++) {
        console.log("looping through images array");
        marketDayImages += `<img src='Images/${marketDayImageFiles[i]}'/>`;
    }

    document.querySelector(".event1 .popup-content .previous-event-photos .image-grid").innerHTML = marketDayImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------

    // Moon Festival --------------------------------------------------------------------------------------------------------------------------------------------
    // document.querySelector(".event2 .event-image").innerHTML = "<img src='Images/moon festival logo.jpg' alt='mmoon festival poster'/>";
    // document.querySelector(".event2 .event-details .time-and-date").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event2 .event-details .event-name").innerHTML = "<h2>MOON FESTIVAL</h2>";
    // document.querySelector(".event2 .popup-content .event-name").innerHTML = "<h2>MOON FESTIVAL</h2>";
    // document.querySelector(".event2 .popup-content .time-date-location").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    // document.querySelector(".event2 .popup-content .popup-event-image").innerHTML = "<img src='Images/moon festival logo.jpg' alt='Moon Festival Poster'>";
    // document.querySelector(".event2 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/moon festival_1.jpg' alt='moon festival image 1'>";

    document.querySelector(".event2 .poster").innerHTML = "<img src='Images/moon festival logo.jpg' alt='mmoon festival poster'/>";
    document.querySelector(".event2 .eventInfo .event-time").innerHTML = "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event2 .eventInfo .event-title").innerHTML = "MOON FESTIVAL";
    document.querySelector(".event2 .popup-content .event-name").innerHTML = "<h2>MOON FESTIVAL</h2>";
    document.querySelector(".event2 .popup-content .time-date-location").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event2 .popup-content .popup-event-image").innerHTML = "<img src='Images/moon festival logo.jpg' alt='Moon Festival Poster'>";
    document.querySelector(".event2 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/moon festival_1.jpg' alt='moon festival image 1'>";

    const moonFestivalImageFiles = [
        "moon festival_2.jpg",
        "moon festival_3.jpg",
        "moon festival_4.jpg",
        "moon festival_5.jpg",
        "moon festival_6.jpg",
        "moon festival_7.jpg",
        "moon festival_8.jpg",
        "moon festival_9.jpg",
    ]

    let moonFestivalImages = "";

    for (let i = 0; i < moonFestivalImageFiles.length; i++) {
        console.log("looping through images array");
        moonFestivalImages += `<img src='Images/${moonFestivalImageFiles[i]}'/>`;
    }

    document.querySelector(".event2 .popup-content .previous-event-photos .image-grid").innerHTML = moonFestivalImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------
    document.querySelector(".event3 .poster").innerHTML = "<img src='Images/Indeopia.jpeg' alt='uqu mana of pacific poster'/>";
    document.querySelector(".event3 .eventInfo .event-time").innerHTML = "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event3 .eventInfo .event-title").innerHTML = "INDIEOPIA - MUSIC FESTIVAL";
    document.querySelector(".event3 .popup-content .event-name").innerHTML = "<h2>INDIEOPIA - MUSIC FESTIVAL</h2>";
    document.querySelector(".event3 .popup-content .time-date-location").innerHTML = "<h4>FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event3 .popup-content .popup-event-image").innerHTML = "<img src='Images/Indeopia.jpeg' alt='Indieopia Poster'>";
    document.querySelector(".event3 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Indeopia_1.jpg' alt='indieopia image 1'>";

    const indieopiaImageFiles = [
        "Indeopia_2.jpg",
        "Indeopia_3.jpg",
        "Indeopia_4.jpg",
        "Indeopia_5.jpg",
        "Indeopia_6.jpg",
        "Indeopia_7.jpg",
        "Indeopia_8.jpg",
        "Indeopia_9.jpg",
        "Indeopia_10.jpg",
        "Indeopia_11.jpg",
        "Indeopia_12.jpg",
    ];

    let indieopiaImages = "";

    for (let i = 0; i < indieopiaImageFiles.length; i++) {
        console.log("looping through images array");
        indieopiaImages += `<img src='Images/${indieopiaImageFiles[i]}'/>`;
    }

    document.querySelector(".event1 .popup-content .previous-event-photos .image-grid").innerHTML = indieopiaImages;
    // ----------------------------------------------------------------------------------------------------------------------------------------


  }

  window.history.replaceState(null, null, currentUrl);
  
}

//   server communication
var socket = io();

let bookButton = document.querySelector(".book-button");
let popupBookButton = document.querySelector(".popup-book-button");

function bookEvent() {
    console.log("booked event");
    if (bookButton.classList.contains("active")) {
        bookButton.innerHTML = "Book your ticket";
        popupBookButton.innerHTML = "Book your ticket";
        bookButton.classList.remove("active");
        popupBookButton.classList.remove("active");
    } else {
        bookButton.innerHTML = "Booked!";
        popupBookButton.innerHTML = "Booked!";
        bookButton.classList.add("active");
        popupBookButton.classList.add("active");
        socket.emit('book event', "booked event!");
    }
}

const newAttendeeEventsData = [
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
];

let newAttendeeEvents = document.querySelector(".attendee-events-popup").classList;


socket.on('book event', function(msg) {
    // alert("Your friend booked an event!");
    let attendees = document.querySelector(".attendees .attendees-image");
    attendees.innerHTML = "<img src='Images/attendees-plus-user.png'/>";

    let attendeesList = document.querySelector(".attendees-popup .attendees-list ul");
    const newAttendee = document.createElement("li");
    const user = document.createElement("img");
    user.src = "Images/user.png";

    const userName = document.createElement("p");
    const userNameText = document.createTextNode("Your Friend");
    userName.appendChild(userNameText);

    newAttendee.appendChild(user);
    newAttendee.appendChild(userName);

    attendeesList.appendChild(newAttendee);

    newAttendee.addEventListener('click', () => {

        document.querySelector(".attendee-events-popup .attendee-headline").innerHTML = 
        "<img src='Images/user.png' /> <p>Your Friend is going to: </p>";

        let eventHtml = "";
        for (let i = 0; i < newAttendeeEventsData.length; i++) {
            eventHtml += `<h3>${newAttendeeEventsData[i].name}</h3><img src='${newAttendeeEventsData[i].poster}'/><hr>`;
        }

        document.querySelector(".attendee-events-popup .attendee-events").innerHTML = eventHtml;

        newAttendeeEvents.add("active");
    })

    let bookedPopup = document.querySelector(".attendees .popup-text");
    bookedPopup.innerHTML = "Your friend just booked a ticket!";
    bookedPopup.classList.add("active");
    setTimeout(() => {
        bookedPopup.classList.remove("active");
    }, 3000);
})

// var message = ["Your friend Mihir is at the Trade show today.","Your friend Lorna is at the Trade show today.","Your friend Ben is at the Trade show today."];

// var a = Math.floor(Math.random() * message.length);

// window.alert(message[a]);

var message = ["Your friend Mihir is at the Trade show today.","Your friend Lorna is at the Trade show today.","Your friend Ben is at the Trade show today."];

var a = Math.floor(Math.random() * message.length);

window.alert(message[a]);

