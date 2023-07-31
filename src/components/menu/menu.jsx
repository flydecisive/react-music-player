/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLoginContext } from '../../contexts/login';

import navMenuStyles from '../nav/nav.module.css';
import styles from './menu.module.css';

function Menu() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const { toggleLogout } = useLoginContext();

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true);
      navigate('/login');
    }
  }, [logout]);

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
          <div
            role="button"
            tabIndex={0}
            className={styles.button}
            onClick={() => setLogout(true)}
          >
            Выйти
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
