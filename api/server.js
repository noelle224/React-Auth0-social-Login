const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Helloe from here');
});

app.get('/protected', (req, res) => {
    res.send('Helloe from here but protected');
});

app.listen(4000, () => console.log("server started on 4000"));
