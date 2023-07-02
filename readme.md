Mykhailo Donets

• The name of the module is : Programming in HTML5 with JavaScript and CSS3 (Unit 635)
• The name of the assignment is "Task B"

• A list of references/sources you used to aid you

1.https://moodle.com/
2.https://developer.mozilla.org/en-US/docs/Web/JavaScript
3.https://nodejs.org/en/docs
4.https://developer.mozilla.org/en-US/docs/Glossary/HTML5
5.https://devdocs.io/css/

• Any other information needed in order to run your website files (e.g. Live Server)

To run a project, you need a project.
1.Copy the path to the folder.
2.Open terminal via command (cmd)
3.Write in the console cd (folder path)
4. Write the command node server.js or nodemon server.js to start the server.
5.In the search bar of the browser you need to enter http://localhost:5500/
6. After completing all these steps, you will be able to see all the functionality of the site.

All the following files are saved in the (portfolio_task_b) folder.

For each requirement, give the name of the file/webpage that it can be viewed on and a short decription of each,

===============================================================================
** Implement an XTMLHttp Request and a request for data using Jquery Ajax. **

In file named "remoute_source.html and remoute_text.html".

The programm only runs on the live server version of VS Code.

//body onload alert
When loading the page an alert will show informing the user that the code will run only on the live version

#XMLReq
The first div holds a pargraph and a button that when clicked triggers a function called (loadXMLDoc). The function loads an external document 

//XMLreqDoc.txt
Is a text document with a simple paragraph text that gets loaded through the function (loadXMLDoc) when the button 'More Content' is clicked

.AJAXM
Is a second div containing a button with class .AJAX that when clicked will load an alert from an external JavaScript file 'AJAXReq.js'

//AJAXReq.js
External JavaScript file containing an alert message that trggers when the button 'Click to get external JavaScript' is clicked

===============================================================================================
**Implement CSS effect**

In file named "css_animations.html"

untherneth the images there are other 3 divs to which effects are applied when hovering over them
They all have a backgorund color of Darkred

.Transition - when hovering on the div the backgound color's brightness will be at its maximum
.Transition2 - when hovering on this div the backgound color has an opacity shade of 75%
.Transition3 - on this div the backgorund color has a saturation of 30%

===============================================================================================
**Implement an HTML geolocation using API**

In file named "interactive_map.html"

button.loc, is a button that when pressed will load two JavaScript functions to get the geolocation from
the user and show it on google maps

=============================================================================================
**To implement graphic using HTML cavas and JS code

In file/webpage named "canvas_graphics.html"

The second half of the page there is a drawing implemented on HTML Canva using JavaScript code
The canva tag is a container for graphics 

myCanvas.js
Is the Javascript file on which the actual drawing is made each part of he drawing is created defining a shape 
and coords of x and y, radius included in circles 
They all have a color of filling defined with the .fillStyle property
In order to show the drowing on the page the .fill() method is used.

===================================================================================
To implement CSS transitions or amimation along with JavaScript code to detect when a transation has finished.

In file named "css_animations.html"
This page is a demonstration of using CSS animations to improve the visual experience on a website. It contains various animations that respond to user interaction. Animations are implemented using CSS properties and keyframes without the use of external libraries or frameworks. CSS allows you to create dynamic visual effects that bring page elements to life.
============================================================================
**To implement a client web server with web socket and node.js

In file/web page named "chat.html"

=============================================================================
**To implement local storage with JavaScript code.
In file named "local_storage.html"
Two different fieldset where created, the first with an id of data the second with an id of output. The data filedset has two imput text box for entering any key and a value. Beside there is a button taht when clicked will pass that data to the outpur fieldset. 

The data are passed to the output filed using JavaScript code. First each element is assiged to a variable using the getElementById method. Then using an onclick event assigend to the button a function is created. 
The function has two variables (key,value) that are assigned to contain the value from the two input field. The two variables are passed as paramenters to the localStorage.setItem method, this mehtod allows to save pairs of key and value into the browser.

To print out the value of the local storage a for loop is set. Its paramenter is the lengh of the localStorage method where the key and value from the input field are passed and then printed on the webpage with the innerHTML method.

================================================================================================

**Responsive Design & Print version**
Present on all pages




