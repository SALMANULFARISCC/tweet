const express = require('express')
const { userPostCreate } = require('../controllers/userCon')
const { tweets } = require('../data')
const { ifLoggedin } = require('../middle/users')
const router = express.Router()

router
    .route('/create')
    .get((req,res)=>{
        return res.render('blogCreate')
    })
    .post(userPostCreate)
    console.log(tweets)

module.exports = router