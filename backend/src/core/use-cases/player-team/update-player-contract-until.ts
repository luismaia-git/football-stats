import { Injectable } from "@nestjs/common";
import { PlayerTeamsRepository } from "src/core/repositories/player-team-repository";
import { PlayerTeamNotFound } from "./errors/player-team-not-found";

interface UpdatePlayerContractUntilRequest {
  id: string;
  until: Date;
}

type UpdatePlayerContractUntilResponse = void;

@Injectable()
export class UpdatePlayerContractUntil {
  constructor(private playerTeamsRepository: PlayerTeamsRepository) {}

  async execute(
    request: UpdatePlayerContractUntilRequest,
  ): Promise<UpdatePlayerContractUntilResponse> {
    const { id, until } = request;

    const playerTeam = await this.playerTeamsRepository.findById(id);

    if (!playerTeam) throw new PlayerTeamNotFound();
    playerTeam.updateUntil(until);
    await this.playerTeamsRepository.save(playerTeam);
  }
}
