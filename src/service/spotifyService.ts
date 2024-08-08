import { stringify } from "querystring";

class SpotifyService {

    private token? : string;

    constructor() {
        //this.getToken();
    }

    //Authentication
    public async getToken() {
        const response = await fetch("https://accounts.spotify.com/api/token", {
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
}

export { SpotifyService }