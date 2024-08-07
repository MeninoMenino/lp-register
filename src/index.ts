import Server from "./server";

const server = new Server(3333);

const start = async () => {
    try{
        server.listen();
    } catch(err) {
        process.exit(1);
    }
}

start();