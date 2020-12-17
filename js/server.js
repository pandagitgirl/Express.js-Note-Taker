// Dependencies 
const express = require('express');
const apiRoutes = require('../routes/apiRoutes');
const htmlRoutes = require('../routes/htmlRoutes');

// gateway that will be listened to for connection requests
const app = express();
const PORT = process.env.PORT || 8080;


// Express app to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../public"));
app.use('api', apiRoutes);
app.use('/', htmlRoutes);


// require("../routes/apiRoutes")(app);
// require("../routes/htmlRoutes")(app);


// Starts our server
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});