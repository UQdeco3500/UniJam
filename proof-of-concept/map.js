const url = new URL(window.location.href);
url.searchParams.set('filter', 'current-events');
window.history.replaceState(null, null, url);

const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
];

function activeFunction() {

    const currentUrl = new URL(window.location.href);
    console.log(currentUrl);

  let currentEventsFilter = document.getElementById("current-events");
  let upcomingEventsFilter = document.getElementById("upcoming-events");


  if (currentEventsFilter.checked) {
    currentUrl.searchParams.set("filter", "current-events");
  } else if (upcomingEventsFilter.checked) {
    currentUrl.searchParams.set("filter", "upcoming-events");
  }

  window.history.replaceState(null, null, currentUrl);
  setHeatMap();
  setEventMarkers(currentUrl);

  console.log("event markers: ", eventMarkers);

  eventMarkers.forEach(eventMarker => {
    eventMarker.addListener("click", () => {
        console.log(eventMarker.name);
        openMapPopup(eventMarker.name, eventMarker.dateTime, eventMarker.venue, eventMarker.eventPoster, eventMarker.mainImage, eventMarker.imageFiles);
    });
    })

}

function setHeatMap() {
    heatmap.setMap(null);
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData(window.location.href),
        map: map,
    });

    heatmap.set("gradient", gradient);
    heatmap.set("radius", 80);
    heatmap.set("opacity", 0.7);
    heatmap.setMap(map);
}

function setEventMarkers() {
    console.log(eventMarkers);

    for (let i = 0; i < eventMarkers.length; i++) {
        eventMarkers[i].setMap(null);
    };
    eventMarkers = [];
    
    // console.log(eventData(window.location.href));
    eventMarkerFeatures = eventData(window.location.href);

    for (let i=0; i<eventMarkerFeatures.length; i++) {
        const eventMarker = new google.maps.Marker({
            name: eventMarkerFeatures[i].name,
            eventPoster: eventMarkerFeatures[i].eventPoster,
            dateTime: eventMarkerFeatures[i].dateTime,
            venue: eventMarkerFeatures[i].venue,
            mainImage: eventMarkerFeatures[i].mainImage,
            imageFiles: eventMarkerFeatures[i].imageFiles,
            position: eventMarkerFeatures[i].position,
            icon: eventMarkerFeatures[i].icon,
            map: map
        });

        eventMarkers.push(eventMarker);
        eventMarker.setMap(map)
    };
};

// code retrieved from: https://developers.google.com/maps/documentation/javascript/geolocation
let map, infoWindow, marker, heatmap, eventMarkerFeatures;
let eventMarkers = [];

/**
 * Function to display the map screen. 
 */
function displayMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -27.49708,
            lng: 153.01364,
        }, 
        zoom: 17,
        disableDefaultUI: true,
    });
  
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                map.setCenter(pos);

                // add current location marker --------------------
                marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillOpacity: 1,
                        strokeWeight: 2,
                        fillColor: '#5384ED',
                        strokeColor: '#ffffff',
                    }
                });
                // -----------------------------------------------
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            },
        );
        
        // set heatmap --------------------------------------------
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatMapData(window.location.href),
            map: map,
        });

    heatmap.set("gradient", gradient);
    heatmap.set("radius", 80);
    heatmap.set("opacity", 0.7);
    heatmap.setMap(map);
    // --------------------------------------------------------

    // eventMarkerFeatures --> array of objects containing marker position and icon values. 
    eventMarkerFeatures = eventData(window.location.href);

    for (i=0; i<eventMarkerFeatures.length; i++) {
        const eventMarker = new google.maps.Marker({
            name: eventMarkerFeatures[i].name,
            eventPoster: eventMarkerFeatures[i].eventPoster,
            dateTime: eventMarkerFeatures[i].dateTime,
            venue: eventMarkerFeatures[i].venue,
            attendees: eventMarkerFeatures[i].attendees,
            mainImage: eventMarkerFeatures[i].mainImage,
            imageFiles: eventMarkerFeatures[i].imageFiles,
            position: eventMarkerFeatures[i].position,
            icon: eventMarkerFeatures[i].icon,
            map: map,

        });
        console.log(eventMarker.imageFiles);
        // eventMarkers --> array of google.maps.Marker objects.

        eventMarkers.push(eventMarker);
        eventMarker.setMap(map);

        // console.log(eventMarkerFeatures[i]);  
    };

    eventMarkers.forEach(eventMarker => {
        eventMarker.addListener("click", () => {
            console.log(eventMarker.name);
            openMapPopup(eventMarker.name, eventMarker.dateTime, eventMarker.venue, eventMarker.attendees, eventMarker.eventPoster, eventMarker.mainImage, eventMarker.imageFiles);
        });
    })

  } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

