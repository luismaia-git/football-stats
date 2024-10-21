import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { Stadium } from "src/core/entities/stadium/stadium";
import { StadiumRepository } from "src/core/repositories/stadium-repository";
import { PrismaStadiumMapper } from "../mappers/prisma-stadium-mapper";

@Injectable()
export class PrismaStadiumsRepository implements StadiumRepository {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<Stadium[]> {
    const stadiums = await this.prismaService.stadium.findMany();

    return stadiums.map(PrismaStadiumMapper.toDomain);
  }
  async findManyByTeamId(teamId: string): Promise<Stadium[]> {
    const stadiums = await this.prismaService.stadium.findMany({
      where: {
        teamId,
      },
    });

    return stadiums.map(PrismaStadiumMapper.toDomain);
  }

  async delete(stadiumId: string): Promise<void> {
    await this.prismaService.stadium.delete({
      where: {
        id: stadiumId,
      },
    });
  }

  async findById(stadiumId: string): Promise<Stadium | null> {
    const stadium = await this.prismaService.stadium.findUnique({
      where: {
        id: stadiumId,
      },
    });

    if (!stadium) {
      return null;
    }

    return PrismaStadiumMapper.toDomain(stadium);
  }

  async create(stadium: Stadium): Promise<void> {
    const raw = PrismaStadiumMapper.toPrisma(stadium);
    await this.prismaService.stadium.create({
      data: raw,
    });
  }

  async save(stadium: Stadium): Promise<void> {
    const raw = PrismaStadiumMapper.toPrisma(stadium);

    await this.prismaService.stadium.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
