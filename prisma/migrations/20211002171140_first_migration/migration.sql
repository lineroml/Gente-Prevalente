-- CreateTable
CREATE TABLE "Enterprises" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,
    "numEmpleados" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enterprises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Enterprises_identificacion_key" ON "Enterprises"("identificacion");
