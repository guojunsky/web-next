/*
  Warnings:

  - Added the required column `mobile` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createTime` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN     `sex` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN     `mobile` VARCHAR(191) NOT NULL,
    ADD COLUMN     `createTime` BIGINT NOT NULL,
    ADD COLUMN     `deleted` BOOLEAN NOT NULL;
