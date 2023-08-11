/* eslint-disable default-param-last */
import { SET_PLAY_TRACK, TRACKS_IDS } from '../actions/types/tracks';

const initialTracks = {
  tracksIds: [],
  playTrack: {},
};

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case TRACKS_IDS: {
      const { tracksIds } = action.payload;

      return {
        ...state,
        tracksIds,
      };
    }
    case SET_PLAY_TRACK: {
      const { playTrack } = action.payload;

      return {
        ...state,
        playTrack,
      };
    }

    default:
      return state;
  }
}

export default tracksReducer;
