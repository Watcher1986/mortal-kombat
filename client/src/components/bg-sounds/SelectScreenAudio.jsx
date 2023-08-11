import { useSetVolume } from '../../hooks/useSetVolume';

const SelectScreenAudio = () => {
  useSetVolume('select-board');

  return (
    <audio
      src='/select_screen.m4a'
      allow='autoplay'
      loop
      autoPlay
      className='hidden'
      id='select-board'
    />
  );
};

export default SelectScreenAudio;
