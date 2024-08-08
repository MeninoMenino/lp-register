import { stringify } from "querystring";

class SpotifyQueryBuilder {

    private query: string = "q=";
    private params : ParamsObject = {};

    public withName(name: string) {
        this.params.name = name;
        return this;
    }

    public withArtist(artist: string) {
        this.params.artist = artist;
        return this;
    }

    public withYear(year: string) {
        this.params.year = year;
        return this;
    }

    public withGenres(genres: string[]) {
        this.params.genres = genres;
        return this;
    }

    public build() : string {
        this.params.type = "album";
        this.query += stringify(this.params);

        return this.query;
    }
}

interface ParamsObject {
    [key: string]: any
}

export { SpotifyQueryBuilder }