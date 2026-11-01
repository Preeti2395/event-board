
console.log("Assignment 6 started successfully");

 // A2

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

 // A3

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


 // B8

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

 // A4

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

 // A5

console.log("----- All Campus Events -----");

for (const event of events) {
    console.log("Event Name: " + event.title);
    console.log("Event Date: " + event.date);
    console.log("Available Seats: " + event.seats);
    console.log("Online: " + event.online);
    console.log("------------------------");
}

 // A6

function formatEvent(ev) {
    return ev.title + " | Date: " + ev.date +
           " | Seats: " + ev.seats +
           " | Online: " + ev.online;
}

console.log("Formatted Events");

for (const event of events) {
    console.log(formatEvent(event));
}

 // A7

const availableEvents = events.filter(ev => ev.seats > 0);

console.log("----- Available Events -----");

availableEvents.forEach(ev => {
    console.log(ev.title + " | Seats: " + ev.seats);
});

 // A8

console.log("----- Block Scope Example -----");

let message = "Outside Block";

if (true) {
    let message = "Inside Block";
    const eventName = "Technical Workshop";

    console.log("Inside Message:", message);
    console.log("Event Name:", eventName);
}

console.log("Outside Message:", message);

 // B1

const mainSection = document.getElementById("main");

const navigation = document.querySelector(".main-nav");

const allLinks = document.querySelectorAll("a");

const searchInput = document.querySelector('input[type="search"]');

console.log("Main Section:", mainSection);
console.log("Navigation:", navigation);
console.log("Total Links:", allLinks.length);
console.log("Search Input:", searchInput);

 // B2

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

 // B3

const firstCard = document.querySelector(".event-card");

if (firstCard) {
    // Read existing content
    const title = firstCard.querySelector("h3");
    console.log("Original Title:", title.textContent);

    title.textContent = "Technical Workshop - Register Now";

    firstCard.classList.add("highlight-card");

    title.style.color = "darkgreen";

    firstCard.setAttribute("data-event", "technical");
}

const allCards = document.querySelectorAll(".event-card");

allCards.forEach((card, index) => {
    if (events[index].seats === 0) {
        card.classList.add("full");
    }
});

console.log("B3 DOM manipulation completed");

 // B4

const searchButton = document.querySelector(
    ".search-form button"
);

searchButton.addEventListener("click", function(event) {

    event.preventDefault();

    const searchText = document
        .getElementById("search-events")
        .value.toLowerCase().trim();

    const matchingEvents = events.filter(ev =>
        ev.title.toLowerCase().includes(searchText)
    );

    renderEvents(matchingEvents);

    console.log("Search Button Clicked");
    console.log("Search Text:", searchText);
});

 // B5

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

 // B6

const eventForm = document.querySelector(".event-form");

eventForm.addEventListener("submit", function(e) {
    e.preventDefault();

    
    // B7
    if (!validateEventForm()) {
        return;
    }

    const name = document.getElementById("event-name").value.trim();
    const email = document.getElementById("event-email").value.trim();
    const date = document.getElementById("event-date").value;
    const city = document.getElementById("city").value;
    const description = document.getElementById("description").value.trim();

    const newEvent = {
        title: name,
        date: date,
        seats: 30,
        online: false,
        email: email,
        city: city,
        description: description
    };

    events.push(newEvent);
    
localStorage.setItem("campusEvents", JSON.stringify(events));

    renderEvents(events);

    eventForm.reset();

    console.log("New Event Added:", newEvent);

    alert("Event added successfully!");
});

 // B7

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

 // B7

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

        console.log("Fetched Events:", fetchedEvents);

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

fetchEvents();
