const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const fs = require('fs')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json({limit: '50mb'}))
  .use(bodyParser.urlencoded({extended: true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/vue', (req, res) => res.sendFile(__dirname + '/yna/dist/index.html'))
  .post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  })
  .post('/signup', (req, res) => {

  })
  .use(serveStatic(__dirname + "/yna/dist"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
