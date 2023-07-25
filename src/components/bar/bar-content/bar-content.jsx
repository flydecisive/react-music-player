import { useState } from 'react';
import { secondsToTime } from '../../../consts/helpers';

import Player from '../../player/player';
import Volume from '../../volume/volume';
import ProgressBar from '../../progress-bar/progress-bar';
import styles from '../bar.module.css';

function BarContent({ loading, playTrack }) {
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [data, setData] = useState(0);

  return (
    <div className={styles.content}>
      <p className={styles['time-duration']}>
        {`${secondsToTime(Math.floor(currentTime))} / ${secondsToTime(
          Math.floor(duration)
        )}`}
      </p>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setCurrentTime}
        setData={setData}
      />

      <div className={styles['player-block']}>
        <Player
          loading={loading}
          playTrack={playTrack}
          volume={volume}
          setCurrentTime={setCurrentTime}
          setDuration={setDuration}
          data={data}
          setData={setData}
        />

        <Volume setVolume={setVolume} />
      </div>
    </div>
  );
}

export default BarContent;
