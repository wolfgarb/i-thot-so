const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3005

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// routes
app.get("/", function(req, res) {
    return res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
    return res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
})