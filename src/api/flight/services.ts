import Flight from './index';

export const services = {
    getFlights: async () => {
      const flights = await Flight.find();
      return flights
    },
    getFlightsId: async (id: string) => {
      const flightsId = await Flight.findById(id);
      return flightsId
    }
};