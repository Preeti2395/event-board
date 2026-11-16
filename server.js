const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Read data from JSON database
function loadDatabase() {
    const text = fs.readFileSync(
        path.join(__dirname, "events.json"), "utf8"
    );
    return JSON.parse(text);
}

// Serve frontend files
app.use("/CSS", express.static(path.join(__dirname, "CSS")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve required project files
const publicFiles = [
    "index.html", "script.js", "events.json",
    "events.xml", "logo.jpg", "campus-event.jpg"
];

publicFiles.forEach(file => {
    app.get("/" + file, (req, res) => {
        res.sendFile(path.join(__dirname, file));
    });
});

// API to retrieve events from database
app.get("/api/events", (req, res) => {
    try {
        const events = loadDatabase();
        res.json(events);
    } catch (error) {
        res.status(500).json({
            message: "Failed to load events"
        });
    }
});

// API to search events from database
app.get("/api/search", (req, res) => {
    try {
        const query = (req.query.title || "").trim().toLowerCase();
        const events = loadDatabase();

        const results = events.filter(event =>
            event.title.toLowerCase().includes(query)
        );

        res.json(results);
    } catch (error) {
        res.status(500).json({
            message: "Failed to search events"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
