/* jshint esversion: 6 */
const express = require('express');
const next = require('next');
const routes = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
//
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dir: '.', dev  });
// const handle = app.getRequestHandler();
// const LRUCache = require('lru-cache');

// const ssrCache = new LRUCache({
//   maxAge: 1000 * 60 * 60 // 1hour
// });

app.prepare().then(() => {
  const server = express();
  // server.use(favicon(path.join(__dirname, "static", "fav9houz.ico")));
  const faviconOptions = {
    root: __dirname + '/static/'
  };
  server.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', faviconOptions)
  ));
  const options = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ));
  server.use(express.static('static'));
  server.disable('x-powered-by');

  server.on('connection', function(socket) {
    console.log("A new connection was made by a client.");
    socket.setTimeout(30 * 1000);
    // 30 second timeout. Change this as you see fit.
  })
  server.use(handler).listen(3000);
});


// function renderAndCache (req, res) {
//   if (ssrCache.has(req.url)) {
//     return res.send(ssrCache.get(req.url))
//   }
//
//   // Match route + parse params
//   const {route, params} = routes.match(req.url)
//   if (!route) return handle(req, res)
//
//   app.renderToHTML(req, res, route.page, params).then((html) => {
//     ssrCache.set(req.url, html)
//     res.send(html)
//   })
//     .catch((err) => {
//       app.renderError(err, req, res, route.page, params)
//     })
// }
