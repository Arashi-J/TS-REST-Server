import express, { Application } from "express";

export class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + process.env.PORT);
        });
    }

}

export default Server;