/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// иконки лайка и дизлайка

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './like-dis.module.css';
import { ReactComponent as Like } from '../../../assets/img/icon/like.svg';
import { ReactComponent as Dislike } from '../../../assets/img/icon/dislike.svg';
import { setLikesState } from '../../../store/actions/creators/tracks';
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from '../../../services/tracks';
import { useTokenContext } from '../../../contexts/token';

function LikeDis({ id }) {
  const [likeButtonState, setLikeButtonState] = useState();
  const likesState = useSelector((store) => store.tracks.likesState);
  const [dislikeTrigger] = useDislikeTrackMutation();
  const [likeTrigger] = useLikeTrackMutation();
  const dispatch = useDispatch();
  const { token } = useTokenContext();

  const toggleDislike = () => {
    setLikeButtonState(false);
    const newLikesState = { ...likesState };
    const { access } = token;
    const args = { id, token: access };
    newLikesState[id] = false;
    dispatch(setLikesState(newLikesState));
    dislikeTrigger(args);
  };

  const toggleLike = () => {
    setLikeButtonState(true);
    const newLikesState = { ...likesState };
    const { access } = token;
    const args = { id, token: access };
    newLikesState[id] = true;
    dispatch(setLikesState(newLikesState));
    likeTrigger(args);
  };

  useEffect(() => {
    setLikeButtonState(likesState[id]);
  }, [id, likesState, likeButtonState]);

  return (
    <div className={styles['like-dis']}>
      <div className={`${styles.like} _like-icon`} onClick={toggleLike}>
        <svg className={styles['like-svg']} alt="like">
          <Like
            fill={likeButtonState ? '#ad61ff' : 'transparent'}
            stroke={likeButtonState ? '#ad61ff' : '#696969'}
          />
        </svg>
      </div>
      <div className={`${styles.dislike} _like-icon`} onClick={toggleDislike}>
        <svg className={styles['dislike-svg']} alt="dislike">
          <Dislike
            fill={likeButtonState ? 'transparent' : '#ad61ff'}
            stroke={likeButtonState ? '#696969' : '#ad61ff'}
          />
        </svg>
      </div>
    </div>
  );
}

export default LikeDis;
