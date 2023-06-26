import Player from '../../player/player';
import Volume from '../../volume/volume';
import styles from '../bar.module.css';

function BarContent() {
  return (
    <div className={styles.content}>
      <div className={styles['player-progress']} />
      <div className={styles['player-block']}>
        <Player />
        <Volume />
      </div>
    </div>
  );
}

export default BarContent;
