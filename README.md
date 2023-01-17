# Travel tracker

### Learning Goals:

- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

### Abstract:
This app will keep track of your travels by keeping track of trips you want to take, trips you have in your itinerary and all the past trips you've taken. The app will give you estimated cost for the year and for each new trip you want to take.
 
 ### Installation Instructions:
- Fork the repository found here: https://github.com/FayeRosenshein/travel-tracker 
- Clone down your new, forked repo. While cloning, name it what you want your local repo to be named, and run `git clone`. 
- cd into the repository
- Open two terminal windows to run both servers at the same time
- Install NPM packages by running `npm install` and then `dayjs install` in your terminal
- Clone down the api server found here: https://github.com/turingschool-examples/travel-tracker-api in a paralell file
- cd into the server and install NPM packages by running `npm install` in your terminal
- Start the server by running `npm start` in your server  
- After starting the server, the project will run at http://localhost:8080/

### Preview of App:

![alt text](./dist/assets/Screenshot%202023-01-17%20at%209.10.01%20AM.png)


### Context:
I worked on this project for 7 days. I am in my sixth week of my second module in Turing.

### Technologies Used
- Javascript
- HTML
- CSS 
- Mocha/Chai
- Webpack
- dayjs

### Contributors:
- [Faye Rosenshein (she/her)](https://www.linkedin.com/in/faye-rosenshein-8ba421242/) 


### Wins + Challenges:
Some challenges included: 
- Handling if a user tries to log in with a username that does not exist and creating an appropriate error message for that.
- POST data while utilizing promises and also updating the DOM with new information. 
- dayjs, learning how to utilize a third-party extension

Some wins included:
- Succesfully utilizing dayjs.
- Testing files also testing sad paths
