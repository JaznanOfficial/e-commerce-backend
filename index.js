const express = require('express')
const app = express()
const env = require('dotenv')
env.config()
const port = process.env.PORT || 5000


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(` app listening on port ${port}!`))
