/* eslint-disable import/no-extraneous-dependencies */

// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../../components/nav/nav';
import Centerblock from '../../components/centerblock/centerblock';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Bar from '../../components/bar/bar';
import styles from './main.module.css';

function Main({ errorMessage, loading }) {
  const playTrack = useSelector((store) => store.tracks.playTrack);
  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock loading={loading} errorMessage={errorMessage} />
      {playTrack ? <Bar loading={loading} /> : null}
      <Sidebar loading={loading} />
      <Footer />
    </main>
  );
}

export default Main;
