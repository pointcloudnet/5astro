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
