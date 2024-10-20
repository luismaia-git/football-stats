import { Match } from "../entities/match/match";

export abstract class MatchsRepository {
  abstract create(match: Match): Promise<void>;
  abstract findById(matchId: string): Promise<Match | null>;
  abstract save(match: Match): Promise<void>;
  abstract findManyByDate(date: Date): Promise<Match[]>;
  abstract findManyByStadiumId(stadiumId: string): Promise<Match[]>;
  abstract findManyByRefereeId(refereeId: string): Promise<Match[]>;
  abstract findManyByChampionshipId(championshipId: string): Promise<Match[]>;

  abstract delete(matchId: string): Promise<void>;
}
