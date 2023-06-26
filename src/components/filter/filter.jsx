import styles from './filter.module.css';
import centerblockFilterStyles from '../centerblock/centerblock.module.css';

function Filter() {
  return (
    <div className={`${centerblockFilterStyles.filter} filter`}>
      <div className={styles.title}>Искать по:</div>
      <div id="0" className={`${styles.button} button-author _btn-text`}>
        исполнителю
      </div>
      <div id="1" className={`${styles.button} button-year _btn-text`}>
        году выпуска
      </div>
      <div id="2" className={`${styles.button} button-genre _btn-text`}>
        жанру
      </div>
    </div>
  );
}

export default Filter;
