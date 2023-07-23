// плеер для трэков

import PlayerControls from './player-controls/player-controls';
import TrackPlay from '../track-play/track-play';
import barStyles from '../bar/bar.module.css';

function Player({ loading, playTrack }) {
  return (
    <div className={`${barStyles.player} player`}>
      <PlayerControls />
      <TrackPlay loading={loading} playTrack={playTrack} />
    </div>
  );
}

export default Player;
