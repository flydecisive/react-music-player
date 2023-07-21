import { useState, useEffect } from 'react';
import Nav from '../../components/nav/nav';
import Centerblock from '../../components/centerblock/centerblock';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Bar from '../../components/bar/bar';
import styles from './main.module.css';

function Main({ tracks, errorMessage, loading }) {
  const [choosedTrack, setChoosedTrack] = useState();
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    console.log(choosedTrack);
    if (choosedTrack) setBarVisible(true);
  });

  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock
        loading={loading}
        tracks={tracks}
        errorMessage={errorMessage}
        setChoosedTrack={setChoosedTrack}
      />
      <Sidebar loading={loading} />
      <Bar loading={loading} barVisible={barVisible} />
      <Footer />
    </main>
  );
}

export default Main;
