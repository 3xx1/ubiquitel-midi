import {
  FINGER_CONTROL__SEND
} from './constants';

export function fingerControl__send(address, intensity) {
  return {
    type: FINGER_CONTROL__SEND,
    address,
    intensity
  };
}
