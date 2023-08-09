import PlaylistTitle from '../../playlist/playlist-title/playlist-title';
import Playlist from '../../playlist/playlist';
import centerblockContentStyles from '../centerblock.module.css';

function CenterblockContent({ loading, errorMessage }) {
  return (
    <div className={centerblockContentStyles.content}>
      <PlaylistTitle />
      <Playlist loading={loading} errorMessage={errorMessage} />
    </div>
  );
}

export default CenterblockContent;
