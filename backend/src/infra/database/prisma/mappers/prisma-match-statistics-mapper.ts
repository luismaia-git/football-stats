import { MatchStatistics as MatchStatisticsPrisma } from "@prisma/client";
import { MatchStatistics } from "src/core/entities/match-statistics/match-statistics";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaMatchStatisticMapper {
  static toPrisma(stats: MatchStatistics): MatchStatisticsPrisma {
    return {
      id: stats.id.toValue(),
      matchId: stats.matchId,
      teamId: stats.teamId,
      possessionPercentage: stats.possessionPercentage,
      goals: stats.goals,
      yellowCards: stats.yellowCards,
      redCards: stats.redCards,
      formation: stats.formation,
      captain: stats.captain,
      result: stats.result,
      createdAt: stats.createdAt,
      updatedAt: stats.updatedAt,
    };
  }

  static toDomain(raw: MatchStatisticsPrisma): MatchStatistics {
    return MatchStatistics.create(
      {
        matchId: raw.matchId,
        teamId: raw.teamId,
        possessionPercentage: raw.possessionPercentage,
        goals: raw.goals,
        yellowCards: raw.yellowCards,
        redCards: raw.redCards,
        formation: raw.formation,
        captain: raw.captain,
        result: raw.result,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
