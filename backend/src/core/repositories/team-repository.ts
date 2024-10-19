import { Match } from "../entities/match/match";
import { Team } from "../entities/team/team";


export abstract class TeamsRepository {
  abstract create(team: Team): Promise<void>;
  abstract findById(teamId: string): Promise<Team | null>;
  abstract save(team: Team): Promise<void>;
  abstract findByStadiumId(stadiumId: string): Promise<Team | null>;
  abstract findManyByPlayerId(refereeId: string): Promise<Team[]>;
  abstract delete(teamId: string): Promise<void>;
}