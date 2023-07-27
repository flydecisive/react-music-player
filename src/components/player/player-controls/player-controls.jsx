/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactComponent as Prev } from '../../../assets/img/icon/prev.svg';
import { ReactComponent as Play } from '../../../assets/img/icon/play.svg';
import { ReactComponent as Next } from '../../../assets/img/icon/next.svg';
import { ReactComponent as Repeat } from '../../../assets/img/icon/repeat.svg';
import { ReactComponent as Shuffle } from '../../../assets/img/icon/shuffle.svg';
import { ReactComponent as Pause } from '../../../assets/img/icon/pause.svg';
import styles from '../player.module.css';

function PlayerControls({
  isPlaying,
  togglePlay,
  handleRepeat,
  loopClick,
  notImplementedButton,
}) {
  return (
    <div className={styles.controls}>
      <div
        className={`${styles['btn-prev']} _btn-icon`}
        onClick={notImplementedButton}
        role="button"
        tabIndex={0}
      >
        <svg className={styles['btn-prev-svg']} alt="prev">
          <Prev />
        </svg>
      </div>
      <div
        className={`${styles['btn-play']} _btn-icon`}
        onClick={togglePlay}
        tabIndex={0}
        role="button"
      >
        {isPlaying ? (
          <svg className={styles['btn-play-svg']} alt="play">
            <Pause />
          </svg>
        ) : (
          <svg className={styles['btn-play-svg']} alt="play">
            <Play />
          </svg>
        )}
      </div>
      <div
        className={`${styles['btn-next']} _btn-icon`}
        onClick={notImplementedButton}
        role="button"
        tabIndex={0}
      >
        <svg className={styles['btn-next-svg']} alt="next">
          <Next />
        </svg>
      </div>
      <div
        className={`${styles['btn-repeat']} _btn-icon`}
        onClick={handleRepeat}
        role="button"
        tabIndex={0}
      >
        <svg className={styles['btn-repeat-svg']} alt="repeat">
          <Repeat
            fill={loopClick ? '#fff' : '#696969'}
            stroke={loopClick ? '#fff' : '#696969'}
          />
        </svg>
      </div>
      <div
        className={`${styles['btn-shuffle']} _btn-icon`}
        onClick={notImplementedButton}
        role="button"
        tabIndex={0}
      >
        <svg className={styles['btn-shuffle-svg']} alt="shuffle">
          <Shuffle />
        </svg>
      </div>
    </div>
  );
}

export default PlayerControls;
