import { mongoose } from '@lucia-auth/adapter-mongoose';
import mongodb from 'mongoose';
import { User, Session, Key, Connection } from './schema.js';

await Connection.connect();

const user = await User.createCollection();
const session = await Session.createCollection();
const key = await Key.createCollection();

await Connection.disconnect();