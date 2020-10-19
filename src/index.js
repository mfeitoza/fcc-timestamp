const express = require('express')
const dotenv = require('dotenv')

const timestamp = require('./timestamp')

const livereload = require('easy-livereload')

dotenv.config()
const app = express()

const PORT = process.env.PORT

if (app.get('env') === 'development') {
    app.use(livereload({
        app: app
    }))
}

app.get('/api/timestamp/:date?', timestamp)

const listener = app.listen(PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})