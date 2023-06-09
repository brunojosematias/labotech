/*
  Warnings:

  - You are about to drop the column `healthProblem` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to drop the column `painLevel` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to drop the column `pains` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to drop the column `physicalActivity` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to drop the column `sedentary` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to drop the column `smoker` on the `anamnesis_form` table. All the data in the column will be lost.
  - You are about to alter the column `height` on the `anamnesis_form` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `age` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `back` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feetAndAnkles` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthProblems` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jointProblems` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kness` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legs` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `napeNeck` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sittingOrStanding` to the `anamnesis_form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "anamnesis_form" DROP COLUMN "healthProblem",
DROP COLUMN "painLevel",
DROP COLUMN "pains",
DROP COLUMN "physicalActivity",
DROP COLUMN "sedentary",
DROP COLUMN "smoker",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "back" INTEGER NOT NULL,
ADD COLUMN     "feetAndAnkles" INTEGER NOT NULL,
ADD COLUMN     "healthProblems" TEXT NOT NULL,
ADD COLUMN     "jointProblems" TEXT NOT NULL,
ADD COLUMN     "kness" INTEGER NOT NULL,
ADD COLUMN     "legs" INTEGER NOT NULL,
ADD COLUMN     "napeNeck" INTEGER NOT NULL,
ADD COLUMN     "sittingOrStanding" TEXT NOT NULL,
ALTER COLUMN "height" SET DATA TYPE INTEGER;
