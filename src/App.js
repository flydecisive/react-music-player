import { useEffect, useState } from 'react';
import AppRoutes from './routes';
// import Main from './pages/main/main';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  return (
    <div className={styles.App}>
      <AppRoutes loading={loading} />
      {/* <Main loading={loading} /> */}
    </div>
  );
}

export default App;
