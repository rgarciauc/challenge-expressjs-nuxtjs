const { Router } = require('express')
const pool = require('./../db.js')
const router = Router()
const connectApi = require('../controllers/controller-api-connection.js')

// Mock Participants second approach
const participants = [{
        first_name: 'Franzi',
        last_name: 'Tester',
        email: 'franzi@email.de',
        created_at: '2021-12-03T01:34:06Z',
        academic_title: 'Prof.',
        gender: 'female',
        status: 'CANCELLED'
    },
    {
        first_name: 'Peter',
        last_name: 'Tester',
        email: 'peter@email.de',
        created_at: '2021-12-02T05:34:06Z',
        academic_title: '',
        gender: 'male',
        status: 'CONFIRMED'
    },
    {
        first_name: 'Heike',
        last_name: 'Tester',
        email: 'heike@email',
        created_at: '2021-12-01T11:34:06Z',
        academic_title: 'Dr.',
        gender: 'female',
        status: 'CANCELLED'
    }
]

/* GET participants listing. */
router.get('/participants', connectApi.conferenceregistrants, function(req, res, next) {
    // it is also posible to send the data either from BIGMARKER.FREE.BEECEPTOR API or from the participants object
    const getresponse = res.locals.getresponse
    if (getresponse == '') {
        res.status(200).json(participants)
    } else {
        res.status(200).json(getresponse)
    }
})

/* GET participants by ID. */
router.get('/participants/:id', function(req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < participants.length) {
        res.json(participants[id])
    } else {
        res.sendStatus(404)
    }
})

router.get('/participantsdb', function(req, res, next) {
        const sql = 'SELECT * FROM participants ORDER BY id ASC'
        pool.query(sql, (err, result) => {
            if (err) { return console.error('Error executing query', err.stack) }
            res.status(200).json(result.rows)
        })
    })
    /* /users/:id */
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

/* POST new participant. */
router.post('/participants/newparticipant', function(req, res) {
    const { first_name, last_name, email, created_at, academic_title, gender, status } = req.body
    const sql = 'INSERT INTO participants (first_name, last_name, email, created_at, academic_title, gender, status) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *'
    pool.query(sql, [first_name, last_name, email, created_at, academic_title, gender, status], (err, result) => {
        if (err) { throw err }
        res.status(201).send(req.body)
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