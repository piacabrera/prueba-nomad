const express = require('express');
const bodyParser = require('body-parser');
const audit = require('express-requests-logger');
const path = require('path');  // Import 'path' module for constructing file paths
const apiRoutes = require('./src/endpoints/api');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;  // Use a default port if not specified

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware for logging requests
app.use(audit());

// API routes
app.use('/api', apiRoutes);

// Serve static files from the React frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all handler to serve the React app for any route not handled by the API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
