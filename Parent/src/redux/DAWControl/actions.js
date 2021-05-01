import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD,
  DAW_CONTROL__SET_SOLO,
  DAW_CONTROL__SET_MUTE,
  DAW_CONTROL__SET_DATA,
  DAW_CONTROL__SET_CURRENT_TIME,
  DAW_CONTROL__SET_CURRENT_SCROLL_LEFT
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