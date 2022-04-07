const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const participants = require('./routes/participant.routes')
const test = require('./routes/test')
//const apis = require('./routes/apis')

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
    // in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }))

// Import API Routes
app.use(participants)
app.use(test)
//app.use(apis)

app.use(express.static('../public'))
    // Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`)
    })
}