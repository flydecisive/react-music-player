import { useState } from 'react';

import Player from '../../player/player';
import Volume from '../../volume/volume';
import styles from '../bar.module.css';

function BarContent({ loading, playTrack }) {
  const [volume, setVolume] = useState(50);

  return (
    <div className={styles.content}>
      <p className={styles['time-duration']}>
        {`${0} / ${playTrack?.duration_in_seconds}`}
      </p>
      <input type="range" />
      <div className={styles['player-block']}>
        <Player loading={loading} playTrack={playTrack} volume={volume} />
        <Volume setVolume={setVolume} />
      </div>
    </div>
  );
}

export default BarContent;
