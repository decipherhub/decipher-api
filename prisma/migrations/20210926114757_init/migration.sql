-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periodId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `summary` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectMember` (
    `role` ENUM('TEAM_LEADER', 'TEAM_MEMBER') NOT NULL,
    `memberId` INTEGER NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`memberId`, `projectId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`periodId`) REFERENCES `Period`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMember` ADD FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMember` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
