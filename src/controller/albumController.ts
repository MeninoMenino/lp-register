import { Router } from "express";

class AlbumController {
    private router: Router;
    
    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    public routes() {
        return this.router;
    }

    private initializeRoutes() {
        this.router.get("/", (req, res) =>{
            res.status(200).send("LP Register");
        });
        
        this.router.get("/getAlbumOfTheDay", (req, res) =>{
            res.status(200).send("Album of the Day");
        });
        
        this.router.get("/getByName", (req, res) =>{
            let name = req.query.name;
            res.status(200).send(name);
        });

        this.router.get("/getByArtist", (req, res) =>{
            let artist = req.query.artist;
            res.status(200).send(artist);
        });

        this.router.get("/getByYear", (req, res) =>{
            let year = req.query.year;
            res.status(200).send(year);
        });

        this.router.get("/getByGenre", (req, res) =>{
            let genre = req.query.genre;
            res.status(200).send(genre);
        });
    }
}

export default AlbumController;