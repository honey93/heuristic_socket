var io = require('socket.io')();

io.on('connection', function(socket) {
   console.log('A user connected');
   console.log(socket.id);

   socket.emit('news', { hello: 'world' });
   socket.emit('new', { hello: 'world' });


   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});


module.exports = io;