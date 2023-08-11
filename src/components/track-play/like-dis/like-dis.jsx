/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// иконки лайка и дизлайка

import styles from '../track-play.module.css';
import { ReactComponent as Like } from '../../../assets/img/icon/like.svg';
import { ReactComponent as Dislike } from '../../../assets/img/icon/dislike.svg';

function LikeDis({ toggleLike, toggleDislike }) {
  return (
    <div className={styles['like-dis']}>
      <div className={`${styles.like} _btn-icon`} onClick={toggleLike}>
        <svg className={styles['like-svg']} alt="like">
          <Like />
        </svg>
      </div>
      <div className={`${styles.dislike} _btn-icon`} onClick={toggleDislike}>
        <svg className={styles['dislike-svg']} alt="dislike">
          <Dislike />
        </svg>
      </div>
    </div>
  );
}

export default LikeDis;
