export const getPlayerNum = (sessions, sessionId) => {
  const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
  const player = (sessionIndex + 1) % 2 === 0 ? 2 : 1;

  return player;
};
