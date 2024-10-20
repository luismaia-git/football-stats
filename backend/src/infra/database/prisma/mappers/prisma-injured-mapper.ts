import { Injured as InjuredPrisma } from "@prisma/client";
import { Injured } from "src/core/entities/match/injured";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaInjuredMapper {
  static toPrisma(injured: Injured): InjuredPrisma {
    return {
      id: injured.id.toValue(),
      description: injured.description,
      playerId: injured.playerId,
      matchId: injured.matchId,
      date: injured.date,
      createdAt: injured.createdAt,
      updatedAt: injured.updatedAt,
    };
  }

  static toDomain(raw: InjuredPrisma): Injured {
    return Injured.create(
      {
        description: raw.description,
        playerId: raw.playerId,
        matchId: raw.matchId,
        date: raw.date,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
