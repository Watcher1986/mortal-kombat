import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: '*',
  },
});

io.listen(3001);

const sessions = [];

io.on('connection', (socket) => {
  console.log('connected');

  sessions.push({
    id: socket.id,
  });

  socket.emit('hello');

  io.emit('sessions', {
    sessions,
    id: socket.id,
  });

  socket.on('disconnect', () => {
    console.log('disconnected');

    sessions.splice(
      sessions.findIndex((p) => p.id === socket.id),
      1
    );
    io.emit('sessions', sessions);
  });
});
