import { mongoose } from "@lucia-auth/adapter-mongoose";
import mongodb from 'mongoose';

export const Connection = {
	connect: async () => {
	await mongodb.connect(process.env.MONGODB_URL as any);
	},
	disconnect: async () => {
	await mongodb.connection.close();
	}
};