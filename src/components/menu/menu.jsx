import navMenuStyles from '../nav/nav.module.css';
import styles from './menu.module.css';

function Menu() {
  return (
    <div className={`${navMenuStyles.menu} menu`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="http://" className={styles.link}>
            Главное
          </a>
        </li>
        <li className={styles.item}>
          <a href="http://" className={styles.link}>
            Мой плейлист
          </a>
        </li>
        <li className={styles.item}>
          <a href="http://" className={styles.link}>
            Войти
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
