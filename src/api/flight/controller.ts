import { Request, Response, NextFunction } from 'express';
import { services } from './services';
import { Collection } from 'mongoose';
export const flightController = {
  getFlights: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const flights = await services.getFlights();
      return res.send({ data: flights });
    } catch (error) {
      console.log(error);
      return error
    }
  },
  getFlightsId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const flights = await services.getFlightsId(req.params.id);
      return res.send({ data: flights });
    } catch (error) {
      console.log(error);
      return error
    }
  },
  getFlightDeparture: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = await services.getFlightDeparture(req.query);
      return res.send({data: query})
    } catch (error) {
      return error;
    }
  }
};