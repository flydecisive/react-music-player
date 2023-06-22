// компонент для пользователя

import styles from '../sidebar.module.css';

function SidebarPersonal() {
  return (
    <div className={styles.personal}>
      <p className={styles['personal-name']}>Sergey.Ivanov</p>
      <div className={styles.avatar} />
    </div>
  );
}

export default SidebarPersonal;
