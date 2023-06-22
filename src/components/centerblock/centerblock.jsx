import Search from '../search/search';
import Filter from '../filter/filter';
import CenterblockContent from './centerblock-content/centerblock-content';
import mainCenterblockStyles from '../main-block/main.module.css';
import styles from './centerblock.module.css';

function Centerblock() {
  return (
    <div className={`${mainCenterblockStyles.centerblock} centerblock`}>
      <Search />
      <h2 className={styles.h2}>Треки</h2>
      <Filter />
      <CenterblockContent />
    </div>
  );
}

export default Centerblock;
