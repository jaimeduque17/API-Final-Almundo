import express, { Request, Response } from 'express';
import path from 'path';
import config from 'config';
import mongoose from 'mongoose';

const conn_string = config.get('server.data_base');

interface IData {
  [ key: string ]: any;
}

class ExpressApp implements IData {
  public middleware: express.Application;
  constructor() {
    this.middleware = express();
  }
}

export class InfraWeb {
  public middleware: any;
  public conf: string;

  constructor() {
    this.middleware = new ExpressApp().middleware;
    this.conf = config.get('server');
  }

  public use(...args: any []) {
    this.middleware.use(...args);
    return this;
  }

  public set(setting: string, val: any) {
    this.middleware.set(setting, val);
    return this;
  }
  public mountRoutes(routes: any) {
    Object.keys(routes).forEach((key) => {
      this.middleware[routes[key].verb](routes[key].mountPoint, routes[key].handle)
    });
  }

  public mountMiddleware(middlewares: any) {
    Object.keys(middlewares).forEach((key) => {
      this.middleware.use(middlewares[key].mountPoint, middlewares[key].handler)
    });
  }

  public listen(handle: any, listeningListener: Function | undefined) {
    this.middleware.listen(handle, listeningListener);
  }

  public startServer() {
    this.listen((this.conf as any ).port, () => { console.log('Server running'); });
  }

  public connectDB() {
    try {
      mongoose.connect(`${conn_string}`);
  } catch (err) {
    throw err;
  }
  mongoose.connection
      .once('open', () => console.log('MongoDB connection success'))
      .on('error', e => {
          throw e;
      });
  }
}