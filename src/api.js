const path = 'https://painassasin.online';

export async function getTracks() {
  const response = await fetch(`${path}/catalog/track/all/`);

  if (!response.ok) {
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
