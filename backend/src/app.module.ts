import { Module } from "@nestjs/common";
import { HttpModule } from "./infra/http/http.module";
import { TeamModule } from "./core/use-cases/team/team.module";
import { PlayerModule } from "./core/use-cases/player/player.module";
import { PlayerTeamModule } from "./core/use-cases/player-team/player-team.module";
import { ChampionshipModule } from "./core/use-cases/championship/championship.module";
import { TeamsController } from "./infra/http/controllers/team/team.controller";
import { PlayersController } from "./infra/http/controllers/player/player.controller";
import { ChampionshipsController } from "./infra/http/controllers/championship/championship.controller";
import { DatabaseModule } from "./infra/database/database.module";

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    TeamModule,
    PlayerModule,
    PlayerTeamModule,
    ChampionshipModule,
  ],
  controllers: [TeamsController, PlayersController, ChampionshipsController],
  providers: [],
})
export class AppModule {}
