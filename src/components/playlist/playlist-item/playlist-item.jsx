import Track from '../../track/track';
import styles from '../playlist.module.css';

function PlaylistItem({ item, loading, setChoosedTrack, id }) {
  return (
    <div className={styles.item}>
      <Track
        item={item}
        loading={loading}
        setChoosedTrack={setChoosedTrack}
        id={id}
      />
    </div>
  );
}

export default PlaylistItem;
