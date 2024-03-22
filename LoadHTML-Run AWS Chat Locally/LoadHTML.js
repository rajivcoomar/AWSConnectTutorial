const express = require("express");
const app = express();

const jwt = require('jsonwebtoken');
const { DateTime } = require('luxon');



app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');


app.get("/test", (request, response) => {
	  response.render('test.html');
});

const widgetId = ''; // Replace with your widget id
const CONNECT_SECRET = ''; // Replace with your secret

app.get('/token', (request, response) => {
  const JWT_EXP_DELTA_SECONDS = 3600; // expiration time in seconds

  const payload = {
    sub: widgetId,
    iat: Math.floor(DateTime.utc().toSeconds()), // current time in seconds
    exp: Math.floor(DateTime.utc().plus({ seconds: JWT_EXP_DELTA_SECONDS }).toSeconds()) // expiration time in seconds
  };

  const header = {
    typ: "JWT",
    alg: 'HS256'
  };

  const encoded_token = jwt.sign(payload, CONNECT_SECRET, { algorithm: 'HS256', header });

  response.json({ token: encoded_token });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



var port = process.env.PORT || 3000; 
const listener = app.listen(port, () => {
 console.log("Your app is listening on port " + listener.address().port);
});
 