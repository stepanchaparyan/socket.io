const socketio = require('socket.io');

const listen = (server) => {
  const io = socketio(server);
  const roomId = '3TsdhF83PS';
  io.on('connect', (socket) => {
    console.log('User connected');
    socket.on('join', ({ user }) => {
      console.log('user joined to the room', user);
      socket.join(roomId);
      socket.to(roomId).emit('userJoined', user);
    });
    socket.on('leaveChat', ({ user }) => {
      console.log('user left');
      socket.leave(roomId);
      socket.to(roomId).emit('user left room', user);
    });
    socket.on('sendMessage', ({ message }) => {
      console.log('send message created', message);
      socket.to(roomId).emit('messageReceived', message);
    });
  });      
};

module.exports.listen = listen;
