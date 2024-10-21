import {
  Match as MatchPrisma,
  Championship as ChampionshipPrisma,
  Stadium as StadiumPrisma,
  Performance as PerformancePrisma,
  Injured as InjuredPrisma,
  MatchStatistics as MatchStatisticsPrisma,
} from "@prisma/client";
import { Championship } from "src/core/entities/championship/championship";

import { MatchStatistics } from "src/core/entities/match-statistics/match-statistics";
import { Injured } from "src/core/entities/match/injured";

import { Match } from "src/core/entities/match/match";
import {
  mapParticipationType,
  Performance,
} from "src/core/entities/performance/performance";
import { Stadium } from "src/core/entities/stadium/stadium";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaMatchMapper {
  static toPrisma(match: Match): MatchPrisma {
    return {
      id: match.id.toValue(),
      round: match.round,
      date: match.date,
      referee: match.referee,
      homeTeamId: match.homeTeamId,
      awayTeamId: match.awayTeamId,
      championshipId: match.championship.id.toValue(),
      stadiumId: match.stadium.id.toValue(),
      createdAt: match.createdAt,
      updatedAt: match.updatedAt,
    };
  }

  static toDomain(raw: RawMatch): Match {
    return Match.create(
      {
        date: raw.date,
        round: raw.round,
        homeTeamId: raw.homeTeamId,
        awayTeamId: raw.awayTeamId,
        referee: raw.referee,
        championship: Championship.create(
          raw.championship,
          new UniqueEntityID(raw.championshipId),
        ),
        statistics: raw.statistics.map((statistic) =>
          MatchStatistics.create(statistic, new UniqueEntityID(statistic.id)),
        ),
        performance: raw.performance.map((performance) =>
          Performance.create(
            {
              ...performance,
              participationType: mapParticipationType(
                performance.participationType,
              ),
            },
            new UniqueEntityID(performance.id),
          ),
        ),
        injuredPlayers: raw.injured.map((injured) =>
          Injured.create(injured, new UniqueEntityID(injured.id)),
        ),
        stadium: Stadium.create(
          raw.stadium,
          new UniqueEntityID(raw.stadium.id),
        ),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}

type RawMatch = MatchPrisma & {
  championship: ChampionshipPrisma;
  statistics: MatchStatisticsPrisma[];
  performance: PerformancePrisma[];
  injured: InjuredPrisma[];
  stadium: StadiumPrisma;
};
