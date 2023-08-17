/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from '../../components/nav/nav.jsx';
import Centerblock from '../../components/centerblock/centerblock.jsx';
import Sidebar from '../../components/sidebar/sidebar';
// import Footer from '../../components/footer/footer';
import styles from './main.module.css';
import {
  setTracksIds,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';
import { useGetAllTracksQuery } from '../../services/tracks';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';

function Main({ errorMessage, loading }) {
  const allTracks = useGetAllTracksQuery().data;
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext();
  const dispatch = useDispatch();
  useEffect(() => {
    if (allTracks) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(allTracks));
        dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)));
        setSwitchPlaylist(false);
      }
    }
  }, [switchPlaylist]);

  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock loading={loading} errorMessage={errorMessage} />
      <Sidebar loading={loading} />
      {/* <Footer /> */}
    </main>
  );
}

export default Main;
