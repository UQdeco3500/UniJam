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
    document.querySelector(".list-events h2").innerHTML = "What's On Today";
  } else if (upcomingEventsFilter.checked) {
    currentUrl.searchParams.set("filter", "upcoming-events");
    document.querySelector(".list-events h2").innerHTML = "Upcoming Events";
  }

  window.history.replaceState(null, null, currentUrl);


  
}