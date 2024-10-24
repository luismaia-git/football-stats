import { Module } from "@nestjs/common";
import { CreatePlayer } from "./create-player";
import { FindPlayer } from "./find-player";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [CreatePlayer, FindPlayer],
  exports: [CreatePlayer, FindPlayer],
})
export class PlayerModule {}
