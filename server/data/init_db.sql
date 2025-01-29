
-- Clear the tables if they already exists

DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, 
	`username` VARCHAR(255) NOT NULL, 
	`password` VARCHAR(255) NOT NULL, 
    `email` VARCHAR(255) NOT NULL UNIQUE, 
	PRIMARY KEY (id)
);


CREATE TABLE `favorites`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `spotify_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `cover_image` VARCHAR(255) NOT NULL,
    `rating` INT UNSIGNED NOT NULL DEFAULT 0,
    `user_id`INT UNSIGNED NOT NULL
);


ALTER TABLE 
`favorites` ADD CONSTRAINT `favorites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE;