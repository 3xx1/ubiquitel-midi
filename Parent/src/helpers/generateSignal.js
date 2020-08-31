export function generateFingerSignal(data, offset = 0) {
  if (data.length < 1) return null;

  const signal = [];

  data.map(datum => {
    if (datum.time - offset > 0) {
      signal.push({
        action: 'FINGER__UP',
        t: (datum.time - offset) * 1000 - datum.volume
      });
      signal.push({
        action: 'FINGER__DOWN',
        t: (datum.time - offset) * 1000
      });
    }
  });
  
  return signal;
}