import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from '../../components/nav/nav.jsx';
import {StyledContent,StyledFavorites,StyledHeading} from './favorites'
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content.jsx';
import Search from '../../components/search/search.jsx';
import Sidebar from '../../components/sidebar/sidebar';
import { TracksContext } from '../../contexts/tracks';
import {
  setTracksIds,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';
import { StyledText } from '../../components/centerblock/centerblock-content/centerblock-content';
import { useThemeContext } from '../../contexts/theme';

function Favorites() {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks);
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext();
  useEffect(() => {
    if (favoritesTracks) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(favoritesTracks));
        dispatch(
          setTracksIds(favoritesTracks.map((trackData) => trackData.id))
        );
        setSwitchPlaylist(false);
      }
    }
  }, [favoritesTracks, switchPlaylist]);

  return (
      <StyledFavorites>
        <Nav />
        <StyledContent>
          <Search />
            <StyledHeading theme={{theme}}>Мои треки</StyledHeading>
            <TracksContext.Provider value={favoritesTracks}>
              {favoritesTracks.length > 0 ? (
                <CenterblockContent favoritesTracks={favoritesTracks} />
              ) : (
                <StyledText theme={{ theme }}>
                  На этой странице нет треков
                </StyledText>
              )}
            </TracksContext.Provider>
        </StyledContent>

        <Sidebar />
      </StyledFavorites>
  );
}

export default Favorites;
