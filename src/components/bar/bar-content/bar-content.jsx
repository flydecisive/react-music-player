import { useState } from 'react';
import { secondsToTime } from '../../../consts/helpers';

import Player from '../../player/player.jsx';
import Volume from '../../volume/volume.jsx';
import ProgressBar from '../../progress-bar/progress-bar';
import {
  StyledContent,
  StyledTimeDuration,
  StyledPlayerBlock,
} from './bar-content';
import { useThemeContext } from '../../../contexts/theme';

function BarContent({ loading }) {
  const { theme } = useThemeContext();
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTimeUser, setCurrentTimeUser] = useState(0);

  return (
    <StyledContent>
      <StyledTimeDuration theme={{ theme }}>
        {`${secondsToTime(Math.floor(currentTime))} / ${secondsToTime(
          Math.floor(duration)
        )}`}
      </StyledTimeDuration>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        setCurrentTime={setCurrentTime}
        setCurrentTimeUser={setCurrentTimeUser}
      />

      <StyledPlayerBlock>
        <Player
          loading={loading}
          volume={volume}
          setCurrentTime={setCurrentTime}
          setDuration={setDuration}
          currentTime={currentTime}
          currentTimeUser={currentTimeUser}
        />

        <Volume setVolume={setVolume} />
      </StyledPlayerBlock>
    </StyledContent>
  );
}

export default BarContent;
