/* jshint esversion: 6 */
const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
var path = require('path')

let cacheTime = 1000 * 60 * 60 // 1 hour

if (dev) {
  cacheTime = 100
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: cacheTime
})

app.prepare().then(() => {
  const server = express()
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
  
  server.use(handler).listen(3000)
})

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