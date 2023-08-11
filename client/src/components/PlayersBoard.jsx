import { useCallback } from 'react';
import { useAtom } from 'jotai';

import { playersAtom } from './SocketManager';
import { usePlayerSelect } from '../hooks/usePlayerSelect';
import PlayerCell from './PlayerCell';
import SelectScreenAudio from './bg-sounds/SelectScreenAudio';

import { playersIcons } from '../assets/images/players-icons';

const PlayersBoard = () => {
  const [players] = useAtom(playersAtom);
  const { selectedPlayerIdx, setSelectedPlayerIdx, player } =
    usePlayerSelect(playersIcons);

  console.log(players);

  const onSelectPlayer = useCallback(
    (player) => {
      setSelectedPlayerIdx(player);
    },
    [setSelectedPlayerIdx]
  );

  return (
    <>
      <SelectScreenAudio />
      <div className='mx-auto'>
        <h1 className='uppercase text-6xl font-bold mb-4 text-white tracking-wider text-shadow opacity-90'>
          Select Your Fighter
        </h1>
        <section className='mx-auto grid grid-cols-5'>
          {playersIcons.map((icon, idx) => (
            <PlayerCell
              key={`${icon}-${idx}`}
              idx={idx}
              player={icon}
              isSelected={idx === selectedPlayerIdx}
              onSelect={onSelectPlayer}
            />
          ))}
        </section>
        <h3 className='uppercase text-4xl font-bold mt-4 text-white tracking-wider text-shadow opacity-60'>
          Kombat Zone: Soul Chamber
        </h3>
      </div>
    </>
  );
};

export default PlayersBoard;
