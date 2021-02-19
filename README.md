# ID_Assignment_3
 
 
 
<!-- Your Project's Name
One or two paragraphs providing an overview of your project. Tell us about your project.
 
Essentially, this part is your sales pitch. -->
 
Brain Trainer
This website is designed to have games that test your cognitive abilities and memory. We wanted to give our users a space to test and train their skills through quick brain-speed games.
 
<!-- Design Process
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.
 
In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
 
As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory) Include the Adobe XD wireframe as a folder. You can include the XD share url. -->
 
Design Process
When making this website, we had an idea of trying to create a sight that people can go to to test and train their skills through simple online brain speed games, to challenge them and help them improve while having fun. Challenging the brain can help to improve their processing speed and can help make quicker and sharper decisions.
 
Adobe XD Wireframe link: https://xd.adobe.com/view/af55fd74-3cca-42f4-bdb0-b621ba931594-fa06/?fullscreen
 
<!-- 
Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
In addition, you may also use this section to discuss plans for additional features to be implemented in the future:
 
Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
-->
 
Features
Our website currently consists of 2 games, a number memory game and a speed typing game.
 
Existing Features:
Feature 1 - A functional nav bar that redirects to the selected game
Feature 2 - The number memory game displays the number, which length is determined by the current level.
Feature 3 - The number game allows the user to input the number which he remembers
Feature 4 - The number game will check whether the input was the right answer and either continue to the next level or end according to the users answer
Feature 5 - The typing test gets a new quote from the api every new game
Feature 6 - The typing test will display whether the users input was correct by changing the colors of the already written text according to whether the characters are the same
Feature 7 - The typing test will display a timer that starts as soon as the user starts typing
Feature 8 - Once the typing test ends, it will display the words typed per minute and the current time it took to complete
 
Other Feature Ideas:
Idea 1: Another idea would be to add more games to the site like an aim trainer game, reaction time game, etc.
 
<!--
JQuery
The project uses JQuery to simplify DOM manipulation.
Testing
For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:
 
Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.
 
You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
 
If this section grows too long, you may want to split it off into a separate file and link to it from here.
-->
 
We used JQuery to make it more convenient to hide and show parts of the html for each stage of the games; showing the quote and quote input bubble in the typing speed test, then hiding it and showing the new game bubble after the user finished typing out the quote.($(".quote-display").show(); or $(".quote-display").hide();)
We also used JQuery to retreive values for testing (console.log($('#ans')[0].value);) or to change those values ($('#ans')[0].value = "";)

Some Bugs found were:
Some values were getting saved in my restDB that were not numbers, resulting in my average score/ average number being displayed as NAN. The problem was caused as the name of some of the IDs were changed to streamline the process, but one was overlooked.

A problem faced was that variables were not being carried over to/from functions for restDB from/to different functions in javascript, even though the variables were established outside the functions, in the main javascript page. This was worked around, instead of solved.
 
<!--
Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X
 -->
 Credits:
 
for the link bar and burger in mobile mode: https://www.youtube.com/watch?v=gXkqy0b4M5g
for the blinking box in reaction speed: https://css-tricks.com/snippets/javascript/function-with-random-timer/
Speed typing test is referenced from: https://www.geeksforgeeks.org/design-a-typing-speed-test-game-using-javascript/
 
Number Memory:
random numbers when button is clicked: https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_function
making the number disappear: https://www.drupal.org/project/messagefx/issues/724180
 
Speed Test API:
http://api.quotable.io/random
stopwatch: https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

 
Link to Github:
https://github.com/KaiLucasAnton/ID_Assignment_3
 
restDB link:
