import PlaylistTitle from '../../playlist/playlist-title/playlist-title';
import Playlist from '../../playlist/playlist';
import centerblockContentStyles from '../centerblock.module.css';

function CenterblockContent({
  tracks,
  loading,
  errorMessage,
  setChoosedTrack,
}) {
  return (
    <div className={centerblockContentStyles.content}>
      <PlaylistTitle />
      <Playlist
        tracks={tracks}
        loading={loading}
        errorMessage={errorMessage}
        setChoosedTrack={setChoosedTrack}
      />
    </div>
  );
}

export default CenterblockContent;
