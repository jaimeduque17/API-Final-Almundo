import mongoose, { Model } from 'mongoose';
import FlightSchema from './schema';

export interface IHotel extends mongoose.Document {
    destination: {
      iata: string,
      name: string
    },
    images: [string],
    price: string,
    segments: string
}
export default mongoose.model<IFlight>('Flight', FlightSchema);