  Mykhailo Serhiienko

• The name of the module: Programming in HTML5 with JavaScript and CSS3 (Unit 635)
• The name of the assignment: Task B


• A list of references:

- https://www.w3schools.com
- https://developer.mozilla.org
- https://leafletjs.com
- https://moodle.reimtrainingsolutions.com


• Information needed in order to run the website files:

- You need node.js to run this project.
- Open Yiur terminal
- Write in the console cd (folder path)
- Write the command node server.js start the server
- In the search bar of the browser you need to enter http://localhost:5500/

All the following files are saved in the "Task_B2" folder.

===============================================================================
** Implement an XTMLHttp Request and a request for data using Jquery Ajax. **

   In fle named "remote_source.html".

This code represents an HTML page with some jQuery and Socket.IO functionality. Here's a description of the code:

In the <head> section, meta tags are defined for character encoding, IE compatibility, and viewport settings. The "style.css" file is linked using the <link> tag, and two scripts, jQuery and Socket.IO, are included using the <script> tag.

In the <body> section, the main content of the page is structured as follows:

- A level 1 heading <h1> with the text "Remote Source".
- A navigation list <ul> with multiple list items <li>, each representing a link to different pages.
- A level 2 heading <h2> with the text "What We Do".
- A <div> with the class "description", containing a paragraph <p> describing the webpage and a list item <li> with a link to a remote source.
- A level 2 heading <h2> with the text "Counter: " and a <span> element with the id "counter", where the counter value will be displayed.
- A button with the id "incrementBtn" and the text "Increase" to increment the counter.

In the <script> section, JavaScript code is present:

A variable socket is created and initialized using io(), indicating the usage of Socket.IO to connect to the server.
Inside the $(document).ready() function, which executes after the page is fully loaded:
Event handlers for the connect and disconnect events are set for the socket. Console messages are logged when the connection is established or disconnected.
An event handler for the updateCounter event is set for the socket. When an update for the counter is received from the server, the text inside the element with the id "counter" is updated.
An event handler for the click event is set on the button with the id "incrementBtn". When the button is clicked, an "incrementCounter" event is emitted to the server.

===============================================================================================
**Implement CSS effect**

   In file named "canvas_css-animation.html"

1. The HTML structure consists of a <div> element with the class "box", which contains another <div> element with the class "css-animation". Inside the "css-animation" div,
there are seven <div> elements with the class "ball". These "ball" divs represent the bouncing balls.

The CSS styling for the animation is defined as follows:

- The "css-animation" class sets the width, height, margin, background color, and display properties for the container.
  It uses the grid layout with 7 rows and 1 fractional unit for each row.

- The "ball" class sets the width, height, margin, and border-radius properties for each ball.

- The individual "ball" elements are styled using the nth-child selector to apply different animation properties to each ball. 
  The animations are named "right" and "left" and have different durations and timing functions.

Keyframe animations are defined for the "right" and "left" animations using the @keyframes rule. Each keyframe animation specifies the translation transform property to create the bouncing effect. 
The keyframes define the positions of the balls at different percentages of the animation duration.

- The @-webkit-keyframes rules are specific to the WebKit-based browsers like Chrome and Safari.
- The @-moz-keyframes rules are specific to Mozilla Firefox.
- The @keyframes rules are standard and supported by most modern browsers.

In summary, this code creates an animation of bouncing balls using CSS keyframe animations. The balls move horizontally back and forth within a container, 
creating a visually appealing effect.

2. The HTML structure consists of a <div> element with the class "animation_css", inside which there is a <p> paragraph with some Lorem ipsum text.

The CSS animation styling is defined as follows:

- The "animation_css" class sets the font properties, text color, animation duration, animation name, iteration count, and element positioning.
- The font-family property specifies the font stack for the text.
- The color property sets the text color.
- The animation-duration property sets the animation duration to 20 seconds.
- The animation-name property sets the animation name, which in this case is "slidein".

The animation-iteration-count property sets the number of animation repetitions. The value "infinite" indicates that the animation will repeat infinitely.

The grid-column and grid-row properties determine the positioning of the element within a grid. The value "1 / 5" for grid-column specifies that the element occupies cells from the first to the fifth in a row, and the value "3" for grid-row indicates that the element is on the third row.

Thus, this code creates an animation of shifting text that smoothly moves inside the specified container. The animation will repeat infinitely and has a duration of 20 seconds. The text will be displayed in the specified font and color.
=============================================================================================

**To implement graphic using HTML cavas and JS code

In file "canvas_css-animation.html"

The HTML code represents a canvas element with an ID of "myCanvas" inside a <div> container with the class "canvas". The canvas has a width of 350 pixels and a height of 350 pixels.

