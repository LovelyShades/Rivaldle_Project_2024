const express = require('express');
const path = require('path');
const open = require('open'); // Import the 'open' package
const app = express();
const port = 3000;

// Serve the "public" folder as static
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/home_page/scripts/home.html'));
});

// Start the server and open the browser automatically
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  open(`http://localhost:${port}`); // Open the URL in the default browser
});
