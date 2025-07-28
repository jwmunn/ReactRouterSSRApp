import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { render } from './src/entry-server';
import { renderToStyleElements } from '@fluentui/react-components';
import { createDOMRenderer } from '@griffel/react';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  const renderer = createDOMRenderer();
  const appElement = render(req.url, renderer);
  const appHtml = ReactDOMServer.renderToString(appElement);
  const styleElements = renderToStyleElements(renderer);
  const stylesHtml = styleElements.map(el => ReactDOMServer.renderToStaticMarkup(el)).join('');
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR App</title>
        <link rel="stylesheet" href="/index.css" />
        ${stylesHtml}
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
