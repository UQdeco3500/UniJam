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
  
}