import PlaylistItem from './playlist-item/playlist-item';
import contentStyles from '../centerblock/centerblock-content/content.module.css';
import { useTracksContext } from '../../contexts/tracks';

function Playlist({ loading, errorMessage, setChoosedTrack }) {
  const tracks = useTracksContext();

  const elements = tracks?.map((item) => (
    <PlaylistItem
      item={item}
      key={item.id}
      loading={loading}
      setChoosedTrack={setChoosedTrack}
    />
  ));

  return (
    <div className={`${contentStyles.playlist} playlist`}>
      {errorMessage || elements}
    </div>
  );
}

export default Playlist;
