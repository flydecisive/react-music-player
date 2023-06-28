import Nav from '../nav/nav';
import Centerblock from '../centerblock/centerblock';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import Bar from '../bar/bar';
import styles from './main.module.css';

function Main({ loading }) {
  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock loading={loading} />
      <Sidebar loading={loading} />
      <Bar loading={loading} />
      <Footer />
    </main>
  );
}

export default Main;
