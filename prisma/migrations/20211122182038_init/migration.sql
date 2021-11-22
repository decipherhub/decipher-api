/*
  Warnings:

  - You are about to alter the column `generation` on the `Period` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to drop the column `is_admin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Contact` MODIFY `type` ENUM('GITHUB', 'LINKEDIN', 'MEDIUM', 'EMAIL', 'WEBSITE', 'BLOG', 'BRUNCH', 'FACEBOOK') NOT NULL;

-- AlterTable
ALTER TABLE `Medium` MODIFY `imageUrl` VARCHAR(191),
    MODIFY `summary` VARCHAR(191);

-- AlterTable
ALTER TABLE `News` MODIFY `summary` VARCHAR(191),
    MODIFY `imageUrl` VARCHAR(191);

-- AlterTable
ALTER TABLE `Period` MODIFY `generation` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `ProjectUrl` MODIFY `type` ENUM('MEDIUM', 'YOUTUBE', 'WEBSITE') NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `is_admin`,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;
