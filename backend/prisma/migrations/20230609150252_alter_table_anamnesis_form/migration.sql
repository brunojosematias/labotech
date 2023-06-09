/*
  Warnings:

  - Added the required column `time` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "time" INTEGER NOT NULL;
