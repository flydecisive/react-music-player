import { useSelector } from 'react-redux';
import PlaylistTitle from '../../playlist/playlist-title/playlist-title.jsx';
import Playlist from '../../playlist/playlist.jsx';
import StyledContent from './centerblock-content';

function CenterblockContent({ loading, errorMessage }) {
  const playTrack = useSelector((store) => store.tracks.playTrack);

  return (
    <StyledContent playlistHeight={playTrack}>
      <PlaylistTitle />
      <Playlist loading={loading} errorMessage={errorMessage} />
    </StyledContent>
  );
}

export default CenterblockContent;
