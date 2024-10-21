import { Team } from "../entities/team/team";

export abstract class TeamsRepository {
  abstract create(team: Team): Promise<void>;
  abstract findById(teamId: string): Promise<Team | null>;
  abstract save(team: Team): Promise<void>;
  abstract findAll(): Promise<Team[]>;
  abstract findByStadiumId(stadiumId: string): Promise<Team | null>;
  abstract findManyByPlayerId(playerId: string): Promise<Team[]>;
  abstract delete(teamId: string): Promise<void>;
}
