import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

import { MatchsRepository } from "src/core/repositories/match-repository";
import { Match } from "src/core/entities/match/match";
import { PrismaMatchMapper } from "../mappers/prisma-match-mapper";

@Injectable()
export class PrismaMatchsRepository implements MatchsRepository {
  constructor(private prismaService: PrismaService) {}

  async findManyByDate(date: Date): Promise<Match[]> {
    const matchs = await this.prismaService.match.findMany({
      where: {
        date,
      },
      include: {
        championship: true,
        performance: true,
        injured: true,
        stadium: true,
        statistics: true,
      },
    });

    return matchs.map(PrismaMatchMapper.toDomain);
  }
  async findManyByStadiumId(stadiumId: string): Promise<Match[]> {
    const matchs = await this.prismaService.match.findMany({
      where: {
        stadiumId,
      },
      include: {
        championship: true,
        performance: true,
        injured: true,
        stadium: true,
        statistics: true,
      },
    });

    return matchs.map(PrismaMatchMapper.toDomain);
  }
  async findManyByRefereeId(referee: string): Promise<Match[]> {
    const matchs = await this.prismaService.match.findMany({
      where: {
        referee,
      },
      include: {
        championship: true,
        performance: true,
        injured: true,
        stadium: true,
        statistics: true,
      },
    });

    return matchs.map(PrismaMatchMapper.toDomain);
  }
  async findManyByChampionshipId(championshipId: string): Promise<Match[]> {
    const matchs = await this.prismaService.match.findMany({
      where: {
        championshipId,
      },
      include: {
        championship: true,
        performance: true,
        injured: true,
        stadium: true,
        statistics: true,
      },
    });

    return matchs.map(PrismaMatchMapper.toDomain);
  }

  async delete(matchId: string): Promise<void> {
    await this.prismaService.match.delete({
      where: {
        id: matchId,
      },
    });
  }
  //parei aqui
  async findById(matchId: string): Promise<Match> {
    const match = await this.prismaService.match.findUnique({
      where: {
        id: matchId,
      },
      include: {
        championship: true,
        performance: true,
        injured: true,
        stadium: true,
        statistics: true,
      },
    });

    return PrismaMatchMapper.toDomain(match);
  }

  async create(match: Match): Promise<void> {
    const raw = PrismaMatchMapper.toPrisma(match);
    await this.prismaService.match.create({
      data: raw,
    });
  }

  async save(match: Match): Promise<void> {
    const raw = PrismaMatchMapper.toPrisma(match);

    await this.prismaService.match.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
