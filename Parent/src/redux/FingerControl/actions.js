import {
  FINGER_CONTROL__SEND,
  FINGER_CONTROL__TAP,
  FINGER_CONTROL__TAP_CLEAR
} from './constants';

export function fingerControl__send(address, intensity) {
  return {
    type: FINGER_CONTROL__SEND,
    address,
    intensity
  };
}

export function fingerControl__tap(id) {
  return {
    type: FINGER_CONTROL__TAP,
    id
  };
}

export function fingerControl__tap_clear() {
  return {
    type: FINGER_CONTROL__TAP_CLEAR
  };
}