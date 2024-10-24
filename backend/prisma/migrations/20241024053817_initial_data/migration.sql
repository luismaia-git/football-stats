/*
  Warnings:

  - You are about to drop the column `teamId` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `Stadium` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teamId]` on the table `Stadium` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Championship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Injured` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MatchStatistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PlayerTeam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Stadium` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stadium` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Standing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stadium" DROP CONSTRAINT "Stadium_team_id_fkey";

-- DropIndex
DROP INDEX "Match_awayTeamId_homeTeamId_date_idx";

-- DropIndex
DROP INDEX "Stadium_team_id_key";

-- AlterTable
ALTER TABLE "Championship" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Injured" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MatchStatistics" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "teamId",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PlayerTeam" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Stadium" DROP COLUMN "team_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "teamId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Standing" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Match_awayTeamId_homeTeamId_date_referee_idx" ON "Match"("awayTeamId", "homeTeamId", "date", "referee");

-- CreateIndex
CREATE UNIQUE INDEX "Stadium_teamId_key" ON "Stadium"("teamId");

-- AddForeignKey
ALTER TABLE "Stadium" ADD CONSTRAINT "Stadium_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
