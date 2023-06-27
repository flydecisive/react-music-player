import { useState, useEffect } from 'react';
import Search from '../search/search';
import Filter from '../filter/filter';
import CenterblockContent from './centerblock-content/centerblock-content';
import mainCenterblockStyles from '../main-block/main.module.css';
import styles from './centerblock.module.css';

function Centerblock({ loading }) {
  const [responseElements, setResponseElements] = useState([]);

  useEffect(() => {
    fetch('https://painassasin.online/catalog/track/all/')
      .then((response) => response.json())
      .then((data) => setResponseElements(data));
  }, []);

  return (
    <div className={`${mainCenterblockStyles.centerblock} centerblock`}>
      <Search />
      <h2 className={styles.h2}>Треки</h2>
      <Filter filterElements={responseElements} />
      <CenterblockContent tracks={responseElements} loading={loading} />
    </div>
  );
}

export default Centerblock;
