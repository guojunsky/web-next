/*
  Warnings:

  - You are about to alter the column `name` on the `Subject` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to drop the column `createTime` on the `User` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[name]` on the table `Subject`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[name]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[mobile]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Added the required column `updatedAt` to the `Subject` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Subject` ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN     `deletedAt` DATETIME(3),
    ADD COLUMN     `createUserName` VARCHAR(191),
    MODIFY `name` VARCHAR(30) NOT NULL,
    MODIFY `levelName` VARCHAR(191),
    MODIFY `itemOrder` INTEGER,
    MODIFY `deleted` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `level` INTEGER;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createTime`,
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN     `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN     `deletedAt` DATETIME(3),
    ADD COLUMN     `createUserName` VARCHAR(191),
    MODIFY `deleted` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `Subject.name_unique` ON `Subject`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `User.name_unique` ON `User`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `User.mobile_unique` ON `User`(`mobile`);
