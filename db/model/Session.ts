import { mongoose } from "@lucia-auth/adapter-mongoose";
import mongodb from 'mongoose';

export const Session = mongodb.model(
	'Session',
	new mongodb.Schema(
		{
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
		} as const,
		{ _id: false }
	)
);