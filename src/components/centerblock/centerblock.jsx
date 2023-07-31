// import { useState, useEffect } from 'react';
import Search from '../search/search';
import Filter from '../filter/filter';
import CenterblockContent from './centerblock-content/centerblock-content';
import mainCenterblockStyles from '../../pages/main/main.module.css';
import styles from './centerblock.module.css';

function Centerblock({ loading, errorMessage, setChoosedTrack }) {
  return (
    <div className={`${mainCenterblockStyles.centerblock} centerblock`}>
      <Search />
      <h2 className={styles.h2}>Треки</h2>
      <Filter />
      <CenterblockContent
        loading={loading}
        errorMessage={errorMessage}
        setChoosedTrack={setChoosedTrack}
      />
    </div>
  );
}

export default Centerblock;
