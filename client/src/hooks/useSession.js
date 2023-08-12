import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';

import { sessionAtom } from '../components/SocketManager';

export const useSession = () => {
  const [sessionConfig] = useAtom(sessionAtom);
  const [sessionId, setSessionId] = useState('');
  const [playerNum, setPlayerNum] = useState(0);

  const playerFromSessionStorage = sessionStorage.getItem('player');
  const sesssionIdFromSessionStorage = sessionStorage.getItem('sessionId');

  useEffect(() => {
    if (!sessionId && sessionConfig.id && !playerFromSessionStorage) {
      const { sessions, id } = sessionConfig;
      setSessionId(id);

      const sessionIndex = sessions.findIndex((s) => s.id === id);
      const player = (sessionIndex + 1) % 2 === 0 ? 2 : 1;

      setPlayerNum(player);
      sessionStorage.setItem('sessionId', id);
      sessionStorage.setItem('player', +player);
      sessionStorage.setItem('rooms', sessions.length);
    }
  }, [sessionConfig, sessionId, playerFromSessionStorage]);

  return {
    player: playerFromSessionStorage ?? playerNum,
    sessionId: sesssionIdFromSessionStorage ?? sessionId,
  };
};
