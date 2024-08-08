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
        //Get album by name
        this.router.get("/listAlbumsByName", async (req, res) =>{
            try{
                let album = await this.spotifyService.listAlbumsByName(String(req.query.name));
                res.status(200).json(album);
            } catch(error) {
                res.status(500).send(error);
            }
        });
    }
}

export default SpotifyController;