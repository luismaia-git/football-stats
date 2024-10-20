import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

import { TeamsRepository } from "src/core/repositories/team-repository";
import { Team } from "src/core/entities/team/team";
import { PrismaTeamMapper } from "../mappers/prisma-team-mapper";

@Injectable()
export class PrismaTeamsRepository implements TeamsRepository {
  constructor(private prismaService: PrismaService) {}
  async findByStadiumId(stadiumId: string): Promise<Team | null> {
    const team = await this.prismaService.team.findFirst({
      where: {
        stadium: {
          every: {
            id: stadiumId,
          },
        },
      },
    });

    return PrismaTeamMapper.toDomain(team);
  }
  async findManyByPlayerId(playerId: string): Promise<Team[]> {
    const teams = await this.prismaService.team.findMany({
      where: {
        players: {
          some: {
            playerId: playerId,
          },
        },
      },
    });

    if (teams) {
      return null;
    }

    return teams.map(PrismaTeamMapper.toDomain);
  }
  async delete(teamId: string): Promise<void> {
    await this.prismaService.team.delete({
      where: {
        id: teamId,
      },
    });
  }

  async findById(teamId: string): Promise<Team> {
    const team = await this.prismaService.team.findUnique({
      where: {
        id: teamId,
      },
    });

    return PrismaTeamMapper.toDomain(team);
  }

  async create(team: Team): Promise<void> {
    const raw = PrismaTeamMapper.toPrisma(team);
    await this.prismaService.team.create({
      data: raw,
    });
  }

  async save(team: Team): Promise<void> {
    const raw = PrismaTeamMapper.toPrisma(team);

    await this.prismaService.team.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
