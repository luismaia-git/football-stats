import { Injectable } from "@nestjs/common";

import { Player } from "src/core/entities/player/player";
import { PlayersRepository } from "src/core/repositories/player-repository";

interface FindPlayerRequest {
  id: string;
}
interface FindPlayerResponse {
  player: Player;
}

@Injectable()
export class FindPlayer {
  constructor(private playersRepository: PlayersRepository) {}

  async execute(request: FindPlayerRequest): Promise<FindPlayerResponse> {
    const { id } = request;

    const player = await this.playersRepository.findById(id);

    return {
      player,
    };
  }
}
