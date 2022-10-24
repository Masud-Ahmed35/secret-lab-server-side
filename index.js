const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7001;

app.use(cors());

const courses = require('./dataSet/courses.json')

app.get('/', (req, res) => {
    res.send('Welcome To My Server....');
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})
