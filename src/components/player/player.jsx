/* eslint-disable no-lonely-if */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
// плеер для трэков
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPlayTrack,
  setTracksIds,
} from '../../store/actions/creators/tracks';

import {
  shuffle,
  findNextTrackId,
  findPrevTrackId,
} from '../../consts/helpers';
import { useIsPlayingContext } from '../../contexts/isPlaying';
import { useGetAllTracksQuery } from '../../services/tracks';
// import { useTokenContext } from '../../contexts/token';
// import { useAddFavoritesTracksMutation } from '../../services/tracks';

import PlayerControls from './player-controls/player-controls';
import TrackPlay from '../track-play/track-play';
import barStyles from '../bar/bar.module.css';

function Player({
  loading,
  volume,
  setCurrentTime,
  setDuration,
  currentTimeUser,
  currentTime,
}) {
  const { isPlaying, toggleIsPlaying } = useIsPlayingContext();
  const { data } = useGetAllTracksQuery();
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [loopClick, setLoopClick] = useState(false);
  const [shuffleClick, setShuffleClick] = useState(false);
  // const token = useTokenContext();
  // console.log(token);
  const playTrack = useSelector((store) => {
    if (!store.tracks.playTrack) {
      return null;
    }
    return store.tracks.playTrack;
  });
  const tracksIds = useSelector((store) => store.tracks.tracksIds);

  const handleStart = () => {
    audioRef.current.play();
    if (!isPlaying) {
      toggleIsPlaying(true);
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    toggleIsPlaying(false);
  };

  const handleRepeat = () => {
    setLoopClick(!loopClick);
  };

  const toggleShuffle = () => {
    setShuffleClick(!shuffleClick);
    let ids = data.map((track) => track.id);
    if (!shuffleClick) {
      ids = shuffle(ids);
      dispatch(setTracksIds(ids));
    } else {
      ids = data.map((track) => track.id);
      dispatch(setTracksIds(ids));
    }
  };

  const toggleNext = () => {
    toggleIsPlaying(true);
    const index = tracksIds.indexOf(playTrack.id);
    let nextId;
    if (index === data.length - 1) {
      nextId = tracksIds[data.length - 1];
    } else {
      nextId = tracksIds[index + 1];
    }

    dispatch(setPlayTrack(findNextTrackId(nextId, data)));
  };

  const togglePrev = () => {
    toggleIsPlaying(true);
    const index = tracksIds.indexOf(playTrack.id);
    let prevId;
    if (index === 0) {
      prevId = tracksIds[0];
    } else {
      prevId = tracksIds[index - 1];
    }

    dispatch(setPlayTrack(findPrevTrackId(prevId, data)));
  };

  useEffect(() => {
    if (currentTime === audioRef.current.duration && loopClick === false) {
      const index = tracksIds.indexOf(playTrack.id);
      let nextId;
      if (index === data.length - 1) {
        nextId = tracksIds[data.length - 1];
      } else {
        nextId = tracksIds[index + 1];
      }

      dispatch(setPlayTrack(findNextTrackId(nextId, data)));
    }
  }, [currentTime]);

  useEffect(() => {
    audioRef.current.currentTime = currentTimeUser;
  }, [currentTimeUser]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = loopClick;
  }, [loopClick, volume]);

  useEffect(() => {
    const ref = audioRef.current;
    const handleTimeUpdateEvent = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };

    ref.addEventListener('timeupdate', handleTimeUpdateEvent);

    return () => {
      ref.removeEventListener('timeupdate', handleTimeUpdateEvent);
    };
  }, []);

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
        toggleShuffle={toggleShuffle}
        toggleNext={toggleNext}
        togglePrev={togglePrev}
        shuffleClick={shuffleClick}
      />
      <TrackPlay loading={loading} playTrack={playTrack} />
    </div>
  );
}

export default Player;
