import Nav from '../../components/nav/nav';
import styles from './favorites.module.css';
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import { useTokenContext } from '../../contexts/token';
import { useGetFavoritesTracksQuery } from '../../services/tracks';
import { TracksContext } from '../../contexts/tracks';

function Favorites() {
  const { token } = useTokenContext();
  const { data } = useGetFavoritesTracksQuery(token?.access);

  return (
    <div className={styles.favorites}>
      <Nav />
      <div className={styles.content}>
        <Search />
        <h2 className={styles.h2}>Мои треки</h2>
        <TracksContext.Provider value={data}>
          <CenterblockContent />
        </TracksContext.Provider>
      </div>
      <Sidebar />
    </div>
  );
}

export default Favorites;
