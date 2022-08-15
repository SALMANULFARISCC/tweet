
const e = require('express');
const express = require('express');
const { users, tweets,likes } = require('../data');
const cookieToken = require('../utils/cookieToken');
const app = express()
app.set('view engine', 'ejs');


exports.login = (req,res) => {
    const {userName,password} = req.body
    let user = users.find((x)=> x.userName == userName)
    if(!user){
        return res.redirect('/login')
    }
    if(!user.password == password){
        return res.redirect('/login')
    }
    cookieToken(user,res)
    res.render('login')

}


exports.logout = async (req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).redirect('/login')
}

exports.userPostCreate = (req,res) => {
    const token = req.cookies.token.user
    const {tweet} = req.body
    console.log(token)
    tweets.push({userName:token,tweet:tweet,likes:[]})
    console.log(likes)
    res.redirect('/posts')
}

exports.blogPosts = (req,res) => {
    const token = req.cookies.token.user
    const {like} = req.body
    
    const i = tweets.findIndex((x) => x.tweet == like)
    // let t = tweets[i].likes.findindex((x)=> x == token)
    let t = tweets[i].likes.indexOf(token)
    let element = tweets[i].likes.filter((item, index)=> 
    { return item == token; });
    if(element == ""){
        tweets[i].likes = [...tweets[i].likes,token]
    }
    else{
        tweets[i].likes.splice(t,1)
    }

    console.log(tweets)
    console.log(t)
    console.log(tweets[i].likes.length)
    console.log()
    res.render('blogView',{tweets})
}
