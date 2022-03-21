const { Router } = require('express')

const router = Router()

const connectApi = require('../controllers/controller-api-connection.js')

router.get('/conferenceregistrants/:conference_id', connectApi.conferenceregistrants)
// webinarid 12312
module.exports = router
