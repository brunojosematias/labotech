/*
  Warnings:

  - You are about to alter the column `age` on the `anamnesis_form` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" ALTER COLUMN "age" SET DATA TYPE INTEGER;
