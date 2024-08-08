import { stringify } from "querystring";
import { SpotifyQueryBuilder } from "../builders/spotifyQueryBuilder";

class SpotifyService {

    private token? : string;

    private AUTH_URL = "https://accounts.spotify.com/api/token";
    private API_URL = "https://api.spotify.com/v1/search";

    constructor() {
        //this.getToken();
    }

    //Authentication
    private async getToken() {
        const response = await fetch(this.AUTH_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: stringify({
                grant_type: "client_credentials",
                client_id: "d7704f6fd55c4faebcceaf0cc337d1b5",
                client_secret: "367fc900c1a64846aa0bf17c279913a8"
            })
        });

        const data = await response.json();

        this.token = data.access_token;
    }

    //Search for albums by name
    public async listAlbumsByName(name: string) {
        await this.getToken();

        var url = new URL(this.API_URL)
        let params : string = new SpotifyQueryBuilder()
            .withName(name)
            .build()
        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + this.token,
            }
        });

        return await response.json();
    }
}

export { SpotifyService }