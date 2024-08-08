import { Router } from "express";
import { SpotifyService } from "../service/spotifyService";

class SpotifyController {
    private router = Router();
    private spotifyService = new SpotifyService();

    constructor() {
        this.initializeRoutes();
    }

    public routes() {
        return this.router;
    }

    private initializeRoutes() {
        //"GET" routes
        //Token test
        this.router.get("/", async (req, res) =>{
            try{
                let token = await this.spotifyService.getToken();
                res.status(200).json(token);
            } catch(error) {
                res.status(500).send(error);
            }
        });
    }
}

export default SpotifyController;