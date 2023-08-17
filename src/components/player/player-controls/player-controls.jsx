/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactComponent as Prev } from '../../../assets/img/icon/prev.svg';
import { ReactComponent as Play } from '../../../assets/img/icon/play.svg';
import { ReactComponent as Next } from '../../../assets/img/icon/next.svg';
import { ReactComponent as Repeat } from '../../../assets/img/icon/repeat.svg';
import { ReactComponent as Shuffle } from '../../../assets/img/icon/shuffle.svg';
import { ReactComponent as Pause } from '../../../assets/img/icon/pause.svg';
import {
  StyledControls,
  StyledButton,
  StyledPrevSvg,
  StyledPlaySvg,
  StyledNextSvg,
  StyledRepeatSvg,
  StyledShuffleSvg,
  StyledActiveSvg,
} from './player-controls';
import { useThemeContext } from '../../../contexts/theme';

function PlayerControls({
  isPlaying,
  togglePlay,
  handleRepeat,
  loopClick,
  toggleShuffle,
  toggleNext,
  togglePrev,
  shuffleClick,
}) {
  const { theme } = useThemeContext();

  return (
    <StyledControls>
      <StyledButton onClick={togglePrev} role="button" tabIndex={0}>
        <StyledPrevSvg theme={{ theme }}>
          <Prev />
        </StyledPrevSvg>
      </StyledButton>

      <StyledButton onClick={togglePlay} tabIndex={0} role="button">
        <StyledPlaySvg theme={{ theme }}>
          {isPlaying ? <Pause /> : <Play />}
        </StyledPlaySvg>
      </StyledButton>

      <StyledButton onClick={toggleNext} role="button" tabIndex={0}>
        <StyledNextSvg theme={{ theme }}>
          <Next />
        </StyledNextSvg>
      </StyledButton>

      <StyledButton
        className="_btn-icon"
        onClick={handleRepeat}
        role="button"
        tabIndex={0}
      >
        {loopClick ? (
          <StyledActiveSvg loop={{ loopClick }} theme={{ theme }}>
            <Repeat />
          </StyledActiveSvg>
        ) : (
          <StyledRepeatSvg theme={{ theme }}>
            <Repeat />
          </StyledRepeatSvg>
        )}
      </StyledButton>

      <StyledButton
        className="_btn-icon"
        onClick={toggleShuffle}
        role="button"
        tabIndex={0}
      >
        {shuffleClick ? (
          <StyledActiveSvg theme={{ theme }}>
            <Shuffle />
          </StyledActiveSvg>
        ) : (
          <StyledShuffleSvg theme={{ theme }}>
            <Shuffle />
          </StyledShuffleSvg>
        )}
      </StyledButton>
    </StyledControls>
  );
}

export default PlayerControls;
