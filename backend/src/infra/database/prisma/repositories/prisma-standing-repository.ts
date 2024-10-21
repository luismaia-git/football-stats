import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { StandingsRepository } from "src/core/repositories/standing-repository";
import { Standing } from "src/core/entities/standing/standing";
import { PrismaStandingMapper } from "../mappers/prisma-standing-mapper";

@Injectable()
export class PrismaStandingsRepository implements StandingsRepository {
  constructor(private prismaService: PrismaService) {}

  async findByTeamId(teamId: string): Promise<Standing | null> {
    const standing = await this.prismaService.standing.findFirst({
      where: {
        teamId,
      },
    });

    if (!standing) return null;

    return PrismaStandingMapper.toDomain(standing);
  }
  async findByChampionshipId(championshipId: string): Promise<Standing | null> {
    const standing = await this.prismaService.standing.findFirst({
      where: {
        championshipId,
      },
    });

    if (!standing) return null;

    return PrismaStandingMapper.toDomain(standing);
  }
  async findManyByPoints(points: number): Promise<Standing[]> {
    const standings = await this.prismaService.standing.findMany({
      where: {
        points,
      },
    });

    return standings.map(PrismaStandingMapper.toDomain);
  }
  async findByTeamIdAndChampionshipId(
    teamId: string,
    championshipId: string,
  ): Promise<Standing | null> {
    const standing = await this.prismaService.standing.findFirst({
      where: {
        teamId,
        championshipId,
      },
    });

    if (!standing) return null;

    return PrismaStandingMapper.toDomain(standing);
  }
  async findAll(): Promise<Standing[]> {
    const standings = await this.prismaService.standing.findMany();

    return standings.map(PrismaStandingMapper.toDomain);
  }

  async delete(standingId: string): Promise<void> {
    await this.prismaService.standing.delete({
      where: {
        id: standingId,
      },
    });
  }

  async findById(standingId: string): Promise<Standing | null> {
    const standing = await this.prismaService.standing.findUnique({
      where: {
        id: standingId,
      },
    });

    if (!standing) {
      return null;
    }

    return PrismaStandingMapper.toDomain(standing);
  }

  async create(standing: Standing): Promise<void> {
    const raw = PrismaStandingMapper.toPrisma(standing);
    await this.prismaService.standing.create({
      data: raw,
    });
  }

  async save(standing: Standing): Promise<void> {
    const raw = PrismaStandingMapper.toPrisma(standing);

    await this.prismaService.standing.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
