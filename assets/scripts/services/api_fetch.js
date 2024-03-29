const BASE_URL = 'http://localhost:3000'

async function apiFetch(...args) {
  const response = await fetch(...args);

  if(!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }
  if(response.status !== 204) {
    return await response.json();
  }
  return response.text;
}

export { BASE_URL, apiFetch };
