/*
  Warnings:

  - You are about to drop the `Enterprises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Enterprises";

-- CreateTable
CREATE TABLE "Enterprise" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "numEmpleados" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_identificacion_key" ON "Enterprise"("identificacion");
