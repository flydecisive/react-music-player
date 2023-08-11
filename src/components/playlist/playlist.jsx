import PlaylistItem from './playlist-item/playlist-item';
import contentStyles from '../centerblock/centerblock-content/content.module.css';
import { useTracksContext } from '../../contexts/tracks';

function Playlist({ loading, errorMessage }) {
  const tracks = useTracksContext();
  // console.log(tracks);

  const elements =
    tracks && tracks.length > 0
      ? tracks.map((item) => (
          <PlaylistItem
            item={item}
            key={item.id || Math.random(5)}
            loading={loading}
          />
        ))
      : null;

  return (
    <div className={`${contentStyles.playlist} playlist`}>
      {errorMessage || elements}
    </div>
  );
}

export default Playlist;
