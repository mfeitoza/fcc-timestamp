const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');

const nowHandler = require ('./nowHandler')
const dateHandler = require('./dateHandler')

const livereload = require('easy-livereload')

dotenv.config()
const app = express()


app.use(cors({optionsSuccessStatus: 200}))

const PORT = process.env.PORT

if (app.get('env') === 'development') {
    app.use(livereload({
        app: app
    }))
}

app.get('/api/timestamp', nowHandler)
app.get('/api/timestamp/:date?', dateHandler)

const listener = app.listen(PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})