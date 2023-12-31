/*
  Warnings:

  - Added the required column `title` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Log` table without a default value. This is not possible if the table is not empty.
  - Made the column `time` on table `Log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Log` ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` ENUM('CashOnHand') NOT NULL,
    MODIFY `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
