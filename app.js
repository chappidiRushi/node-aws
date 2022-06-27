const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!').sendStatus(200))
app.get('/alive', (req, res) => res.send('Yes You are alive').sendStatus(200))
app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
