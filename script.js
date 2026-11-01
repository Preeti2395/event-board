
console.log("Assignment 6 started successfully");

 // A2: Store values in variables

const eventTitle = "Technical Workshop";
const eventDate = "5 September 2026";
const totalSeats = 50;
let seatsLeft = 25;
const isOnline = false;

console.log("Event Title:", eventTitle);
console.log("Event Date:", eventDate);
console.log("Total Seats:", totalSeats);
console.log("Seats Left:", seatsLeft);
console.log("Online Event:", isOnline);

 // A3: Model events as an array of objects

const events = [
    {
        title: "Technical Workshop",
        date: "5 September 2026",
        seats: 25,
        online: false
    },
    {
        title: "Sports Day",
        date: "10 September 2026",
        seats: 40,
        online: false
    },
    {
        title: "Coding Competition",
        date: "15 September 2026",
        seats: 0,
        online: true
    },
    {
        title: "Cultural Fest",
        date: "20 September 2026",
        seats: 4,
        online: false
    }
];


 // B8: Load saved events from localStorage

const savedEvents = localStorage.getItem("campusEvents");

if (savedEvents) {
    try {
        const storedEvents = JSON.parse(savedEvents);

        if (Array.isArray(storedEvents)) {
            events.length = 0;
            events.push(...storedEvents);
        }
    } catch (error) {
        console.log("Could not load saved events:", error);
    }
}

console.log("Events loaded:", events);

console.log("All Events:", events);
console.log("First Event:", events[0]);
console.log("Total Events:", events.length);

 // A4: Control Flow using if/else

for (const event of events) {
    let status;

    if (event.seats === 0) {
        status = "Full";
    } else if (event.seats < 5) {
        status = "Few left";
    } else {
        status = "Open";
    }

    console.log(event.title + " : " + status);
}

 // A5: Repeat with a for...of loop

console.log("----- All Campus Events -----");

for (const event of events) {
    console.log("Event Name: " + event.title);
    console.log("Event Date: " + event.date);
    console.log("Available Seats: " + event.seats);
    console.log("Online: " + event.online);
    console.log("------------------------");
}

 // A6: Function with parameter and return

function formatEvent(ev) {
    return ev.title + " | Date: " + ev.date +
           " | Seats: " + ev.seats +
           " | Online: " + ev.online;
}

// Calling the function
console.log("----- Formatted Events -----");

for (const event of events) {
    console.log(formatEvent(event));
}

 // A7: Arrow Function with filter() method

const availableEvents = events.filter(ev => ev.seats > 0);

console.log("----- Available Events -----");

availableEvents.forEach(ev => {
    console.log(ev.title + " | Seats: " + ev.seats);
});

 // A8: Block Scope using let and const

console.log("----- Block Scope Example -----");

let message = "Outside Block";

if (true) {
    let message = "Inside Block";
    const eventName = "Technical Workshop";

    console.log("Inside Message:", message);
    console.log("Event Name:", eventName);
}

console.log("Outside Message:", message);

 // B1: Select HTML elements using DOM

const mainSection = document.getElementById("main");

const navigation = document.querySelector(".main-nav");

const allLinks = document.querySelectorAll("a");

const searchInput = document.querySelector('input[type="search"]');

console.log("Main Section:", mainSection);
console.log("Navigation:", navigation);
console.log("Total Links:", allLinks.length);
console.log("Search Input:", searchInput);

 // B2: Render events dynamically from data

const eventContainer = document.querySelector("#event-container");

function renderEvents(eventList) {
    eventContainer.replaceChildren();

    for (const ev of eventList) {
        const card = document.createElement("article");
        card.classList.add("event-card");

        const heading = document.createElement("h3");
        heading.textContent = ev.title;

        const date = document.createElement("p");
        date.textContent = "Date: " + ev.date;

        const seats = document.createElement("p");
        seats.textContent = "Available Seats: " + ev.seats;

        const status = document.createElement("p");

        if (ev.seats === 0) {
            status.textContent = "Status: Full";
            status.classList.add("full");
        } else if (ev.seats < 5) {
            status.textContent = "Status: Few left";
        } else {
            status.textContent = "Status: Open";
        }

        const link = document.createElement("a");
        link.textContent = "Submit your interest";
        link.href = "#submit-event";
        link.classList.add("event-link");

        card.appendChild(heading);
        card.appendChild(date);
        card.appendChild(seats);
        card.appendChild(status);
        card.appendChild(link);

        eventContainer.appendChild(card);
    }
}

