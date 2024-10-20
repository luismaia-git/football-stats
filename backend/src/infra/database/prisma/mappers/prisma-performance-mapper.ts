import { Performance as PerformancePrisma } from "@prisma/client";
import {
  mapParticipationType,
  Performance,
} from "src/core/entities/performance/performance";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaPerformanceMapper {
  static toPrisma(performance: Performance): PerformancePrisma {
    return {
      id: performance.id.toValue(),
      playerId: performance.playerId,
      matchId: performance.matchId,
      assist: performance.assist,
      gols: performance.gols,
      minutesPlayed: performance.minutesPlayed,
      participationType: performance.participationType,
      redCards: performance.redCards,
      yellowCards: performance.yellowCards,
      createdAt: performance.createdAt,
      updatedAt: performance.updatedAt,
    };
  }

  static toDomain(raw: PerformancePrisma): Performance {
    return Performance.create(
      {
        playerId: raw.playerId,
        matchId: raw.matchId,
        assist: raw.assist,
        gols: raw.gols,
        minutesPlayed: raw.minutesPlayed,
        participationType: mapParticipationType(raw.participationType),
        redCards: raw.redCards,
        yellowCards: raw.yellowCards,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
