const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world — serveur avec stream');
});

// Modifications V2 (Points 1, 2) + V1 (Point 3)
app.get('/big', (req, res) => {
  const filePath = path.join(__dirname, 'maybe-big-file.txt');

  // Lecture par flux : non bloquante et protège la RAM
  const stream = fs.createReadStream(filePath, { encoding: 'utf8' });

  // Sécurité XSS (V1)
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  stream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      res.status(404).send('Fichier introuvable');
    } else {
      res.status(500).send('Erreur lors de la lecture du fichier');
    }
  });

  // Envoi progressif des morceaux au client
  stream.pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});