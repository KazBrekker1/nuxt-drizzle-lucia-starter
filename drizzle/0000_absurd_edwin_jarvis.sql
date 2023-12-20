-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Key` (
	`id` varchar(191) NOT NULL,
	`hashed_password` varchar(191),
	`user_id` varchar(191) NOT NULL,
	CONSTRAINT `Key_id` PRIMARY KEY(`id`),
	CONSTRAINT `Key_id_key` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `Session` (
	`id` varchar(191) NOT NULL,
	`user_id` varchar(191) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL,
	CONSTRAINT `Session_id` PRIMARY KEY(`id`),
	CONSTRAINT `Session_id_key` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`username` varchar(191) NOT NULL,
	CONSTRAINT `User_id` PRIMARY KEY(`id`),
	CONSTRAINT `User_email_key` UNIQUE(`email`),
	CONSTRAINT `User_id_key` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE INDEX `Key_user_id_idx` ON `Key` (`user_id`);--> statement-breakpoint
CREATE INDEX `Session_user_id_idx` ON `Session` (`user_id`);
*/