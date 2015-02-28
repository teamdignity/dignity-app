-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user to user'
--
-- ---

DROP TABLE IF EXISTS `user to user`;

CREATE TABLE `user to user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'goal'
--
-- ---

DROP TABLE IF EXISTS `goal`;

CREATE TABLE `goal` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  `cost` DECIMAL NULL DEFAULT NULL,
  `amount_raised` DECIMAL NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'goal to user'
--
-- ---

DROP TABLE IF EXISTS `goal to user`;

CREATE TABLE `goal to user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_goal` INTEGER NULL DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'achievement'
--
-- ---

DROP TABLE IF EXISTS `achievement`;

CREATE TABLE `achievement` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `picture_url` VARCHAR NULL DEFAULT NULL,
  `minimum_goals_funded` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'achievement to user'
--
-- ---

DROP TABLE IF EXISTS `achievement to user`;

CREATE TABLE `achievement to user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_achievement` INTEGER NULL DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'service_institution'
--
-- ---

DROP TABLE IF EXISTS `service_institution`;

CREATE TABLE `service_institution` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `type` ENUM NULL DEFAULT NULL,
  `street_address` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user to service_institution'
--
-- ---

DROP TABLE IF EXISTS `user to service_institution`;

CREATE TABLE `user to service_institution` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_user` INTEGER NULL DEFAULT NULL,
  `id_service_institution` INTEGER NULL DEFAULT NULL,
  `start_date` DATE NULL DEFAULT NULL,
  `end_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'user'
--
-- ---

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `type` ENUM NULL DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `email_address` VARCHAR NULL DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `biography` VARCHAR NULL DEFAULT NULL,
  `total_donated` DECIMAL NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `user to user` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `user to user` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `goal` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `goal to user` ADD FOREIGN KEY (id_goal) REFERENCES `goal` (`id`);
ALTER TABLE `goal to user` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `achievement to user` ADD FOREIGN KEY (id_achievement) REFERENCES `achievement` (`id`);
ALTER TABLE `achievement to user` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `user to service_institution` ADD FOREIGN KEY (id_user) REFERENCES `user` (`id`);
ALTER TABLE `user to service_institution` ADD FOREIGN KEY (id_service_institution) REFERENCES `service_institution` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user to user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `goal` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `goal to user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `achievement` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `achievement to user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `service_institution` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user to service_institution` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user to user` (`id`,`id_user`,`id_user`) VALUES
-- ('','','');
-- INSERT INTO `goal` (`id`,`id_user`,`cost`,`amount_raised`,`description`) VALUES
-- ('','','','','');
-- INSERT INTO `goal to user` (`id`,`id_goal`,`id_user`) VALUES
-- ('','','');
-- INSERT INTO `achievement` (`id`,`name`,`description`,`picture_url`,`minimum_goals_funded`) VALUES
-- ('','','','','');
-- INSERT INTO `achievement to user` (`id`,`id_achievement`,`id_user`) VALUES
-- ('','','');
-- INSERT INTO `service_institution` (`id`,`name`,`description`,`type`,`street_address`) VALUES
-- ('','','','','');
-- INSERT INTO `user to service_institution` (`id`,`id_user`,`id_service_institution`,`start_date`,`end_date`) VALUES
-- ('','','','','');
-- INSERT INTO `user` (`id`,`type`,`name`,`email_address`,`username`,`biography`,`total_donated`) VALUES
-- ('','','','','','','');
