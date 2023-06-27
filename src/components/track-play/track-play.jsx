// блок для проигрывания трэков

import LikeDis from './like-dis/like-dis';
import styles from './track-play.module.css';
import trackPlayStyles from '../player/player.module.css';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import Skeleton from '../skeleton/skeleton';

function TrackPlay({ loading }) {
  return (
    <div className={`${trackPlayStyles['track-play']} track-play`}>
      <div className={styles.contain}>
        {loading ? (
          <>
            <div className={styles.image}>
              <Skeleton width="51px" height="51px" />
            </div>
            <div className={styles.author}>
              <Skeleton width="40px" height="15px" />
            </div>
            <div className={styles.album}>
              <Skeleton width="40px" height="15px" />
            </div>
          </>
        ) : (
          <>
            <div className={styles.image}>
              <svg className={styles.svg} alt="music">
                <Note />
              </svg>
            </div>
            <div className={styles.author}>
              <a className={styles['author-link']} href="http://">
                Ты та...
              </a>
            </div>
            <div className={styles.album}>
              <a className={styles['album-link']} href="http://">
                Баста
              </a>
            </div>
          </>
        )}
      </div>

      <LikeDis />
    </div>
  );
}

export default TrackPlay;
