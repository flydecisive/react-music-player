function strPadLeft(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

const secondsToTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const finalTime = `${strPadLeft(minutes, '0', 2)}:${strPadLeft(
    seconds,
    '0',
    2
  )}`;
  return finalTime;
};

export default secondsToTime;
