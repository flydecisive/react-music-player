/* eslint-disable no-param-reassign */
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item/playlist-item';
import StyledPlaylist from './playlist';
import { useThemeContext } from '../../contexts/theme';
import {
  setLikesState,
  setCurrentPlaylist,
} from '../../store/actions/creators/tracks';
import { useTokenContext } from '../../contexts/token';
import { useSwitchPlaylistContext } from '../../contexts/switchPlaylist';
import {
  useGetAllTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} from '../../services/tracks';
import { useTracksContext } from '../../contexts/tracks';

function Playlist({ loading, errorMessage, searchValue, filterValues }) {
  const { theme } = useThemeContext();
  const { token } = useTokenContext();
  const [trackClick, setTrackClick] = useState(false);
  const favoritesTracks = useSelector((store) => store.tracks.favoritesTracks);
  const favoritesIds = favoritesTracks?.map(
    (favoriteTrack) => favoriteTrack.id
  );
  const tracksIds = useSelector((store) => store.tracks.tracksIds);
  const likesState = useSelector((store) => store.tracks.likesState);
  const dispatch = useDispatch();
  const initialState = {};
  const allTracks = useGetAllTracksQuery().data;
  const { setSwitchPlaylist } = useSwitchPlaylistContext();
  const [likeTrigger] = useLikeTrackMutation();
  const [dislikeTrigger] = useDislikeTrackMutation();
  const tracks = useTracksContext();

  // Поиск по плейлисту
  function getSearchingTracks(arr, value) {
    const findList = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].name.toLowerCase().includes(value)) {
        findList.push(arr[i]);
      }
    }

    return findList;
  }

  // фильтры плейлиста
  function getFilteredTracks(arr, values) {
    const findList = [];

    for (let i = 0; i < values.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j].author.includes(values[i])) {
          findList.push(arr[j]);
        } else if (arr[j].genre.includes(values[i])) {
          findList.push(arr[j]);
        }
      }
    }

    return findList;
  }

  // Фильтр плейлиста, если одновременно выбран и исполнитель и жанр
  function getCombineFilteredTracks(arr, values) {
    const findAuthorsList = getFilteredTracks(arr, values.name);
    const findList = [];

    for (let i = 0; i < findAuthorsList.length; i += 1) {
      for (let j = 0; j < values.genre.length; j += 1) {
        if (findAuthorsList[i].genre.includes(values.genre[j])) {
          findList.push(findAuthorsList[i]);
        }
      }
    }

    return findList;
  }

  // Фильтр плейлиста по дате
  function getFilterByDate(arr, values) {
    const dates = arr.map((elem) => elem.release_date);
    const index = dates.indexOf(null);
    dates.splice(index, 1);
    const value = values[0];
    let findList = [];

    if (value === 'default') {
      findList = arr;
    } else if (value === 'old') {
      const tracksOldToNew = dates.sort((a, b) => new Date(a) - new Date(b));
      for (let i = 0; i < tracksOldToNew.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
          if (arr[j].release_date) {
            if (arr[j].release_date.includes(tracksOldToNew[i])) {
              findList.push(arr[j]);
            }
          }
        }
      }
    } else if (value === 'new') {
      const tracksNewToOld = dates.sort((a, b) => new Date(b) - new Date(a));
      for (let i = 0; i < tracksNewToOld.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
          if (arr[j].release_date) {
            if (arr[j].release_date.includes(tracksNewToOld[i])) {
              findList.push(arr[j]);
            }
          }
        }
      }
    }

    return findList;
  }
  //

  useEffect(() => {
    if (trackClick) {
      setSwitchPlaylist(true);
      setTrackClick(false);
    } else {
      setTrackClick(false);
    }
    dispatch(setCurrentPlaylist(allTracks));
  }, [trackClick]);

  const toggleLike = async (event) => {
    const { id } = event.currentTarget;
    const trackState = likesState[id];
    const newLikesState = { ...likesState };
    const { access } = token;
    const args = { id, token: access };

    if (trackState) {
      newLikesState[id] = false;
      await dislikeTrigger(args);
    } else {
      newLikesState[id] = true;
      await likeTrigger(args);
    }

    dispatch(setLikesState(newLikesState));
  };

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

  let list;
  if (searchValue) {
    list =
      tracks && tracks.length > 0
        ? getSearchingTracks(tracks, searchValue)
        : null;
  }
  if (filterValues?.genre.length > 0 || filterValues?.name.length > 0) {
    let filteringTrack;

    if (filterValues?.name.length > 0 && filterValues?.genre.length > 0) {
      filteringTrack =
        tracks && tracks.length > 0
          ? getCombineFilteredTracks(tracks, filterValues)
          : null;
    } else if (filterValues.name.length > 0) {
      filteringTrack =
        tracks && tracks.length > 0
          ? getFilteredTracks(tracks, filterValues.name)
          : null;
    } else if (filterValues?.genre.length > 0) {
      filteringTrack =
        tracks && tracks.length > 0
          ? getFilteredTracks(tracks, filterValues?.genre)
          : null;
    }

    list = filteringTrack;
  }
  if (filterValues?.date.length > 0) {
    list =
      tracks && tracks.length > 0
        ? getFilterByDate(tracks, filterValues.date)
        : null;
  }

  if (
    filterValues.date.length === 0 &&
    filterValues.name.length === 0 &&
    filterValues.genre.length === 0 &&
    !searchValue
  ) {
    list = tracks;
  }

  const elements =
    list && list.length > 0
      ? list.map((item) => (
          <PlaylistItem
            item={item}
            key={Math.random(40) || Math.random(5)}
            loading={loading}
            toggleLike={toggleLike}
            likesState={likesState}
            setTrackClick={setTrackClick}
          />
        ))
      : null;

  return (
    <StyledPlaylist theme={{ theme }}>
      {errorMessage || elements}
    </StyledPlaylist>
  );
}

export default Playlist;
