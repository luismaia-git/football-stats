-- CreateEnum
CREATE TYPE "ParticipationType" AS ENUM ('STARTER', 'SUBSTITUTE', 'DID_NOT_PLAY');

-- CreateTable
CREATE TABLE "Championship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "season" TEXT NOT NULL,

    CONSTRAINT "Championship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Standing" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "championshipId" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "draws" INTEGER NOT NULL DEFAULT 0,
    "loses" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Standing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatchDetails" (
    "id" TEXT NOT NULL,
    "homeScore" INTEGER NOT NULL,
    "awayScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatchDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "homeTeamId" TEXT NOT NULL,
    "awayTeamId" TEXT NOT NULL,
    "stadiumId" TEXT NOT NULL,
    "refereeId" TEXT NOT NULL,
    "matchDetailsId" TEXT NOT NULL,
    "championshipId" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stadium" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "Stadium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Referee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "regular" BOOLEAN NOT NULL,
    "teamId" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Injured" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Injured_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Performance" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "matchDetailsId" TEXT NOT NULL,
    "minutesPlayed" INTEGER NOT NULL,
    "gols" INTEGER NOT NULL DEFAULT 0,
    "assist" INTEGER NOT NULL DEFAULT 0,
    "yellowCards" INTEGER NOT NULL DEFAULT 0,
    "redCards" INTEGER NOT NULL DEFAULT 0,
    "participationType" "ParticipationType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Performance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MatchDetailsToPlayer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Match_awayTeamId_homeTeamId_idx" ON "Match"("awayTeamId", "homeTeamId");

-- CreateIndex
CREATE UNIQUE INDEX "Match_homeTeamId_awayTeamId_date_key" ON "Match"("homeTeamId", "awayTeamId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Stadium_team_id_key" ON "Stadium"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "_MatchDetailsToPlayer_AB_unique" ON "_MatchDetailsToPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_MatchDetailsToPlayer_B_index" ON "_MatchDetailsToPlayer"("B");

-- AddForeignKey
ALTER TABLE "Standing" ADD CONSTRAINT "Standing_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standing" ADD CONSTRAINT "Standing_championshipId_fkey" FOREIGN KEY ("championshipId") REFERENCES "Championship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_homeTeamId_fkey" FOREIGN KEY ("homeTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_awayTeamId_fkey" FOREIGN KEY ("awayTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_stadiumId_fkey" FOREIGN KEY ("stadiumId") REFERENCES "Stadium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_refereeId_fkey" FOREIGN KEY ("refereeId") REFERENCES "Referee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_matchDetailsId_fkey" FOREIGN KEY ("matchDetailsId") REFERENCES "MatchDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_championshipId_fkey" FOREIGN KEY ("championshipId") REFERENCES "Championship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stadium" ADD CONSTRAINT "Stadium_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Injured" ADD CONSTRAINT "Injured_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Performance" ADD CONSTRAINT "Performance_matchDetailsId_fkey" FOREIGN KEY ("matchDetailsId") REFERENCES "MatchDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatchDetailsToPlayer" ADD CONSTRAINT "_MatchDetailsToPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "MatchDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MatchDetailsToPlayer" ADD CONSTRAINT "_MatchDetailsToPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
