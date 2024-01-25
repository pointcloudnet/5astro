import mongodb from 'mongoose';
/*
export const connect = async () => {
    await mongodb.connect(process.env.MONGODB_URL as any);
};
*/
export const Connection = {
    connect: async () => {
        await mongodb.connect(process.env.MONGODB_URL);
    },
    disconnect: async () => {
        await mongodb.connection.close();
    }
};
