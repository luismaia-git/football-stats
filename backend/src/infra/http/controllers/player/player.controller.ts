import { Body, Controller, Get, Param } from "@nestjs/common";
import { CreatePlayer } from "src/core/use-cases/player/create-player";
import { CreatePlayerBody } from "../../dtos/player/create-player-body";
import { PlayerViewModel } from "../../view-model/player-view-model";
import { FindPlayer } from "src/core/use-cases/player/find-player";

@Controller("players")
export class PlayersController {
  constructor(
    private createPlayer: CreatePlayer,
    private findPlayer: FindPlayer,
  ) {}

  @Get(":id")
  async getPlayer(@Param("id") id: string) {
    const { player } = await this.findPlayer.execute({
      id,
    });

    return PlayerViewModel.toHTTP(player);
  }

  async create(@Body() body: CreatePlayerBody) {
    const { name, position, age } = body;

    const { player } = await this.createPlayer.execute({
      name,
      position,
      age,
    });

    return {
      player: PlayerViewModel.toHTTP(player),
    };
  }
}
