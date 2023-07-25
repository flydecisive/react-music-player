// плеер для трэков
import { useEffect, useRef, useState } from 'react';

import PlayerControls from './player-controls/player-controls';
import TrackPlay from '../track-play/track-play';
import barStyles from '../bar/bar.module.css';

function Player({ loading, playTrack, volume }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loopClick, setLoopClick] = useState(false);

  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleRepeat = () => {
    setLoopClick(!loopClick);
    audioRef.current.loop = loopClick;
  };

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  });

  const togglePlay = isPlaying ? handlePause : handleStart;

  return (
    <div className={`${barStyles.player} player`}>
      <audio controls src={`${playTrack?.track_file}`} ref={audioRef}>
        <track kind="captions" />
      </audio>
      <PlayerControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        handleRepeat={handleRepeat}
      />
      <TrackPlay loading={loading} playTrack={playTrack} />
    </div>
  );
}

export default Player;
