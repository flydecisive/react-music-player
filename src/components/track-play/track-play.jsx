/* eslint-disable no-return-await */
/* eslint-disable import/no-extraneous-dependencies */
// блок для проигрывания трэков

import LikeDis from './like-dis/like-dis';
import styles from './track-play.module.css';
import trackPlayStyles from '../player/player.module.css';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import Skeleton from '../skeleton/skeleton';
import { addTrackInFavorites } from '../../api';
import { useTokenContext } from '../../contexts/token';
// import { useAddFavoritesTracksMutation } from '../../services/tracks';

function TrackPlay({ loading, playTrack }) {
  const { token } = useTokenContext();

  // const { data } = useAddFavoritesTracksMutation(token.access, playTrack.id);
  // console.log(data);

  const toggleLike = () => {
    addTrackInFavorites(token.access, playTrack.id);
  };

  const toggleDislike = () => {};
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
                {playTrack?.name}
              </a>
            </div>
            <div className={styles.album}>
              <a className={styles['album-link']} href="http://">
                {playTrack?.author}
              </a>
            </div>
          </>
        )}
      </div>

      <LikeDis toggleLike={toggleLike} toggleDislike={toggleDislike} />
    </div>
  );
}

export default TrackPlay;
