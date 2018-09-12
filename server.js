/* jshint esversion: 6 */
const express = require('express');
const next = require('next');
const routes = require('./routes');
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({dev: process.env.NODE_ENV !== 'production'});
// const handler = routes.getRequestHandler();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev  });
const handle = app.getRequestHandler();
var path = require('path');
const LRUCache = require('lru-cache');

const ssrCache = new LRUCache({
  maxAge: 1000 * 60 * 60 // 1hour
});
// let cacheTime = 1000 * 60 * 60 // 1 hour
//
// if (dev) {
//   cacheTime = 100
// }
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
  server.disable('x-powered-by')
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ));
  server.use(express.static('static'));

  // express().use(renderAndCache).listen(3000)
  server.use(renderAndCache).listen(3000);
});


function renderAndCache (req, res) {
  if (ssrCache.has(req.url)) {
    return res.send(ssrCache.get(req.url))
  }

  // Match route + parse params
  const {route, params} = routes.match(req.url)
  if (!route) return handle(req, res)

  app.renderToHTML(req, res, route.page, params).then((html) => {
    ssrCache.set(req.url, html)
    res.send(html)
  })
    .catch((err) => {
      app.renderError(err, req, res, route.page, params)
    })
}
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
//  */
// function getCacheKey (req) {
//   return `${req.url}`
// }
//
// function renderAndCache (req, res, pagePath, queryParams) {
//   const key = getCacheKey(req)
//
//   // If we have a page in the cache, let's serve it
//   if (ssrCache.has(key)) {
//     console.log(`CACHE HIT: ${key}`)
//     res.send(ssrCache.get(key))
//     return
//   }
//
//   // If not let's render the page into HTML
//   app
//     .renderToHTML(req, res, pagePath, queryParams)
//     .then(html => {
//       // Let's cache this page
//       console.log(`CACHE MISS: ${key}`)
//       ssrCache.set(key, html)
//
//       res.send(html)
//     })
//     .catch(err => {
//       app.renderError(err, req, res, pagePath, queryParams)
//     })
// }