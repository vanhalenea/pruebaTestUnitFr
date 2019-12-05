//Logica de negocio para obtener el top 1 de artistas
var clientTopArtist = require('../client/clientTopArtist');

/***
 * @param {json} req - request de la llamada
 * @param {json} res - response, retorna el artista top 10 del ranking
 */

const topArtist = async(req, res) => {
    try {
        const callclientTopArtist = await clientTopArtist();

        callclientTopArtist.data = callclientTopArtist.data.artists.artist[0];
        return res.status(200).json(callclientTopArtist.data);

    } catch (e) {
        res.statusCode = 500;
        res.json({ message: 'Could not retrieve data with internal error' });
    }
}

module.exports = { topArtist };