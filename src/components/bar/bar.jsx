import BarContent from './bar-content/bar-content';
import './bar.module.css';

function Bar({ loading, barVisible, playTrack }) {
  return (
    <div className={`bar ${barVisible ? 'visible' : 'not-visible'}`}>
      <BarContent loading={loading} playTrack={playTrack} />
    </div>
  );
}

export default Bar;
