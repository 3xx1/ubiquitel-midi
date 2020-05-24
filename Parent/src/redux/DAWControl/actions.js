import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD,
  DAW_CONTROL__SET_DATA
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