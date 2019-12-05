const
    expect = require('chai').expect,
    proxyquire = require('proxyquire'),
    Response = require('mock-express-response');
    topArtistMocks = require('../mocks/topArtistMocks');
    topTrackMocks = require('../mocks/topTrackMocks');

let req, res;

describe('Ecenario topTrackForArtistNumberOne', async () => {
    beforeEach(async () => {
        req = {};
        res = new Response();
    });

    it('Resultado correcto cuando response de topTrackForArtistNumberOne tiene statusCode 200', async () => {
        const topArtistStub =
            async () => {
                return topTrackMocks.dataArtist
            };

        const topTrackStub =
            async () => {
                return topTrackMocks.dataTopTrack
            };

        const topTrackForArtists = proxyquire('../controller/top_track_for_artist_number_one.js', {
            '../client/clientTopArtist': topArtistStub,
            '../client/clientTopTracks': topTrackStub,
        });
        await topTrackForArtists.topTrackForArtistNumberOne(req, res);
        expect(res.statusCode).to.be.equal(200);
    });

    it('Resultado correcto cuando response de topTrackForArtistNumberOne tiene errores y Arroja status 500', async () => {
        const topArtistStub =  async () => { return null };

        const topTrackStub = async () => { return null };

        const topTrackForArtists = proxyquire('../controller/top_track_for_artist_number_one.js', {
            '../client/clientTopArtist': topArtistStub,
            '../client/clientTopTracks': topTrackStub,
        });
        await topTrackForArtists.topTrackForArtistNumberOne(req, res);
        expect(res.statusCode).to.be.equal(500);
    });

    it('Simular Client Top Tracks', async () => {
        const clientTopTracks = proxyquire('../client/clientTopTracks.js',{
            'axios': {
               get() {
                   return 'tested'
               }
            }
        });
        const result = await clientTopTracks();
        expect(result).to.be.equal('tested');
    });


});
