const fs = require('fs');
const path = require('path');
const express = require('express');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3005

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// GET routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

// get notes by ID from sidebar
app.get('/api/notes/:id', (req, res) => {
    let pickedNote = req.params.id;
    let noteData = JSON.parse(fs.readFileSync('./db/db.json'));
    
    for (let i = 0; i < noteData.length; i++) {
        if (pickedNote === noteData[i].id) {
            return res.json(array[i]);
        } else {
            res.send(404);
        }
    }
});

// POST route
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNotes = req.body;
    newNotes.id = nanoid(5);
    notes.push(newNotes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes);
    // validate data
});

// DELETE notes


// wildcard route takes user back to root directory
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
})