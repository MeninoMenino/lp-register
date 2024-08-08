import { Router } from "express";
import { AlbumService } from "../service/albumService";

class AlbumController {
    private router = Router();
    private albumService = new AlbumService();
    
    constructor() {
        this.initializeRoutes();
    }

    public routes() {
        return this.router;
    }

    private initializeRoutes() {
        //"GET" routes
        //List all
        this.router.get("/", async (req, res) =>{
            try{
                let registeredAlbums = await this.albumService.listRegisteredAlbums();
                res.status(200).json(registeredAlbums);
            } catch(error) {
                res.status(500).send(error);
            }
        });
        
        //List by name
        this.router.get("/getByName", async (req, res) =>{
            try{
                let album = await this.albumService.getAlbumByName(String(req.query.name));
                res.status(200).send(album);
            } catch(error) {
                res.status(500).send(error);
            }
        });

        //List by artist
        this.router.get("/getByArtist", async (req, res) =>{
            try{
                let album = await this.albumService.getAlbumByArtist(String(req.query.artist));
                res.status(200).send(album);
            } catch(error) {
                res.status(500).send(error);
            }
        });

        //List by year
        this.router.get("/getByYear", async (req, res) =>{
            try{
                let album = await this.albumService.getAlbumByYear(String(req.query.year));
                res.status(200).send(album);
            } catch(error) {
                res.status(500).send(error);
            }
        });

        //List by genre
        this.router.get("/getByGenre", async (req, res) =>{
            try{
                let album = await this.albumService.getAlbumByGenre(String(req.query.genre));
                res.status(200).send(album);
            } catch(error) {
                res.status(500).send(error);
            }
        });

        //TODO: album of the day
        this.router.get("/getAlbumOfTheDay", (req, res) =>{
            res.status(200).send("Album of the Day");
        });

        //"POST" routes
        //Register album
        this.router.post("/register", async (req, res) => {
            try{
                await this.albumService.registerAlbum(req.body);
                res.status(201).send();
            } catch(error) {
                res.status(500).send(error);
            }
        });


        //"DELETE" routes
        //Delete album by id
        this.router.delete("/", async (req, res) => {
            try{
                await this.albumService.deleteAlbum(String(req.query.id));
                res.status(200).send();
            } catch(error) {
                res.status(500).send(error);
            }
        });
    }
}

export default AlbumController;