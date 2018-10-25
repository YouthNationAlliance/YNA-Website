const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/vue', (req, res) => res.sendFile(__dirname + '/yna/dist/index.html'))
  .use(serveStatic(__dirname + "/yna/dist"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
