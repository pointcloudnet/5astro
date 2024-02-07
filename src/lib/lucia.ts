import { lucia } from "lucia";
// import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import { astro } from "lucia/middleware";


// import sqlite from "better-sqlite3";
import mongodb from 'mongoose';
// import fs from "fs";
// import { User, Session, Key, Connection } from '@db/schema.js';
import { User, Session, Key } from '../db.ts';

// const db = sqlite(":memory:");
// db.exec(fs.readFileSync("schema.sql", "utf8"));

// MONGODB_URL = "mongodb://black/mongodb00"   /* works fine from mongosh, even when just pointing to host 'black' */
// await Connection.create();
// const db = mongodb.createConnection(process.env.MONGODB_URL).useDb('mongodb00');
const db = mongodb.createConnection('mongodb://black/test');
console.log(db.getClient());

const user = new mongodb.Model(User);
const session = new mongodb.Model(Session);
const key = new mongodb.Model(Key);
// const Key = mongodb.model("Key");
// const Session = mongodb.model("Session");
export const adapter = mongoose({
	User: user
	,Session: session
	,Key: key
});
export const auth = lucia({
	// adapter: betterSqlite3(db, {
	// 	user: "user",
	// 	session: "user_session",
	// 	key: "user_key"
	// }),
	// adapter: mongoose(db),
	adapter: adapter,
	middleware: astro(),
	env: import.meta.env.DEV ? "DEV" : "PROD",
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});
// await connect();
export type Auth = typeof auth;
