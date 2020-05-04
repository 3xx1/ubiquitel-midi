import {
  DAW_CONTROL__PLAY,
  DAW_CONTROL__PAUSE,
  DAW_CONTROL__BACKWARD
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
