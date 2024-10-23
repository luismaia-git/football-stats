import { Module } from "@nestjs/common";
import { AddPlayerToTeam } from "./add-player-to-team";
import { FindPlayerTeamById } from "./find-player-team-by-id";
import { UpdatePlayerContractUntil } from "./update-player-contract-until";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [AddPlayerToTeam, FindPlayerTeamById, UpdatePlayerContractUntil],
})
export class PlayerTeamModule {}
