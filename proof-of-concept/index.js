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
]