import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateTeam } from "src/core/use-cases/team/create-team";
import { FindTeamById } from "src/core/use-cases/team/find-team-by-id";
import { CreateTeamBody } from "../../dtos/team/create-team-body";
import { TeamViewModel } from "../../view-model/team-view-model";
import { ListTeams } from "src/core/use-cases/team/list-teams";

@Controller("teams")
export class TeamsController {
  constructor(
    private createTeam: CreateTeam,
    private findTeam: FindTeamById,
    private listAllTeams: ListTeams,
  ) {}

  @Get(":id")
  async getTeam(@Param("id") id: string) {
    const { team } = await this.findTeam.execute({
      id,
    });

    return TeamViewModel.toHTTP(team);
  }

  @Get()
  async getAllTeam() {
    const { teams } = await this.listAllTeams.execute();

    return teams.map(TeamViewModel.toHTTP);
  }

  @Post()
  async create(@Body() body: CreateTeamBody) {
    const { name, city } = body;

    const { team } = await this.createTeam.execute({
      name,
      city,
    });

    return {
      team: TeamViewModel.toHTTP(team),
    };
  }
}
