import { Request, Response, NextFunction } from 'express';
import Flight from './index';
export const hotelController = {
    getHoltels: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const flights = await Flight.find();
            return res.send({ data: flights });
        } catch (error) {
            console.log(error);
            return error
        }
    }
};