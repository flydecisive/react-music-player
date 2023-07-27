// Компонент для регулировки громкости

import styles from './volume.module.css';
import { ReactComponent as VolumeSvg } from '../../assets/img/icon/volume.svg';
import barStyles from '../bar/bar.module.css';

function Volume({ setVolume }) {
  return (
    <div className={`${barStyles['volume-block']} volume`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <svg className={styles.svg} alt="volume">
            <VolumeSvg />
          </svg>
        </div>
        <div className={`${styles.progress} _btn`}>
          <input
            className={`${styles['progress-line']} _btn`}
            type="range"
            name="range"
            onChange={(e) => {
              setVolume(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Volume;
