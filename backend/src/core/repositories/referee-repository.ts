import { Referee } from "../entities/match/referee";


export abstract class RefereesRepository {
  abstract create(playerTeam: Referee): Promise<void>;
  abstract findById(playerId: string): Promise<Referee | null>;
  abstract findAll(): Promise<Referee[]>;
  abstract save(playerTeam: Referee): Promise<void>;
  abstract delete(playerId: string): Promise<void>;
  abstract findByMatchId(matchId: string): Promise<Referee | null>;
}