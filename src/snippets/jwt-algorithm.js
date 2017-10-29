const jwt = require('jsonwebtoken');

jwt.verify(token, secret, { algorithms: ['HS256'] }, (err, payload) => {
  if (err) {
    console.log('Invalid token!');
    return;
  }

  console.log('Valid token!');
});
