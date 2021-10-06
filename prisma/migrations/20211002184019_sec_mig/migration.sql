/*
  Warnings:

  - Added the required column `razonSocial` to the `Enterprises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enterprises" ADD COLUMN     "razonSocial" TEXT NOT NULL;
