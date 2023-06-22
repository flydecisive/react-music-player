import PlaylistTitle from '../../playlist/playlist-title/playlist-title';
import Playlist from '../../playlist/playlist';
import centerblockContentStyles from '../centerblock.module.css';

function CenterblockContent() {
  return (
    <div className={centerblockContentStyles.content}>
      <PlaylistTitle />
      <Playlist />
    </div>
  );
}

export default CenterblockContent;
