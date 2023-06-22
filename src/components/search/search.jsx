// панель поиска

import styles from './search.module.css';
import centerblockSearchStyles from '../centerblock/centerblock.module.css';
import { ReactComponent as SearchIc } from '../../assets/img/icon/search.svg';

function Search() {
  return (
    <div className={`${centerblockSearchStyles.search} search`}>
      <svg className={styles.svg}>
        <SearchIc />
      </svg>
      <input
        className={styles.text}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}

export default Search;
