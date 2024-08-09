import { SpotifyAlbum } from "./spotifyAlbumsList";

interface AlbumInterface {
    id?: string,
    name?: string,
    artist?: string,
    year?: string,
    genres?: string[]
}

export class AlbumObject implements AlbumInterface {
    id?: string;
    name?: string;
    artist?: string;
    year?: string;
    genres?: string[];

    constructor(id: string, name: string, artist: string, year: string, genres: string[]) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.year = year;
        this.genres = genres;
    }

    public spotifyObjectToAlbumObject(spotifyObj : Record<string, any>) {
        let objId = spotifyObj.id;
        let objName = spotifyObj.name;
        let objArtist = spotifyObj.artists[0].name;
        let objYear = spotifyObj.release_date;

        //TODO: Resolve album genres
        let objGenres: string[] = [];

        return new AlbumObject(objId, objName, objArtist, objYear, objGenres);
    }

    public static spotifyObjectsToAlbumObjects(spotifyObj: SpotifyAlbum[]) {
        let albums: AlbumObject[] = [];

        spotifyObj.forEach(obj => {
            albums.push(new AlbumObject(obj.id, obj.name, obj.artists[0].name, obj.release_date, []));
        });
        
        return albums;
    }
}
//export type { AlbumInterface as Album }