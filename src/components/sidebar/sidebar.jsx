// правая боковая панель

import SidebarPersonal from './sidebar-personal/sidebar-personal';
import SidebarBlock from './sidebar-block/sidebar-block';
import mainSidebarStyles from '../main-block/main.module.css';

function Sidebar() {
  return (
    <div className={`${mainSidebarStyles.sidebar} sidebar`}>
      <SidebarPersonal />
      <SidebarBlock />
    </div>
  );
}

export default Sidebar;
