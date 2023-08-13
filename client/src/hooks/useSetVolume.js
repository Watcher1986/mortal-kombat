import { useEffect, useRef } from 'react';

export const useSetVolume = (id) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = document.getElementById(id);
    audioRef.current = audio;
    audioRef.current.volume = 0.3;
  }, [id]);

  return audioRef;
};
