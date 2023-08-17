/* eslint-disable no-unused-expressions */
import { useSelector } from 'react-redux';
import PlaylistTitle from '../../playlist/playlist-title/playlist-title.jsx';
import Playlist from '../../playlist/playlist.jsx';
import { StyledContent } from './centerblock-content';

function CenterblockContent({ loading, errorMessage }) {
  const playTrack = useSelector((store) => store.tracks.playTrack);
  const location = window.location.href;
  let maxHeight;
  if (!playTrack.id) {
    if (location.includes('favorites') || location.includes('category')) {
      maxHeight = '77vh';
    } else {
      maxHeight = '60vh';
    }
  }

  if (playTrack.id) {
    if (location.includes('favorites') || location.includes('category')) {
      maxHeight = '64vh';
    } else {
      maxHeight = '45vh';
    }
  }

  return (
    <StyledContent maxHeight={maxHeight}>
      <PlaylistTitle />
      <Playlist loading={loading} errorMessage={errorMessage} />
    </StyledContent>
  );
}

export default CenterblockContent;
