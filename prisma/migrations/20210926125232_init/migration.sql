/*
  Warnings:

  - You are about to drop the `ProjectLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ProjectLink` DROP FOREIGN KEY `projectlink_ibfk_1`;

-- DropTable
DROP TABLE `ProjectLink`;

-- CreateTable
CREATE TABLE `ProjectUrl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `type` ENUM('MEDIUM', 'YOUTUBE') NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectUrl` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
