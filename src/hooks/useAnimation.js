import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [currentMove, setCurrentMove] = useState('dance');

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const changeMove = useCallback((move) => {
    setCurrentMove(move);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return { isPlaying, speed, currentMove, toggle, changeMove, changeSpeed };
}
