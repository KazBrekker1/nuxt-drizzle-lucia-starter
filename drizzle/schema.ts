import { mysqlTable, index, primaryKey, unique, varchar, bigint } from "drizzle-orm/mysql-core"


export const key = mysqlTable("Key", {
	id: varchar("id", { length: 191 }).notNull(),
	hashedPassword: varchar("hashed_password", { length: 191 }),
	userId: varchar("user_id", { length: 191 }).notNull(),
},
	(table) => {
		return {
			userIdIdx: index("Key_user_id_idx").on(table.userId),
			keyId: primaryKey({ columns: [table.id], name: "Key_id" }),
			keyIdKey: unique("Key_id_key").on(table.id),
		}
	});

export const session = mysqlTable("Session", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("user_id", { length: 191 }).notNull(),
	activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
	idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
},
	(table) => {
		return {
			userIdIdx: index("Session_user_id_idx").on(table.userId),
			sessionId: primaryKey({ columns: [table.id], name: "Session_id" }),
			sessionIdKey: unique("Session_id_key").on(table.id),
		}
	});

export const user = mysqlTable("User", {
	id: varchar("id", { length: 191 }).notNull(),
	email: varchar("email", { length: 191 }).notNull(),
	username: varchar("username", { length: 191 }).notNull(),
},
	(table) => {
		return {
			userId: primaryKey({ columns: [table.id], name: "User_id" }),
			userEmailKey: unique("User_email_key").on(table.email),
			userIdKey: unique("User_id_key").on(table.id),
		}
	});