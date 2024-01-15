const router = require('express').Router();
const fs = require('fs');


// Gets notes fro db.json file 
router.get('/api/notes', (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        res.json(db);
    } catch (error) {
        console.error('Error reading notes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Post new note
router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.status(400).json({ error: 'Error in adding note' });
    }
});