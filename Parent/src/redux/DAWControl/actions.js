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

export function dawControl__play() {
  return {
    type: DAW_CONTROL__PLAY
  };
}

export function dawControl__pause() {
  return {
    type: DAW_CONTROL__PAUSE
  };
}

export function dawControl__backward() {
  return {
    type: DAW_CONTROL__BACKWARD
  };
}

export function dawControl__setData(data) {
  return {
    type: DAW_CONTROL__SET_DATA,
    data
  }
}

export function dawControl__setSolo(payload) {
  return {
    type: DAW_CONTROL__SET_SOLO,
    payload
  }
}

export function dawControl__setMute(payload) {
  return {
    type: DAW_CONTROL__SET_MUTE,
    payload
  }
}

export function dawControl__setCurrentTime(payload) {
  return {
    type: DAW_CONTROL__SET_CURRENT_TIME,
    payload
  }
}

export function dawControl__setCurrentScrollLeft(payload) {
  return {
    type: DAW_CONTROL__SET_CURRENT_SCROLL_LEFT,
    payload
  }
}

export function dawControl__setActiveSession(payload) {
  return {
    type: DAW_CONTROL__SET_ACTIVE_SESSION,
    payload
  }
}

export function dawControl__setActiveSessions(payload) {
  return {
    type: DAW_CONTROL__SET_ACTIVE_SESSIONS,
    payload
  }
}

export function dawControl__setActiveSessionIsMute(payload) {
  return {
    type: DAW_CONTROL__SET_ACTION_SESSION__IS_MUTE_STATE,
    payload
  }
}

export function dawControl__setActiveSessionIsSolo(payload) {
  return {
    type: DAW_CONTROL__SET_ACTION_SESSION__IS_SOLO_STATE,
    payload
  }
}

export function dawControl__setActiveSessionData(payload) {
  return {
    type: DAW_CONTROL__SET_ACTIVE_SESSION_DATA,
    payload
  }
}

export function dawControl__updateActiveSessionData(payload) {
  return {
    type: DAW_CONTROL__UPDATE_ACTIVE_SESSION_DATA,
    payload
  }
}