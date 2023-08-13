import { useSetVolume } from '../../hooks/useSetVolume';

const SelectScreenAudio = () => {
  const audioRef = useSetVolume('select-board');

  return (
    <audio
      src='/select_screen.m4a'
      allow='autoplay'
      loop
      autoPlay
      className='hidden'
      id='select-board'
      ref={audioRef}
    />
  );
};

export default SelectScreenAudio;
