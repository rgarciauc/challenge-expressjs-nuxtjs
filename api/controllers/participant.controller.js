const axios = require('axios')
const pool = require('./../db.js')
const userService = require('../services/participant.service')
const { randomUUID } = require('crypto')
const { rows } = require('pg/lib/defaults')
/** Read and write data from the DB */

exports.createUser = async function(req, res, next){ 
    let id = randomUUID()
    let created_at= new Date()
    const { first_name, last_name, email, academic_title, gender, status } = req.body
    const sql = `INSERT INTO participants (id, first_name, last_name, email, created_at, academic_title, gender, status) 
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`
    /** TODO:Does the user exist? */
    pool.query(sql, [id, first_name, last_name, email, created_at, academic_title, gender, status], (err, result) => {
        if (err) { throw err }
        res.status(201).send(req.body)
    })
}

exports.getUsers = async function(req, res, next){
    const sql = 'SELECT * FROM participants ORDER BY id ASC'
    pool.query(sql, (err, result) => {
        if (err) { 
            return console.error('Error executing query: ${sql} ', err.stack) 
        }
        if(rows.length != 0){
            res.status(200).json({status:200,data:result.rows, message:'Successfully users retrieved'})
        } else {
            res.json({data: 'No participants found'})
        }
        
    })
}

exports.getUser = async function (req, res, next){
    /** TODO:Find participant */
    /** TODO: If the participant does not exist return 400 otherwise the program crash*/
    /** TODO:Return specific participant */
    const sql = `SELECT * from participants WHERE id = $1`
    try {
        pool.query(sql, [req.params.id], (err, result) => {
            if(Array.isArray(result.rows) & result.rows.length){
                res.status(200).json({status:200, data:result.rows[0], message:'Successfully user retrieved'})
            }
            else{
                res.status(200).json({status:200, message:'User does not exist in our database'})
            }
        })
    } catch (err) {
        console.log('error by querying user ',err)
    }
}

exports.updateUser = async function (req, res, next){
    /** TODO:Find participant */
    /** TODO:Does the participant all the required fields? */
    /** TODO:Update data */
    /** TODO:Return response */
}
exports.deleteUser = async function (req, res, next){
    const participant_id = req.params.id
    const sql ='DELETE FROM participants WHERE id = $1'
    try{
        pool.query(sql, [participant_id], (err, result) => {
            res.status(201).json({ status: 201, data: participant_id, message: `${req.params.id} was deleted` })
        })
    }catch(err){
        console.log('error inside of deleteUser function',err)
    }
 }

 module.exports.conferenceregistrants = async(req, res, next) => {
    // const conference_id = req.params.conference_id
    // const URL = 'https://bigmarker.free.beeceptor.com/conferenceregistrants/' + conference_id
    const URL = 'https://bigmarker.free.beeceptor.com/conferenceregistrants/12312'
    console.log('inside of conference registrants: conference_id URL')
        // webinarid 12312
    const getResponse = await axios.get(URL).then(
        (response) => {
            if(response.statusText == 'OK' && response.data.hasOwnProperty('first_name')){
                res.locals.tmp = response.data
            }
            next()
        }
    ).catch(
        error =>  console.log('Something went wrong in beeceptor API: ' + error)
    )
    next()
}