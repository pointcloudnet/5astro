import { User, Session, Key, Connection } from './schema.js';
// import { disconnect } from '../src/db';
// const db = await mongodb.connect(process.env.MONGODB_URL)
await Connection.connect();
// const user = new User();
// await user.save();
const user = await User.createCollection();
// const session = new Session();
const session = await Session.createCollection();
// const key = new Key();
const key = await Key.createCollection();
// await mongodb.connection.close();
await Connection.disconnect();
// return void;
