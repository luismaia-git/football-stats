import { Injectable } from "@nestjs/common";

import { PlayerTeam } from "src/core/entities/player-team/player-team";
import { PlayerTeamsRepository } from "src/core/repositories/player-team-repository";
import { PlayerTeamNotFound } from "./errors/player-team-not-found";

interface FindPlayerTeamByIdRequest {
  id: string;
}
interface FindPlayerTeamByIdResponse {
  playerTeam: PlayerTeam;
}

@Injectable()
export class FindPlayerTeamById {
  constructor(private playerTeamsRepository: PlayerTeamsRepository) {}

  async execute(
    request: FindPlayerTeamByIdRequest,
  ): Promise<FindPlayerTeamByIdResponse> {
    const { id } = request;

    const playerTeam = await this.playerTeamsRepository.findById(id);

    if (!playerTeam) {
      throw new PlayerTeamNotFound();
    }

    return {
      playerTeam,
    };
  }
}