let popup = document.querySelector(".popup-content").classList;

function openMapPopup(name, dateTime, venue, attendees, poster, mainImage, imageFiles) {

    document.querySelector(".popup-content .event-name").innerHTML = `<h2>${name}</h2>`;
    document.querySelector(".popup-content .popup-attendees").innerHTML = attendees;
    document.querySelector(".popup-content .time-date-location").innerHTML = `<h4>${dateTime}</h4>`;
    document.querySelector(".popup-content .popup-venue").innerHTML = `<p>${venue}</p>`
    document.querySelector(".popup-content .popup-event-image").innerHTML = `<img src='Images/${poster}' alt='event Poster'>`;
    document.querySelector(".popup-content .previous-event-photos .main-image").innerHTML = `<img src='Images/${mainImage}' alt='event main image'>`;

    let images = "";

    for (let i = 0; i < imageFiles.length; i++) {
        console.log("looping through images array");
        images += `<img src='Images/${imageFiles[i]}'/>`;
    }

    document.querySelector(".popup-content .previous-event-photos .image-grid").innerHTML = images;
    popup.add("active");

};

function closePopup() {
    popup.remove("active");
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ? "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation",
    );
    infoWindow.open(map);
}
// ---End of code retrieved from https://developers.google.com/maps/documentation/javascript/geolocation---

// heat map data
function heatMapData(url) {

  var currentEvents = [
    // School of Chemistry
    new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
    new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
    // General Purpose North
    new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    // new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    // new google.maps.LatLng(-27.49488260229967, 153.01347467277384),

    // Andrew Liveris (trade show)
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
    
  ];

  var upcomingEvents = [
    // UQ
    new google.maps.LatLng(-27.49708, 153.01364),
    new google.maps.LatLng(-27.49708, 153.01364),
    // Advanced Engineering
    new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    new google.maps.LatLng(-27.49938954223438, 153.0147954974887),

    // UQ Centre building
    new google.maps.LatLng(-27.495908220583335, 153.01584029078103),
    new google.maps.LatLng(-27.495908220583335, 153.01584029078103),

  ];

  if (url.includes("filter=current-events")) {
    return currentEvents;
  } else if (url.includes("filter=upcoming-events")) {
    return upcomingEvents;
  }
}

