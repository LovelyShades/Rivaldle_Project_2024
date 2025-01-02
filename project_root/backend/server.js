import express from 'express'; // Use import syntax
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import open from 'open';  // Correct import for the `open` module
import { characters } from './data/character_info.js'; // Correct relative import

const __filename = fileURLToPath(import.meta.url); // Get the filename
const __dirname = dirname(__filename); // Get the directory name

const app = express();
const port = 3000;

let daily_classic_character = characters[Math.floor(Math.random() * characters.length)];
console.log(daily_classic_character)

app.use(express.static(path.join(__dirname, '../public')));

app.get('/daily_classic_character', (req, res) => {
  res.json(daily_classic_character);
})

app.get('/character_info', (req, res) => {
  res.json(characters);
});
// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/home_page/index.html'));
});
// Serve the classic mode page
app.get('/classic', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/classic_mode_page/index.html'));
});

app.get('/silhouette', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/silhouette_mode_page/index.html'));
});

// Start the server and automatically open the browser
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  open(`http://localhost:${port}`);  // This will open the browser automatically
});
//comment
