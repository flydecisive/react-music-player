/* eslint-disable import/no-extraneous-dependencies */
import Nav from '../../components/nav/nav';
import Centerblock from '../../components/centerblock/centerblock';
import Sidebar from '../../components/sidebar/sidebar';
import Footer from '../../components/footer/footer';
import styles from './main.module.css';

function Main({ errorMessage, loading }) {
  return (
    <main className={styles.main}>
      <Nav />
      <Centerblock loading={loading} errorMessage={errorMessage} />
      <Sidebar loading={loading} />
      <Footer />
    </main>
  );
}

export default Main;
