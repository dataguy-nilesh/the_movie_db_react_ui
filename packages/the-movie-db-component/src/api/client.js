import { create } from 'apisauce';

const api_key = 'b436367956858b85497a37284b35b108';

const apiClient = create({
    // don't change this URL
    baseURL: 'https://api.themoviedb.org/3/',
});

export default apiClient;
