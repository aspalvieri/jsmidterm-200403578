// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const metahumansRoutes = require('./routes/metahumans');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Your route file for your metahuman
app.use("/metahumans", metahumansRoutes);

// Exporting the changes
module.exports = app;