import { TeamsRepository } from "src/core/repositories/team-repository";
import { Injectable } from "@nestjs/common";
import { Team } from "src/core/entities/team/team";
import { TeamNotFound } from "./errors/team-not-found";

interface UpdateTeamRequest {
  id: string;
  name?: string;
  city?: string;
}
interface UpdateTeamResponse {
  team: Team;
}

@Injectable()
export class UpdateTeam {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(request: UpdateTeamRequest): Promise<UpdateTeamResponse> {
    const { id, name, city } = request;

    const team = await this.teamsRepository.findById(id);

    if (!team) {
      throw new TeamNotFound();
    }

    team.update({ city, name });

    return {
      team,
    };
  }
}
