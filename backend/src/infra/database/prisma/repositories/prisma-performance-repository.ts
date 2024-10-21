import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import {
  ParticipationType,
  Performance,
} from "src/core/entities/performance/performance";
import { PrismaPerformanceMapper } from "../mappers/prisma-performance-mapper";
import { PerformancesRepository } from "src/core/repositories/performance-repository";

@Injectable()
export class PrismaPerformancesRepository implements PerformancesRepository {
  constructor(private prismaService: PrismaService) {}
  async findManyByPlayerId(playerId: string): Promise<Performance[]> {
    const performances = await this.prismaService.performance.findMany({
      where: {
        playerId,
      },
    });

    return performances.map(PrismaPerformanceMapper.toDomain);
  }
  async findManyByMatchId(matchId: string): Promise<Performance[]> {
    const performances = await this.prismaService.performance.findMany({
      where: {
        matchId,
      },
    });

    return performances.map(PrismaPerformanceMapper.toDomain);
  }

  async findManyByDateRange(
    startDate: Date,
    endDate: Date,
  ): Promise<Performance[]> {
    const performances = await this.prismaService.performance.findMany({
      where: {
        createdAt: {
          in: [startDate, endDate],
        },
      },
    });

    return performances.map(PrismaPerformanceMapper.toDomain);
  }
  async findManyByParticipationType(
    participationType: ParticipationType,
  ): Promise<Performance[]> {
    const performances = await this.prismaService.performance.findMany({
      where: {
        participationType,
      },
    });

    return performances.map(PrismaPerformanceMapper.toDomain);
  }

  async delete(performanceId: string): Promise<void> {
    await this.prismaService.performance.delete({
      where: {
        id: performanceId,
      },
    });
  }

  async findById(performanceId: string): Promise<Performance | null> {
    const performance = await this.prismaService.performance.findUnique({
      where: {
        id: performanceId,
      },
    });

    if (!performance) return null;

    return PrismaPerformanceMapper.toDomain(performance);
  }

  async create(performance: Performance): Promise<void> {
    const raw = PrismaPerformanceMapper.toPrisma(performance);
    await this.prismaService.performance.create({
      data: raw,
    });
  }

  async save(performance: Performance): Promise<void> {
    const raw = PrismaPerformanceMapper.toPrisma(performance);

    await this.prismaService.performance.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
