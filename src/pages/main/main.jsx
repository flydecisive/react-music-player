/* eslint-disable import/no-extraneous-dependencies */

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../../components/nav/nav';
import Centerblock from '../../components/centerblock/centerblock';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Bar from '../../components/bar/bar';
import styles from './main.module.css';
import { tracksAllSelector } from '../../store/selectors/tracks';
import { setPlayTrack } from '../../store/actions/creators/tracks';

function Main({ errorMessage, loading }) {
  const [choosedTrack, setChoosedTrack] = useState();
  const [barVisible, setBarVisible] = useState(false);

  const dispatch = useDispatch();

  const allTracks = useSelector(tracksAllSelector);

  useEffect(() => {
    if (allTracks.length > 0) {
      for (let i = 0; i < allTracks?.length; i += 1) {
        if (allTracks[i].id === choosedTrack) {
          dispatch(setPlayTrack(allTracks[i]));
        }
      }
    }

    if (choosedTrack) setBarVisible(true);
  }, [allTracks, choosedTrack]);

  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock
        loading={loading}
        errorMessage={errorMessage}
        setChoosedTrack={setChoosedTrack}
      />
      <Bar loading={loading} barVisible={barVisible} />

      <Sidebar loading={loading} />

      <Footer />
    </main>
  );
}

export default Main;
