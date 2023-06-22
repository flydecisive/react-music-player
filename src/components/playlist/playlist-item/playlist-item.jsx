import Track from '../../track/track';
import styles from '../playlist.module.css';

function PlaylistItem({ item }) {
  return (
    <div className={styles.item}>
      <Track item={item} />
    </div>
  );
}

export default PlaylistItem;
