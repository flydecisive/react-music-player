import Burger from '../burger/burger';
import Menu from '../menu/menu';
import styles from './nav.module.css';
import logoStyles from './logo.module.css';
import logo from '../../assets/img/logo.png';
import mainNavStyles from '../main-block/main.module.css';

function Nav() {
  return (
    <nav className={`${mainNavStyles.nav} nav`}>
      <div className={`${styles.logo} logo`}>
        <img className={logoStyles.image} src={logo} alt="logo" />
      </div>
      <Burger />
      <Menu />
    </nav>
  );
}

export default Nav;
