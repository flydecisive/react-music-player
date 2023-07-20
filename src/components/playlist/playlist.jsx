import PlaylistItem from './playlist-item/playlist-item';
import contentStyles from '../centerblock/centerblock-content/content.module.css';

function Playlist({ tracks, loading }) {
  // errorMessage
  const elements = tracks?.map((item) => (
    <PlaylistItem item={item} key={item.id} loading={loading} />
  ));

  return <div className={`${contentStyles.playlist} playlist`}>{elements}</div>;
}

export default Playlist;
