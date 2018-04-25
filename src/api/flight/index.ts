import mongoose, { Model } from 'mongoose';
import FlightSchema from './schema';

export interface IFlight extends mongoose.Document {
  destination: {
    iata: string,
    name: string
  },
  origin: {
    iata: string,
    name: string
  },
  images: string,
  price: string,
  segments: string,
  dateDeparture: string,
  dateReturn: string,
  hourDeparture: string,
  hourReturn: string
}
export default mongoose.model<IFlight>('Flight', FlightSchema);