const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');

  res.send(contentFromHtmlFile);
});

app.listen(3001, () => {
  console.log('Application is running on port 3001');
});
