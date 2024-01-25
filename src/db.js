// import mongodb from "mongoose";
import mongodb from 'mongoose';
export const User = mongodb.model('User', new mongodb.Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        unique: true,
        type: String,
        required: true
    }
}, { _id: false }));
export const Session = mongodb.model('Session', new mongodb.Schema({
    _id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    active_expires: {
        type: Number,
        required: true
    },
    idle_expires: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, { _id: false }));
export const Key = mongodb.model("Key", new mongodb.Schema({
    _id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    hashed_password: String
}, { _id: false }));
export const Connection = {
    connect: async () => {
        await mongodb.connect(process.env.MONGODB_URL);
    },
    disconnect: async () => {
        await mongodb.connection.close();
    }
};
