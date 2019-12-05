const express = require('express');
const app = express();
const topArtistController = require('../controller/top_artist');
const topTrackForArtistNumberOneController = require('../controller/top_track_for_artist_number_one');

app.get("/top_artist", topArtistController.topArtist);
app.get("/top_track_for_artist_number_one", topTrackForArtistNumberOneController.topTrackForArtistNumberOne);
// no hay api para traer el perfil del artista
// app.get("/perfil_artist_numer_one", perfilArtistNumerOneController.perfilArtistNumberOne);



module.exports = app;