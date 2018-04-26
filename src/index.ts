process.env.NODE_CONFIG_DIR = `${__dirname}/env`;
import { InfraWeb } from './core/infraweb';
import { middlewareServer } from './middlewares';
import { routesServer } from './middlewares/routes';
import express from 'express';

export class Server extends InfraWeb {
  constructor() {
    super();
    this.connectDB();
    this.mountMiddleware(middlewareServer);
    this.mountRoutes(routesServer);
  }

  public static bootstrap(): Server {
    return new Server();
  }
}

Server.bootstrap().startServer();
