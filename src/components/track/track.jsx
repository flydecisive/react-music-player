/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
// компонент для трэка
import { useDispatch, useSelector } from 'react-redux';
import styles from './track.module.css';
import { ReactComponent as Note } from '../../assets/img/icon/note.svg';
import { ReactComponent as Like } from '../../assets/img/icon/like.svg';
import { secondsToTime } from '../../consts/helpers';
import Skeleton from '../skeleton/skeleton';
import Dot from '../dot/dot';
import { useIsPlayingContext } from '../../contexts/isPlaying';
import { setPlayTrack } from '../../store/actions/creators/tracks';

function Track({ item, loading, toggleLike, id, likesState, setTrackClick }) {
  const dispatch = useDispatch();
  const playedTrack = useSelector((store) => store.tracks.playTrack);
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext();
  const isLike = likesState[id];

  return (
    <div className="track">
      {loading ? (
        <div className={styles.wrapper}>
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
        </div>
      ) : (
        <div
          className={styles.wrapper}
          onClick={() => {
            dispatch(setPlayTrack(item));
            toggleIsPlaying(true);
            setTrackClick(true);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            dispatch(setPlayTrack(item));
            toggleIsPlaying(true);
            setTrackClick(true);
          }}
        >
          <div className={styles.title}>
            <div className={styles['title-image']}>
              {playedTrack && playedTrack.id === item.id ? (
                <Dot isPlaying={isPlaying} />
              ) : (
                <svg className={styles['title-svg']} alt="music">
                  <Note />
                </svg>
              )}
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
          <div
            className={styles.time}
            id={id}
            onClick={(event) => toggleLike(event)}
          >
            <svg className={styles['like-svg']} alt="like">
              <Like
                fill={isLike ? '#ad61ff' : 'transparent'}
                stroke={isLike ? '#ad61ff' : '#696969'}
              />
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
