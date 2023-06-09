/*
  Warnings:

  - You are about to drop the column `kness` on the `anamnesis_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" DROP COLUMN "kness",
ADD COLUMN     "knees" INTEGER;
