const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'www')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});
app.listen(port, () => console.log("Listening on Port", port)) 