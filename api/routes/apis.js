const { Router } = require('express')

const router = Router()

const connectApi = require('../controllers/participant.controller')

router.get('/conferenceregistrants/:conference_id', connectApi.conferenceregistrants)

module.exports = router
