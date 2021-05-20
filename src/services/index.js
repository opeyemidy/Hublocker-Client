const baseUrl = '/api/lockers';

const getinitLockers = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
};
const getSearchedLockers = async (value) => {
  const response = await fetch(`${baseUrl}/${value.toLowerCase()}`);
  const data = await response.json();
  return data;
};
export default {
  getinitLockers,
  getSearchedLockers,
};
