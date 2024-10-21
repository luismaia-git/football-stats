import { MatchStatistics } from "../entities/match-statistics/match-statistics";

export abstract class MatchStatisticsRepository {
  abstract create(matchStatistics: MatchStatistics): Promise<void>;
  abstract save(matchStatistics: MatchStatistics): Promise<void>;
  abstract delete(matchStatisticsId: string): Promise<void>;

  abstract findById(matchStatisticsId: string): Promise<MatchStatistics | null>;
  abstract findManyByMatchId(matchId: string): Promise<MatchStatistics[]>;
  abstract findManyByTeamId(teamId: string): Promise<MatchStatistics[]>;
}
