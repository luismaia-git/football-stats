import { Injectable } from "@nestjs/common";

import { PrismaService } from "../prisma.service";
import { PlayersRepository } from "src/core/repositories/player-repository";
import { Player } from "src/core/entities/player/player";
import { PrismaPlayerMapper } from "../mappers/prisma-player-mapper";

@Injectable()
export class PrismaPlayersRepository implements PlayersRepository {
  constructor(private prismaService: PrismaService) {}
  async findAll(): Promise<Player[]> {
    const players = await this.prismaService.player.findMany();

    return players.map(PrismaPlayerMapper.toDomain);
  }

  async delete(playerId: string): Promise<void> {
    await this.prismaService.player.delete({
      where: {
        id: playerId,
      },
    });
  }

  async findById(playerId: string): Promise<Player | null> {
    const player = await this.prismaService.player.findUnique({
      where: {
        id: playerId,
      },
      include: {
        teams: true,
      },
    });

    if (!player) {
      return null;
    }

    return PrismaPlayerMapper.toDomain(player);
  }

  async create(player: Player): Promise<void> {
    const raw = PrismaPlayerMapper.toPrisma(player);
    await this.prismaService.player.create({
      data: raw,
    });
  }

  async save(player: Player): Promise<void> {
    const raw = PrismaPlayerMapper.toPrisma(player);

    await this.prismaService.player.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
