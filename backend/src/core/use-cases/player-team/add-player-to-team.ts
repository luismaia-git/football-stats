import { Injectable } from "@nestjs/common";
import { PlayerTeam } from "src/core/entities/player-team/player-team";
import { PlayersRepository } from "src/core/repositories/player-repository";
import { PlayerTeamsRepository } from "src/core/repositories/player-team-repository";
import { TeamsRepository } from "src/core/repositories/team-repository";

import { PlayerNotFound } from "../player/errors/player-not-found";
import { TeamNotFound } from "../team/errors/team-not-found";

interface AddPlayerToTeamRequest {
  teamId: string;
  playerId: string;
  from: Date;
  until?: Date;
}

@Injectable()
export class AddPlayerToTeam {
  constructor(
    private teamsRepository: TeamsRepository,
    private playersRepository: PlayersRepository,
    private playerTeamsRepository: PlayerTeamsRepository,
  ) {}

  async execute(request: AddPlayerToTeamRequest): Promise<void> {
    const { teamId, playerId, from, until } = request;

    const team = await this.teamsRepository.findById(teamId);
    const player = await this.playersRepository.findById(playerId);

    if (!team) throw new TeamNotFound();
    if (!player) throw new PlayerNotFound();

    const playerTeam = PlayerTeam.create({ teamId, playerId, from, until });

    await this.playerTeamsRepository.create(playerTeam);
  }
}
