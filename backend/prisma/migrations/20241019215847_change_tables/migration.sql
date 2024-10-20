/*
  Warnings:

  - You are about to drop the column `matchDetailsId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `refereeId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `matchDetailsId` on the `Performance` table. All the data in the column will be lost.
  - You are about to drop the column `regular` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the `MatchDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Referee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MatchDetailsToPlayer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `referee` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `round` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matchId` to the `Performance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_matchDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_refereeId_fkey";

-- DropForeignKey
ALTER TABLE "Performance" DROP CONSTRAINT "Performance_matchDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "_MatchDetailsToPlayer" DROP CONSTRAINT "_MatchDetailsToPlayer_A_fkey";

-- DropForeignKey
ALTER TABLE "_MatchDetailsToPlayer" DROP CONSTRAINT "_MatchDetailsToPlayer_B_fkey";

-- DropIndex
DROP INDEX "Match_awayTeamId_homeTeamId_idx";

-- AlterTable
ALTER TABLE "Injured" ADD COLUMN     "matchId" TEXT;

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "matchDetailsId",
DROP COLUMN "refereeId",
ADD COLUMN     "referee" TEXT NOT NULL,
ADD COLUMN     "round" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Performance" DROP COLUMN "matchDetailsId",
ADD COLUMN     "matchId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "regular",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "MatchDetails";

-- DropTable
DROP TABLE "Referee";

-- DropTable
DROP TABLE "_MatchDetailsToPlayer";

-- CreateTable
CREATE TABLE "MatchStatistics" (
    "id" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "possessionPercentage" DOUBLE PRECISION NOT NULL,
    "goals" INTEGER NOT NULL,
    "yellowCards" INTEGER NOT NULL,
    "redCards" INTEGER NOT NULL,
    "formation" TEXT NOT NULL,
    "captain" TEXT NOT NULL,
    "result" TEXT NOT NULL,

    CONSTRAINT "MatchStatistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerTeam" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "until" TIMESTAMP(3),

    CONSTRAINT "PlayerTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MatchStatistics_matchId_teamId_key" ON "MatchStatistics"("matchId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerTeam_playerId_teamId_from_key" ON "PlayerTeam"("playerId", "teamId", "from");

-- CreateIndex
CREATE INDEX "Match_awayTeamId_homeTeamId_date_idx" ON "Match"("awayTeamId", "homeTeamId", "date");

-- CreateIndex
CREATE INDEX "Performance_matchId_idx" ON "Performance"("matchId");

-- AddForeignKey
ALTER TABLE "MatchStatistics" ADD CONSTRAINT "MatchStatistics_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchStatistics" ADD CONSTRAINT "MatchStatistics_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeam" ADD CONSTRAINT "PlayerTeam_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerTeam" ADD CONSTRAINT "PlayerTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Injured" ADD CONSTRAINT "Injured_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
