/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Log` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Log` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `time` DATETIME(3) NULL;
