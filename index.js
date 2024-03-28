const express = require('express');
const cors = require('cors');
const blogRouter = require('./route/blogRoute');

require('./db')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter)

app.listen(port, (req, res) => {
    console.log(`Website is hosted on port ${port}`);
})