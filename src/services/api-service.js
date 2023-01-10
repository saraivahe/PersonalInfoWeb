import axios from 'axios'

async function getPersonalInfoFromApi() {
  const response = await axios.get('https://personal-info-api.com/api/PersonalInformation');
  return response.data;
}

export { getPersonalInfoFromApi }