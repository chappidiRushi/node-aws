const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendStatus(200).send('Hello World!'))
app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
