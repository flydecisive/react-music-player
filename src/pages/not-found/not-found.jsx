import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../contexts/theme';
import {
  StyledWrapper,
  StyledContent,
  StyledTitle,
  StyledHeading,
  StyledText,
  StyledButton,
} from './not-found';
import smile from '../../assets/img/crying.png';

function NotFound() {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <StyledWrapper theme={{ theme }}>
      <StyledContent>
        <StyledTitle theme={{ theme }}>404</StyledTitle>
        <StyledHeading theme={{ theme }}>
          Страница не найдена
          <img src={smile} alt="smile" />
        </StyledHeading>
        <StyledText theme={{ theme }}>
          Возможно, она была удалена <br /> или перенесена на другой адрес
        </StyledText>
        <StyledButton onClick={() => navigate('/')}>
          Вернуться на главную
        </StyledButton>
      </StyledContent>
    </StyledWrapper>
  );
}

export default NotFound;
