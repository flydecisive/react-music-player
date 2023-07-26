// плеер для трэков
import { useEffect, useRef, useState } from 'react';

import PlayerControls from './player-controls/player-controls';
import TrackPlay from '../track-play/track-play';
import barStyles from '../bar/bar.module.css';

function Player({
  loading,
  playTrack,
  volume,
  setCurrentTime,
  setDuration,
  currentTimeUser,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
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
  };

  const notImplementedButton = () => {
    alert('Кнопка еще не реализована');
  };

  useEffect(() => {
    setDuration(audioRef.current.duration);
  });

  useEffect(() => {
    audioRef.current.currentTime = currentTimeUser;
  }, [currentTimeUser]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = loopClick;
  });

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
    });
  }, [audioRef.current?.currentTime]);

  const togglePlay = isPlaying ? handlePause : handleStart;

  return (
    <div className={`${barStyles.player} player`}>
      <audio controls autoPlay src={`${playTrack?.track_file}`} ref={audioRef}>
        <track kind="captions" />
      </audio>
      <PlayerControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        handleRepeat={handleRepeat}
        loopClick={loopClick}
        notImplementedButton={notImplementedButton}
      />
      <TrackPlay loading={loading} playTrack={playTrack} />
    </div>
  );
}

export default Player;
