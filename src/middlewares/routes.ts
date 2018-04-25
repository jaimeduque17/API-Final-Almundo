import { Request, Response } from 'express';
import config from 'config';
import { flightController } from '../api/flight/controller'

const conf = config.get('server');

export const routesServer: { [index: string]: any } = {
  getFlights: {
    verb: 'get',
    mountPoint: '/flight',
    handle: flightController.getFlights
  },
  getFlightsId: {
    verb: 'get',
    mountPoint: '/flight/:id',
    handle: flightController.getFlightsId
  },
  getFlightDeparture: {
    verb: 'get',
    mountPoint: '/flights/departure',
    handle: flightController.getFlightDeparture
  }
};