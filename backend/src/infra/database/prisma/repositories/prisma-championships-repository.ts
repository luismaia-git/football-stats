import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";

import { ChampionshipsRepository } from "src/core/repositories/championship-repository";
import { Championship } from "src/core/entities/championship/championship";
import { PrismaChampionshipMapper } from "../mappers/prisma-championship-mapper";

@Injectable()
export class PrismaChampionshipsRepository implements ChampionshipsRepository {
  constructor(private prismaService: PrismaService) {}
  async findManyBySeason(season: string): Promise<Championship[]> {
    const championships = await this.prismaService.championship.findMany({
      where: {
        season,
      },
    });

    return championships.map(PrismaChampionshipMapper.toDomain);
  }

  async delete(championshipId: string): Promise<void> {
    await this.prismaService.championship.delete({
      where: {
        id: championshipId,
      },
    });
  }

  async findById(championshipId: string): Promise<Championship | null> {
    const championship = await this.prismaService.championship.findUnique({
      where: {
        id: championshipId,
      },
    });

    if (!championship) return null;

    return PrismaChampionshipMapper.toDomain(championship);
  }

  async create(championship: Championship): Promise<void> {
    const raw = PrismaChampionshipMapper.toPrisma(championship);
    await this.prismaService.championship.create({
      data: raw,
    });
  }

  async save(championship: Championship): Promise<void> {
    const raw = PrismaChampionshipMapper.toPrisma(championship);

    await this.prismaService.championship.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
