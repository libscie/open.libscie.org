-- AlterTable
ALTER TABLE `Log` MODIFY `type` ENUM('CashOnHand', 'NonCashAssets', 'Liabilities', 'NetAssets') NOT NULL;
