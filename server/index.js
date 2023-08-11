import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*',
  },
});

io.listen(3001);

const players = [];

io.on('connection', (socket) => {
  console.log('connected');

  players.push({
    id: socket.id,
  });

  socket.emit('hello');

  io.emit('players', players);

  // socket.on('message', (message) => {})

  socket.on('disconnect', () => {
    console.log('disconnected');

    players.splice(
      players.findIndex((p) => p.id === socket.id),
      1
    );
    io.emit('players', players);
  });
});
