import { ReactComponent as Watch } from '../../../assets/img/icon/watch.svg';

import { StyledTitle, StyledCol, StyledSvg } from './playlist-title';
import { useThemeContext } from '../../../contexts/theme';

function PlaylistTitle() {
  const { theme } = useThemeContext();
  return (
    <StyledTitle theme={{ theme }}>
      <StyledCol theme={{ theme }} className="col01">
        ИСПОЛНИТЕЛЬ
      </StyledCol>
      <StyledCol theme={{ theme }} className="col02">
        Трек
      </StyledCol>
      <StyledCol theme={{ theme }} className="col03">
        АЛЬБОМ
      </StyledCol>
      <StyledCol theme={{ theme }} className="col04">
        <StyledSvg>
          <Watch />
        </StyledSvg>
      </StyledCol>
    </StyledTitle>
  );
}

export default PlaylistTitle;
