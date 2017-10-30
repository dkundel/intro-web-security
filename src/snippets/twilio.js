// Sending an SMS using the Twilio API
// Twilio Credentials
const accountSid = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const authToken = 'your_auth_token';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+16518675309',
    from: '+14158141829',
    body: 'The Force will be with you. Always.'
  })
  .then(message => console.log(message.sid));
