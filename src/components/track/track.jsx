// компонент для трэка

import styles from './track.module.css';
import playlistStyles from '../playlist/playlist.module.css';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import { ReactComponent as Like } from '../../assets/img/icon/like.svg';
import { secondsToTime } from '../../consts/helpers';
import Skeleton from '../skeleton/skeleton';

function Track({ item, loading, setChoosedTrack }) {
  return (
    <div className={`${playlistStyles.track} track`}>
      {loading ? (
        <>
          <div className={styles.title}>
            <Skeleton width="51px" height="51px" />
            <Skeleton width="145px" height="24px" />
          </div>
          <div className={styles.author}>
            <Skeleton width="200px" height="24px" />
          </div>
          <div className={styles.album}>
            <Skeleton width="150px" height="24px" />
          </div>
          <div className={styles.time}>
            <Skeleton width="50px" height="24px" />
          </div>
        </>
      ) : (
        <div
          className={styles.wrapper}
          onClick={() => setChoosedTrack(item.id)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setChoosedTrack(item.id)}
        >
          <div className={styles.title}>
            <div className={styles['title-image']}>
              <svg className={styles['title-svg']} alt="music">
                <Note />
              </svg>
            </div>
            <div className="track__title-text">
              <p className={styles['title-link']}>
                {item.author} <span className={styles['title-span']} />
              </p>
            </div>
          </div>
          <div className={styles.author}>
            <p className={styles['author-link']}>{item.name}</p>
          </div>
          <div className={styles.album}>
            <p className={styles['album-link']}>{item.album}</p>
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
      )}
    </div>
  );
}

export default Track;
