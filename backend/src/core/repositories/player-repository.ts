import { Player } from "../entities/player/player";


export abstract class PlayersRepository {
  abstract create(playerTeam: Player): Promise<void>;
  abstract findById(playerId: string): Promise<Player | null>;
  abstract findAll(): Promise<Player[]>;
  abstract save(playerTeam: Player): Promise<void>;
  abstract delete(playerId: string): Promise<void>;
  
}