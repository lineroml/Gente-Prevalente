/*
  Warnings:

  - You are about to drop the column `NIT` on the `Enterprise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Enterprise" DROP COLUMN "NIT",
ADD COLUMN     "nit" TEXT NOT NULL DEFAULT E'NIT';
