const { Router } = require('express')
const pool = require('./../db.js')
const router = Router()
const participantController = require('../controllers/participant.controller')

/** Here I should Include just routes 
 * https://riptutorial.com/node-js/example/32332/model-routes-controllers-services-code-structure
 * Forward request to the controllers
*/

router.post('/create/', participantController.createUser)
router.get('/participants/:id', participantController.getUser)
router.get('/participants', participantController.getUsers)
router.put('/participants/:id', participantController.updateUser)
router.delete('/participant/:id', participantController.deleteUser)

router.get('/participantsdb/:id', function(req, res, next) {
    const id = parseInt(req.params.id)
    const sql = 'SELECT * FROM participants WHERE id = $1'
    pool.query(sql, [id], (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).json(result.rows)
    })
})

/** put */
router.put('/participantsupdate/:id', function(req, res) {
    const id = parseInt(req.params.id)
    const { first_name, email } = req.body
    const sql = 'UPDATE participants SET first_name = $1, email = $2 WHERE id = $3'
    pool.query(sql, [first_name, email, id], (err, result) => {
        if (err) {
            throw err
        }
        res.status(200).send(`User modified with ID: ${id}`)
    })
})

/** https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/ */

module.exports = router