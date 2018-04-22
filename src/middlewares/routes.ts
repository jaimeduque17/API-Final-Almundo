import { Request, Response } from 'express';
import config from 'config';

const conf = config.get('server');

export const routesServer: { [index: string]: any } = {
  route: {
    verb: 'get',
    mountPoint: '/',
    handle: (req: Request, res: Response) => {
      res.render('index', {
        title: 'Page 1',
        message: `Server ${(conf as any).env} running at ${(conf as any).port}`
      });
    }
  }
};