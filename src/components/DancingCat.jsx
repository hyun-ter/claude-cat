import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed, currentMove }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  };

  return (
    <div className="cat-stage">
      <div
        className={`cat-wrapper cat-${currentMove}`}
        style={animationStyle}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img src={catSvg} alt="고양이" className="cat-image" />
      </div>
      {isPlaying && (
        <div className="music-notes" aria-hidden="true">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♩</span>
          <span className="note note-4">♬</span>
        </div>
      )}
    </div>
  );
}
