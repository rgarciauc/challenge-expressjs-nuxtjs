const express = require('express')
const app = express()
const morgan = require('morgan')
const morganBody = require('morgan-body')

const participants = require('./routes/participant.routes')
const test = require('./routes/test.routes')
//const apis = require('./routes/apis')

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded())
    // in latest body-parser use like below.
app.use(express.urlencoded({ extended: true }))
morganBody(app)
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