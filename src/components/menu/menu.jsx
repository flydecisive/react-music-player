/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLoginContext } from '../../contexts/login';
import { ReactComponent as LightTheme } from '../../assets/img/icon/light-theme.svg';
import { ReactComponent as DarkTheme } from '../../assets/img/icon/dark-theme.svg';
import { useThemeContext } from '../../contexts/theme';

import {
  StyledMenu,
  StyledList,
  StyledItem,
  StyledLink,
  StyledButton,
} from './menu';

function Menu() {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useThemeContext();

  const { toggleLogout } = useLoginContext();

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true);
      navigate('/login');
    }
  }, [logout]);

  return (
    <StyledMenu>
      <StyledList>
        <StyledItem>
          <StyledLink theme={{ theme }} to="/">
            Главное
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink theme={{ theme }} to="/favorites">
            Мой плейлист
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledButton
            theme={{ theme }}
            role="button"
            tabIndex={0}
            onClick={() => setLogout(true)}
          >
            Выйти
          </StyledButton>
        </StyledItem>
        <StyledItem>
          <StyledButton
            theme={{ theme }}
            role="button"
            tabIndex={0}
            onClick={() => setTheme(!theme)}
          >
            {theme ? <LightTheme /> : <DarkTheme />}
          </StyledButton>
        </StyledItem>
      </StyledList>
    </StyledMenu>
  );
}

export default Menu;
