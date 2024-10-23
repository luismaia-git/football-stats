import { Injectable } from "@nestjs/common";
import { Player } from "src/core/entities/player/player";
import { PlayersRepository } from "src/core/repositories/player-repository";

interface CreatePlayerRequest {
  name: string;
  position: string;
  age?: string;
}

interface CreatePlayerResponse {
  player: Player;
}

@Injectable()
export class CreatePlayer {
  constructor(private playersRepository: PlayersRepository) {}

  async execute(request: CreatePlayerRequest): Promise<CreatePlayerResponse> {
    const { name, position } = request;

    const player = Player.create({
      name,
      position,
    });

    await this.playersRepository.create(player);

    return {
      player,
    };
  }
}
