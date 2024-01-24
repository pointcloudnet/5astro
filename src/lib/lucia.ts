import { lucia } from "lucia";
// import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import { astro } from "lucia/middleware";

// import sqlite from "better-sqlite3";
import mongodb from 'mongoose';
// import fs from "fs";
import { User, Key, Session, connect } from '../db';

// const db = sqlite(":memory:");
// db.exec(fs.readFileSync("schema.sql", "utf8"));

// MONGODB_URL = "mongodb://black/mongodb00"   /* works fine from mongosh, even when just pointing to host 'black' */
const db = mongodb.createConnection(process.env.MONGODB_URL).useDb('mongodb00')

console.log(db.getClient())
const User = mongodb.model("User");
const Key = mongodb.model("Key");
const Session = mongodb.model("Session");
export const auth = lucia({
	// adapter: betterSqlite3(db, {
	// 	user: "user",
	// 	session: "user_session",
	// 	key: "user_key"
	// }),
	// adapter: mongoose(db),
	adapter: mongoose(db,{User,Session,Key}),
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
