const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

const Connection = require('./database/db');
const Routes =require('./routes/route');

Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Routes);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});