// плеер для трэков

import PlayerControls from './player-controls/player-controls';
import TrackPlay from '../track-play/track-play';
import barStyles from '../bar/bar.module.css';

function Player({ loading }) {
  return (
    <div className={`${barStyles.player} player`}>
      <PlayerControls />
      <TrackPlay loading={loading} />
    </div>
  );
}

export default Player;
