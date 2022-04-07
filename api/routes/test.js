const { Router } = require('express')

const router = Router()

const f1 = (req, res, next ) => {
  req.myvalue ="my value from f1" 
  console.log('inside of f1')
  next()
}
const f2 = (req, res, next ) => { 
  req.mysecondvalue = req.myvalue + "  value from f2"
  console.log('inside of f2')
  next()
}



router.use('/test/md/:id', f1, f2, (req,res) => {
  const val = {
    query: req.query,
    params: req.params
  }
  
  res.send(val)
})

// Test route
router.use('/test', (req, res) => {
  res.end('Text coming from API!')
})

module.exports = router
