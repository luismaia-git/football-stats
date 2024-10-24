import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateChampionship } from "./create-championship";
import { FindChampionship } from "./find-championship";

@Module({
  imports: [DatabaseModule],
  providers: [CreateChampionship, FindChampionship],
  exports: [CreateChampionship, FindChampionship],
})
export class ChampionshipModule {}
