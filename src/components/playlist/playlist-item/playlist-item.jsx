import Track from '../../track/track';
import styles from '../playlist.module.css';

function PlaylistItem({ item, loading }) {
  return (
    <div className={styles.item}>
      <Track item={item} loading={loading} />
    </div>
  );
}

export default PlaylistItem;
