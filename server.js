const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.dist/twitter-timeline'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/twitter-timeline/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started');
});
