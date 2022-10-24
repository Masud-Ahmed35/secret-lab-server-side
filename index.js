const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Helloooo...... Server');
})

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})
