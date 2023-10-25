# UniJam
 
Our team proposes UniJam, which is a mobile application targeted towards UQ students to increase awareness of events happening on campus, to provide opportunities to become more involved in events. By using our app, users are able to discover events that are happening on campus, how populous it is or is going to be, and also see whether their friends are there. 

## Social and Mobile Concepts
* Awareness - see what events your friends are going to
* Activity Trace - real-time tracking of what event your friend is at, or planning to go
* Coordination - coordinate you actions around your friend's activity.
* Location-aware - display events relative to user location (UQ only)
* Context-specific - used specifically for UQ on-campus events

## Proof of Concept
The proof of concept prototype was developed in the form of a local host website, incorporating feedback from the medium fidelity prototype testing. Most of the application features were simulated from pre-set events data to display to users. The map view page has the google map API implemented along with its Heat Map Layer functionality, and added custom markers to represent the preset events. There is a real-time multi-user functionality implemented in the application, which can be seen when one user clicks the “book event” button for a specific event, a popup will occur on the other user’s application screen on the same event saying “You friend just booked a ticket!”. Other multi-user functionalities such as being able to see who of your friends are attending which events are preset, and hard coded into the web app. 

## How to run the web app 
1. Prepare a mobile device and a computer. Make sure they are connected on the same network (to experience the real-time multi-user functionality, prepare two mobile devices connected on the same network as the computer).
2. Download the "UniJam Final" folder onto your computer.
3. Open the folder in Visual Studio Code.
4. Open the terminal and run: node server.js
5. Open your network settings on your computer and retrieve the IPv4 address (local IP address not public)
   https://www.avg.com/en/signal/find-ip-address
6. Go to your terminal and locate the log "listening on *:" followed by a number. This is the port number.
7. On your mobile device, open a web browser and type in the IP address retrieved in 5, followed by a colon and the port number from 6.
   "[IP address]:[port number]"
8. You have successfully run the web app! Thank you so much for taking time to set up the environment.
