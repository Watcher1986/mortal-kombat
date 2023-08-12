/* eslint-disable react/prop-types */

const PlayerCell = ({ playerIcon, player, isSelected, onSelect, idx }) => {
  return (
    <div
      className='relative border-[8px] w-[150px] border-transparent shadow-[inset_1px_2px_15px_16px_#000000]'
      onClick={() => onSelect(idx)}
    >
      <div className='w-full h-full'>
        <img
          src={playerIcon}
          alt='player'
          className='w-full h-full object-cover'
        />
      </div>
      {isSelected &&
        (player === 1 ? (
          <div className='absolute top-0 left-0 w-full h-full bg-transparent border-[10px] border-[#4ae819] text-[#4ae819] font-extrabold opacity-90 text-5xl pt-6'>
            1
          </div>
        ) : (
          <div className='absolute top-0 left-0 w-full h-full bg-transparent border-[10px] border-[#e85019] text-[#e85019] font-extrabold opacity-90 text-5xl pt-[70px]'>
            2
          </div>
        ))}
    </div>
  );
};

export default PlayerCell;
