import { TeamsRepository } from "src/core/repositories/team-repository";
import { Injectable } from "@nestjs/common";
import { Team } from "src/core/entities/team/team";

interface CreateTeamRequest {
  name: string;
  city: string;
}
interface CreateTeamResponse {
  team: Team;
}

@Injectable()
export class CreateTeam {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(request: CreateTeamRequest): Promise<CreateTeamResponse> {
    const { name, city } = request;

    const team = Team.create({
      name,
      city,
    });

    await this.teamsRepository.create(team);

    return {
      team,
    };
  }
}
