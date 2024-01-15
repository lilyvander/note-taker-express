const router = require('express').Router();
const path = require('path');


//Route to send the index file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// Route to open the notes.html file when the get started button is clicked
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});