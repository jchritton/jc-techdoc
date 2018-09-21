const express = require('express');
const path = require('path');

const app = express();

// Port setup
const port = process.env.PORT || 8080;

// Set up directories for static served files
app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Express server is listening on port ${port}`);
  });