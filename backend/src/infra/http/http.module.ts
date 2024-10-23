import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { PlayerTeamModule } from "src/core/use-cases/player-team/player-team.module";
import { PlayerModule } from "src/core/use-cases/player/player.module";
import { TeamModule } from "src/core/use-cases/team/team.module";

@Module({
  imports: [DatabaseModule, TeamModule, PlayerModule, PlayerTeamModule],
  exports: [],
})
export class HttpModule {}
