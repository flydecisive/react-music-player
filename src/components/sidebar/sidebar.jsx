// правая боковая панель

import SidebarPersonal from './sidebar-personal/sidebar-personal';
import mainSidebarStyles from '../main-block/main.module.css';
import SidebarBlock from './sidebar-block/sidebar-block';

function Sidebar({ loading }) {
  return (
    <div className={`${mainSidebarStyles.sidebar} sidebar`}>
      <SidebarPersonal />
      <SidebarBlock loading={loading} />
    </div>
  );
}

export default Sidebar;
