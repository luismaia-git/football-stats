import { PlayerTeam } from "../entities/player-team/player-team";

export abstract class PlayerTeamsRepository {
  abstract create(playerTeam: PlayerTeam): Promise<void>;
  abstract findById(playerTeamId: string): Promise<PlayerTeam | null>;
  abstract findAll(): Promise<PlayerTeam[]>;
  abstract save(playerTeam: PlayerTeam): Promise<void>;
  abstract delete(playerTeamId: string): Promise<void>;

  abstract findManyByPlayerId(playerId: string): Promise<PlayerTeam[]>;
  abstract findManyByTeamId(teamId: string): Promise<PlayerTeam[]>;

  abstract findManyByFromDate(fromDate: Date): Promise<PlayerTeam[]>;
  abstract findManyByUntilDate(untilDate: Date): Promise<PlayerTeam[]>;
}
