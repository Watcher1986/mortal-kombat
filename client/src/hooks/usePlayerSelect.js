import { useEffect, useState } from 'react';

export const usePlayerSelect = (fighters, playerNum) => {
  const gridColumns = 5;
  const totalCells = fighters.length;

  const [selectedPlayerIdx, setSelectedPlayerIdx] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (playerNum && selectedPlayerIdx === null) {
      const initialPlayerIdx = playerNum % 2 === 0 ? 4 : 0;
      setSelectedPlayerIdx(initialPlayerIdx);
    }
  }, [playerNum]);

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
          setPlayer(fighters[selectedPlayerIdx]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlayerIdx, totalCells, fighters]);

  return {
    selectedPlayerIdx,
    setSelectedPlayerIdx,
    player,
    setPlayer,
  };
};
