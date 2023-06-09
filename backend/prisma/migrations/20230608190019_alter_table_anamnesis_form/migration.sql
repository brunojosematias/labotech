/*
  Warnings:

  - You are about to drop the column `back` on the `anamnesis_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" DROP COLUMN "back",
ADD COLUMN     "lowerNack" INTEGER,
ADD COLUMN     "upperBack" INTEGER;
