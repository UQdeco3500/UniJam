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
    }

    popup.remove("active");

}

let event1 = document.querySelector(".event1");
let event2 = document.querySelector(".event2");

function openPopup(event) {
    console.log(event);
    let popup;
    if (event1.contains(event.target)) {
        console.log(true);
        popup = document.querySelector(".event1 .popup-content").classList;
    } else if (event2.contains(event.target)) {
        console.log(false);
        popup = document.querySelector(".event2 .popup-content").classList;
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

    document.querySelector(".event1 .poster").innerHTML = "<img src='Images/image1.jpg' alt='uqu mana of pacific poster'/>";
    document.querySelector(".event1 .eventInfo .event-time").innerHTML = "THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10";
    document.querySelector(".event1 .eventInfo .event-title").innerHTML = "MANA OF THE PACIFIC";
    document.querySelector(".event1 .popup-content .event-name").innerHTML = "<h2>MANA OF THE PACIFIC</h2>";
    document.querySelector(".event1 .popup-content .time-date-location").innerHTML = "<h4>THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10</h4>";
    document.querySelector(".event1 .popup-content .popup-event-image").innerHTML = "<img src='Images/image1.jpg' alt='Mana of Pacific Poster'>";
    document.querySelector(".event1 .popup-content .previous-event-photos .main-image").innerHTML = "<img src='Images/Mana of the pacific_1.jpg' alt='market day image 1'>";

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
    

  }

  window.history.replaceState(null, null, currentUrl);
  
}

