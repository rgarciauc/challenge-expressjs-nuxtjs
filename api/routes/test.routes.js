const { Router } = require('express')

const router = Router()

router.use('/test', (req, res) => {
  res.end('Text coming from API!')
})

module.exports = router
