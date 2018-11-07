const express = require('express')
const app = express();
const http = require('http').Server(app);
const path = require('path')
const serveStatic = require('serve-static')
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000
const admin = require("firebase-admin");

//firebase
const serviceAccount = require("./public/firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ynalliance-9138b.firebaseio.com"
});
// Get a database reference to our posts
var db = admin.database();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/vue', (req, res) => res.sendFile(__dirname + '/yna/dist/index.html'))
  .use(serveStatic(__dirname + "/yna/dist"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

//Client stuff
var connectCounter = 0
var clients = io.sockets.clients();
function get_clients(io) {
  io.clients((error, clients) => {
    if (error) throw error;
   return clients; // => [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
  });
}

//Listen for connection
io.on('connection', function(socket){
  console.log('A new user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
    connectCounter--;
    console.log("Number of connections: " + connectCounter)
  });

  socket.on('pingServer', function(data){
    console.log(data);
  });
});

io.clients((error, clients) => {
  if (error) throw error;
  console.log(clients); // => [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
});
