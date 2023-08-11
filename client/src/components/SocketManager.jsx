import { useAtom, atom } from 'jotai';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001');
export const playersAtom = atom([]);

const SocketManager = () => {
  const [_players, setPlayers] = useAtom(playersAtom);

  useEffect(() => {
    function onConnect() {
      console.log('connected');
    }
    function onDisconnect() {
      console.log('disconnected');
    }
    function onPlayers(player) {
      setPlayers(player);
    }

    socket.on('connection', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('players', onPlayers);

    return () => {
      socket.off('connection', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('players', onPlayers);
    };
  }, []);
};

export default SocketManager;
