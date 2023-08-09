function strPadLeft(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

export const secondsToTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const finalTime = `${strPadLeft(minutes, '0', 2)}:${strPadLeft(
    seconds,
    '0',
    2
  )}`;
  return finalTime;
};

export const createFilterList = (filterElements, id) => {
  let result;
  switch (id) {
    case 0:
      result = filterElements?.map((filterElement) => filterElement.author);
      break;
    case 1:
      result = filterElements?.map(
        (filterElement) => filterElement.release_date
      );
      break;
    case 2:
      result = filterElements?.map((filterElement) => filterElement.genre);
      break;
    default:
      result = '';
      break;
  }

  const filteredResult = result?.filter(
    (item, i) => result.indexOf(item) === i
  );

  return filteredResult;
};

export function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  const newArr = array;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [newArr[currentIndex], newArr[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return newArr;
}

export const findNextTrackId = (id, tracks) => {
  let nextTrack = '';
  for (let i = 0; i < tracks.length; i += 1) {
    if (tracks[i].id === id) {
      nextTrack = tracks[i];
    }
  }
  return nextTrack;
};

export const findPrevTrackId = (id, tracks) => {
  let prevTrack = '';
  for (let i = 0; i < tracks.length; i += 1) {
    if (tracks[i].id === id) {
      prevTrack = tracks[i];
    }
  }
  return prevTrack;
};
