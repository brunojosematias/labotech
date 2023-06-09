/*
  Warnings:

  - Made the column `gender` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profession` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `back` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `feetAndAnkles` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `legs` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `napeNeck` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `knees` on table `anamnesis_form` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL,
ALTER COLUMN "height" SET NOT NULL,
ALTER COLUMN "profession" SET NOT NULL,
ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "back" SET NOT NULL,
ALTER COLUMN "feetAndAnkles" SET NOT NULL,
ALTER COLUMN "legs" SET NOT NULL,
ALTER COLUMN "napeNeck" SET NOT NULL,
ALTER COLUMN "knees" SET NOT NULL;
