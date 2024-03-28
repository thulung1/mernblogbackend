const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE)
.then(() => console.log("Connected mongo db"))
.catch((e) => console.log(e))