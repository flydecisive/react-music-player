// компонент плэйлиста

import styles from '../sidebar.module.css';

function SidebarItem({ img }) {
  return (
    <div className={styles.item}>
      <a className={styles.link} href="https://">
        <img className={styles.img} src={img} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SidebarItem;
