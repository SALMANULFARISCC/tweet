const express = require('express')
const { login } = require('./controllers/userCon')
const app = express()
const cookieParser=require('cookie-parser')

const router = express.Router()
app.use(express.static('static'))


app.use(express.static('static'))
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })) 



const user = require('./routes/user')
const loginPage = require('./routes/login')
const posts = require('./routes/posts')

app.use('/user',user)
app.use('/',loginPage)
app.use('/posts',posts)

app.get('*', (req, res) => {render
    res.send('salman')
  })



app.listen(8000)