// import styles from './dot.module.css';
import { StyledWrapper, StyledDot } from './dot';
import { useThemeContext } from '../../contexts/theme';

function Dot({ isPlaying }) {
  const { theme } = useThemeContext();
  return (
    <StyledWrapper theme={{ theme }}>
      <StyledDot data-playing={isPlaying} />
    </StyledWrapper>
  );
}

export default Dot;
