// компонент для трэка

import styles from './track.module.css';
import playlistStyles from '../playlist/playlist.module.css';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import { ReactComponent as Like } from '../../assets/img/icon/like.svg';
import secondsToTime from '../../consts/sec-to-time';

function Track({ item }) {
  return (
    <div className={`${playlistStyles.track} track`}>
      <div className={styles.title}>
        <div className={styles['title-image']}>
          <svg className={styles['title-svg']} alt="music">
            <Note />
          </svg>
        </div>
        <div className="track__title-text">
          <a className={styles['title-link']} href="http://">
            {item.author} <span className={styles['title-span']} />
          </a>
        </div>
      </div>
      <div className={styles.author}>
        <a className={styles['author-link']} href="http://">
          {item.name}
        </a>
      </div>
      <div className={styles.album}>
        <a className={styles['album-link']} href="http://">
          {item.album}
        </a>
      </div>
      <div className={styles.time}>
        <svg className={styles['time-svg']} alt="time">
          <Like />
        </svg>
        <span className={styles['time-text']}>
          {secondsToTime(item.duration_in_seconds)}
        </span>
      </div>
    </div>
  );
}

export default Track;
