import { useState, useEffect } from 'react';
import AppRoutes from './routes';
import styles from './App.module.css';
import getTracks from './api';
import { getCookie } from './consts/helpers';

function App() {
  const [auth, setAuth] = useState();
  const [tracks, setTracks] = useState(Array(5).fill({}));
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

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
    setAuth(getCookie);
  }, []);

  return (
    <div className={styles.App}>
      <AppRoutes
        auth={auth}
        tracks={tracks}
        errorMessage={errorMessage}
        loading={loading}
      />
    </div>
  );
}

export default App;
