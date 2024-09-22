import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'eeedc454d3msh298b9597b92a15cp130798jsnd3447fd91099',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
  
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
};
