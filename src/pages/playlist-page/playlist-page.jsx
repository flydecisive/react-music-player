import Nav from '../../components/nav/nav';
import Search from '../../components/search/search';
import SidebarPersonal from '../../components/sidebar/sidebar-personal/sidebar-personal';
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content';

import styles from './playlist-page.module.css';

function PlaylistPage() {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className="content">
        <Search />
        <h2 className={styles.h2}>Треки</h2>
        <CenterblockContent />
        <SidebarPersonal />
      </div>
    </div>
  );
}

export default PlaylistPage;
