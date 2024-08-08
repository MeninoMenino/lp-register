import express from "express";
import AlbumController from "./controller/albumController";
import SpotifyController from "./controller/spotifyController";

const routes = express();
//JSON parser
routes.use(express.json());

routes.use("/album", new AlbumController().routes());
routes.use("/spotify", new SpotifyController().routes());

export default routes;