import { useState } from 'react';
import Burger from '../burger/burger.jsx';
import Menu from '../menu/menu.jsx';
// import styles from './nav.module.css';
import { StyledNav, StyledLogo } from './nav';
import logoStyles from './logo.module.css';
import logo from '../../assets/img/logo.png';
import darkLogo from '../../assets/img/black-logo.png';
import { useThemeContext } from '../../contexts/theme';

function Nav() {
  const [burgerClicked, setBurgerClicked] = useState(false);
  const { theme } = useThemeContext();

  const toggleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
  };
  return (
    <StyledNav theme={{ theme }}>
      <StyledLogo>
        <img
          className={logoStyles.image}
          src={theme ? darkLogo : logo}
          alt="logo"
        />
      </StyledLogo>
      <Burger toggleBurgerClick={toggleBurgerClick} />
      {burgerClicked ? <Menu /> : null}
    </StyledNav>
  );
}

export default Nav;
