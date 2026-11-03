 Campus Event Board

Campus Event Board is a responsive web application designed to help students explore and manage activities at the Indian Institute of Information Technology Vadodara.

The platform brings together campus events, schedules, student clubs, and event registration information in one accessible interface. It combines HTML, CSS, JavaScript, JSON, and XML to demonstrate interactive web development and structured data processing.

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
| Git and GitHub | Version control and team collaboration |

Project Structure


event-board/
├── index.html
├── script.js
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
2. Open the `event-board` folder in Visual Studio Code.
3. Install the Live Server extension if required.
4. Right-click `index.html` and select **Open with Live Server**.
5. Explore the website and test the event search, event submission, and dynamic event display features.

Note: Run the project using a local development server rather than opening the HTML file directly, because JavaScript uses the Fetch API to load JSON and XML files.

How the Application Works

Dynamic Event Display

JavaScript manages event information and generates event cards based on the available data. Event availability is determined by the number of remaining seats.

Event Search

The search feature filters events according to user input and updates the displayed results without manually modifying the HTML.

Form Validation

The event submission form checks user input before processing the submitted information.

JSON and XML Integration

Event records are maintained in both formats. JavaScript retrieves the JSON data to display events and parses XML data to extract and display event information.

Data Persistence

Browser localStorage supports retaining event-related information between page visits.

Error Handling

The application provides loading feedback and handles errors that may occur while retrieving external data files.

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
