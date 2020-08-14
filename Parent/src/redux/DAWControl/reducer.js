import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD,
  DAW_CONTROL__SET_DATA,
  DAW_CONTROL__SET_CURRENT_TIME,
  DAW_CONTROL__SET_CURRENT_SCROLL_LEFT
} from './constants';

const initialState = {
  isPlaying: false,
  audioDuration: 0,
  currentTime: 0,
  currentScrollLeft: 0,
  zoom: 0
};

function DAWControlReducer(state = initialState, action) {
  switch(action.type) {
    case DAW_CONTROL__PLAY:
      return {
        ...state,
        isPlaying: true
      };
    
    case DAW_CONTROL__PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    
    case DAW_CONTROL__BACKWARD:
      return {
        ...state
      }
    
    case DAW_CONTROL__SET_DATA:
      return {
        ...state,
        audioDuration: action.data.duration || 0
      }
    
    case DAW_CONTROL__SET_CURRENT_TIME: 
      return {
        ...state,
        currentTime: action.payload
      }
    
    case DAW_CONTROL__SET_CURRENT_SCROLL_LEFT:
      return {
        ...state,
        currentScrollLeft: action.payload
      }
    
    default:
      return state;
  }
}

export default DAWControlReducer;
