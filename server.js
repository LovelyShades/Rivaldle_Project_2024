const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve the "pages" folder as static
app.use(express.static(path.join(__dirname, 'public')));
// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/home_page/scripts/home.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