function eventData(url) {

    var currentEvents = [
        {
            name: "Mana of the Pacific",
            eventPoster: "Mana of the pacific logo.jpeg",
            dateTime: "THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10",
            venue: "Campbell Pl, St Lucia QLD 4067, Australia",
            attendees: "",
            position: new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
            icon: "./Images/mana-of-pacific-marker.png",
            mainImage: "Mana of the pacific_1.jpg",
            imageFiles: [
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
            ]
        },
        {
            name: "Speed Friending",
            eventPoster: "Speed Friending.jpeg",
            dateTime: "THU, 26 Oct 2023 | GREAT COURT | AT 12:00 UTC+10",
            venue: "Campbell Pl, St Lucia QLD 4067, Australia",
            attendees: "",
            position: new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
            icon: "./Images/speed-friending-marker.png",
            mainImage: "Speed Friending_1.jpg",
            imageFiles: [
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
            ]
        },
        {
            name: "2023 DECO3500 Trade Show",
            eventPoster: "trade-show-poster.png",
            dateTime: "THU, 26 Oct 2023 | ANDREW LIVERIS BUILDING | FROM 08:00 AM",
            venue: "Andrew N. Liveris Building - Staff House Rd, St Lucia QLD 4067",
            attendees: "<img src='Images/attendees.png' />",
            position: new google.maps.LatLng(-27.49893949275078, 153.01392968285035),
            icon: "./Images/trade-show-marker-with-attendees.png",
            mainImage: "trade-show-1.jpg",
            imageFiles: [
                "trade-show-2.jpg",
                "trade-show-3.jpg",
                "trade-show-4.jpg",
                "trade-show-5.jpg",
                "trade-show-6.jpg",
                "trade-show-7.jpg",
                "trade-show-8.jpg",
            ]
        }

    ]

    var upcomingEvents = [
        {
            name: "Market Day",
            eventPoster: "Market day.jpeg",
            dateTime: "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10",
            venue: "Campbell Pl, St Lucia QLD 4067, Australia",
            attendees: "",
            position: new google.maps.LatLng(-27.49708, 153.01364),
            icon: "./Images/market-day-marker.png",
            mainImage: "Market day_1.jpg",
            imageFiles: [
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
        },
        {
            name: "Moon Festival",
            eventPoster: "moon festival logo.jpg",
            dateTime: "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10",
            venue: "Campbell Pl, St Lucia QLD 4067, Australia",
            attendees: "",
            position: new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
            icon: "./Images/moon-festival-marker.png",
            mainImage: "moon festival_1.jpg",
            imageFiles: [
                "moon festival_2.jpg",
                "moon festival_3.jpg",
                "moon festival_4.jpg",
                "moon festival_5.jpg",
                "moon festival_6.jpg",
                "moon festival_7.jpg",
                "moon festival_8.jpg",
                "moon festival_9.jpg",
            ]
        },
        {
            name: "Indieopia - Music Festival",
            eventPoster: "Indeopia.jpeg",
            dateTime: "FRI, 27 Oct 2023 | GREAT COURT | AT 12:00 UTC+10",
            venue: "Campbell Pl, St Lucia QLD 4067, Australia",
            attendees: "",
            position: new google.maps.LatLng(-27.495908220583335, 153.01584029078103),
            icon: "./Images/indieopia-marker.png",
            mainImage: "Indeopia_1.jpg",
            imageFiles: [
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
            ]
        }
    ]

    if(url.includes("filter=current-events")) {
        eventMarkerFeatures = currentEvents;
    } else if (url.includes("filter=upcoming-events")) {
        eventMarkerFeatures = upcomingEvents;
    } else if (url=="") {
        eventMarkerFeatures = currentEvents;
    }
    
    return eventMarkerFeatures;
}


window.displayMap = displayMap;


// Popup alter when loading page



// function popupAlert() {
//     var message = ["Your friend Shivam attended the Trade show today.","Your friend Rio attended the Trade show today.","Your friend Sharon attended the Trade show today."];

//     var a = Math.floor(Math.random() * message.length);

//     window.alert(message[a]);
  
//     if (confirm(a)) {
//         openMapPopup(eventMarker.name, eventMarker.dateTime, eventMarker.venue, eventMarker.attendees, eventMarker.eventPoster, eventMarker.mainImage, eventMarker.imageFiles);
//     } else {
//         window.displayMap = displayMap;
//     }
//     // document.getElementById("demo").innerHTML = txt;
//   }

var message = ["Your friend Shivam attended the Trade show today.","Your friend Rio attended the Trade show today.","Your friend Sharon attended the Trade show today."];

var a = Math.floor(Math.random() * message.length);

// window.alert(message[a]);

if (window.confirm(message[a]))
{
    eventMarkerFeatures = eventData("");
    let attendeeEvent = eventMarkerFeatures.filter( eventMarker => {
        eventMarker.name == "2023 DECO3500 Trade Show";
        console.log(eventMarker.name);
    });

    openMapPopup(attendeeEvent[0].name, attendeeEvent[0].dateTime, attendeeEvent[0].venue, attendeeEvent[0].attendees, attendeeEvent[0].poster, attendeeEvent[0].mainImage, attendeeEvent[0].imageFiles);

}
else {
    // window.displayMap = displayMap;
}