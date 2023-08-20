export function strPadLeft(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

// форматирование даты
// function formatDate(dates) {
//   const newDates = [];
//   dates.forEach((date) => {
//     if (date) {
//       const newDate = date.split('-').reverse().join('.');
//       if (!newDates.includes(newDate)) {
//         newDates.push(newDate);
//       }
//     }
//   });

//   return newDates.sort();
// }

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

export const createFavorites = (items, currUser) => {
  const userId = currUser?.id;
  const favoritesTracks = [];
  if (items) {
    items.forEach((item) => {
      for (let i = 0; i < item.stared_user.length; i += 1) {
        if (item.stared_user[i].id === userId) {
          favoritesTracks.push(item);
        }
      }
    });
  }

  return favoritesTracks;
};

// фильтры плейлиста
export function getFilteredTracks(arr, values) {
  const findList = [];

  for (let i = 0; i < values.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j].author.includes(values[i])) {
        findList.push(arr[j]);
      } else if (arr[j].genre.includes(values[i])) {
        findList.push(arr[j]);
      }
    }
  }

  return findList;
}

// Фильтр плейлиста, если одновременно выбран и исполнитель и жанр
export function getCombineFilteredTracks(arr, values) {
  const findAuthorsList = getFilteredTracks(arr, values.name);
  const findList = [];

  for (let i = 0; i < findAuthorsList.length; i += 1) {
    for (let j = 0; j < values.genre.length; j += 1) {
      if (findAuthorsList[i].genre.includes(values.genre[j])) {
        findList.push(findAuthorsList[i]);
      }
    }
  }

  return findList;
}

// Поиск по плейлисту
export function getSearchingTracks(arr, value) {
  const findList = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name.toLowerCase().includes(value)) {
      findList.push(arr[i]);
    }
  }

  return findList;
}

// Фильтр плейлиста по дате
export function getFilterByDate(arr, values) {
  const dates = arr.map((elem) => elem.release_date);
  const index = dates.indexOf(null);
  dates.splice(index, 1);
  const value = values[0];
  let findList = [];

  if (value === 'default') {
    findList = arr;
  } else if (value === 'old') {
    const tracksOldToNew = dates.sort((a, b) => new Date(a) - new Date(b));
    for (let i = 0; i < tracksOldToNew.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j].release_date) {
          if (arr[j].release_date.includes(tracksOldToNew[i])) {
            findList.push(arr[j]);
          }
        }
      }
    }
  } else if (value === 'new') {
    const tracksNewToOld = dates.sort((a, b) => new Date(b) - new Date(a));
    for (let i = 0; i < tracksNewToOld.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j].release_date) {
          if (arr[j].release_date.includes(tracksNewToOld[i])) {
            findList.push(arr[j]);
          }
        }
      }
    }
  }

  return findList;
}
//

export const createFilterList = (filterElements, id) => {
  let result;
  switch (id) {
    case 0:
      result = filterElements?.map((filterElement) => filterElement.author);
      break;
    case 1:
      result = filterElements;
      return result;
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
