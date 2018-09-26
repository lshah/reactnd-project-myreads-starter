# MyReads Project

## Project Overview

This application is created as part of Udacity's Nanodegree My Reads App project assignment. The goal of the project was to update the static starter code in to an interactive React app. 


## How to run this project

1. Clone or download the project from https://github.com/lshah/reactnd-project-myreads-starter
2. Open a terminal from inside the project directory
3. You may need to run npm install to download all project dependencies (See README.md for more information)
4. Run npm start
    1. This should start a local server and launch the website at this address http://localhost:3000/


## Application features

1. The application has two pages - the main page and the search page
2. Main page - 
    1. It has three shelves, one for Currently reading books, another for Want to read books and the last one for books already Read
    2. Each shelf contains books that meet the shelf criteria
    3. Each book has a control that allows the user to move books from one shelf to another
    4. The selected value on the control matches the shelf the book is on at any given time
3. Search page - 
    1. Users can navigate to the Search page by clicking on the + button on the Main page
    2. Search page has a search bar that allows users to search through all available books
    3. All searched books have a control that is set to no shelf by default but can add to any shelf by selecting the corresponding option
    4. There is a back button on the Search page to take the user back to the Main page

## React concepts used
1. This app is broken in to 4 main components - App, Main page, Search page and Book
2. The state for components lives in App and is passed to the components to be used as props
3. State is updated with setState method
4. componentDidMount lifecycle method is called before making API calls
5. Browser router is used to manage routing between main and search pages

## Reference

[Udacity's project resources](https://www.diigo.com/outliner/fkkvtl/Udacity-MyReads%3A-My-Reads%3A-Book-Tracking-App-Project-(project-%236)?key=4sfz2eik4g)
This was an excellent resource [EMEA MyReads (Maeva) Walk-Thru](https://www.youtube.com/watch?v=i6L2jLHV9j8)

## Dependencies
1. Backend server provided by Udacity. The Books API that contains the getAll, update and search methods (See README.md for more infomation)
2. Starter code / template from udacity from which this project was originally forked
3. npm to install all project dependencies and to start the developer server (See README.md for more infomation)