/*
  Warnings:

  - A unique constraint covering the columns `[name,cityId]` on the table `ParkingArea` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ParkingArea_name_cityId_key" ON "ParkingArea"("name", "cityId");
