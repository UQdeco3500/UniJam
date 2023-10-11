function activeFunction() {

    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);

    let currentEventsFilter = document.getElementById("current-events");
    let upcomingEventsFilter = document.getElementById("upcoming-events");

    if (currentEventsFilter.checked) {
        currentUrl.searchParams.set('filter', 'current-events');
    } else if (upcomingEventsFilter.checked) {
        currentUrl.searchParams.set('filter', 'upcoming-events');
    }
    window.history.replaceState(null, null, currentUrl);

    // if (document.URL)
    
}


// code retrieved from: https://developers.google.com/maps/documentation/javascript/geolocation 
let map, infoWindow, marker, heatmap;

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

        heatmap.set("gradient", gradient);
        heatmap.set("radius", 80);
        heatmap.set("opacity", 0.7);
        heatmap.setMap(map);
        // --------------------------------------------------------
        
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ? "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation",
    );
    infoWindow.open(map);
}

console.log(window.location.href.includes("filter=current-events"));

// heat map data
function heatMapData(url) {

    var currentEvents = [
        // School of Chemistry
        new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
        new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
        // General Purpose North
        new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
        new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
        new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
        new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    ]
    
    var upcomingEvents = [
        // UQ
        new google.maps.LatLng(-27.49708, 153.01364),
        new google.maps.LatLng(-27.49708, 153.01364),
        // Advanced Engineering
        new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
        new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
        new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
        new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    ]

    if (url.includes("filter=current-events")) {
        return currentEvents;
    } else if (url.includes("filter=upcoming-events")) {
        return upcomingEvents;
    }

    // return [
    //     // UQ
    //     new google.maps.LatLng(-27.49708, 153.01364),
    //     new google.maps.LatLng(-27.49708, 153.01364),
    //     // General Purpose North
    //     new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    //     new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    //     new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    //     new google.maps.LatLng(-27.49488260229967, 153.01347467277384),
    //     // Advanced Engineering
    //     new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    //     new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    //     new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    //     new google.maps.LatLng(-27.49938954223438, 153.0147954974887),
    //     // School of Chemistry
    //     new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
    //     new google.maps.LatLng(-27.499808273879893, 153.01286430696973),
    // ];
}
// ---End of code retrieved from https://developers.google.com/maps/documentation/javascript/geolocation---


window.displayMap = displayMap;


// onclick filter
// function onclickFunction() {
//     var element = document.getElementById("unselect-filter");
//     // console.log("element:", element.classList);
//     element.classList.toggle("filter-normal");

// }