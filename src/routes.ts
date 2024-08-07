import express from "express";
import AlbumController from "./controller/albumController";

const routes = express();

routes.use("/album", new AlbumController().routes());

export default routes;