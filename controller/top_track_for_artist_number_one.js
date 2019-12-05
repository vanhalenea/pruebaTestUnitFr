
const clientTopTracks = require('../client/clientTopTracks');
const clientTopArtist = require('../client/clientTopArtist');

/***
 * @param {json} req - request de la llamada
 * @param {json} res - response, retorna los top ten tracks del artista numero uno en el ranking
 */

const topTrackForArtistNumberOne = async(req, res) => {
    try {
        const defPromises = [clientTopArtist(), clientTopTracks()];
        const resultPromises = await Promise.all(defPromises);
        const topArtists = resultPromises[0];

        const calltopTrackForArtistNumberOne = resultPromises[1];
        const topArtistNumberOne = topArtists.data.artists.artist[0];

        const topTenTEracks = calltopTrackForArtistNumberOne.data.toptracks.track
            .filter(t => t.artist.name.toLowerCase() === topArtistNumberOne.name.toLowerCase())
            .slice(0, 10);

        let topTracksFiltered = [];

        topTenTEracks.map(track => {
            let trackObj = {
                trackName: track.name,
                trackUrl: track.url,
                trackNumber: track['@attr'].rank,
                trackPicture: track.image.find(img => img.size === 'small')['#text'],
            }
            topTracksFiltered.push(trackObj);
        });

        const artistPictureUrl = topArtistNumberOne.image.find(t => t.size === 'large')['#text'];

        const returnObj = {
            artistName: topArtistNumberOne.name,
            artistPicture: artistPictureUrl,
            topTracks: topTracksFiltered

        }
        return res.status(200).json(returnObj);

    } catch (e) {
        res.statusCode = 500;
        res.json({ message: 'Could not retrieve data with internal error' });
    }
}

module.exports = { topTrackForArtistNumberOne };