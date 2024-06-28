/*
  Warnings:

  - You are about to drop the column `car_plate_number` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carPlateNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carPlateNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_car_plate_number_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "car_plate_number",
ADD COLUMN     "carPlateNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_carPlateNumber_key" ON "User"("carPlateNumber");
