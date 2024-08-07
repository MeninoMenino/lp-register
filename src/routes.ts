import express from "express";
import AlbumController from "./controller/albumController";

const routes = express();
//JSON parser
routes.use(express.json());

routes.use("/album", new AlbumController().routes());

export default routes;