renderEvents(events);

 // B3: Read and Change Content

const firstCard = document.querySelector(".event-card");

if (firstCard) {
    // Read existing content
    const title = firstCard.querySelector("h3");
    console.log("Original Title:", title.textContent);

    // Change text content
    title.textContent = "Technical Workshop - Register Now";

    // Add a CSS class
    firstCard.classList.add("highlight-card");

    // Change style
    title.style.color = "darkgreen";

    // Set an attribute
    firstCard.setAttribute("data-event", "technical");
}

// Update full event cards
const allCards = document.querySelectorAll(".event-card");

allCards.forEach((card, index) => {
    if (events[index].seats === 0) {
        card.classList.add("full");
    }
});

console.log("B3 DOM manipulation completed");

 // B4: Handle Click Event

const searchButton = document.querySelector(
    ".search-form button"
);

searchButton.addEventListener("click", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get search input value
    const searchText = document
        .getElementById("search-events")
        .value.toLowerCase().trim();

    // Filter matching events
    const matchingEvents = events.filter(ev =>
        ev.title.toLowerCase().includes(searchText)
    );

    // Display matching events
    renderEvents(matchingEvents);

    console.log("Search Button Clicked");
    console.log("Search Text:", searchText);
});

 // B5: Handle Keyboard Events

const eventSearchInput = document.getElementById("search-events");

eventSearchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();

        const searchText = eventSearchInput.value
            .toLowerCase()
            .trim();

        const matchingEvents = events.filter(ev =>
            ev.title.toLowerCase().includes(searchText)
        );

        renderEvents(matchingEvents);

        console.log("Enter Key Pressed");
        console.log("Searching for:", searchText);
    }
});

 // B6: Handle Form Submission

const eventForm = document.querySelector(".event-form");

eventForm.addEventListener("submit", function(e) {
    e.preventDefault();

    
    // B7: Validate before adding event
    if (!validateEventForm()) {
        return;
    }

    // Get form values
    const name = document.getElementById("event-name").value.trim();
    const email = document.getElementById("event-email").value.trim();
    const date = document.getElementById("event-date").value;
    const city = document.getElementById("city").value;
    const description = document.getElementById("description").value.trim();

    // Create new event object
    const newEvent = {
        title: name,
        date: date,
        seats: 30,
        online: false,
        email: email,
        city: city,
        description: description
    };

    // Add event to array
    events.push(newEvent);
    
localStorage.setItem("campusEvents", JSON.stringify(events));


    // Display updated events
    renderEvents(events);

    // Clear form
    eventForm.reset();

    console.log("New Event Added:", newEvent);

    alert("Event added successfully!");
});

 // B7: Form Validation

const eventNameInput = document.getElementById("event-name");
const eventEmailInput = document.getElementById("event-email");
const eventDateInput = document.getElementById("event-date");

function validateEventForm() {
    const name = eventNameInput.value.trim();
    const email = eventEmailInput.value.trim();
    const date = eventDateInput.value;

    if (name.length < 3) {
        alert("Event name must contain at least 3 characters.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (date === "") {
        alert("Please select an event date.");
        return false;
    }

    return true;
}

console.log("B7 Form Validation Ready");

 // B7: Fetch events from events.json

async function fetchEvents() {
    const container = document.getElementById("event-container");

    // Loading state
    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading events...";
    container.prepend(loadingMessage);

    try {
        
        const response = await fetch("events.json");

        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }

        const fetchedEvents = await response.json();

        // Success state
        console.log("Fetched Events:", fetchedEvents);

        // Merge without duplicating existing events
        for (const ev of fetchedEvents) {
            const exists = events.some(
                item => item.title === ev.title
            );

            if (!exists) {
                events.push(ev);
            }
        }

        renderEvents(events);

        console.log("Events loaded successfully!");

    } catch (error) {
        // Error state
        console.error("Fetch Error:", error);
        console.log("Showing existing events instead.");

        renderEvents(events);

        const errorMessage = document.createElement("p");
        errorMessage.textContent =
            "Could not load latest events. Showing saved events.";
        container.prepend(errorMessage);

    } finally {
        loadingMessage.remove();
    }
}

// Call fetch function
fetchEvents();
