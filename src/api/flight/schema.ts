import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    destination: {
        iata: String,
        name: String
    },
    origin: {
        iata: String,
        name: String
    },
    image: String,
    price: String,
    segments: String,
    dateDeparture: String,
    dateReturn: String,
    hourDeparture: String,
    hourReturn: String
});
export default FlightSchema;