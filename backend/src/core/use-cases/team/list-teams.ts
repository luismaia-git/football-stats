import { Injectable } from "@nestjs/common";
import { Team } from "src/core/entities/team/team";
import { TeamsRepository } from "src/core/repositories/team-repository";

interface ListTeamsResponse {
  teams: Team[];
}

@Injectable()
export class ListTeams {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(): Promise<ListTeamsResponse> {
    const teams = await this.teamsRepository.findAll();
    return { teams };
  }
}
