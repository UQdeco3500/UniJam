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
