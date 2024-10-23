import { Module } from "@nestjs/common";
import { CreateTeam } from "./create-team";
import { FindTeamById } from "./find-team-by-id";
import { ListTeams } from "./list-teams";
import { UpdateTeam } from "./update-team";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [CreateTeam, FindTeamById, ListTeams, UpdateTeam],
})
export class TeamModule {}
