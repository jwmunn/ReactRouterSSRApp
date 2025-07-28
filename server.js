const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');

const { render } = require('./src/entry-server');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  const context = {};
  const appHtml = ReactDOMServer.renderToString(render(req.url));

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR App</title>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/main.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
