import { lucia } from "lucia";
import { client } from "./drizzle";
import { libsql } from "@lucia-auth/adapter-sqlite";
import { h3 } from "lucia/middleware";


export const auth = lucia({
    env: process.dev ? "DEV" : "PROD", // "PROD" if deployed to HTTPS
    middleware: h3(),
    adapter: libsql(client, {
        key: "Key",
        user: "User",
        session: "Session"
    }),
    getUserAttributes: (data) => {
        return {
            username: data.username,
            email: data.email
        };
    }
});

export type Auth = typeof auth;