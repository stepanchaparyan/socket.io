const socketio = require('socket.io');

const listen = (server) => {
  const io = socketio(server);
  const roomId = '3TsdhF83PS';
  io.on('connect', (socket) => {
    socket.on('join', ({ user }) => {
      socket.join(roomId);
      socket.to(roomId).emit('userJoined', user);
    });
    socket.on('leaveChat', ({ user }) => {
      socket.leave(roomId);
      socket.to(roomId).emit('leaveChat', user);
    });
    socket.on('sendMessage', ({ message }) => {
      socket.to(roomId).emit('messageReceived', message);
    });
  });      
};

module.exports.listen = listen;
