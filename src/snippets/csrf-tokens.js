const csrf = require('csurf')({ cookie: true });

app.get('/post', csrf, (req, res, next) => {
  // pass csrf to front-end via _csrf cookie or 
  // req.csrfToken() in template
});

app.post('/post', csrf, (req, res, next) => {
  // only valid if one of these is the same as the cookie:
  // req.body._csrf
  // req.query._csrf
  // req.headers['csrf-token']
  // req.headers['xsrf-token']
  // req.headers['x-csrf-token']
  // req.headers['x-xsrf-token']
});