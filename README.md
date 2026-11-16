 Campus Event Board

Campus Event Board is a responsive web application designed to help students explore and manage activities at the Indian Institute of Information Technology Vadodara.

The platform brings together campus events, schedules, student clubs, and event registration information in one accessible interface. It combines HTML, CSS, JavaScript, JSON, XML, Node.js, and Express.js to demonstrate interactive web development, structured data processing, and client-server communication.

Key Features

Event Discovery and Management
- Browse campus workshops, competitions, sports, and cultural activities.
- View event details and remaining seat availability.
- Search events using keywords.
- Display event information dynamically through JavaScript.
- Show a helpful message when no matching events are found.

Event Submission
- Submit event details through an interactive form.
- Validate event names, email addresses, and required fields.
- Process form submissions using JavaScript.
- Store event-related information in browser localStorage.

Backend and Database Integration

- Node.js and Express.js based backend server.
- JSON file-based database using events.json.
- Read database records using the File System module.
- Retrieve event records through REST API endpoints.
- Perform server-side event search using keywords.
- Exchange data between frontend and backend using HTTP requests.
- Handle server and data retrieval errors.

Structured Data Processing
- Maintain campus event information in JSON and XML formats.
- Retrieve event data using the Fetch API.
- Convert JSON objects to text and back using `JSON.stringify()` and `JSON.parse()`.
- Parse XML documents using `DOMParser`.
- Extract XML values using `getElementsByTagName()`.
- Display the first XML event title on the webpage.
- Compare JSON and XML file sizes.
- Handle loading states and data retrieval errors.

 User Interface and Accessibility
- Responsive layouts for mobile, tablet, and desktop screens.
- Mobile-friendly navigation.
- Event cards generated dynamically.
- Campus event schedule and student club information.
- Campus gallery and frequently asked questions.
- Semantic HTML structure.
- Keyboard-accessible navigation and form controls.

Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure and semantic content |
| CSS3 | Styling and responsive layouts |
| JavaScript | Interactive features and event handling |
| JSON | Structured event data storage |
| XML | Alternative structured data representation |
| Fetch API | Loading external event data |
| DOM API | Dynamic webpage updates |
| DOMParser | Parsing XML documents |
| localStorage | Browser-based data persistence |
| Node.js | Backend runtime environment |
| Express.js | Server development and API routing |
| File System (fs) | Reading JSON database records |
| Path Module | Managing file paths |
| REST API | Retrieving and searching event records |
| npm | Dependency management |
| Git and GitHub | Version control and team collaboration |

Project Structure


event-board/
├── index.html
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── events.json
├── events.xml
├── README.md
├── CSS/
│   ├── base.css
│   ├── style.css
│   └── theme-dark.css
├── logo.jpg
└── campus-event.jpg


Getting Started

1. Clone or download the project repository.
2. Open the event-board folder in Visual Studio Code.
3. Open the terminal and run `npm install`.
4. Start the backend server using `node server.js`.
5. Open http://localhost:3000 in your browser.
6. Explore the website and test event search, API endpoints,
   event submission, and dynamic event display.

Note: The application requires Node.js and Express.js
to support backend operations and server-side event search.

How the Application Works

Dynamic Event Display

JavaScript manages event information and generates event cards based on the available data. Event availability is determined by the number of remaining seats.

Event Search

The search feature sends an HTTP request to the Express.js backend using the Fetch API. The server searches event records from the JSON file-based database and returns matching results. JavaScript dynamically updates the webpage with those results.

Form Validation

The event submission form checks user input before processing the submitted information.

JSON and XML Integration

Event records are maintained in both formats. JavaScript retrieves the JSON data to display events and parses XML data to extract and display event information.

Data Persistence

Browser localStorage supports retaining event-related information between page visits.

Error Handling

The application provides loading feedback and handles errors that may occur while retrieving external data files.

API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Load the home page |
| GET | `/api/events` | Retrieve all event records |
| GET | `/api/search?title=coding` | Search events by title |

Testing Checklist

- [ ] Event cards display correctly.
- [ ] Search returns matching events.
- [ ] Unmatched searches show a helpful message.
- [ ] Form validation works correctly.
- [ ] Event submission behaves as expected.
- [ ] Browser localStorage retains supported data.
- [ ] JSON data loads successfully.
- [ ] XML event title appears on the webpage.
- [ ] JSON and XML operations produce console output.
- [ ] Layout works across different screen sizes.
- [ ] Keyboard navigation remains accessible.
- [ ] Express.js server starts successfully.
- [ ] JSON file-based database loads correctly.
- [ ] REST API returns all event records.
- [ ] Server-side search returns matching events.
- [ ] Client-server communication works correctly.

Team Members

| Name | Roll Number | Role |
|---|---|---|
| Preeti Singh | 20261651065 | Team Leader |
| Sanskrati Parmar | 20261651078 | Team Member |
| Falgun Dudhatra | 20261651037 | Team Member |
| Aditya Thakur | 20261651005 | Team Member |
| Piyush Gupta | 20261651059 | Team Member |

Academic Information

Course:Web Programming Lab

Institute:Indian Institute of Information Technology Vadodara

Academic Year: 2026

Repository

[Campus Event Board on GitHub](https://github.com/Preeti2395/event-board)
