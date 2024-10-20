import { PlayerTeam } from "../entities/player-team/player-team";

export abstract class PlayerTeamsRepository {
  abstract create(playerTeam: PlayerTeam): Promise<void>;
  abstract findById(playerTeamId: string): Promise<PlayerTeam | null>;
  abstract findAll(): Promise<PlayerTeam[]>;
  abstract save(playerTeam: PlayerTeam): Promise<void>;
  abstract delete(playerTeamId: string): Promise<void>;

  abstract findByPlayerId(playerId: string): Promise<PlayerTeam[]>;
  abstract findByTeamId(teamId: string): Promise<PlayerTeam[]>;

  abstract findByFromDate(fromDate: Date): Promise<PlayerTeam[]>;
  abstract findByUntilDate(untilDate: Date): Promise<PlayerTeam[]>;
}
