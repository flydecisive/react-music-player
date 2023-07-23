import Player from '../../player/player';
import Volume from '../../volume/volume';
import styles from '../bar.module.css';

function BarContent({ loading, playTrack }) {
  return (
    <div className={styles.content}>
      <audio controls src={`${playTrack?.track_file}`}>
        <track kind="captions" />
      </audio>
      <div className={styles['player-progress']} />
      <div className={styles['player-block']}>
        <Player loading={loading} playTrack={playTrack} />
        <Volume />
      </div>
    </div>
  );
}

export default BarContent;
