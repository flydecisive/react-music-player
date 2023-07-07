import { useState } from 'react';
import Burger from '../burger/burger';
import Menu from '../menu/menu';
import styles from './nav.module.css';
import logoStyles from './logo.module.css';
import logo from '../../assets/img/logo.png';
import mainNavStyles from '../../pages/main/main.module.css';

function Nav() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const toggleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
  };
  return (
    <nav className={`${mainNavStyles.nav} nav`}>
      <div className={`${styles.logo} logo`}>
        <img className={logoStyles.image} src={logo} alt="logo" />
      </div>
      <Burger toggleBurgerClick={toggleBurgerClick} />
      {burgerClicked ? <Menu /> : null}
    </nav>
  );
}

export default Nav;
