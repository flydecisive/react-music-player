/* eslint-disable no-return-assign */
import { SET_PLAY_TRACK, TRACKS_IDS } from '../types/tracks';

export const setPlayTrack = (playTrack) => ({
  type: SET_PLAY_TRACK,
  payload: { playTrack },
});

export const setTracksIds = (tracksIds) => ({
  type: TRACKS_IDS,
  payload: { tracksIds },
});
