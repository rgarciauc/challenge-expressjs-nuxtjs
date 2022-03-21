const axios = require('axios')

module.exports.conferenceregistrants = async(req, res, next) => {
    try {
        // const conference_id = req.params.conference_id
        // const URL = 'https://bigmarker.free.beeceptor.com/conferenceregistrants/' + conference_id
        const URL = 'https://bigmarker.free.beeceptor.com/conferenceregistrants/12312'
        console.log('inside of conference registrants: conference_id URL')
            // webinarid 12312
        const getResponse = await axios.get(URL)
        res.locals.getresponse = getResponse.data
        console.log(getResponse.data)
        next()
    } catch (error) {
        console.error(error)
    }
}