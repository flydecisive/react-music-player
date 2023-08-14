// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item/playlist-item';
import contentStyles from '../centerblock/centerblock-content/content.module.css';
import { useTracksContext } from '../../contexts/tracks';
// setFavoritesTracks
import {
  setLikesState,
  setFavoritesTracks,
} from '../../store/actions/creators/tracks';
import { useTokenContext } from '../../contexts/token';
// getFavoritesTracks
import {
  deleteTrackInFavorites,
  addTrackInFavorites,
  getFavoritesTracks,
} from '../../api';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';
// import { useGetAllTracksQuery } from '../../services/tracks';

// import { createFavorites } from '../../consts/helpers';

function Playlist({ loading, errorMessage }) {
  const { token } = useTokenContext();
  const [trackClick, setTrackClick] = useState(false);
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks);
  const favoritesIds = favoritesTracks.map((favoriteTrack) => favoriteTrack.id);
  const tracksIds = useSelector((store) => store.tracks.tracksIds);
  const likesState = useSelector((store) => store.tracks.likesState);
  const dispatch = useDispatch();
  const initialState = {};
  // const allTracks = useGetAllTracksQuery().data;
  // let allTracks;
  // const user = localStorage.getItem('user');
  const { setSwitchPlaylist } = useSwitchPlaylistContext();

  useEffect(() => {
    if (trackClick) {
      setSwitchPlaylist(true);
      setTrackClick(false);
    } else {
      setTrackClick(false);
    }
  }, [trackClick]);

  // if (trackClick) {
  //   allTracks = useGetAllTracksQuery().data;
  // }

  // console.log(allTracks);

  const tracks = useTracksContext();

  const getNewFavoritesTracks = async () => {
    dispatch(setFavoritesTracks(await getFavoritesTracks(token.access)));
  };

  const toggleLike = async (event) => {
    const { id } = event.currentTarget;
    const value = likesState[id];
    const newLikesState = { ...likesState };

    if (value) {
      newLikesState[id] = false;
      await deleteTrackInFavorites(token?.access, id);
      // dispatch(setFavoritesTracks(createFavorites(allTracks, user)));
      if (token?.access) {
        await getNewFavoritesTracks();
      }
    } else {
      newLikesState[id] = true;
      await addTrackInFavorites(token?.access, id);
      // dispatch(setFavoritesTracks(createFavorites(allTracks, user)));
      if (token?.access) {
        await getNewFavoritesTracks();
      }
    }

    dispatch(setLikesState(newLikesState));
  };

  // useEffect(() => {
  //   dispatch(setFavoritesTracks(createFavorites(allTracks, user)));
  // }, [likesState]);

  // useEffect(() => {
  //   console.log('reuse');
  // }, [allTracks]);

  useEffect(() => {
    if (tracksIds) {
      for (let i = tracksIds[0]; i < tracksIds?.length; i += 1) {
        initialState[i] = false;
      }
    }

    for (let i = 0; i < favoritesIds?.length; i += 1) {
      initialState[favoritesIds[i]] = true;
    }

    dispatch(setLikesState(initialState));
  }, [favoritesTracks]);

  const elements =
    tracks && tracks.length > 0
      ? tracks.map((item) => (
          <PlaylistItem
            item={item}
            key={item.id || Math.random(5)}
            loading={loading}
            toggleLike={toggleLike}
            likesState={likesState}
            setTrackClick={setTrackClick}
          />
        ))
      : null;

  return (
    <div className={`${contentStyles.playlist} playlist`}>
      {errorMessage || elements}
    </div>
  );
}

export default Playlist;
