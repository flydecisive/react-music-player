// компонент для пользователя

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../sidebar.module.css';
import sidebarPersonalStyles from './sidebar-personal.module.css';
import { ReactComponent as Exit } from '../../../assets/img/icon/exit.svg';
import { useLoginContext } from '../../../contexts/login';
import { useUserContext } from '../../../contexts/user';

function SidebarPersonal() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const { toggleLogout } = useLoginContext();
  const { user } = useUserContext();

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true);
      navigate('/login');
    }
  }, [logout]);

  return (
    <div className={styles.personal}>
      <p className={styles['personal-name']}>{user.username}</p>
      <button
        type="submit"
        className={sidebarPersonalStyles.button}
        onClick={() => {
          setLogout(true);
        }}
      >
        <svg className={styles.avatar}>
          <Exit />
        </svg>
      </button>
    </div>
  );
}

export default SidebarPersonal;
