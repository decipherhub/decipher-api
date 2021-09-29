/*
  Warnings:

  - You are about to drop the column `memberId` on the `Medium` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Medium` DROP FOREIGN KEY `medium_ibfk_1`;

-- AlterTable
ALTER TABLE `Medium` DROP COLUMN `memberId`;

-- CreateTable
CREATE TABLE `MediumMember` (
    `memberId` INTEGER NOT NULL,
    `mediumId` INTEGER NOT NULL,

    PRIMARY KEY (`memberId`, `mediumId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MediumMember` ADD FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MediumMember` ADD FOREIGN KEY (`mediumId`) REFERENCES `Medium`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
