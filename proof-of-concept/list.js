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

let popup = document.querySelector(".popup-content").classList;

function closePopup() {
    popup.remove("active");
}

function openPopup() {
    popup.add("active");
}