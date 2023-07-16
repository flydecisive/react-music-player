import { useState, useEffect } from 'react';
import AppRoutes from './routes';
import styles from './App.module.css';

function App() {
  const [auth, setAuth] = useState();

  const getCookie = () => {
    const { cookie } = document;
    const symbol = cookie.indexOf('=') + 1;
    const value = cookie.slice(symbol);
    return value;
  };

  useEffect(() => {
    setAuth(getCookie);
  }, []);

  return (
    <div className={styles.App}>
      <AppRoutes auth={auth} />
    </div>
  );
}

export default App;
