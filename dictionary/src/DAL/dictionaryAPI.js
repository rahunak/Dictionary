import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/',
});

const dictionaryApi = {
  getWord(searchParams) {
    return instance.get(`entries/en/${searchParams.searchParams}`).then((response) => response.data);
  },
};
export default dictionaryApi;
