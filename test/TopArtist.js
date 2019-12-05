const
    expect = require('chai').expect,
    proxyquire = require('proxyquire'),
    Response = require('mock-express-response');
    topArtistMocks = require('../mocks/topArtistMocks');

let req, res;

describe('Ecenario clientTopArtist', async () => {
    beforeEach(async () => {
        req = {};
        res = new Response();
    });

    it('Resultado correcto cuando response de clientTopArtist tiene statusCode 200', async () => {
        const topArtistStub =
            async () => {
                return topArtistMocks.dataArtist
            };

        const topArtist = proxyquire('../controller/top_artist.js', {
            '../client/clientTopArtist': topArtistStub
        });

        await topArtist.topArtist(req, res);
        expect(res.statusCode).to.be.equal(200);
    });

    it('Resultado correcto cuando response de clientTopArtist tiene errores y Arroja status 500', async () => {
        const topArtistStub = async () => { return null };
        const topArtist = proxyquire('../controller/top_artist.js', {
            '../client/clientTopArtist': topArtistStub
        });

        await topArtist.topArtist(req, res);
        expect(res.statusCode).to.be.equal(500);
    });

    it('Simular Client Top Artist', async () => {
        const clientTopArtist = proxyquire('../client/clientTopArtist.js', {
            'axios': {
                get() {
                    return 'tested'
                }
            }
        });
        const result = await clientTopArtist();
        expect(result).to.be.equal('tested');
    });


});
