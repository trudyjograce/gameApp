# gameApp
---
permalink: /readme/

title: React App README
---
### Table of Contents
 [Project Description](https://github.com/trudyjograce/gameApp/tree/master#project-description)
 
 [Installation Guide](https://github.com/trudyjograce/gameApp/tree/master#installation-guide)
 
 [Usage](https://github.com/trudyjograce/gameApp/tree/master#usage)

 [Functions available in Project](https://github.com/trudyjograce/gameApp/tree/master#usage)
 
 [Credits](https://github.com/trudyjograce/gameApp/tree/master#credits)



## Project Description
 This is a memory game built using React-App. It is designed to test your memory by  using visual prompts. 
* React & Node.js
* CSS & Bootstrap

The goal of this project was to create a game using a Javascript Library (namely React) and to ensure understanding of React, JSX, and JavaScript. The game comprises of Components which work to create the final presented item.

## Installation Guide
projectsHyperionDev is a Public Repository containing open source code you can download for free. 

Follow these steps to download:

1. Go to GitHub’s website at http://www.github.com.

2. Click “Explore” on the top of the page.

3. In the “Explore GitHub” menu, select “Topics.”

4. Pick a topic from the featured list of topics. GitHub will list all public repositories matching the selected topic. You may also choose to filter the repositories based on programming language, sort by most stars, and more.

5. Click on the desired repository. 

6. Navigate to the “<>Code” tab.

7. Click on the “Code” button on the right. A dropdown should appear.

8. In the “Clone” menu, under the “HTTPS” tab, click on “Download ZIP”

9. On your computer, go to "Downloads" and double click in the zip file.

10. Choose where to save it and "Extract All Files" 

11. To make changes to the files you will need a Text Editor (e.g VS Code). All Files needed to make changes to appearance and function of app can be found in the "SRC Folder"

## Usage

The files contain the following files:

**React-App** 
<details>
 <ul>
  <li>game-app</li>
<ul>
  <li>public</li>
  <li>src*</li>
  <li>package.json</li>
  <li>package-lock.json</li>
  <li>README.md</li>
</ul>
 </ul>
</details>

**SRC File Details**
<details>
 <ul>
  <li>Components</li>
<ul>
  <li>Cards.js</li>
  <li>EndGame.js</li>
  <li>Game.js</li>
  <li>Header.js</li>
  <li>Rules.js</li>
</ul>
  <li>Custom CSS</li>
  <li>Images</li>
  <li>Fonts</li>
 </ul>
</details>

**Images**
The images for cards are stored in the images folder. Replace these with your own images and make the necssary changes to the file names on the Cards.js, Game.js and Header.js pages. Images in the "readmeImg" file are for the purpose of this README doc.

##Functions available in Project

1.Overview of full game page. All cards are displayed "facedown".
 ![overview](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/1-overview.JPG)


2.As you need to match pairs, one move is defined as having opened two cards. Here card "#3" is open, so the "Moves" is reflected as "1" . Once Card #4" is opened, if it is not a match it will flip back over.

![open card](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/2-openCard.JPG)

3.If you open a matching pair, the cards will be "removed" from the table.Your current moves will continue to track untill all cards are cleared (ie. all pairs have been matched)

![pair match](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/3-pairedMatch.jpg)

4.Once all pairs are found a pop-up will display over the game with your "Total Moves" and your "Best Moves" (ie. the least amount of clicks it took to find all the pairs).

!["you win" alert](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/4-popUp.JPG)

5.The pop-up has two buttons: 
- a red "X" which closes the pop-up but does not reset the game,

![quit](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/5-restartQuit.jpg )

-a restart button labelled "Play Again" which will restart the game   

![restart](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/6-quitRestart.JPG )

6.-Directly below the cards the "Moves" reflects the moves for the current game. Restart will set the current moves to "0";
-"Your Progress" saves the total moves to an array and displays the user "Total Moves" per game played.

![stats](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/7-gameStats.JPG)

7. The Nav Bar is fixed to the bottom, but the user can easily navigate to: 
- "Help" section at the top of the Game;
-"Play" - cards section, or
- "Stats" to track their progression 

![menu](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/8-menu.JPG)

8. The selected Menu item will be "brighter" to show it is active

![active menu](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/9-activeMenu.jpg)

9.The "Help" Section explains the rules of the game as well as instructions on how to play. It is created using an accordion to reduce space and closes the previous section when opening the next 

![active menu](https://github.com/trudyjograce/gameApp/blob/master/readmeImg/10-help.JPG)


## Credits
This project includes resources from the following sources

1. Icons
  - W3.Org - *www.w3.org*
2. Fonts 
  - Google Fonts - *fonts.google.com*
3. Photos
  - ClipArt *www.clipartkey.com*
  - Canva *www.canva.com*

4. Programs
  -React - *https://nodejs.org/*
  -React-Bootstrap - *https://react-bootstrap.github.io/getting-started*
  -Bootstrap - *https://getbootstrap.com/*
  
© [Trudy-Jo Daniels ](https://github.com/trudyjograce)
