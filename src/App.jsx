import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, currentMove, toggle, changeMove, changeSpeed } = useAnimation();

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} currentMove={currentMove} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        currentMove={currentMove}
        onToggle={toggle}
        onMoveChange={changeMove}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}
