import Flight from './index';

export const services = {
  getFlights: async () => {
    const flights = await Flight.find();
    return flights
  },
  getFlightsId: async (id: string) => {
    const flightsId = await Flight.findById(id);
    return flightsId
  },
  getFlightDeparture: async (params: object | any) => {
    try {
      const query = Object.assign({
        'destination.iata': params.destination,
        'origin.iata': params.origin,
        dateDeparture: params.dateDeparture
      });
      return await Flight.find(query)
    } catch (error) {
      return error;
    }
  },
  getFlightReturn: async (params: object | any) => {
    try {
      const query = Object.assign({
        'destination.iata': params.destination,
        'origin.iata': params.origin,
        dateReturn: params.dateReturn
      });
      return await Flight.find(query)
    } catch (error) {
      return error;
    }
  }
}