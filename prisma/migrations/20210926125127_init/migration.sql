/*
  Warnings:

  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Project` DROP COLUMN `link`;

-- CreateTable
CREATE TABLE `ProjectLink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectLink` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
