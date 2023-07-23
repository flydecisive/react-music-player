async function getTracks() {
  const response = await fetch('https://painassasin.online/catalog/track/all/');

  if (!response.ok) {
    throw new Error('Ошибка сервера');
  }

  const data = await response.json();
  return data;
}

export default getTracks;
