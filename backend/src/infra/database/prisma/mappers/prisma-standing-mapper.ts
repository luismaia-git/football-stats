import { Standing as StandingPrisma } from "@prisma/client";
import { Standing } from "src/core/entities/standing/standing";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaStandingMapper {
  static toPrisma(standing: Standing): StandingPrisma {
    return {
      id: standing.id.toValue(),
      championshipId: standing.championshipId,
      teamId: standing.teamId,
      draws: standing.draws,
      loses: standing.loses,
      points: standing.points,
      wins: standing.wins,
      createdAt: standing.createdAt,
      updatedAt: standing.updatedAt,
    };
  }

  static toDomain(raw: StandingPrisma): Standing {
    return Standing.create(
      {
        championshipId: raw.championshipId,
        teamId: raw.teamId,
        draws: raw.draws,
        loses: raw.loses,
        points: raw.points,
        wins: raw.wins,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
