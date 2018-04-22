import { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from 'config';

const conf = config.get('server');
const base_url = config.get('server.base_url');
const port = config.get('server.port');

export const middlewareServer: { [index: string]: any } = {
  cors: {
    mountPoint: '',
    handler: cors()
  },
  urlencodedParser: {
    mountPoint: '',
    handler: bodyParser.urlencoded({ extended: false })
  },
  jsonParser: {
    mountPoint: '',
    handler: bodyParser.json()
  }
};

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
