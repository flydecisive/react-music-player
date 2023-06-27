import { useEffect, useState } from 'react';
import Main from './components/main-block/main-block';
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  return (
    <div className={styles.App}>
      <Main loading={loading} />
    </div>
  );
}

export default App;
