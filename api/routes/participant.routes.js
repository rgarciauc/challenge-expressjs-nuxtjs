const { Router } = require('express')
const pool = require('./../db.js')
const router = Router()
const participantController = require('../controllers/participant.controller')

/** Here I should Include just routes 
 * https://riptutorial.com/node-js/example/32332/model-routes-controllers-services-code-structure
 * Forward request to the controllers
*/

router.post('/create/', participantController.createUser)
router.get('/participants/:id', participantController.getUser) // ok
router.get('/participants', participantController.getUsers) // ok
router.put('/settings/profile', participantController.updateUser)
router.delete('/participant/:id', participantController.deleteUser)

module.exports = router