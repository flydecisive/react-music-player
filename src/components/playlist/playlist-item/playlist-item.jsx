import Track from '../../track/track';
import styles from '../playlist.module.css';

function PlaylistItem({
  item,
  loading,
  toggleLike,
  likesState,
  setTrackClick,
}) {
  return (
    <div className={styles.item}>
      <Track
        item={item}
        loading={loading}
        id={item.id}
        toggleLike={toggleLike}
        likesState={likesState}
        setTrackClick={setTrackClick}
      />
    </div>
  );
}

export default PlaylistItem;
