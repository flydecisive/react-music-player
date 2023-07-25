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
  setData,
  data,
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [loopClick, setLoopClick] = useState(false);

  const audioRef = useRef(null);

  const timeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

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
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = loopClick;
    if (data) {
      audioRef.current.currentTime = data;
      setData(0);
    }

    audioRef.current.addEventListener('timeupdate', () => {
      timeUpdate();
    });
  });

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
