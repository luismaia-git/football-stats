import { Injectable } from "@nestjs/common";

import { InjuredsRepository } from "src/core/repositories/injured-repository";
import { Injured } from "src/core/entities/match/injured";

interface FindManyInjuredByPlayerIdRequest {
  playerId: string;
}
interface FindManyInjuredByPlayerIdResponse {
  injureds: Injured[];
}

@Injectable()
export class FindManyInjuredByPlayerId {
  constructor(private injuredsRepository: InjuredsRepository) {}

  async execute(
    request: FindManyInjuredByPlayerIdRequest,
  ): Promise<FindManyInjuredByPlayerIdResponse> {
    const { playerId } = request;

    const injureds = await this.injuredsRepository.findByPlayerId(playerId);

    return {
      injureds,
    };
  }
}
