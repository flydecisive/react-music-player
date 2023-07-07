import Nav from '../../components/nav/nav';
import Centerblock from '../../components/centerblock/centerblock';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import Bar from '../../components/bar/bar';
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
