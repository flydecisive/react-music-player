import { StyledBurger, StyledBurgerLine } from './burger';
import { useThemeContext } from '../../contexts/theme';

function Burger({ toggleBurgerClick }) {
  const { theme } = useThemeContext();
  return (
    <StyledBurger
      onClick={toggleBurgerClick}
      role="button"
      tabIndex={0}
      onKeyDown={toggleBurgerClick}
    >
      <StyledBurgerLine theme={{ theme }} />
      <StyledBurgerLine theme={{ theme }} />
      <StyledBurgerLine theme={{ theme }} />
    </StyledBurger>
  );
}

export default Burger;
