import { playersIcons } from '../assets/players-icons';

const PlayersBoard = () => {
  return (
    <section className='m-auto grid grid-cols-5'>
      {playersIcons.map((icon, idx) => (
        <div
          className='border-[6px] border-transparent w-[150px] shadow-[inset_1px_2px_15px_16px_#000000]'
          key={idx}
        >
          <div className='w-full h-full'>
            <img
              src={icon}
              alt='player'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlayersBoard;

