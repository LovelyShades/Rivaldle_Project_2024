import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import open from 'open';
import { characters } from './data/characterInfo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const serverID = Math.floor(1000000000 + Math.random() * 9000000000).toString();

let daily_classic_character = characters[Math.floor(Math.random() * characters.length)];
let daily_silhouette_character = characters[Math.floor(Math.random() * characters.length)];
let daily_emoji_character = characters[Math.floor(Math.random() * characters.length)];

let daily_ability_character = characters[Math.floor(Math.random() * characters.length)];
let daily_character_ability = Math.floor(Math.random() * daily_ability_character.translations['en'].abilities.length);

let dayTracker = 0;

let lastUpdatedDate = new Date().toDateString();

// Function to check if the date has changed
function checkAndResetCharacters() {
  const today = new Date().toDateString();
  if (today !== lastUpdatedDate) {
    daily_classic_character = characters[Math.floor(Math.random() * characters.length)];
    daily_silhouette_character = characters[Math.floor(Math.random() * characters.length)];
    daily_emoji_character = characters[Math.floor(Math.random() * characters.length)];
    daily_ability_character = characters[Math.floor(Math.random() * characters.length)];
    daily_character_ability = Math.floor(Math.random() * daily_ability_character.translations['en'].abilities.length);
    lastUpdatedDate = today;
    console.log('Daily characters reset for the new day! last udated day is:', lastUpdatedDate);
  }
  dayTracker += 1;
}

setInterval(() => {
  checkAndResetCharacters();
}, 24 * 60 * 60 * 1000);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/character_info', (req, res) => {
  res.json(characters);
  });

app.get('/date', (req, res) => {
  res.json(lastUpdatedDate);
})

app.get('/server_id', (req, res) => {
  res.json(serverID);
})

app.get('/day_tracker', (req, res) => {
  res.json(dayTracker);
})

app.get('/daily_classic_character', (req, res) => {
  res.json(daily_classic_character);
})

app.get('/daily_silhouette_character', (req, res) => {
  res.json(daily_silhouette_character);
})

app.get('/daily_emoji_character', (req, res) => {
  res.json(daily_emoji_character);
})

app.get('/daily_ability_character', (req, res) => {
  res.json(daily_ability_character);
})

app.get('/daily_character_ability', (req, res) => {
  res.json(daily_character_ability);
})


// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/home_page/index.html'));
});

app.get('/privacy_policy', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/privacy_policy/privacy_policy.html'));
});

// Serve the classic mode page
app.get('/classic', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/classic_mode_page/index.html'));
});

app.get('/silhouette', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/silhouette_mode_page/index.html'));
});

app.get('/emoji', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/emoji_mode_page/index.html'));
});

app.get('/character_ability', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/character_ability_mode_page/index.html'));
});


// Start the server and automatically open the browser
const port = process.env.PORT || 3000;
 app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
 });
