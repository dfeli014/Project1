import { ArtistDao } from './src/main/dao/artist-dao';


console.log('Hello World');


let artistDao = new ArtistDao();

artistDao.getAllArtist().then(artArray => console.log(artArray));
