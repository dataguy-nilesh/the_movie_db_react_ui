import client from './client';

const api_key = 'b436367956858b85497a37284b35b108';

// start Office ........
const get_upcoming_movies = async (listing) => {
    return client.get(listing.endPoint);
};

// End Office ........

export default {
    get_upcoming_movies,
};

// const get_upcoming_movies1 = async (listing) => {
//     const data = new FormData();
//     data.append('api_key', api_key);
//     return client.get(listing.endPoint, data, {
//         headers: { api_key: 'b436367956858b85497a37284b35b108' },
//     });
// };
