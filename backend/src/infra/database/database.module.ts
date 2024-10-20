import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { TeamsRepository } from "src/core/repositories/team-repository";
import { PrismaTeamsRepository } from "./prisma/repositories/prisma-teams-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: TeamsRepository,
      useClass: PrismaTeamsRepository,
    },
  ],
  exports: [TeamsRepository],
})
export class DatabaseModule {}
