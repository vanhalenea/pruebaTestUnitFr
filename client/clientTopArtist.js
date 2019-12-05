//Cliente para obtener el top de 50 de artistas a traves del consumo sobre un api rest

var axios = require('axios');

async function clientTopArtist() {
    return axios.get('http://www.mocky.io/v2/5b8d6e283300005400c159ae');
}

module.exports = clientTopArtist;