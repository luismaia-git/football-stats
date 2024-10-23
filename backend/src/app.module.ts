import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./infra/database/database.module";
import { HttpModule } from "./infra/http/http.module";
import { TeamModule } from "./core/use-cases/team/team.module";
import { PlayerModule } from "./core/use-cases/player/player.module";
import { PlayerTeamModule } from "./core/use-cases/player-team/player-team.module";

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    TeamModule,
    PlayerModule,
    PlayerTeamModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
