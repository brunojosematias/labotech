/*
  Warnings:

  - Added the required column `name` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "name" TEXT NOT NULL;
