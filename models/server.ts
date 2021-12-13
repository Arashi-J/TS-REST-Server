import express, { Application } from "express";
import cors from 'cors';

import userRoutes from '../routes/usuarios.routes';
import db from "../db/connection";

export class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        //Métodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }


    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');

        } catch (error: any) {
            throw new Error(error)
        }
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta pública
        this.app.use(express.static('public'));



    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + process.env.PORT);
        });
    }

}

export default Server;