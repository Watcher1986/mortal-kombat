import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';

import { sessionAtom } from '../services/socket_service';
import { getPlayerNum } from '../helpers/getPlayerNum';

export const useSession = () => {
  const [sessionConfig] = useAtom(sessionAtom);
  const [sessionId, setSessionId] = useState('');
  const [playerNum, setPlayerNum] = useState(0);

  const { sessions, id } = sessionConfig;

  useEffect(() => {
    if (!sessionId && id) {
      setSessionId(id);

      const player = getPlayerNum(sessions, id);

      setPlayerNum(player);
      sessionStorage.setItem('sessionId', id);
      sessionStorage.setItem('player', player);
      sessionStorage.setItem('rooms', sessions.length);
    }
  }, [id, sessions, sessionId]);

  useEffect(() => {
    const openSessions = sessions?.length;

    if (openSessions === 1 && sessionId) {
      setPlayerNum(openSessions);
      sessionStorage.setItem('player', openSessions);
      sessionStorage.setItem('rooms', openSessions);
    }

    if (openSessions > 1 && sessionId) {
      const player = getPlayerNum(sessions, sessionId);

      setPlayerNum(player);
      sessionStorage.setItem('player', player);
      sessionStorage.setItem('rooms', sessions.length);
    }
  }, [sessions, sessionId]);

  return {
    player: playerNum,
    sessionId: sessionId,
  };
};
