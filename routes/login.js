const express = require('express')
const { login, logout } = require('../controllers/userCon')
const { isLoggedin, ifLoggedin } = require('../middle/users')
const { route } = require('./user')
const router = express.Router()




router
    .route('/login')
    .get(ifLoggedin,(req,res)=>{
        res.render('login')
    })
    .post(login)
router
    .route('/logout')
    .get(logout)

module.exports = router