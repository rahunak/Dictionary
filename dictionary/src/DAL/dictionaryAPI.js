import * as axios from "axios";
const instance = axios.create({
    baseURL: `https://api.dictionaryapi.dev/api/v2/`,
})

export const dictionaryApi = {
    getWord(searchParams ) {

        return instance.get(`entries/en/${searchParams.searchParams}`).then(response => {
            return response.data;
        });
    },
}


