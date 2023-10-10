// code retrieved from: https://developers.google.com/maps/documentation/javascript/geolocation 
let map, infoWindow, marker;

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
                // infoWindow.setContent("Current location");
                // infoWindow.open(map);
                map.setCenter(pos);
                // add current location marker
                let marker = new google.maps.Marker({
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
                infoWindow.setContent(marker);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            },
        );
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

window.displayMap = displayMap;
