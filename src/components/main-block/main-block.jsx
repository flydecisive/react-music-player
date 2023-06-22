import Nav from '../nav/nav';
import Centerblock from '../centerblock/centerblock';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Bar from '../bar/bar';
import styles from './main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock />
      <Sidebar />
      <Bar />
      <Footer />
    </main>
  );
}

export default Main;
