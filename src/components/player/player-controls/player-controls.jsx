import { ReactComponent as Prev } from '../../../assets/img/icon/prev.svg';
import { ReactComponent as Play } from '../../../assets/img/icon/play.svg';
import { ReactComponent as Next } from '../../../assets/img/icon/next.svg';
import { ReactComponent as Repeat } from '../../../assets/img/icon/repeat.svg';
import { ReactComponent as Shuffle } from '../../../assets/img/icon/shuffle.svg';
import styles from '../player.module.css';

function PlayerControls() {
  return (
    <div className={styles.controls}>
      <div className={styles['btn-prev']}>
        <svg className={styles['btn-prev-svg']} alt="prev">
          <Prev />
        </svg>
      </div>
      <div className={`${styles['btn-play']} _btn`}>
        <svg className={styles['btn-play-svg']} alt="play">
          <Play />
        </svg>
      </div>
      <div className={styles['btn-next']}>
        <svg className={styles['btn-next-svg']} alt="next">
          <Next />
        </svg>
      </div>
      <div className={`${styles['btn-repeat']} _btn-icon`}>
        <svg className={styles['btn-repeat-svg']} alt="repeat">
          <Repeat />
        </svg>
      </div>
      <div className={`${styles['btn-shuffle']} _btn-icon`}>
        <svg className={styles['btn-shuffle-svg']} alt="shuffle">
          <Shuffle />
        </svg>
      </div>
    </div>
  );
}

export default PlayerControls;
