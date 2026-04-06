import '../styles/controls.css';

const MOVES = [
  { id: 'dance', label: '댄스', emoji: '💃' },
  { id: 'jump', label: '점프', emoji: '🐱' },
  { id: 'spin', label: '회전', emoji: '🌀' },
  { id: 'wiggle', label: '흔들기', emoji: '🎵' },
];

const SPEEDS = [
  { value: 0.5, label: '느리게' },
  { value: 1, label: '보통' },
  { value: 2, label: '빠르게' },
];

export default function AnimationControls({ isPlaying, speed, currentMove, onToggle, onMoveChange, onSpeedChange }) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="move-selector" role="group" aria-label="춤 동작 선택">
        {MOVES.map((move) => (
          <button
            key={move.id}
            className={`btn-move ${currentMove === move.id ? 'active' : ''}`}
            onClick={() => onMoveChange(move.id)}
            aria-pressed={currentMove === move.id}
          >
            {move.emoji} {move.label}
          </button>
        ))}
      </div>

      <div className="speed-selector" role="group" aria-label="속도 선택">
        <span className="speed-label">속도:</span>
        {SPEEDS.map((s) => (
          <button
            key={s.value}
            className={`btn-speed ${speed === s.value ? 'active' : ''}`}
            onClick={() => onSpeedChange(s.value)}
            aria-pressed={speed === s.value}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
