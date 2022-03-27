const express = require('express');
const path = require('path');
const appName = 'moments';
const app = express();

let port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist/${appName}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${appName}/index.html`));
});

app.listen(port, () => {
    console.log(`Node app is running at localhost:${port}`);
  });