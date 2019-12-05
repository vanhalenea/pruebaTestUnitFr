

//Cliente para obtener el top de 50 de artistas a traves del consumo sobre un api rest

var axios = require('axios');

async function clientTopTracks() {
    return axios.get('http://www.mocky.io/v2/5b8d6ec93300008600c159af');
}

module.exports = clientTopTracks;