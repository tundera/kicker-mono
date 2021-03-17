/*
  Warnings:

  - You are about to alter the column `winPercentage` on the `Team` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "winPercentage" SET DATA TYPE DOUBLE PRECISION;
