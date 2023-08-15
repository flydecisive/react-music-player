/* eslint-disable consistent-return */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLazyGetCollectionByIdQuery } from '../../services/tracks';
import Nav from '../../components/nav/nav';
import Search from '../../components/search/search';
import Sidebar from '../../components/sidebar/sidebar';
import CenterblockContent from '../../components/centerblock/centerblock-content/centerblock-content';
import { TracksContext } from '../../contexts/tracks';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';
import {
  setTracksIds,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';

import styles from './playlist-page.module.css';

function PlaylistPage() {
  const [fetchCollection, { data }] = useLazyGetCollectionByIdQuery();
  const dispatch = useDispatch();
  const { switchPlaylist, setSwitchPlaylist } = useSwitchPlaylistContext();

  useEffect(() => {
    if (data) {
      if (switchPlaylist) {
        dispatch(setCurrentPlaylist(data?.items));
        dispatch(setTracksIds(data?.items.map((trackData) => trackData.id)));
        setSwitchPlaylist(false);
      }
    }
  }, [data, switchPlaylist]);

  const params = useParams();
  const id = Number(params.id);
  let title;
  if (id === 1) {
    title = 'Плейлист дня';
  } else if (id === 2) {
    title = '100 танцевальных хитов';
  } else if (id === 3) {
    title = 'Инди-заряд';
  }

  useEffect(() => {
    switch (id) {
      case 1:
        title = 'Плейлист дня';
        fetchCollection(id);
        break;
      case 2:
        title = '100 танцевальных хитов';
        fetchCollection(id);
        break;
      case 3:
        title = 'Инди-заряд';
        fetchCollection(id);
        break;
      default:
        return '';
    }
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.content}>
        <Search />
        <h2 className={styles.h2}>{title}</h2>
        <TracksContext.Provider value={data?.items}>
          <CenterblockContent />
        </TracksContext.Provider>
      </div>
      <Sidebar />
    </div>
  );
}

export default PlaylistPage;
