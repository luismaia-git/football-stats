import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { PlayerTeam } from "src/core/entities/player-team/player-team";
import { PlayerTeamsRepository } from "src/core/repositories/player-team-repository";
import { PrismaPlayerTeamMapper } from "../mappers/prisma-player-team-mapper";

@Injectable()
export class PrismaPlayerTeamsRepository implements PlayerTeamsRepository {
  constructor(private prismaService: PrismaService) {}
  async findManyByPlayerId(playerId: string): Promise<PlayerTeam[]> {
    const playerTeams = await this.prismaService.playerTeam.findMany({
      where: {
        playerId,
      },
    });

    return playerTeams.map(PrismaPlayerTeamMapper.toDomain);
  }
  async findManyByTeamId(teamId: string): Promise<PlayerTeam[]> {
    const playerTeams = await this.prismaService.playerTeam.findMany({
      where: {
        teamId,
      },
    });

    return playerTeams.map(PrismaPlayerTeamMapper.toDomain);
  }
  async findManyByFromDate(fromDate: Date): Promise<PlayerTeam[]> {
    const playerTeams = await this.prismaService.playerTeam.findMany({
      where: {
        from: fromDate,
      },
    });

    return playerTeams.map(PrismaPlayerTeamMapper.toDomain);
  }
  async findManyByUntilDate(untilDate: Date): Promise<PlayerTeam[]> {
    const playerTeams = await this.prismaService.playerTeam.findMany({
      where: {
        until: untilDate,
      },
    });

    return playerTeams.map(PrismaPlayerTeamMapper.toDomain);
  }

  async findAll(): Promise<PlayerTeam[]> {
    const playerTeams = await this.prismaService.playerTeam.findMany();

    return playerTeams.map(PrismaPlayerTeamMapper.toDomain);
  }

  async delete(playerTeamId: string): Promise<void> {
    await this.prismaService.playerTeam.delete({
      where: {
        id: playerTeamId,
      },
    });
  }

  async findById(playerTeamId: string): Promise<PlayerTeam> {
    const playerTeam = await this.prismaService.playerTeam.findUnique({
      where: {
        id: playerTeamId,
      },
    });

    return PrismaPlayerTeamMapper.toDomain(playerTeam);
  }

  async create(playerTeam: PlayerTeam): Promise<void> {
    const raw = PrismaPlayerTeamMapper.toPrisma(playerTeam);
    await this.prismaService.playerTeam.create({
      data: raw,
    });
  }

  async save(playerTeam: PlayerTeam): Promise<void> {
    const raw = PrismaPlayerTeamMapper.toPrisma(playerTeam);

    await this.prismaService.playerTeam.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
