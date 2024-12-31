import express from 'express'; // Use import syntax
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import open from 'open';  // Correct import for the `open` module

const __filename = fileURLToPath(import.meta.url); // Get the filename
const __dirname = dirname(__filename); // Get the directory name

const app = express();
const port = 3000;

// Serve the "public" folder as static
app.use(express.static(path.join(__dirname, 'public')));

// Serve the classic mode page
app.get('/classic', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/classic_mode_page/classic.html'));
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/home_page/home.html'));
});

// Start the server and automatically open the browser
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  open(`http://localhost:${port}`);  // This will open the browser automatically
});
//comment
