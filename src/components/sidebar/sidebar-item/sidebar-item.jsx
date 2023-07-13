// компонент плэйлиста
import { Link } from 'react-router-dom';
import styles from '../sidebar.module.css';

function SidebarItem({ img }) {
  return (
    <div className={styles.item}>
      <Link to="/playlist">
        <img className={styles.img} src={img} alt="playlist" />
      </Link>
    </div>
  );
}

export default SidebarItem;
