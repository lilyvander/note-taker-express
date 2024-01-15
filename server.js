// Boiler plate structure 
const express = require('express');
const frontEndRoutes = require('./routes/front_end_routes');
const apiRoutes = require('./routes/api');

const PORT = 3001;
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Use the routes created
app.use(frontEndRoutes);
app.use(apiRoutes)



// Listener 
app.listen(PORT, () =>
    console.log(`Notetaker server is listening at http://localhost:${PORT}`)
);