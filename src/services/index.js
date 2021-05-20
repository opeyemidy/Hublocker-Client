const baseUrl = 'https://enigmatic-waters-03857.herokuapp.com/api';

const getinitLockers = async () => {
  const response = await fetch(`${baseUrl}/lockers`);
  const data = await response.json();
  return data;
};
const getSearchedLockers = async (value) => {
  const response = await fetch(`${baseUrl}/lockers/${value.toLowerCase()}`);
  const data = await response.json();
  return data;
};
export default {
  getinitLockers,
  getSearchedLockers,
};
