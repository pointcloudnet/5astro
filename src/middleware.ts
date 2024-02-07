import { auth } from "./lib/lucia.ts";

// import type { MiddlewareResponseHandler } from "astro";
import type { MiddlewareHandler as MiddlewareResponseHandler } from "astro";
import type { MiddlewareNext as next } from "astro";

export const onRequest: MiddlewareResponseHandler = async (context, next) => {
	context.locals.auth = auth.handleRequest(context);
	return await next();
};
