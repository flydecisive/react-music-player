import SidebarItem from '../sidebar-item/sidebar-item';
import styles from '../sidebar.module.css';
import daysCover from '../../../assets/img/playlist01.png';
import dansCover from '../../../assets/img/playlist02.png';
import indieCover from '../../../assets/img/playlist03.png';

function SidebarBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <SidebarItem img={daysCover} />
        <SidebarItem img={dansCover} />
        <SidebarItem img={indieCover} />
      </div>
    </div>
  );
}

export default SidebarBlock;
