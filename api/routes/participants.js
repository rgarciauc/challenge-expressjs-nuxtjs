const { Router } = require('express')

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
router.get('/participants', connectApi.conferenceregistrants, function (req, res, next) {
  // it is also posible to send the data either from BIGMARKER.FREE.BEECEPTOR API or from the participants object
  const getresponse = res.locals.getresponse
  res.json(getresponse)
})

/* GET participants by ID. */
router.get('/participants/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < participants.length) {
    res.json(participants[id])
  } else {
    res.sendStatus(404)
  }
})
/* POST new participant. */
router.post('/participants/newparticipant', function (req, res) {
  const obj = JSON.parse(JSON.stringify(req.body))
  console.log(obj)
  res.send(obj)
})

module.exports = router
