import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { TeamsRepository } from "src/core/repositories/team-repository";
import { PrismaTeamsRepository } from "./prisma/repositories/prisma-teams-repository";
import { PlayersRepository } from "src/core/repositories/player-repository";
import { PrismaPlayersRepository } from "./prisma/repositories/prisma-players-repository";
import { PlayerTeamsRepository } from "src/core/repositories/player-team-repository";
import { PrismaPlayerTeamsRepository } from "./prisma/repositories/prisma-player-teams-repository";
import { ChampionshipsRepository } from "src/core/repositories/championship-repository";
import { PrismaChampionshipsRepository } from "./prisma/repositories/prisma-championships-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: TeamsRepository,
      useClass: PrismaTeamsRepository,
    },
    {
      provide: PlayersRepository,
      useClass: PrismaPlayersRepository,
    },
    {
      provide: PlayerTeamsRepository,
      useClass: PrismaPlayerTeamsRepository,
    },
    {
      provide: ChampionshipsRepository,
      useClass: PrismaChampionshipsRepository,
    },
  ],
  exports: [
    TeamsRepository,
    PlayersRepository,
    PlayerTeamsRepository,
    ChampionshipsRepository,
  ],
})
export class DatabaseModule {}
