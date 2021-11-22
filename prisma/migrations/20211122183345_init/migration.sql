/*
  Warnings:

  - You are about to drop the `DeferenceImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `audience` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contents` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formLink` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `host` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainPosterUrlDesktop` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainPosterUrlMobile` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participationMethod` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedulePosterUrlDesktop` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedulePosterUrlMobile` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Deference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Deference` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `DeferenceImage` DROP FOREIGN KEY `deferenceimage_ibfk_1`;

-- AlterTable
ALTER TABLE `Deference` ADD COLUMN `audience` VARCHAR(191) NOT NULL,
    ADD COLUMN `contents` VARCHAR(191) NOT NULL,
    ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `formLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `host` VARCHAR(191) NOT NULL,
    ADD COLUMN `mainPosterUrlDesktop` VARCHAR(191) NOT NULL,
    ADD COLUMN `mainPosterUrlMobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `participationMethod` VARCHAR(191) NOT NULL,
    ADD COLUMN `schedulePosterUrlDesktop` VARCHAR(191) NOT NULL,
    ADD COLUMN `schedulePosterUrlMobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL,
    ADD COLUMN `summary` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `DeferenceImage`;

-- CreateTable
CREATE TABLE `DeferenceSpeaker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,
    `deferenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeferenceReference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `deferenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeferencePartnerLogoUrl` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `deferenceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DeferenceSpeaker` ADD FOREIGN KEY (`deferenceId`) REFERENCES `Deference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeferenceReference` ADD FOREIGN KEY (`deferenceId`) REFERENCES `Deference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DeferencePartnerLogoUrl` ADD FOREIGN KEY (`deferenceId`) REFERENCES `Deference`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
