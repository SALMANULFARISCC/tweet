const express = require('express')
const { blogPosts } = require('../controllers/userCon')
const { users, tweets } = require('../data');

const router = express.Router()




router
.route('/')
.get((req,res) => {
    return res.render('blogView',{tweets})
})
.post(blogPosts)




module.exports = router