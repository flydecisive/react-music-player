import SidebarItem from '../sidebar-item/sidebar-item';
import styles from '../sidebar.module.css';
import daysCover from '../../../assets/img/playlist01.png';
import dansCover from '../../../assets/img/playlist02.png';
import indieCover from '../../../assets/img/playlist03.png';
import Skeleton from '../../skeleton/skeleton.jsx';

function SidebarBlock({ loading }) {
  return (
    <div className={styles.block}>
      {loading ? (
        <>
          <Skeleton width="200px" height="120px" />
          <Skeleton width="200px" height="120px" />
          <Skeleton width="200px" height="120px" />
        </>
      ) : (
        <div className={styles.list}>
          <SidebarItem img={daysCover} id={1} />
          <SidebarItem img={dansCover} id={2} />
          <SidebarItem img={indieCover} id={3} />
        </div>
      )}
    </div>
  );
}

export default SidebarBlock;
