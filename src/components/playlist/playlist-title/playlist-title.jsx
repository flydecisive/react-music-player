import styles from './playlist-title.module.css';
import contentStyles from '../../centerblock/centerblock-content/content.module.css';
import { ReactComponent as Watch } from '../../../assets/img/icon/watch.svg';

function PlaylistTitle() {
  return (
    <div className={`${contentStyles.title} playlist-title`}>
      <div className={`${styles.col} col01`}>Трек</div>
      <div className={`${styles.col} col02`}>ИСПОЛНИТЕЛЬ</div>
      <div className={`${styles.col} col03`}>АЛЬБОМ</div>
      <div className={`${styles.col} col04`}>
        <svg className={styles.svg} alt="time">
          <Watch />
        </svg>
      </div>
    </div>
  );
}

export default PlaylistTitle;
