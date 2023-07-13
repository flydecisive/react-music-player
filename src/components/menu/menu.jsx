import { NavLink } from 'react-router-dom';

import navMenuStyles from '../nav/nav.module.css';
import styles from './menu.module.css';

function Menu() {
  return (
    <div className={`${navMenuStyles.menu} menu`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/">
            Главное
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/favorites">
            Мой плейлист
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/login">
            Войти
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
