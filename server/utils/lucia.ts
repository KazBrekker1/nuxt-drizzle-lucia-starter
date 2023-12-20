import { lucia } from "lucia";
import { connection } from "./drizzle";
import { planetscale } from "@lucia-auth/adapter-mysql";
import { h3 } from "lucia/middleware";


export const auth = lucia({
    env: process.dev ? "DEV" : "PROD", // "PROD" if deployed to HTTPS
    middleware: h3(),
    adapter: planetscale(connection, {
        key: "Key",
        user: "User",
        session: "Session",
    }),
    getUserAttributes: (data) => {
        return {
            username: data.username,
            email: data.email
        };
    }
});

export type Auth = typeof auth;