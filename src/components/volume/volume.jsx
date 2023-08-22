// Компонент для регулировки громкости

import { ReactComponent as VolumeSvg } from '../../assets/img/icon/volume.svg';
import {
  StyledBlock,
  StyledContent,
  StyledImage,
  StyledProgress,
  StyledPropgressLine,
} from './volume';
import { useThemeContext } from '../../contexts/theme';

function Volume({ setVolume }) {
  const { theme } = useThemeContext();

  return (
    <StyledBlock>
      <StyledContent>
        <StyledImage theme={{ theme }}>
          <VolumeSvg />
        </StyledImage>
        <StyledProgress>
          <StyledPropgressLine
            theme={{ theme }}
            className="_btn"
            type="range"
            name="range"
            onChange={(e) => {
              setVolume(e.target.value);
            }}
          />
        </StyledProgress>
      </StyledContent>
    </StyledBlock>
  );
}

export default Volume;
