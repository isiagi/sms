require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "one love",
    from: "+18054643607",
    to: process.env.PHONE_NUMBER,
  })
  .then((message) => console.log(message.sid));
