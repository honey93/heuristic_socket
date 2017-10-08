var express = require('express');
var router = express.Router();
var path = require('path');

var io = require('../io');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname  + "/../views/main.html"));
});

router.get('/users', function(req, res, next) {
 // res.sendFile(path.join(__dirname  + "/../views/main.html"));
 console.log("wow");
	io.sockets.emit('new', { hello: 'world' });

io.on('connection', function(socket) {
   console.log('A user connected');
   console.log(socket.id);

   socket.emit('new', { hello: 'world' });
 
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});


res.end("hi");


});

module.exports = router;
