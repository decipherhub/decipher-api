-- CreateTable
CREATE TABLE `Period` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `generation` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeriodMember` (
    `role` ENUM('PRESIDENT', 'VICE_PRESIDENT', 'MEDIA_LEAD', 'MANAGER', 'MEMBER', 'MENTOR') NOT NULL,
    `memberId` INTEGER NOT NULL,
    `periodId` INTEGER NOT NULL,

    PRIMARY KEY (`memberId`, `periodId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PeriodMember` ADD FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PeriodMember` ADD FOREIGN KEY (`periodId`) REFERENCES `Period`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
