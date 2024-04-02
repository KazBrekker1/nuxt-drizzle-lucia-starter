import { sqliteTable, uniqueIndex, index, numeric, integer } from "drizzle-orm/sqlite-core"

export const key = sqliteTable("Key", {
	id: numeric("id").primaryKey().notNull(),
	userId: numeric("user_id").notNull(),
	hashedPassword: numeric("hashed_password"),
},
	(table) => {
		return {
			idKey: uniqueIndex("Key_id_key").on(table.id),
			userIdIdx: index("Key_user_id_idx").on(table.userId),
		}
	});

export const session = sqliteTable("Session", {
	id: numeric("id").primaryKey().notNull(),
	userId: numeric("user_id").notNull(),
	activeExpires: integer("active_expires").notNull(),
	idleExpires: integer("idle_expires").notNull(),
},
	(table) => {
		return {
			idKey: uniqueIndex("Session_id_key").on(table.id),
			userIdIdx: index("Session_user_id_idx").on(table.userId),
		}
	});

export const user = sqliteTable("User", {
	id: numeric("id").primaryKey().notNull(),
	email: numeric("email").notNull(),
	username: numeric("username").notNull(),
},
	(table) => {
		return {
			idKey: uniqueIndex("User_id_key").on(table.id),
			emailKey: uniqueIndex("User_email_key").on(table.email),
		}
	});