/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[uuid]` on the table `User`. If there are existing duplicate values, the migration will fail.
  - Added the required column `uuid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN     `uuid` VARCHAR(64) NOT NULL,
    ADD COLUMN     `password` VARCHAR(50) NOT NULL,
    ADD COLUMN     `realName` VARCHAR(50) NOT NULL,
    ADD COLUMN     `age` INTEGER NOT NULL,
    ADD COLUMN     `birthDay` DATETIME(3),
    ADD COLUMN     `userLevel` INTEGER DEFAULT 0,
    ADD COLUMN     `role` INTEGER,
    ADD COLUMN     `status` INTEGER,
    ADD COLUMN     `wxOpenId` VARCHAR(100),
    ADD COLUMN     `uninqueId` VARCHAR(100);

-- CreateIndex
CREATE UNIQUE INDEX `User.uuid_unique` ON `User`(`uuid`);
