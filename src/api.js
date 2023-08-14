const path = 'https://painassasin.online';

// получение избранных треков
export async function getFavoritesTracks(accessToken) {
  const response = await fetch(`${path}/catalog/track/favorite/all/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// Удалить трек в избранное
export async function deleteTrackInFavorites(accessToken, trackId) {
  const response = await fetch(`${path}/catalog/track/${trackId}/favorite/`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// Добавить трек в избранное
export async function addTrackInFavorites(accessToken, trackId) {
  const response = await fetch(`${path}/catalog/track/${trackId}/favorite/`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// Обновить access токен
export async function getAccessToken(refreshToken) {
  const response = await fetch(`${path}/user/token/refresh/`, {
    method: 'POST',
    body: JSON.stringify({
      refresh: `${refreshToken}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// Запрос токенов
export async function getToken(login, password) {
  const response = await fetch(`${path}/user/token/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });
  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// регистрация нового пользователя
export async function registerUser(login, password) {
  const response = await fetch(`${path}/user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
      username: `${login}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

// авторизация пользователя
export async function authUser(login, password) {
  const response = await fetch(`${path}/user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email: `${login}`,
      password: `${password}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok && !response.status === '400') {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}
