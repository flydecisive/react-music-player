// компонент плэйлиста
import { NavLink } from 'react-router-dom';
import styles from '../sidebar.module.css';

function SidebarItem({ img, id }) {
  return (
    <div className={styles.item}>
      <NavLink to={`/category/${id}`}>
        <img className={styles.img} src={img} alt="playlist" />
      </NavLink>
    </div>
  );
}

export default SidebarItem;
