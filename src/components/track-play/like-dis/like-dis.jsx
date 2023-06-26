// иконки лайка и дизлайка

import styles from '../track-play.module.css';
import { ReactComponent as Like } from '../../../assets/img/icon/like.svg';
import { ReactComponent as Dislike } from '../../../assets/img/icon/dislike.svg';

function LikeDis() {
  return (
    <div className={styles['like-dis']}>
      <div className={`${styles.like} _btn-icon`}>
        <svg className={styles['like-svg']} alt="like">
          <Like />
        </svg>
      </div>
      <div className={`${styles.dislike} _btn-icon`}>
        <svg className={styles['dislike-svg']} alt="dislike">
          <Dislike />
        </svg>
      </div>
    </div>
  );
}

export default LikeDis;
