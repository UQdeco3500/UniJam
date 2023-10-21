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