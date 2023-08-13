import { useEffect } from 'react';
import { useAtom, atom } from 'jotai';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001');
export const sessionAtom = atom({
  sessions: [],
  id: '',
});

const SocketManager = () => {
  // eslint-disable-next-line no-unused-vars
  const [_sessionConfig, setSession] = useAtom(sessionAtom);

  useEffect(() => {
    function onConnect() {
      console.log('The client has been connected');
    }
    function onDisconnect() {
      console.log('The client has been disconnected');
    }
    function onSession(session) {
      setSession(session);
    }

    socket.on('connection', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('sessions', onSession);

    return () => {
      socket.off('connection', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('sessions', onSession);
    };
  }, []);
};

export default SocketManager;
