import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD,
  DAW_CONTROL__SET_SOLO,
  DAW_CONTROL__SET_MUTE,
  DAW_CONTROL__SET_DATA,
  DAW_CONTROL__SET_CURRENT_TIME,
  DAW_CONTROL__SET_CURRENT_SCROLL_LEFT,
  DAW_CONTROL__SET_ACTIVE_SESSION,
  DAW_CONTROL__SET_ACTIVE_SESSIONS,
  DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE,
  DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE,
  DAW_CONTROL__SET_ACTIVE_SESSION_DATA,
  DAW_CONTROL__UPDATE_ACTIVE_SESSION_DATA
} from './constants';

const initialState = {
  isPlaying: false,
  activeSessions: [],
  audioDuration: 0,
  currentTime: 0,
  currentScrollLeft: 0,
  zoom: 0,
  mute: [],
  solo: []
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
        ...state,
        isPlaying: false,
        currentTime: 0,
        currentScrollLeft: 0
      }
    
    case DAW_CONTROL__SET_SOLO:
      return {
        ...state,
        solo: state.solo.find(m => m === action.payload) ? state.solo.filter(m => m !== action.payload) : [...state.solo, action.payload]
      }
    
    case DAW_CONTROL__SET_MUTE:
      return {
        ...state,
        mute: state.mute.find(m => m === action.payload) ? state.mute.filter(m => m !== action.payload) : [...state.mute, action.payload]
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
    
    case DAW_CONTROL__SET_ACTIVE_SESSION:
      return {
        ...state,
        activeSessions: [...state.activeSessions, action.payload]
      }
    
    case DAW_CONTROL__SET_ACTIVE_SESSIONS:
      return {
        ...state,
        activeSessions: action.payload
      }
    
    case DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE:
      return {
        ...state,
        activeSessions: state.activeSessions.map((session) => {
          if (session.id === action.payload.id) {
            session.isMute = action.payload.flag;
          }
          return session;
        })        
      }
    
    case DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE:
      return {
        ...state,
        activeSessions: state.activeSessions.map((session) => {
          if (session.id === action.payload.id) {
            session.isSolo = action.payload.flag;
          }
          return session;
        })
      }

    default:
      return state;
  }
}

export default DAWControlReducer;
