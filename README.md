Campus Event Board

Campus Event Board is a responsive and interactive website developed for the Web Programming Lab at IIIT Vadodara.

The website provides information about campus events, student clubs, schedules, and campus activities. Assignment 6 extends the existing HTML and CSS website by adding JavaScript functionality, dynamic event rendering, event searching, form handling, and JSON data loading.

Features

HTML and CSS Features (Assignment 5)

- Upcoming campus events
- Event submission form
- Event schedule
- Student clubs section
- Campus gallery
- FAQ section
- Responsive navigation
- Mobile-first responsive design
- Responsive images and typography
- Keyboard-accessible navigation

JavaScript Features (Assignment 6)

- JavaScript variables, arrays, objects, loops, and functions
- Event availability status based on remaining seats
- Array filtering to identify available events
- DOM selection and manipulation
- Dynamic event rendering
- Event searching and filtering
- Keyboard event handling
- Event submission using JavaScript
- Form validation
- Browser localStorage for saving event data
- Fetch API to load events from `events.json`
- Loading, success, and error handling

Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- CSS Grid
- Flexbox
- Media Queries
- DOM API
- Fetch API
- Browser localStorage
- Git and GitHub

Responsive Design
The website follows a mobile-first approach.

Different layouts are provided for:
- Mobile devices
- Tablets
- Desktop screens

CSS media queries adjust the layout according to screen width.

Project Structure

text
event-board/
│
├── index.html
├── script.js
├── events.json
├── README.md
├── CSS/
│   ├── base.css
│   ├── style.css
│   └── theme-dark.css
├── logo.jpg
└── campus-event.jpg


How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Right-click `index.html` and select **Open with Live Server**.
5. The website will open in your browser.
6. Explore the events, use the search feature, and test the event submission form.

Note:Running the project through Live Server is recommended because the Fetch API loads data from the local `events.json` file.

JavaScript Implementation

Event Management

JavaScript objects and arrays store event details such as title, date, seats, and availability.

Dynamic DOM Updates

JavaScript updates the event display dynamically using DOM methods.

Search Functionality

Users can search for events, and JavaScript filters the event list based on the entered search term.

Form Handling

The event submission form accepts user input, validates required information, and processes event submissions.

Local Storage

Browser localStorage is used to retain event-related data.

Fetch API

The Fetch API retrieves event information from `events.json` and handles loading, successful responses, and errors.

Testing

The project should be tested for:

- Correct event display
- Event search functionality
- Form validation
- Event submission
- localStorage functionality
- Successful JSON loading
- Fetch API error handling
- Responsive layouts
- Keyboard navigation

Team Members

1. Preeti Singh (Team Leader) - 20261651065
2. Sanskrati Parmar - 20261651078
3. Falgun Dudhatra - 20261651037
4. Aditya Thakur - 20261651005
5. Piyush Gupta - 20261651059

Course

Web Programming Lab  
Indian Institute of Information Technology Vadodara

Academic Year

2026
