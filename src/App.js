/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useEffect } from 'react';
import AppRoutes from './routes';
import styles from './App.module.css';
import { getTracks, registerUser } from './api';
import { TracksContext } from './contexts/tracks';
import { LoginContext } from './contexts/login';
import { UserContext } from './contexts/user';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('login'));
  const [tracks, setTracks] = useState(Array(5).fill({}));
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

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
      setLoading(false);
    } catch (error) {
      setErrorMessage(
        `Не удалось загрузить плейлист, попробуйте позже ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTracks();
  }, []);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   console.log(user);
  //   if (auth) {
  //     localStorage.setItem('auth', auth);
  //   }
  // }, [auth]);

  return (
    <div className={styles.App}>
      <TracksContext.Provider value={tracks}>
        <LoginContext.Provider value={{ auth, toggleLogin, toggleLogout }}>
          <UserContext.Provider value={{ user, setCurrentUser }}>
            <AppRoutes
              auth={auth}
              tracks={tracks}
              errorMessage={errorMessage}
              loading={loading}
              registerUser={registerUser}
              setAuth={setAuth}
            />
          </UserContext.Provider>
        </LoginContext.Provider>
      </TracksContext.Provider>
    </div>
  );
}

export default App;
