import { useEffect, useState } from 'react';

export const usePlayerSelect = (players) => {
  const gridColumns = 5;
  const totalCells = players.length;

  const [selectedPlayerIdx, setSelectedPlayerIdx] = useState(0);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setSelectedPlayerIdx((prevIndex) => {
            const newIndex = prevIndex - gridColumns;
            return newIndex >= 0 ? newIndex : prevIndex;
          });
          break;
        case 'ArrowDown':
          setSelectedPlayerIdx((prevIndex) => {
            const newIndex = prevIndex + gridColumns;
            return newIndex < totalCells ? newIndex : prevIndex;
          });
          break;
        case 'ArrowLeft':
          setSelectedPlayerIdx((prevIndex) => {
            return prevIndex > 0 ? prevIndex - 1 : prevIndex;
          });
          break;
        case 'ArrowRight':
          setSelectedPlayerIdx((prevIndex) => {
            return prevIndex < totalCells - 1 ? prevIndex + 1 : prevIndex;
          });
          break;
        case 'Enter':
          setPlayer(players[selectedPlayerIdx]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlayerIdx, totalCells, players]);

  return {
    selectedPlayerIdx,
    setSelectedPlayerIdx,
    player,
    setPlayer,
  };
};
