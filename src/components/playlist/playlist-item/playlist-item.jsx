import Track from '../../track/track';
import styles from '../playlist.module.css';

function PlaylistItem({ item, loading, setChoosedTrack }) {
  return (
    <div className={styles.item}>
      <Track item={item} loading={loading} setChoosedTrack={setChoosedTrack} />
    </div>
  );
}

export default PlaylistItem;
