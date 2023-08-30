/* eslint-disable consistent-return */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLazyGetCollectionByIdQuery } from '../../services/tracks';
import Nav from '../../components/nav/nav.jsx';
import Search from '../../components/search/search.jsx';
import Sidebar from '../../components/sidebar/sidebar';
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content.jsx';
import { TracksContext } from '../../contexts/tracks';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';
import {
  setTracksIds,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';
import { StyledWrapper,StyledContent,StyledHeading } from './playlist-page';
import { useThemeContext } from '../../contexts/theme';

function PlaylistPage() {
  const {theme} = useThemeContext();
  const [fetchCollection, { data }] = useLazyGetCollectionByIdQuery();
  const dispatch = useDispatch();
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext();

  useEffect(() => {
    if (data) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(data?.items));
        dispatch(setTracksIds(data?.items.map((trackData) => trackData.id)));
        setSwitchPlaylist(false);
      }
    }
  }, [data, switchPlaylist]);

  const params = useParams();
  const id = Number(params.id);
  let title;
  if (id === 1) {
    title = 'Плейлист дня';
  } else if (id === 2) {
    title = '100 танцевальных хитов';
  } else if (id === 3) {
    title = 'Инди-заряд';
  }

  useEffect(() => {
    switch (id) {
      case 1:
        title = 'Плейлист дня';
        fetchCollection(id);
        break;
      case 2:
        title = '100 танцевальных хитов';
        fetchCollection(id);
        break;
      case 3:
        title = 'Инди-заряд';
        fetchCollection(id);
        break;
      default:
        return '';
    }
  }, [id]);

  return (
    <StyledWrapper>
      <Nav />
      <StyledContent>
        <Search />
        <StyledHeading theme={{theme}}>{title}</StyledHeading>
        <TracksContext.Provider value={data?.items}>
          <CenterblockContent />
        </TracksContext.Provider>
      </StyledContent>
      <Sidebar />
    </StyledWrapper>
  );
}

export default PlaylistPage;
