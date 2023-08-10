import { useEffect, useState, useCallback } from 'react';

import PlayerCell from './PlayerCell';
import { playersIcons } from '../assets/players-icons';

const PlayersBoard = () => {
  const gridColumns = 5;
  const totalCells = playersIcons.length;

  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setSelectedPlayerIndex((prevIndex) => {
            const newIndex = prevIndex - gridColumns;
            return newIndex >= 0 ? newIndex : prevIndex;
          });
          break;
        case 'ArrowDown':
          setSelectedPlayerIndex((prevIndex) => {
            const newIndex = prevIndex + gridColumns;
            return newIndex < totalCells ? newIndex : prevIndex;
          });
          break;
        case 'ArrowLeft':
          setSelectedPlayerIndex((prevIndex) => {
            return prevIndex > 0 ? prevIndex - 1 : prevIndex;
          });
          break;
        case 'ArrowRight':
          setSelectedPlayerIndex((prevIndex) => {
            return prevIndex < totalCells - 1 ? prevIndex + 1 : prevIndex;
          });
          break;
        case 'Enter':
          setPlayer(playersIcons[selectedPlayerIndex]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPlayerIndex, totalCells]);

  const onSelectPlayer = useCallback((player) => {
    setSelectedPlayerIndex(player);
  }, []);

  return (
    <div className='mx-auto'>
      <h1 className='uppercase text-6xl font-bold mb-4 text-white tracking-wider text-shadow opacity-90'>
        Select Your Fighter
      </h1>
      <section className='mx-auto grid grid-cols-5'>
        {playersIcons.map((icon, idx) => (
          <PlayerCell
            key={idx}
            idx={idx}
            player={icon}
            isSelected={idx === selectedPlayerIndex}
            onSelect={onSelectPlayer}
          />
        ))}
      </section>
      <h3 className='uppercase text-4xl font-bold mt-4 text-white tracking-wider text-shadow opacity-60'>
        Kombat Zone: Soul Chamber
      </h3>
    </div>
  );
};

export default PlayersBoard;
