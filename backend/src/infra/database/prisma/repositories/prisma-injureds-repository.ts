import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { InjuredsRepository } from "src/core/repositories/injured-repository";
import { PrismaInjuredMapper } from "../mappers/prisma-injured-mapper";
import { Injured } from "src/core/entities/match/injured";

@Injectable()
export class PrismaInjuredsRepository implements InjuredsRepository {
  constructor(private prismaService: PrismaService) {}

  async delete(injuredId: string): Promise<void> {
    await this.prismaService.injured.delete({
      where: {
        id: injuredId,
      },
    });
  }

  async findById(injuredId: string): Promise<Injured | null> {
    const injured = await this.prismaService.injured.findUnique({
      where: {
        id: injuredId,
      },
    });

    if (!injured) return null;

    return PrismaInjuredMapper.toDomain(injured);
  }

  async create(injured: Injured): Promise<void> {
    const raw = PrismaInjuredMapper.toPrisma(injured);
    await this.prismaService.injured.create({
      data: raw,
    });
  }

  async save(injured: Injured): Promise<void> {
    const raw = PrismaInjuredMapper.toPrisma(injured);

    await this.prismaService.injured.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
