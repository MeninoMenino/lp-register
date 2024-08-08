import { Application } from "express";
import routes from "./routes";

class Server {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = routes;
        this.port = port;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Rodando na porta ${this.port}`);
        });
    }
}

export default Server;