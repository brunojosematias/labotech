/*
  Warnings:

  - You are about to drop the column `timer` on the `completed_exercises` table. All the data in the column will be lost.
  - Added the required column `time` to the `completed_exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "completed_exercises" DROP COLUMN "timer",
ADD COLUMN     "time" INTEGER NOT NULL;
