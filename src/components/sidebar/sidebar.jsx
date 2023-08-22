// правая боковая панель

import SidebarPersonal from './sidebar-personal/sidebar-personal.jsx';
import styles from './sidebar.module.css';
import SidebarBlock from './sidebar-block/sidebar-block';

function Sidebar({ loading }) {
  return (
    <div className={`${styles.sidebar} sidebar`}>
      <SidebarPersonal />
      <SidebarBlock loading={loading} />
    </div>
  );
}

export default Sidebar;
