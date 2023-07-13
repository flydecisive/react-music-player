import { useState, useEffect } from 'react';
import AppRoutes from './routes';
import styles from './App.module.css';

function App() {
  const [auth, setAuth] = useState();

  const getCookie = () => {
    const { cookie } = document;
    const symbol = cookie.indexOf('=') + 1;
    const value = cookie.slice(symbol);
    setAuth(value);
  };

  useEffect(() => {
    setTimeout(getCookie, 1000);
  });

  return (
    <div className={styles.App}>
      <AppRoutes setAuth={setAuth} auth={auth} />
    </div>
  );
}

export default App;
