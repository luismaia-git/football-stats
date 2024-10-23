import { Injectable } from "@nestjs/common";
import { Injured } from "src/core/entities/match/injured";
import { InjuredsRepository } from "src/core/repositories/injured-repository";

interface InjuredPlayerRequest {
  playerId: string;
  description: string;
  matchId?: string;
  date: Date;
}

interface InjuredPlayerResponse {
  injured: Injured;
}

@Injectable()
export class InjuredPlayer {
  constructor(private injuredsRepository: InjuredsRepository) {}

  async execute(request: InjuredPlayerRequest): Promise<InjuredPlayerResponse> {
    const { playerId, matchId, date, description } = request;

    const playerInjured = Injured.create({
      playerId,
      matchId,
      date,
      description,
    });

    await this.injuredsRepository.create(playerInjured);

    return {
      injured: playerInjured,
    };
  }
}
