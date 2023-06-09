/*
  Warnings:

  - You are about to drop the column `lowerNack` on the `anamnesis_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" DROP COLUMN "lowerNack",
ADD COLUMN     "lowerBack" INTEGER;
