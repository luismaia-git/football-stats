import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

import { MatchStatisticsRepository } from "src/core/repositories/match-statistics-repository";
import { MatchStatistics } from "src/core/entities/match-statistics/match-statistics";
import { PrismaMatchStatisticMapper } from "../mappers/prisma-match-statistics-mapper";

@Injectable()
export class PrismaMatchStatisticsRepository
  implements MatchStatisticsRepository
{
  constructor(private prismaService: PrismaService) {}
  async findManyByMatchId(matchId: string): Promise<MatchStatistics[]> {
    const matchStatistics = await this.prismaService.matchStatistics.findMany({
      where: {
        matchId: matchId,
      },
    });

    return matchStatistics.map(PrismaMatchStatisticMapper.toDomain);
  }
  async findManyByTeamId(teamId: string): Promise<MatchStatistics[]> {
    const matchStatistics = await this.prismaService.matchStatistics.findMany({
      where: {
        teamId: teamId,
      },
    });

    return matchStatistics.map(PrismaMatchStatisticMapper.toDomain);
  }

  async delete(matchStatisticsId: string): Promise<void> {
    await this.prismaService.matchStatistics.delete({
      where: {
        id: matchStatisticsId,
      },
    });
  }

  async create(matchStatistics: MatchStatistics): Promise<void> {
    const raw = PrismaMatchStatisticMapper.toPrisma(matchStatistics);
    await this.prismaService.matchStatistics.create({
      data: raw,
    });
  }

  async save(matchStatistics: MatchStatistics): Promise<void> {
    const raw = PrismaMatchStatisticMapper.toPrisma(matchStatistics);

    await this.prismaService.matchStatistics.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async findById(matchStatisticsId: string): Promise<MatchStatistics | null> {
    const matchStatistics = await this.prismaService.matchStatistics.findUnique(
      {
        where: {
          id: matchStatisticsId,
        },
      },
    );

    return PrismaMatchStatisticMapper.toDomain(matchStatistics);
  }
}