The JavaScript code performs animation on the canvas element. Here's a description of the code:
- The variables canvas and ctx are used to get the reference to the canvas element and its 2D rendering context.
- The squareSize, squareX, and squareY variables define the size and position of a square within the canvas.
- The ballRadius, ballX, ballY, dx, and dy variables define the properties of a ball that moves within the square. The dx and dy variables represent the speed and direction of the ball.
- The colors array holds different colors that the ball can change into.
- The drawSquare() function is responsible for drawing a white square on the canvas.
- The drawBall(color) function draws a ball with the specified color at the current position (ballX, ballY).
- The updateBall() function updates the position of the ball by adding dx and dy to ballX and ballY respectively. If the ball reaches the edges of the square, it changes direction and calls changeBallColor().
- The changeBallColor() function randomly selects a color from the colors array and sets it as the fill color for the ball. It ensures that the
===============================================================================================

**Implement an Image map 

   In file named "Image_gallery"

The HTML code represents an image gallery. It sets up a container with a main image, an overlay, and a "Darken" button. It also includes a thumb bar for displaying thumbnail images.

The JavaScript code selects elements from the page using class and ID selectors. It creates thumbnail images for the gallery and sets up an event listener for the click event on the thumbnails. 
When a thumbnail is clicked, the corresponding full-size image is displayed in the main image area.

The "Darken" button allows toggling between darkening and lightening the image. When the button is clicked, its class and text content are updated, 
and the overlay color (through the "backgroundColor" property of the element with the "overlay" class) and the opacity of the displayed image (through the "opacity" property of the element with the "displayed-img" class) are adjusted.

Overall, this code enables users to view images in the gallery by clicking on the thumbnails and provides the option to darken or lighten the displayed image using a button.

===============================================================================================

**Implement an HTML geolocation using API**

   In file named "Interactive_map"

This code represents an HTML page with an interactive map using geolocation. Here's the description of the code:

The <head> section contains meta tags for character encoding, IE compatibility, and viewport settings. 
Two style sheets are also linked: /style/style.css and leaflet.css, which is loaded from an external source.

The <body> section contains the page content:

A <div> container with the class "page-container", inside which there is a level 1 heading <h1> with the text "Leaflet Map", a <div> with the ID "myMap" for displaying the map,
a <button> with the ID "find-me" and an onclick attribute that calls the "getLocation()" function, and a <p> paragraph with the ID "demo".

Scripts are added at the end of the <body>:

- The Leaflet library is included for working with the map.
- An instance of the map is created, and the initial position and zoom level are set.
- A tile layer with the OpenStreetMap is added.
- The "onMapClick()" function is defined, which is called when the map is clicked and displays information about the clicked location.
- The "click" event is set on the map to trigger the "onMapClick()" function.
- The "getLocation()" and "showPosition()" functions are defined for retrieving the user's geolocation and displaying their coordinates on the map.
- A marker is added at the current location and the map is updated.

In summary, this code creates a web page with an interactive map that allows users to determine their location and display it on the map using the Leaflet library.

===================================================================================

**To implement a client web server with web socket and node.js

   In file named "chat.html"

The JavaScript code sets up a socket connection using the io() function, assumes that io is a globally available function from a library such as Socket.IO.

The user_id variable is generated as a random string using Math.random() and converted to a string using String().

The console.log(Math.random()) statement logs a random number to the console.

The socket.on("new message", function (msg) { ... }) function defines a callback to handle incoming "new message" events from the server. When a new message is received,
 it checks if the message sender matches the user_id.

If the message sender matches user_id, it creates a new <li> element with the class "right-message" and sets its text content to msg.Message + "-".
 The element is then appended to the <ul> element with the ID "chat-ul".

If the message sender doesn't match user_id, it creates a new <li> element with the class "left-message" and sets its text content to "- " + msg.Message.
 The element is then appended to the <ul> element with the ID "chat-ul".

The buttonClicked() function is called when a button is clicked. It retrieves the value of an input field with the ID "chat", 
emits a "new message" event to the server with the message value and sender ID, and then clears the input field.

Overall, this code sets up a client-side chat application using socket communication. It listens for incoming messages from the server and displays them in a chat interface, 
distinguishing between messages sent by the current user (user_id) and other users. When the user enters a message and clicks a button, 
it sends the message to the server using the "new message" event.

=============================================================================
**To implement local storage with JavaScript code.
   In file named "local_storage.html"

The HTML code represents a form container with input fields for the user's name, last name, and email. It also includes a "Save Data" button inside a <div> element with the class "button_local". 
The form allows users to input their information.

Script block retrieves the input elements and the save button by their respective IDs. It assigns the stored values from the local storage to the input fields if they exist.
The event listener for the save button retrieves the input values, stores them in the local storage using the respective keys, and displays an alert message to indicate that the data has been saved.

Overall, this code sets up a form where users can enter their personal information and save it to the local storage.

================================================================================================
**To implement web worker with JavaScript code.
   In file named "local_storage.html"

The JavaScript code initializes a web worker using the "worker.js" file located in the "../JS/" directory. It listens for messages from the web worker and updates the timer element's text content accordingly.
It incorporates a web worker for timer functionality, although the code for the web worker itself is not provided.
================================================================================================

**Responsive Design & Print version**