/* eslint-disable no-unused-expressions */
import { useSelector } from 'react-redux';
import PlaylistTitle from '../../playlist/playlist-title/playlist-title.jsx';
import Playlist from '../../playlist/playlist.jsx';
import { StyledContent } from './centerblock-content';

function CenterblockContent({
  loading,
  errorMessage,
  searchValue,
  filterValues,
}) {
  const playTrack = useSelector((store) => store.tracks.playTrack);
  // const location = window.location.href;
  // let maxHeight;
  // if (!playTrack?.id) {
  //   if (location.includes('favorites') || location.includes('category')) {
  //     maxHeight = '84dvh';
  //   } else {
  //     maxHeight = '98%';
  //   }
  // }

  // if (playTrack?.id) {
  //   if (location.includes('favorites') || location.includes('category')) {
  //     maxHeight = '74dvh';
  //   } else {
  //     maxHeight = '58dvh';
  //   }
  // }

  return (
    <StyledContent isPlay={playTrack?.id}>
      <PlaylistTitle />
      <Playlist
        loading={loading}
        errorMessage={errorMessage}
        searchValue={searchValue}
        filterValues={filterValues}
      />
    </StyledContent>
  );
}

export default CenterblockContent;
