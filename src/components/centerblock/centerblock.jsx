// import { useState, useEffect } from 'react';
import Search from '../search/search';
import Filter from '../filter/filter';
import CenterblockContent from './centerblock-content/centerblock-content';
import mainCenterblockStyles from '../../pages/main/main.module.css';
import styles from './centerblock.module.css';

function Centerblock({ loading, tracks, errorMessage }) {
  return (
    <div className={`${mainCenterblockStyles.centerblock} centerblock`}>
      <Search />
      <h2 className={styles.h2}>Треки</h2>
      <Filter filterElements={tracks} />
      <CenterblockContent
        tracks={tracks}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Centerblock;
