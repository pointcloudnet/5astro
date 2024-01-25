import { auth } from "./lib/lucia";
export const onRequest = async (context, next) => {
    context.locals.auth = auth.handleRequest(context);
    return await next();
};
