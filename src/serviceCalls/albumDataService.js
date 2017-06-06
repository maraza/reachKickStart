var root = 'https://jsonplaceholder.typicode.com';

import fc from '../shared/fetchinterceptor';
//if callback provided call the the cb with data
export let getAlbum = function (cb) {
    fc.get(root + '/photos')
        .then(data => {
            if (cb) {
                cb(data);
            }
        })
        .catch(ex => {
            console.log('there is an api error', ex);
        })
}