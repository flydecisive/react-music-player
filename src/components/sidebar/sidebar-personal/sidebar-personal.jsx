// компонент для пользователя

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Exit } from '../../../assets/img/icon/exit.svg';
import { useLoginContext } from '../../../contexts/login';
import { useUserContext } from '../../../contexts/user';
import { useThemeContext } from '../../../contexts/theme';
import {
  StyledPersonal,
  StyledName,
  StyledAvatar,
  StyledButton,
} from './sidebar-personal';

function SidebarPersonal() {
  const { theme } = useThemeContext();
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const { toggleLogout } = useLoginContext();
  const { user } = useUserContext();
  let userName = user.username;
  const index = userName.lastIndexOf('@');
  userName = userName.substring(0, index);

  useEffect(() => {
    if (logout === true) {
      toggleLogout(true);
      navigate('/login');
    }
  }, [logout]);

  return (
    <StyledPersonal>
      <StyledName theme={{ theme }}>{userName}</StyledName>
      <StyledButton
        type="submit"
        onClick={() => {
          setLogout(true);
        }}
      >
        <StyledAvatar theme={{ theme }}>
          <Exit />
        </StyledAvatar>
      </StyledButton>
    </StyledPersonal>
  );
}

export default SidebarPersonal;
