import { mongoose } from "@lucia-auth/adapter-mongoose";
import mongodb from 'mongoose';

const DBURL : string = process.env.MONGODB_URL ?? 'black/mongodb00';

export const Connection = {
	connect: async () => {
		// await mongodb.connect(process.env.MONGODB_URL as any);
		await mongodb.connect(DBURL);
	},
	create: async () => {
		// await mongodb.createConnection(process.env.MONGODB_URL).useDb(process.env.MONGODB_DB as string);
		await mongodb.createConnection(DBURL);
	},
	disconnect: async () => {
		await mongodb.connection.close();
	}
	// TODO:  support closing full array of connections
	/*
	,disconnectAll: async () => {
		for (await let c in mongodb.connections){
			c.close();
		}.close();
		mongodb.connections.forEach(c=>await c.close();
	}
	*/
};