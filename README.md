# Finding Falcone - Geektrust coding challenge

[Finding Falcone](https://www.geektrust.com/challenge/space) is a [Geektrust](https://www.geektrust.com) front-end coding challenge, where a user needs to select 4 planets out of 6 and assign provided space vehicles to search for Queen Falcone.
<br/><br/>
Upon selecting planets and assigning vehicles the user can view the result (a game of chance) provided by an api.

## Install and run the project
1. cd into the directory 'FindingFalcone'.<br/><br/>
2. run the command 'npm install'<br/>
    (to install all the required packages)<br/><br/>
3. run the command 'npm run dev' <br/>
    (this command runs a local development server)<br/><br/>

## How to play the game
- First select 4 planets by clicking them
- Drag and drop a vehicle image onto a planet images to assign the vehicle to the planet
- Upon selecting 4 planets and assigning vehicles to each, click 'show result' button to see result
- If no vehicle is assignable to a planet, hit reset button<br/><br/>

 NOTE - Vehicles cannot be dropped on:<br/>
 - planets which are not selected
 - planets which are farther away than the maximum distance the vehicle can travel
 - planets which already have a vehicle assigned

 ## Technologies used
- React
- Typescript
- SCSS
- Webpack

## Learning
I used typescript to build this app, thus it provided nice opportunity to learn about some of its features like making custom types and using typescript in React.<br/><br/>
Also I learned about using drag and drop functionality without using any external library.