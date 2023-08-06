/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes';
import styles from './App.module.css';
import { getTracks, registerUser } from './api';
import { TracksContext } from './contexts/tracks';
import { LoginContext } from './contexts/login';
import { UserContext } from './contexts/user';
import { IsPlayingContext } from './contexts/isPlaying';

import { setAllTracks, setTracksIds } from './store/actions/creators/tracks';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('login'));
  const [tracks, setTracks] = useState(Array(5).fill({}));
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();

  const toggleLogin = () => {
    if (!auth) {
      setAuth(true);
      localStorage.setItem('login', true);
    }
  };

  const toggleLogout = () => {
    setAuth(false);
    localStorage.clear();
  };

  const setCurrentUser = (currUser) => {
    setUser(currUser);
    localStorage.setItem('user', JSON.stringify(currUser));
  };

  const getAllTracks = async () => {
    try {
      const tracksData = await getTracks();
      setTracks(tracksData);
      dispatch(setAllTracks(tracksData));
      dispatch(setTracksIds(tracksData.map((trackData) => trackData.id)));
      setLoading(false);
    } catch (error) {
      setErrorMessage(
        `Не удалось загрузить плейлист, попробуйте позже ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleIsPlaying = (value) => {
    setIsPlaying(value);
  };

  useEffect(() => {
    getAllTracks();
  }, []);

  return (
    <div className={styles.App}>
      <IsPlayingContext.Provider value={{ isPlaying, toggleIsPlaying }}>
        <TracksContext.Provider value={tracks}>
          <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
            <UserContext.Provider value={{ user, setCurrentUser }}>
              <AppRoutes
                auth={auth}
                errorMessage={errorMessage}
                loading={loading}
                registerUser={registerUser}
                setAuth={setAuth}
              />
            </UserContext.Provider>
          </LoginContext.Provider>
        </TracksContext.Provider>
      </IsPlayingContext.Provider>
    </div>
  );
}

export default App;
