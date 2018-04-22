process.env.NODE_CONFIG_DIR = `${__dirname}/env`;
import { InfraWeb } from './core/infraweb';
import { routesServer, middlewareServer } from './middlewares';
import express from 'express';

export class Server extends InfraWeb {
  constructor() {
    super();
    this.mountMiddleware(middlewareServer);
    this.setViewsEngine('pug', `${__dirname}/app/views`);
    this.mountRoutes(routesServer);
  }

  public static bootstrap(): Server {
    return new Server();
  }
}

Server.bootstrap().startServer();
