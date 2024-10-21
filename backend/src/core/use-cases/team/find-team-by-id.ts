import { TeamsRepository } from "src/core/repositories/team-repository";
import { Injectable } from "@nestjs/common";
import { Team } from "src/core/entities/team/team";
import { TeamNotFound } from "./errors/team-not-found";

interface FindTeamByIdRequest {
  id: string;
}
interface FindTeamByIdResponse {
  team: Team;
}

@Injectable()
export class FindTeamById {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(request: FindTeamByIdRequest): Promise<FindTeamByIdResponse> {
    const { id } = request;

    const team = await this.teamsRepository.findById(id);

    if (!team) {
      throw new TeamNotFound();
    }

    return {
      team,
    };
  }
}
