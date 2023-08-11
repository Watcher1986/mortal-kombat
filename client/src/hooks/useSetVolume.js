import { useEffect } from 'react';

export const useSetVolume = (id) => {
  console.log(id);
  useEffect(() => {
    console.log(id);

    const audio = document.getElementById(id);
    audio.volume = 0.3;
  }, [id]);
};
