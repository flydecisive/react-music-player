/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */

import { useEffect, useState /* , useEffect */ } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import styles from './App.module.css';
// getAccessToken
import { registerUser, getAccessToken } from './api';
import { TracksContext } from './contexts/tracks';
import { LoginContext } from './contexts/login';
import { UserContext } from './contexts/user';
import { TokenContext } from './contexts/token';
import { IsPlayingContext } from './contexts/isPlaying';
import { useGetAllTracksQuery } from './services/tracks';
import { setTracksIds } from './store/actions/creators/tracks';
import Bar from './components/bar/bar';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('login'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState();
  const refresh = localStorage.getItem('refresh');
  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const { error, isLoading } = useGetAllTracksQuery();
  const allTracks = useGetAllTracksQuery().data;
  const playTrack = useSelector((store) => store.tracks.playTrack);
  const dispatch = useDispatch();
  let errorMessage;

  if (error) {
    errorMessage = `Не удалось загрузить плейлист, попробуйте позже ${error.status}`;
  }

  useEffect(() => {
    const setTokenAfterUnload = async () => {
      setToken(await getAccessToken(refresh));
    };

    setTokenAfterUnload();

    window.addEventListener('beforeunload', navigate('/'));
    return () => {
      window.removeEventListener('beforeunload', navigate('/'));
    };
  }, []);

  useEffect(() => {
    if (allTracks) {
      dispatch(setTracksIds(allTracks.map((trackData) => trackData.id)));
    }
  }, [allTracks]);

  useEffect(() => {
    if (auth) {
      setIntervalId(
        setInterval(async () => {
          setToken(await getAccessToken(refresh));
        }, 150000)
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
    clearInterval(intervalId);
  };

  const setCurrentUser = (currUser) => {
    setUser(currUser);
    localStorage.setItem('user', JSON.stringify(currUser));
  };

  const toggleIsPlaying = (value) => {
    setIsPlaying(value);
  };

  return (
    <div className={styles.App}>
      <TokenContext.Provider value={{ token, setToken }}>
        <IsPlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
          <TracksContext.Provider
            value={isLoading ? Array(5).fill({}) : allTracks}
          >
            <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
              <UserContext.Provider value={{ user, setCurrentUser }}>
                {playTrack?.id ? <Bar loading={isLoading} /> : null}
                <AppRoutes
                  auth={auth}
                  errorMessage={errorMessage}
                  loading={isLoading}
                  registerUser={registerUser}
                  setAuth={setAuth}
                />
              </UserContext.Provider>
            </LoginContext.Provider>
          </TracksContext.Provider>
        </IsPlayingContext.Provider>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
