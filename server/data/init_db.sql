
-- Clear the tables if they already exists

DROP TABLE IF EXISTS favorites;


CREATE TABLE `favorites`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `spotify_id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `cover_image` VARCHAR(255) NOT NULL,
    `rating` INT UNSIGNED NOT NULL
);