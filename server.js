const express = require('express');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // url coding helps not use incorrect symbols
app.use(express.json()); // will automatically parse json and use in routes
app.use(express.static("public")) // send browsser into public folder as the front end
app.use(require("./routes/api-routes"))
app.use(require("./routes/html-routes"))





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));