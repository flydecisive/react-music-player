import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from '../../components/nav/nav.jsx';
import styles from './favorites.module.css';
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content.jsx';
import Search from '../../components/search/search.jsx';
import Sidebar from '../../components/sidebar/sidebar';
import { TracksContext } from '../../contexts/tracks';
import {
  setTracksIds,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';

function Favorites() {
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
    <div className={styles.favorites}>
      <Nav />
      <div className={styles.content}>
        <Search />
        <h2 className={styles.h2}>Мои треки</h2>
        <TracksContext.Provider value={favoritesTracks}>
          <CenterblockContent />
        </TracksContext.Provider>
      </div>
      <Sidebar />
    </div>
  );
}

export default Favorites;
