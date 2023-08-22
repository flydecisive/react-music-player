/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from './routes';
import StyledApp from './App';
import { registerUser, getAccessToken } from './api';
import { TracksContext } from './contexts/tracks';
import { LoginContext } from './contexts/login';
import { UserContext } from './contexts/user';
import { TokenContext } from './contexts/token';
import { SwitchPlaylistContext } from './contexts/switchPlaylist';
import { IsPlayingContext } from './contexts/isPlaying';
import { ThemeContext } from './contexts/theme';
import { useGetAllTracksQuery } from './services/tracks';

import {
  setTracksIds,
  setFavoritesTracks,
  setPlayTrack,
} from './store/actions/creators/tracks';

import Bar from './components/bar/bar.jsx';
import { createFavorites } from './consts/helpers';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') !== 'false');
  const [auth, setAuth] = useState(localStorage.getItem('login'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState();
  const [switchPlaylist, setSwitchPlaylist] = useState(false);
  const refresh = localStorage.getItem('refresh');
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const { error, isLoading } = useGetAllTracksQuery();
  const allTracks = useGetAllTracksQuery().data;
  const [playlist, setPlaylist] = useState();
  const playTrack = useSelector((store) => store.tracks.playTrack);
  const currentPlaylist = useSelector((store) => store.tracks.currentPlaylist);
  const dispatch = useDispatch();
  let errorMessage;

  if (error) {
    errorMessage = `Не удалось загрузить плейлист, попробуйте позже ${error.status}`;
  }

  useEffect(() => {
    if (switchPlaylist) {
      setPlaylist(currentPlaylist);
    }
  }, [switchPlaylist]);

  useEffect(() => {
    const setTokenAfterUnload = async () => {
      setToken(await getAccessToken(refresh));
    };

    if (!token?.access && refresh) {
      setTokenAfterUnload();
    }
  }, [token]);

  useEffect(() => {
    dispatch(setTracksIds(allTracks?.map((trackData) => trackData?.id)));
    if (allTracks) {
      dispatch(setFavoritesTracks(createFavorites(allTracks, user)));
      setPlaylist(allTracks);
    }
  }, [user, allTracks]);

  useEffect(() => {
    if (auth && refresh) {
      setIntervalId(
        setInterval(async () => {
          setToken(await getAccessToken(refresh));
        }, 60000)
      );
    }
  }, [refresh]);

  const toggleLogin = () => {
    if (!auth) {
      setAuth(true);
      localStorage.setItem('login', true);
    }
  };

  const toggleLogout = () => {
    setAuth(false);
    localStorage.clear();
    localStorage.setItem('theme', theme);
    clearInterval(intervalId);
    dispatch(setPlayTrack(null));
    dispatch(setFavoritesTracks([]));
  };

  const setCurrentUser = (currUser) => {
    setUser(currUser);
    localStorage.setItem('user', JSON.stringify(currUser));
  };

  const toggleIsPlaying = (value) => {
    setIsPlaying(value);
  };

  return (
    <StyledApp theme={{ theme }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <IsPlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
          <TracksContext.Provider
            value={isLoading ? Array(5).fill({}) : playlist}
          >
            <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
              <UserContext.Provider value={{ user, setCurrentUser }}>
                <SwitchPlaylistContext.Provider
                  value={{ switchPlaylist, setSwitchPlaylist }}
                >
                  <ThemeContext.Provider value={{ theme, setTheme }}>
                    {playTrack?.id ? <Bar loading={isLoading} /> : null}
                    <AppRoutes
                      auth={auth}
                      errorMessage={errorMessage}
                      loading={isLoading}
                      registerUser={registerUser}
                      setAuth={setAuth}
                    />
                  </ThemeContext.Provider>
                </SwitchPlaylistContext.Provider>
              </UserContext.Provider>
            </LoginContext.Provider>
          </TracksContext.Provider>
        </IsPlayingContext.Provider>
      </TokenContext.Provider>
    </StyledApp>
  );
}

export default App;
