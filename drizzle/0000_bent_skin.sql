-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Key` (
	`id` numeric PRIMARY KEY NOT NULL,
	`user_id` numeric NOT NULL,
	`hashed_password` numeric
);
--> statement-breakpoint
CREATE TABLE `Session` (
	`id` numeric PRIMARY KEY NOT NULL,
	`user_id` numeric NOT NULL,
	`active_expires` integer NOT NULL,
	`idle_expires` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` numeric PRIMARY KEY NOT NULL,
	`email` numeric NOT NULL,
	`username` numeric NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Key_id_key` ON `Key` (`id`);--> statement-breakpoint
CREATE INDEX `Key_user_id_idx` ON `Key` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `Session_id_key` ON `Session` (`id`);--> statement-breakpoint
CREATE INDEX `Session_user_id_idx` ON `Session` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `User_id_key` ON `User` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `User_email_key` ON `User` (`email`);
*/